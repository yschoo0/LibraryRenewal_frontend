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
`;

const MyLoanHistory = () => {
  return (
    <Container>
      <h3>총 10건</h3>
      <div className="loan-list">
        <table>
          <tbody>
            <tr>
              <td className="column-title">No.</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">저자</td>
              <td className="column-title">대출일</td>
              <td className="column-title">반납일</td>
              <td className="column-title">반납유형</td>
            </tr>
            <tr>
              <td className="column-title">No.</td>
              <td className="column-title">OOO</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-17</td>
              <td className="column-title">2023-05-28</td>
              <td className="column-title">정상반납</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default MyLoanHistory;
