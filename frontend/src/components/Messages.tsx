import React, {
  useEffect,
  useState,
  FC,
  useCallback,
  ChangeEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { useThunkDispatch } from '../redux/AppThunkDispatch';
import { AppState } from '../redux/reducers/index';
import { setMessages } from '../redux/actions';
import { User, Message } from '../lib/customTypes';
import TimeAgo from 'timeago-react';
import { ChatUsers, Loading } from './Mesages.style';
import useDebounce from '../hook/debounce';
import Visibility from './Visibility';

const reduxProps = createSelector(
  (state: AppState) => state.users.selectedUser,
  (state: AppState) => state.users.users,
  (state: AppState) => state.messages.messages,
  (state: AppState) => state.messages.loading,
  (selectedUser, users, messages, loading) => ({
    selectedUser,
    users,
    messages,
    loading,
  })
);

const Messages: FC<{ client: SocketIOClient.Socket; id: string }> = ({
  client,
  id,
}) => {
  const dispatch = useThunkDispatch();
  const { selectedUser, messages, loading } = useSelector(reduxProps);
  const [message, setMessage] = useState<string>('');
  const [localMessages, setLocalMessages] = useState<Message[] | null>(
    messages
  );
  const [userTyping, setUserTyping] = useState<boolean>(false);
  const [canLoadMore, setCanLoadMore] = useState<boolean>(true);
  const [skip, setSkip] = useState<number>(10);

  useDebounce(message, 5000, (val = false) => {
    if (message) {
      const { socketId } = selectedUser as User;
      client.emit('user-typing', { typing: false, socketId });
    }
  });

  const setRef = useCallback(node => {
    if (node) node.scrollIntoView({ smooth: true });
  }, []);

  const sendMessage = () => {
    const { _id, socketId } = selectedUser as User;
    client.emit('send-message', { message, socketId, receiverId: _id });
    if (socketId) client.emit('user-typing', { typing: false, socketId });
    setMessage('');
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { socketId } = selectedUser as User;
    client.emit('user-typing', { typing: true, socketId });
    setMessage(e.target.value);
  };

  const loadmore = () => {
    if (canLoadMore) {
      client.emit('load-more', {
        skip,
        userId: selectedUser?._id,
      });
      setSkip(prev => (prev += 10));
    }
  };

  useEffect(() => {
    if (!client) return;

    if (client.disconnected) {
      client.connect();
      return;
    }

    client.on('messages', (data: Message[]) => dispatch(setMessages(data)));

    client.on('receive-message', (data: Message) => {
      setLocalMessages(prev => (prev ? [...prev, data] : [data]));
      setSkip(prev => (prev += 1));
    });

    client.on('loaded-more', (data: Message[]) => {
      setLocalMessages(prev => (prev ? [...prev, ...data] : [...data]));
      if (!data.length || data.length <= skip) {
        setCanLoadMore(false);
      }
    });

    client.on('is-typing', (data: { typing: boolean; senderId: string }) => {
      const { _id } = selectedUser as User;
      if (data.senderId === _id) setUserTyping(data.typing);
    });

    if (id) client.emit('get-messages', id);
    return () => {
      client.off('receive-message');
      client.off('messages');
      client.off('is-typing');
      client.off('loaded-more');
    };
  }, [id, client, dispatch, selectedUser, skip]);

  useEffect(() => {
    if (messages) setLocalMessages(messages.reverse());
  }, [messages]);

  if (loading || !localMessages) return <Loading />;

  return (
    <ChatUsers>
      {selectedUser && (
        <div className="chat-header clearfix">
          <img
            src={selectedUser.picture}
            alt={selectedUser.name}
            height="50"
            width="50"
          />

          <div className="chat-about">
            <div className="chat-with">Chat with {selectedUser.name}</div>
          </div>
        </div>
      )}

      <div className="chat-history">
        <ul>
          {localMessages!.map(
            ({ message, receiverId, createdAt, senderId, _id }, index) => {
              const lastMessage = localMessages!.length - 1 === index;
              return (
                <Visibility key={_id} shouldTrigger={index === 3} cb={loadmore}>
                  {receiverId !== id ? (
                    <li ref={lastMessage ? setRef : null}>
                      <div className="message-data">
                        <span className="message-data-name">
                          <i className="fa fa-circle online"></i>{' '}
                          {senderId.name}
                        </span>
                        <span className="message-data-time">
                          <TimeAgo datetime={createdAt} />
                        </span>
                      </div>
                      <div className="message my-message">{message}</div>
                    </li>
                  ) : (
                    <li className="clearfix" ref={lastMessage ? setRef : null}>
                      <div className="message-data align-right">
                        <span className="message-data-time">
                          <TimeAgo datetime={createdAt} />
                        </span>{' '}
                        &nbsp; &nbsp;
                        <span className="message-data-name">
                          {senderId.name}
                        </span>{' '}
                        <i className="fa fa-circle me"></i>
                      </div>
                      <div className="message other-message float-right">
                        {message}
                      </div>
                    </li>
                  )}
                </Visibility>
              );
            }
          )}
          {userTyping && (
            <li ref={setRef}>
              <div className="message-data">
                <span className="message-data-name">
                  <i className="fa fa-circle online" /> {selectedUser?.name}
                </span>
                <i className="fa fa-circle online" style={{ marginLeft: 8 }} />
                <i
                  className="fa fa-circle online"
                  style={{ color: '#AED2A6' }}
                />
                <i
                  className="fa fa-circle online"
                  style={{ color: '#DAE9DA' }}
                />
              </div>
            </li>
          )}
        </ul>
      </div>

      <div className="chat-message clearfix">
        <textarea
          name="message-to-send"
          id="message-to-send"
          placeholder="Type your message"
          rows={3}
          value={message}
          onChange={onChange}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </ChatUsers>
  );
};

export default React.memo(Messages);
