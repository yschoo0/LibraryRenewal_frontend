import styled from 'styled-components';

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

  .col-title {
    text-align: center;
  }
`;

const MyRoomReserveHistory = () => {
  return (
    <Container>
      <h3>총 2건</h3>
      <div className="reserve-list">
        <table>
          <tbody>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title no">No.</td>
              <td className="col-title place">이용시설</td>
              <td className="col-title major">소속/학과</td>
              <td className="col-title use-date">예약일</td>
              <td className="col-title use-time">이용시간</td>
              <td className="col-title reserve-date">신청일</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title no">1</td>
              <td className="col-title place">2층 스터디룸 / 17212호실</td>
              <td className="col-title major">데이터전공</td>
              <td className="col-title use-date">2023-05-17</td>
              <td className="col-title use-time">15:00~16:00</td>
              <td className="col-title reserve-date">2023-05-10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MyRoomReserveHistory;
