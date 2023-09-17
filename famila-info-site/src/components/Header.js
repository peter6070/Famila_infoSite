import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 100;
  div {
    display: flex;
    align-items: middle;
    justify-content: center;
  }
  .Header {
    margin: 25px;
  }
  .logo-div {
    position: absolute;
    left: 10px;
    cursor: pointer;
  }
  .menubar {
    font-size: 20px;
    font-weight: bold;
    > div {
      min-width: 128px;
      margin: 10px 15%;
      cursor: pointer;
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      {/* 상단 고정 메뉴바 헤더 */}
      <div className="Header">
        <div className="logo-div">
          {/* 좌측 상단 로고 이미지 */}
          <img src="img/famila-logo.png" alt="Famila-logo" />
        </div>
        {/* 상단 메뉴바 */}
        <div className="menubar">
          {/* 생활도움 서비스*/}
          <div className="life-support-service">생활도움 서비스</div>
          {/* 모임 찾기 */}
          <div className="find-group">모임 찾기</div>
          {/* 도우미 등록 */}
          <div className="supporter-registration">도우미 등록</div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
