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

const ExtensionBtn = styled.button`
  display: block;
  margin: auto;
  width: 5rem;
  height: 2rem;
  background-color: #4859a6;
  color: #ffffff;
  border-radius: 5px;
`;

const MyReserveList = () => {
  return (
    <Container>
      <h3>총 10건</h3>
      <div className="loan-list">
        <table>
          <tbody>
            <tr>
              <td className="column-title">ㅁ</td>
              <td className="column-title">No.</td>
              <td className="column-title">책 이름</td>
              <td className="column-title">저자</td>
              <td className="column-title">예약일</td>
            </tr>
            <tr>
              <td className="column-title">ㅁ</td>
              <td className="column-title">1</td>
              <td className="column-title">OOO</td>
              <td className="column-title">OOO</td>
              <td className="column-title">2023-05-17</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ExtensionBtn>
        <h3>예약취소</h3>
      </ExtensionBtn>
    </Container>
  );
};

export default MyReserveList;
