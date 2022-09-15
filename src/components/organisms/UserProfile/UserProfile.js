import { useContext } from 'react';
import { MainContext } from 'providers/MainProvider/MainProvider';
import styled from 'styled-components';
import { colors } from 'theme/MainTheme/MainTheme';
import { Link } from 'react-router-dom';

const StyledUserData = styled.div`
  width: 30vw;
  float: left;
  position: relative;
  margin-left: 3px;
  padding: 10px;
`;

const StyledBackgroundData = styled.div`
  width: 98vw;
  height: 45vh;
  background-color: ${() => {
    return colors.lighterGray;
  }};
`;

const StyledStatistics = styled.div`
  width: 98vw;
  height: 27vh;
  background-color: ${() => {
    return colors.DarkGray;
  }};
`;

const StyledProfileImage = styled.img`
  width: 40vh;
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
  :hover {
    cursor: pointer;
  }
`;

const UserProfile = () => {
  const context = useContext(MainContext);
  return (
    <>
      <StyledBackgroundData>
        <StyledUserData>
          <StyledProfileImage src="https://picsum.photos/200/300" alt="" width={'600px'} height={'300px'}></StyledProfileImage>
        </StyledUserData>
        <StyledUserData>
          <h1>User name: {context.User.UserName}</h1>
          <h2>Fafourite Language: {context.User.FavouriteLanguage}</h2>
          <h2>Adres e-mail: {context.User.Email}</h2>
          <h2>Age: {context.User.Age}</h2>
          <h3>{context.User.Description}</h3>
        </StyledUserData>
        <Link to="EditProfile">
          <StyledNavButton>Edit profile</StyledNavButton>
        </Link>
      </StyledBackgroundData>
      <StyledStatistics></StyledStatistics>
    </>
  );
};

export default UserProfile;
