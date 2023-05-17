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

const ExtensionBtn = styled.button`
  display: block;
  margin: auto;
  width: 5rem;
  height: 2rem;
  background-color: #4859a6;
  color: #ffffff;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 600;
`;

const MyLoanList = () => {
  return (
    <Container>
      <h3>총 5건</h3>
      <div className="loan-list">
        <table>
          <tbody>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">No.</td>
              <td className="col-title">책 이름</td>
              <td className="col-title">저자</td>
              <td className="col-title">대출일</td>
              <td className="col-title">반납예정일</td>
              <td className="col-title">연장횟수</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">1</td>
              <td className="col-title">책 이름</td>
              <td className="col-title">OOO</td>
              <td className="col-title">2023-05-12</td>
              <td className="col-title">2023-05-26</td>
              <td className="col-title">0</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">1</td>
              <td className="col-title">책 이름</td>
              <td className="col-title">OOO</td>
              <td className="col-title">2023-05-12</td>
              <td className="col-title">2023-05-26</td>
              <td className="col-title">0</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">3</td>
              <td className="col-title">책 이름</td>
              <td className="col-title">OOO</td>
              <td className="col-title">2023-05-12</td>
              <td className="col-title">2023-05-26</td>
              <td className="col-title">0</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">4</td>
              <td className="col-title">책 이름</td>
              <td className="col-title">OOO</td>
              <td className="col-title">2023-05-12</td>
              <td className="col-title">2023-05-26</td>
              <td className="col-title">0</td>
            </tr>
            <tr>
              <td className="col-title">
                <input type="checkbox" id="room-checkbox" />
              </td>
              <td className="col-title">5</td>
              <td className="col-title">책 이름</td>
              <td className="col-title">OOO</td>
              <td className="col-title">2023-05-12</td>
              <td className="col-title">2023-05-26</td>
              <td className="col-title">0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ExtensionBtn>대출연장</ExtensionBtn>
    </Container>
  );
};

export default MyLoanList;
