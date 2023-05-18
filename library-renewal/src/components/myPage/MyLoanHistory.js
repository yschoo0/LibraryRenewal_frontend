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

const MyLoanHistory = () => {
  return (
    <Container>
      <h3>총 2건</h3>
      <div className="loan-list">
        <table>
          <tbody>
            <tr>
              <td className="col-title">No.</td>
              <td className="col-title">책 이름</td>
              <td className="col-title">저자</td>
              <td className="col-title">대출일</td>
              <td className="col-title">반납일</td>
              <td className="col-title">반납유형</td>
            </tr>
            <tr>
              <td className="col-title">1</td>
              <td className="col-title">OOO</td>
              <td className="col-title">OOO</td>
              <td className="col-title">2023-05-17</td>
              <td className="col-title">2023-05-28</td>
              <td className="col-title">정상반납</td>
            </tr>
            <tr>
              <td className="col-title">2</td>
              <td className="col-title">OOO</td>
              <td className="col-title">OOO</td>
              <td className="col-title">2023-05-17</td>
              <td className="col-title">2023-05-28</td>
              <td className="col-title">연체반납</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MyLoanHistory;
