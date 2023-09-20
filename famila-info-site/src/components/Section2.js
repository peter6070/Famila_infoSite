import React from "react";
import styled from "styled-components";

const Section2Styled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  padding-top: 500px;
  .Section2 {
    // position: relative;
    > div {
      display: flex;
    }
  }
  .groupActivity-div {
  }
  .text {
    width: 363px;
    h1 {
      color: #ec616f;
    }
    p {
      font-size: 20px;
      color: #999999;
    }
    .more-info-button {
      text-align: center;
      color: white;
      background-color: #ec616f;
      border-radius: 50px;
      padding: 15px 10px;
    }
  }
`;

const Section2 = () => {
  return (
    <Section2Styled>
      <div className="Section2">
        <div className="lifeSupporter-div">
          <img
            src="img/lifeSupporter-mobile-img.png"
            alt="lifeSupporter-mobile-img"
          />
          <div className="text">
            <img
              src="img/groupActivity-mobile-img.png"
              alt="groupActivity-mobile-img"
            />
            <h1>생활도우미 1:1매칭</h1>
            <p>
              패밀라 회원이 되시면 1:1로 도우미 메이트가 매칭되어 집수리, 짐
              옮기기, 집안일, 심부름 제공 등의 생활도움 서비스를 제공합니다.
              동반자 관계로써 짝꿍을 만들 수 있습니다.
            </p>
            <div className="more-info-button">생활도움 더 알아보기</div>
          </div>
        </div>
        <div className="groupActivity-div">
          <div className="text">
            <h1>취미 기반 모임활동</h1>
            <p>
              검증된 시니어들과 다양한 취미 기반 모임 및 수업에 참여할 수 있고
              직접 모임을 만들어 수익을 얻을 수도 있습니다.
            </p>
            <div className="more-info-button">모임 더 알아보기</div>
          </div>
        </div>
        <div className="supporterRegistration-div">
          <img
            src="img/supporter-mobile-img.png"
            alt="supporterRegistration-mobile-img"
          />
          <div className="text">
            <h1>패밀라 직원등록</h1>
            <p>
              패밀라 도우미 직원이 되면 시니어의 개인 도우미로써 식료품
              쇼핑에서부터 동반자 관계에 이르기까지 다양한 방법으로 시니어
              회원들을 지원할 수 있습니다. 일을 하면서 보람과 수익을 얻어갑니다.
            </p>
            <div className="more-info-button">도우미 등록 더 알아보기</div>
          </div>
        </div>
      </div>
    </Section2Styled>
  );
};

export default Section2;
