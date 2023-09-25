import React from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  .Footer {
    width: 80%;
  }
  hr {
    border: 0;
    height: 0.9px;
    background: lightgray;
  }
  .company-info-N-menu {
    display: flex;
    padding: 20px 50px;
    div {
      margin-right: 100px;
    }
    .company-info {
      color: gray;
      margin-right: 200px;
      p {
        padding-left: 10px;
        line-height: 13px;
        font-size: 18px;
      }
      .line-space {
        height: 10px;
      }
    }
    .footer-menu {
      .menu-title {
        color: #ec616f;
        font-size: 18px;
      }
      h3 {
        cursor: pointer;
        font-size: 20px;
        margin: 25px auto;
      }
    }
  }
  .other-link {
    display: flex;
    justify-content: center;
    p {
      margin: 10px 40px;
      color: gray;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="Footer">
        <hr />
        {/* 회사 정보 및 메뉴 div(flex) */}
        <div className="company-info-N-menu">
          <div className="company-info">
            <img src="img/famila-logo.png" alt="Famila-logo" />
            <p>회사명 : 패밀라</p>
            <p>대표자 : 한윤석</p>
            <p>사업자 등록번호 : 728-36-01275</p>
            <p className="line-space"> </p>
            <p>주소 : 공유오피스 주소</p>
            <p>문의 : 02-433-1234 | tiger9833@naver.com</p>
          </div>
          <div className="footer-menu">
            <p className="menu-title">메뉴</p>
            <h3>생활도움 서비스</h3>
            <h3>모임찾기</h3>
            <h3>도우미 등록</h3>
            <h3>회사소개</h3>
          </div>
        </div>
        {/* 외부 링크 */}
        <div className="other-link">
          <p>네이버블로그</p>
          <p>네이버카페</p>
          <p>인스타그램</p>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
