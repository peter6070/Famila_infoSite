import React from "react";
import styled from "styled-components";

const Section1Styled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  padding-bottom: 450px;
  .Section1 {
    display: flex;
    justify-content: space-around;
    padding-top: 40px;
    padding-bottom: 60px;
  }
  .content-title {
    padding-top: 50px;
    width: 380px;
    margin-left: 100px;
    h1 {
      color: #ec616f;
    }
    p {
      font-size: 20px;
      color: #999999;
    }
  }
  table {
    border-spacing: 0;
    margin-right: 100px;
    padding-top: 50px;
    text-align: center;
    tr:first-child td {
      width: 280px;
      height: 164px;
      vertical-align: top;
      img {
        margin: 0;
      }
    }
    td {
      width: 280px;
      height: 246px;
      > div {
        padding: 20px;
      }
    }
    .bottom-border {
      border-bottom: 1px solid #e7e8ee;
      > img {
        margin-top: 20px;
      }
    }
    .left-border {
      border-left: 1px solid #e7e8ee;
    }
    .title-red {
      font-size: 22px;
      color: #f88692;
      font-weight: bold;
      margin-bottom: 0px;
    }
    .title-orange {
      font-size: 22px;
      color: #f5935c;
      font-weight: bold;
      margin-bottom: 0px;
    }
    .text {
      font-size: 16px;
      color: #999999;
    }
  }
  .interview-movie-div {
    position: relative;
    //자르고 싶은 사이즈
    width: 100%;
    height: 281px;
    overflow: hidden;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;

    .interview-background-img {
      position: absolute;
      //잘랐을 때 보여주고 싶은 위치
      opacity: 0.8;
      top: -900px;
      //사진 원본 사이즈
      width: 1500px;
      height: 2200px;
    }
    .play-button {
      position: absolute;
      cursor: pointer;
      z-index: 1;
    }
    .famila-interview {
      position: absolute;
      right: 220px;
      z-index: 1;
      font-weight: bold;
      font-size: 50px;
      p {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      color: white;
      .famila-user-text {
        color: #fbabb3;
      }
    }
  }
`;

const Section1 = () => {
  return (
    <Section1Styled>
      <div className="Section1">
        <div className="content-title">
          <h1>동반자와 함께 즐겁게!</h1>
          <p>
            패밀라는 가족이 되어주고 시니어들이 서로 연결되도록 돕고 시니어들의
            취미기반 모임 및 수업을 운영하여 지역 사회를 지원하고 모두에게 상생
            혜택을 제공합니다.
          </p>
        </div>
        <table>
          <tr>
            <td className="bottom-border ">
              <img src="img/life-support.png" alt="life-support.png" />
            </td>
            <td className="bottom-border left-border">
              <img src="img/group-activity.png" alt="group-activity.png" />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="img/Escalator-warning.png"
                  alt="Escalator-warning.png"
                />
                <p className="Escalator-warning title-red">생활도우미 매칭</p>
                <p className="Escalator-warning text">
                  패밀라와 함께라면 전화나 클릭만으로 함께 할 수 있습니다. 1:1
                  도우미 매칭을 통해 꾸준한 케어를 받습니다.
                </p>
              </div>
            </td>
            <td className="left-border">
              <div>
                <img src="img/Attach-money.png" alt="Attach-money.png" />
                <p className="Attach-money title-orange">수익 증대</p>
                <p className="Attach-money text">
                  취미기반 모임과 수업을 직접 열어서 수익을 얻어 갈 수 있습니다.
                  누구나 모임을 만들고 참여할 수 있습니다.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="img/Emoji-emotions.png" alt="Emoji-emotions.png" />
                <p className="Emoji-emotions title-red">불편함 해소</p>
                <p className="Emoji-emotions text">
                  장기요양 등급을 받지 못했거나 받았음에도 생활도움이 필요한
                  시니어들 에게 생활 도움을 제공합니다.
                </p>
              </div>
            </td>
            <td className="left-border">
              <div>
                <img src="img/favorite.png" alt="favorite.png" />
                <p className="favorite title-orange">외로움을 치료하다</p>
                <p className="favorite text">
                  노년에도 활동하고 배우고 사람과의 연결을 통해 사회적 문제인
                  고독사를 이겨냅니다.
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
      {/* 인터뷰 영상 표시 부분 */}
      <div className="interview-movie-div">
        <img
          className="interview-background-img"
          src="img/interview-background-img.jpg"
          alt="interview-background-img.jpg"
        />
        {/* 영상 재생 버튼(div)*/}
        <img
          className="play-button"
          src="img/play-button.png"
          alt="play-button.png"
        />
        {/* 000님 인터뷰 텍스트 표시 */}
        <div className="famila-interview">
          <p className="famila-user-text">패밀라 회원</p>
          <p>김영숙님 인터뷰</p>
        </div>
      </div>
    </Section1Styled>
  );
};

export default Section1;
