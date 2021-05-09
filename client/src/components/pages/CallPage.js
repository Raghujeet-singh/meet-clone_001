import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../CallPageUI/Header';
import Footer from '../CallPageUI/Footer';
import MeetingInfo from '../CallPageUI/MeetingInfo';
import Chat from '../CallPageUI/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

// import MyClock from '../layout/Clock.js';
const CallPage = () => {
  const [user] = useAuthState(auth);
  return (
    <Fragment>
      <CallPageContainer>
        {/* Video Camera Input */}
        <div class='videos'>
          <span>
            <h1>Local</h1>
            <VideoContainer
              src=''
              controls
              id='webcamVideo'
              autoplay
              playsinline
            ></VideoContainer>
          </span>

          <span>
            <h1>Remote</h1>
            <VideoContainer
              src=''
              controls
              id='remoteVideo'
              autoplay
              playsinline
            ></VideoContainer>
          </span>
        </div>

        <div class=''></div>
        {/* Video Camera Input */}
        <Header user={user}></Header>
        <Footer user={user}></Footer>
        {/* <MeetingInfo user={user}></MeetingInfo> */}
        <Chat user={user}></Chat>
      </CallPageContainer>
    </Fragment>
  );
};

const CallPageContainer = styled.div`
  height: 100vh;
`;

const VideoContainer = styled.video`
  /* position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1; */
`;
export default CallPage;