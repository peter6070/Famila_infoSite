import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const MainStyled = styled.div`
  width: 100%;
  background-color: #f7f8f9;
  @media only screen and (max-width: 600px) {
    .info {
      width: 325px;
    }
    .download-store > img {
      
    }
    
  }
  @media only screen and (max-width: 400px) {
    .info {
      width: 250px;
      height: auto;
    }
    .main-info {
      font-size: 40px;
    }
    .sub-info {
      font-size: 16px;
    }

    .download-store > img {
      width: 179px;
      height: 66.8px;
    }
  }
`;
const MainBody = styled.div`
  height: 10%;
  padding-top: 90px;
  padding-bottom: 160px;
  color: #ec616f;
  overflow: hidden;
  position: relative;
  user-select: none;
`;
const BackgroundHeartImg = styled.img`
  position: absolute;
  top: 90px;
  right: 0;
  object-fit: cover;
  @media only screen and (max-width: 1200px){
    left: 50%;
  }
`;
const Info = styled.div`
  // width: 371px;
  // height: 234px;
  max-width: 371px;
  margin-top: 7%;
  margin-left: 10vw;
  > h1,
  h4 {
    margin: 10px auto;
    word-break: keep-all;
  }
`;
const MainInfo = styled.h1`
  font-size: 64px;
  @media only screen and (max-width: 400px) {
    font-size: 54px;
  }
`;
const SubInfo = styled.div`
  font-weight: 100;
  font-size: 1.3rem;
  line-height: 1.5rem;
  padding-right: 30px;
`;
const DownloadStore = styled.div`
  display: flex;
  margin-left: 10vw;
  margin-top: 3%;
  user-select: all;
  img {
    min-width: 20%;
    // max-height: 66.8px;
    margin-top: 60px;
    margin-right: 30px;
    cursor: pointer;
  }
  @media only screen(max-width: 600px){
    flex-direction: column;
    > img {
      margin-top: 30px;
      width: 250px;
      height: 90px;
    }
  }
`;
const MainImgs = styled.div`
  position: absolute;
  right: 0;
  top: 120px;
  .main-img1 {
    position: absolute;
    right: 80px;
    top: 200px;
    transform: rotate(4deg);
  }
  .main-img2 {
    position: absolute;
    right: 15vw;
    transform: rotate(-4deg);
  }
  @media only screen and (max-width: 1200px){
    .main-img1 {
      width: 321px;
      height: 240px;
    }
    .main-img2 {
      right: 10vw;
      width: 366px;
      height: 274px;
    }
  }
  @media only screen and (max-width: 850px) {
    display: none;
  }
  @media only screen and (max-width: 600px){
    .main-img1 {
      width: 321px;
      height: 240px;
    }
    .main-img2 {
      width: 366px;
      height: 273px;
    }
  }
`;

const Main = () => {
  return (
    <>
      <MainStyled>
        {/* Main div */}
        <MainBody>
          <BackgroundHeartImg
            src={process.env.PUBLIC_URL + "/img/Main-background-heart.png"}
            alt="background-heart"
          />
          {/* 패밀라 소개글 */}
          <Info>
            {/* 메인 패밀라 소개(큰 글씨) */}
            <MainInfo>안녕! 우리는 패밀라 입니다.</MainInfo>
            {/* 서브 패밀라 소개(메인 글씨 하단 작은 글씨) */}
            <SubInfo>
              우리는 시니어에게 동반자 관계로서 긴밀한 1:1 생활도우미 서비스를
              드리고 다양한 취미기반 모임을 연결해줍니다.
            </SubInfo>
          </Info>
          {/* 앱 다운로드 */}
          <DownloadStore>
            {/* 앱 스토어 */}
            <Link to="/">
              <img
                // src="img/App-store.png"
                src={process.env.PUBLIC_URL + "/img/app-store.png"}
                alt="app-store"
              ></img>
            </Link>
            {/* 구글 플레이 */}
            <Link to="/">
              <img
                // src="img/Google-play.png"
                src={process.env.PUBLIC_URL + "/img/google-play.png"}
                alt="google-play"
              ></img>
            </Link>
          </DownloadStore>
        </MainBody>
        <MainImgs>
          <img
            className="main-img1"
            // src="img/main-img1.png"
            src={process.env.PUBLIC_URL + "/img/main-img1.png"}
            alt="img1"
          ></img>
          <img
            className="main-img2"
            // src="img/main-img2.png"
            src={process.env.PUBLIC_URL + "/img/main-img2.png"}
            alt="img2"
          ></img>
        </MainImgs>
      </MainStyled>
      <Section1 />
      <Section2 />
      <Section3 />
      
    </>
  );
};

export default Main;
