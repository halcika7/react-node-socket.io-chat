import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - 350px);
  overflow-y: auto;
  padding: 0 20px;
`;

const Anchor = styled.a`
  width: 100%;
  margin: 0.5rem 0;
`;

const url = process.env.REACT_APP_BACKEND_URL;

const Buttons = () => (
  <Wrapper>
    <Anchor href={`${url}/auth/facebook`} className="zocial facebook">Sign in with Facebook</Anchor>
    <Anchor href={`${url}/auth/github`} className="zocial github">Sign in with Github</Anchor>
    <Anchor href={`${url}/auth/google`} className="zocial googleplus">Sign in with Google</Anchor>
    <Anchor href={`${url}/auth/twitter`} className="zocial twitter">Sign in with Twitter</Anchor>
    <Anchor href={`${url}/auth/linkedin`} className="zocial linkedin">Sign in with LinkedIn</Anchor>
    <Anchor href={`${url}/auth/spotify`} className="zocial spotify">Sign in with Spotify</Anchor>
  </Wrapper>
);

export default Buttons;
