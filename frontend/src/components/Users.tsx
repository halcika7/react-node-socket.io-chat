import React, { FC } from 'react';
import NavLink from '../components/NavLink';
import styled from 'styled-components';
import { User } from '../lib/customTypes';
import SmallSpinner from './SmallSpinner';
import { useThunkDispatch } from '../redux/AppThunkDispatch';
import { setMessages } from '../redux/actions/mesages';
import { setSelectedUser } from '../redux/actions';

const PeopleList = styled.div`
  width: 350px;

  ul {
    padding: 20px;
    max-height: 750px;
    list-style: none;
    overflow-y: auto;
    margin: 0;
    display: flex;
    flex-direction: column;

    li {
      margin-bottom: 8px;

      a {
        height: 100%;
        width: 100%;
        color: #fff;
        display: flex;
        padding: 8px;
        text-decoration: none;

        &:hover,
        &.active {
          background-color: #b9b3b33d;
        }
      }
    }
  }

  img {
    object-fit: contain;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .about {
    margin-top: 8px;
    padding-left: 8px;
  }

  .status {
    color: #92959e;
  }
`;

const Users: FC<{ users: User[] }> = ({ users }) => {
  const dispatch = useThunkDispatch();
  return (
    <PeopleList>
      <ul className="list">
        {!users && <SmallSpinner />}
        {users &&
          users.map(user => (
            <li className="clearfix" key={user._id}>
              <NavLink
                to={`/${user._id}`}
                className="clearfix"
                activeClassName="active"
                exact
                onClick={() => {
                  dispatch(setMessages(null));
                  dispatch(setSelectedUser(undefined));
                }}
              >
                <img src={user.picture} alt={user.name} />
                <div className="about">
                  <div className="name">{user.name}</div>
                  <div className="status">
                    <i
                      className={`fa fa-circle ${
                        user.socketId ? 'online' : 'offline'
                      }`}
                    />{' '}
                    {user.socketId ? 'online' : 'offline'}
                  </div>
                </div>
              </NavLink>
            </li>
          ))}
      </ul>
    </PeopleList>
  );
};

export default Users;
