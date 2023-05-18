import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  .loan-list {
    margin-bottom: 2rem;
  }

  table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid black;
  }
`;

const Notification = styled.div`
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;

  .noti-title {
    font-weight: 600;
  }

  span {
    display: block;
  }
`;

const RoomContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  margin-top: 16px;
  border-radius: 5px;
`;

const RoomNo = styled.div`
  background-color: #848484;
  height: 3rem;
  color: #ffffff;

  span {
    line-height: 3rem;
    padding-left: 1.5rem;
    font-size: 18px;
  }
`;

const RoomContent = styled.div`
  height: 20rem;
  padding: 10px;

  .room-info {
    display: flex;

    .room-pic {
      background-color: #cacac8;
      width: 25%;
      height: 9rem;
    }

    .room-noti {
      background-color: #eeeeee;
      width: 75%;
      padding: 10px 0 0 10px;
      margin-left: 10px;

      span {
        display: block;
      }
    }
  }

  .room-reservation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;

    .time {
      width: 6rem;
      height: 4rem;
      padding: 10px;
      background-color: #e1f6fc;
      text-align: center;
      border: 1px solid #049fff;
      margin-right: 10px;

      span:first-child {
        font-weight: 600;
      }
    }

    span {
      display: block;
    }
  }

  .reserve-box {
    margin: auto;
    width: 4rem;
    height: 2.5rem;
    text-align: center;
    margin-top: 26px;
    border: 1px solid black;
    font-size: 24px;

    .reserve-btn {
      display: block;
      line-height: 2rem;
    }
  }
`;

const StudyRoomReserve = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Notification>
        {pathname === '/studyroom/reserve' ||
        pathname === '/studyroom/reserve/list' ||
        pathname === '/studyroom/reserve/2f' ||
        pathname === '/studyroom/reserve/3f' ? (
          <>
            <span className="noti-title">
              {'<'}유의사항{'>'}
            </span>
            <span>- 1주일 이전부터 예약 가능</span>
            <span>- 1일 최대 3시간</span>
            <span>- 사용 인원(3~6인), 시간 및 이용 목적 준수 </span>
            <span>- 음식물 반입 금지 </span>
            <span>- 퇴실 시 자리 정돈 및 전등 소등</span>
            <span>
              - 스터디룸 이용은 도서관 개관 시간에 한함(휴관일 이용 불가)
            </span>
            <br />
            <span className="noti-title">
              {'<'}이용 가능시간{'>'}
            </span>
            <span>- 평일 : 09:00 ~ 21:50 / 토~일요일 : 13:00 ~ 18:50</span>
          </>
        ) : pathname === '/studyroom/reserve/4f/digitalRoom' ? (
          <>
            <span className="noti-title">
              {'<'}유의사항{'>'}
            </span>
            <span>- 1주일 이전부터 예약 가능</span>
            <span>- 1일 최대 3시간</span>
            <span>- 사용 인원(3~6인), 시간 및 이용 목적 준수 </span>
            <span>- 음식물 반입 금지 </span>
            <span>- 퇴실 시 자리 정돈 및 전등 소등</span>
            <span>- 방학기간: 2층 스터디룸만 개방</span>
            <span>
              - 스터디룸 이용은 도서관 개관 시간에 한함(휴관일 이용 불가)
            </span>
            <br />
            <span className="noti-title">
              {'<'}이용 가능시간{'>'}
            </span>
            <span>- 평일 : 09:00 ~ 21:50 / 토~일요일 : 13:00 ~ 18:50</span>
            <br />
            <span>- 모바일 기기와 TV를 연결하여 사용 가능</span>
            <span>- 유의사항 및 사용시간, 인원은 다른 층 스터디룸과 동일</span>
            <span>- 연결기기 사용은 4층 C-Square 데스크로 문의</span>
          </>
        ) : pathname === '/studyroom/reserve/4f/CSquare' ? (
          <>
            <span>
              - 창의 협업 및 연구, 학습, 창업활동이 가능한 융복합 공간
            </span>
            <br />
            <span className="noti-title">
              {'<'}유의사항{'>'}
            </span>
            <span>- 1주일 이전부터 예약 가능</span>
            <span>- 1일 최대 3시간</span>
            <span>- 사용 인원 및 시간, 이용 목적 준수 </span>
            <span>- 음식물 반입 금지 </span>
            <span>- 퇴실 시 자리 정돈 및 전등 소등</span>
            <span>
              - 스터디룸 이용은 도서관 개관 시간에 한함(휴관일 이용 불가)
            </span>
            <br />
            <span className="noti-title">
              {'<'}이용 가능시간{'>'}
            </span>
            <span>- 평일 : 09:00 ~ 21:50 / 토~일요일 : 13:00 ~ 18:50</span>
          </>
        ) : (
          <>
            <span className="noti-title">
              {'<'}유의사항{'>'}
            </span>
            <span>- 1주일 이전부터 예약 가능</span>
            <span>- 1일 최대 3시간</span>
            <span>- 사용 인원(3~6인), 시간 및 이용 목적 준수 </span>
            <span>- 음식물 반입 금지 </span>
            <span>- 퇴실 시 자리 정돈 및 전등 소등</span>
            <span>- 방학기간에는 2층 스터디룸만 개방</span>
            <span>
              - 스터디룸 이용은 도서관 개관 시간에 한함(휴관일 이용 불가)
            </span>
            <br />
            <span className="noti-title">
              {'<'}이용 가능시간{'>'}
            </span>
            <span>- 평일 : 09:00 ~ 21:50 / 토~일요일 : 13:00 ~ 18:50</span>
          </>
        )}
      </Notification>
      <RoomContainer>
        <RoomNo>
          <span>17212호실</span>
        </RoomNo>
        <RoomContent>
          <div className="room-info">
            <div className="room-pic">시설 사진</div>
            <div className="room-noti">
              <span>- 사용 인원 : 3~6명 입실가능</span>
              <span>- 평일 : 09:00 ~ 21:50</span>
              <span>- 토~일요일 (공휴일 포함) : 13:00 ~ 18:50</span>
            </div>
          </div>
          <div className="room-reservation">
            <button className="time first">
              <span>13:00~14:00</span>
              <span>예약가능</span>
            </button>
            <button className="time second">
              <span>14:00~15:00</span>
              <span>예약가능</span>
            </button>
            <button className="time third">
              <span>15:00~16:00</span>
              <span>예약가능</span>
            </button>
            <button className="time fourth">
              <span>16:00~17:00</span>
              <span>예약가능</span>
            </button>
            <button className="time fifth">
              <span>17:00~18:00</span>
              <span>예약가능</span>
            </button>
            <button className="time sixth">
              <span>18:00~19:00</span>
              <span>예약가능</span>
            </button>
          </div>
          <div className="reserve-box">
            <div className="reserve-btn">
              <button>신청</button>
            </div>
          </div>
        </RoomContent>
      </RoomContainer>
    </Container>
  );
};

export default StudyRoomReserve;
