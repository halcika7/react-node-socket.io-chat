import styled from 'styled-components';

export const ChatUsers = styled.div`
  background: #f2f5f8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  flex-basis: 100%;

  color: #434651;

  .chat-header {
    padding: 20px;
    border-bottom: 2px solid white;

    img {
      float: left;
    }

    .chat-about {
      float: left;
      padding-left: 10px;
      margin-top: 6px;
    }

    .chat-with {
      font-weight: bold;
      font-size: 16px;
    }

    .chat-num-messages {
      color: $gray;
    }

    .fa-star {
      float: right;
      color: #d8dadf;
      font-size: 20px;
      margin-top: 12px;
    }
  }

  .chat-history {
    padding: 30px 30px 20px;
    border-bottom: 2px solid white;
    overflow-y: scroll;
    height: 575px;

    ul {
      padding: 0;
    }

    .message-data {
      margin-bottom: 15px;
    }

    .message-data-time {
      color: lighten(#92959e, 8%);
      padding-left: 6px;
    }

    .message {
      color: white;
      padding: 18px 20px;
      line-height: 26px;
      font-size: 16px;
      border-radius: 7px;
      margin-bottom: 30px;
      width: 90%;
      position: relative;

      &:after {
        bottom: 100%;
        left: 7%;
        border: solid transparent;
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-bottom-color: #86bb71;
        border-width: 10px;
        margin-left: -10px;
      }
    }

    .my-message {
      background: #86bb71;
    }

    .other-message {
      background: #94c2ed;

      &:after {
        border-bottom-color: #94c2ed;
        left: 93%;
      }
    }
  }

  .chat-message {
    padding: 30px;

    textarea {
      width: 100%;
      border: none;
      padding: 10px 20px;
      font: 14px/22px 'Lato', Arial, sans-serif;
      margin-bottom: 10px;
      border-radius: 5px;
      resize: none;
    }

    .fa-file-o,
    .fa-file-image-o {
      font-size: 16px;
      color: gray;
      cursor: pointer;
    }

    button {
      float: right;
      color: #94c2ed;
      font-size: 16px;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      font-weight: bold;
      background: #f2f5f8;

      &:hover {
        color: darken(#94c2ed, 7%);
      }
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 750px;
  background: #111;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  flex-basis: 100%;
`;
