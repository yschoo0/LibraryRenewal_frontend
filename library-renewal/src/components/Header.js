import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderNav from './header/HeaderNav';

const SHeader = styled.header`
  z-index: 20;
  background-color: #fbf7f2;
  height: black;
  color: black;
  width: 100%;
  position: fixed;
  border-bottom: 2px solid black;
`;

const HeaderContainer = styled.div`
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  padding: 0 1rem;

  a {
    color: black;
  }

  .logo {
    font-size: 2rem;
    font-weight: 700;
    > span {
      color: black;
    }
  }
`;

const Header = () => {
  return (
    <SHeader>
      <HeaderContainer>
        <Link className="logo" to={'/'}>
          <span>한림대학교</span>도서관
        </Link>
        <HeaderNav />
      </HeaderContainer>
    </SHeader>
  );
};

export default Header;
