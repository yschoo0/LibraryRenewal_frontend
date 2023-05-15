import styled from 'styled-components';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import Container from '../components/Container';
import StudyRoomReserve from '../components/studyRoom/StudyRoomReserve';
import MyRoomReserveHistory from '../components/studyRoom/MyRoomReserveHistory';

const ContainerBox = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: var(--main-font-color);
`;

const TapContainer = styled.div`
  display: flex;
  flex-direction: column;
  //background-color: red;

  .tap-container {
    //display: inline-box;
    //justify-content: flex-start;
    //width: 45%;
    //height: 10%;
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 16px;
`;

const TabLink = styled(Link)`
  background-color: #ffffff;
  width: 10rem;
  border: 1px solid #858585;
  text-align: center;
  padding: 8px;
  /* border-radius: 5px; */
  height: 1.5rem;
  color: black;
  cursor: pointer;

  :hover {
    background-color: #00a4c3;
    color: white;
  }
`;

const StudyRoomReservePage = () => {
  const { pathname } = useLocation();

  return (
    <ContainerBox>
      <Title>시설예약</Title>
      <TapContainer>
        <div className="tap-container first">
          <TabLink
            className={
              pathname === 'studyroom/reserve' ||
              pathname === '/studyroom/reserve/list'
                ? 'focus'
                : ''
            }
            to="list"
          >
            시설예약
          </TabLink>
          <TabLink
            className={pathname === '/studyroom/reserve/history' ? 'focus' : ''}
            to="history"
          >
            시설 예약현황
          </TabLink>
        </div>
        <div className="tap-container second">
          <TabLink
            className={pathname === '/studyroom/reserve/2f' ? 'focus' : ''}
            to="2f"
          >
            2층 스터디룸
          </TabLink>
          <TabLink
            className={pathname === '/studyroom/reserve/3f' ? 'focus' : ''}
            to="3f"
          >
            3층
          </TabLink>
          <TabLink
            className={
              pathname === '/studyroom/reserve/4f/digitalRoom' ? 'focus' : ''
            }
            to="4f/digitalRoom"
          >
            4층 (디지털 스터디룸)
          </TabLink>
          <TabLink
            className={
              pathname === '/studyroom/reserve/4f/CSquare' ? 'focus' : ''
            }
            to="4f/CSquare"
          >
            4층 C.Square
          </TabLink>
          <TabLink
            className={pathname === '/studyroom/reserve/5f' ? 'focus' : ''}
            to="5f"
          >
            5층
          </TabLink>
        </div>
      </TapContainer>
      <Routes>
        <Route path="/" element={<StudyRoomReserve />}></Route>
        <Route path="list" element={<StudyRoomReserve />}></Route>
        <Route path="history" element={<MyRoomReserveHistory />}></Route>
        <Route path="2f" element={<StudyRoomReserve />}></Route>
        <Route path="3f" element={<StudyRoomReserve />}></Route>
        <Route path="4f/digitalRoom" element={<StudyRoomReserve />}></Route>
        <Route path="4f/CSquare" element={<StudyRoomReserve />}></Route>
        <Route path="5f" element={<StudyRoomReserve />}></Route>
      </Routes>
    </ContainerBox>
  );
};

export default StudyRoomReservePage;
