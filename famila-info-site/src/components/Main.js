import React from "react";
import styled from "styled-components";

const MainStyled = styled.div`
  width: 100%;
  height: 101vh;
  .Main {
    padding-top: 95px;
    background-color: #f7f8f9;
    color: #ec616f;
  }
  .background-heart {
    position: absolute;
    right: 0;
  }
  .info {
    position: absolute;
    width: 371px;
    height: 234px;
    margin-top: 150px;
    margin-left: 150px;
    > h1,
    h4 {
      margin: 10px auto;
    }
    h4 {
      line-height: 20px;
    }
  }
  .main-info {
    font-size: 64px;
  }
  .sub-info {
    font-weight: 100;
    font-size: 18px;
  }
  .download-store {
    position: absolute;
    display: flex;
    margin-left: 150px;
    margin-top: 400px;
    > img {
      margin-top: 60px;
      margin-right: 30px;
      cursor: pointer;
    }
  }
  .main-imgs {
    position: relative;
    top: 50px;
  }
  .main-img1 {
    position: absolute;
    top: 260px;
    right: 80px;
  }
  .main-img2 {
    position: absolute;
    right: 210px;
  }
`;

const Main = () => {
  return (
    <MainStyled>
      {/* Main div */}
      <div className="Main">
        <img
          className="background-heart"
          src="img/Main-background-heart.png"
          alt=""
        />
        {/* 패밀라 소개글 */}

        <div className="info">
          {/* 메인 패밀라 소개(큰 글씨) */}
          <h1 className="main-info">안녕! 우리는 패밀라 입니다.</h1>
          {/* 서브 패밀라 소개(메인 글씨 하단 작은 글씨) */}
          <h4 className="sub-info">
            우리는 시니어에게 동반자 관계로서 긴밀한 1:1 생활도우미 서비스를
            드리고 다양한 취미기반 모임을 연결해줍니다.
          </h4>
        </div>
        {/* 앱 다운로드 */}
        <div className="download-store">
          {/* 앱 스토어 */}
          <img src="img/App-store.png" alt="app-store"></img>
          {/* 구글 플레이 */}
          <img src="img/Google-play.png" alt="google-play"></img>
        </div>
      </div>
      <div className="main-imgs">
        <img className="main-img1" src="img/main-img1.png" alt="img1"></img>
        <img className="main-img2" src="img/main-img2.png" alt="img2"></img>
      </div>
    </MainStyled>
  );
};

export default Main;
