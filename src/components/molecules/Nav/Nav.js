import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from 'theme/MainTheme/MainTheme';

const StyledNav = styled.div`
  display: block;
  padding-left: 3vw;
  padding-top: 5vh;
  background-color: ${() => {
    return colors.Gray;
  }};
  width: 95vw;
  height: 18vh;
`;

const StyledHeader = styled.p`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 0;
  color: white;
`;

const StyledHeaderParagraph = styled.p`
  display: inline;
  font-size: 1rem;
  margin-top: 0;
  color: white;
`;

const StyledNavButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  width: 8vw;
  margin-right: 10px;
  margin-top: 5vh;
  background-color: ${() => {
    return colors.lightGray;
  }};
  float: right;
`;

const Nav = () => {
  return (
    <>
      <StyledNav>
        <StyledHeader>Learn code with me</StyledHeader>
        <StyledHeaderParagraph>How to write code in some examples</StyledHeaderParagraph>
        <Link to="/about">
          <StyledNavButton>About us</StyledNavButton>
        </Link>
        <Link to="/">
          <StyledNavButton>Simple list</StyledNavButton>
        </Link>
        <Link to="/Account">
          <StyledNavButton>Account</StyledNavButton>
        </Link>
      </StyledNav>
    </>
  );
};

export default Nav;
