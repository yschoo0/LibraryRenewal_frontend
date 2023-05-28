import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getStudyRoomList } from '../../api/studyRoom/studyRoomLIst';
import { useState, useEffect } from 'react';

const RoomContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  margin-top: 16px;
  border-radius: 5px;

  span {
    color: black;
  }
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

    button {
      width: 6.5rem;
      height: 4rem;
      background-color: #e1f6fc;
      text-align: center;
      border: 1px solid #049fff;
      margin-right: 10px;

      span:first-child {
        font-weight: 500;
      }

      :hover {
        background-color: #779acf;

        span {
          color: #ffffff;
        }
      }

      :focus {
        background-color: #1872be;

        span {
          color: #ffffff;
        }
      }
    }

    span {
      display: block;
    }
  }

  .reserve-box {
    margin: auto;
    width: 5rem;
    height: 2.5rem;
    text-align: center;
    margin-top: 26px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    color: black;

    .reserve-btn {
      display: block;
      line-height: 2.5rem;
    }
  }
`;

const StudyRoomCard = ({ currentLastUrl, todayDate }) => {
  const { data: roomList, isLoading } = useQuery(
    ['studyRooms', currentLastUrl, todayDate],
    async () =>
      await getStudyRoomList({ floor: currentLastUrl, data: todayDate }),
    {
      placeholderData: [],
    }
  );

  if (isLoading) {
    <div>loading...</div>;
  }
  console.log('roomList ', roomList);

  return (
    <RoomContainer>
      <RoomNo>
        <span>17212호실</span>
      </RoomNo>
      <RoomContent>
        <div className="room-info">
          <div className="room-pic">
            <span>시설 사진</span>
          </div>
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
  );
};

export default StudyRoomCard;
