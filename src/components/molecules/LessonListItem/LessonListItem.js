import { MainContext } from 'providers/MainProvider/MainProvider';
import { colors } from 'theme/MainTheme/MainTheme';
import styled from 'styled-components';
import LessonData from 'data/lessonData';

const StyledListElement = styled.div`
  background-color: ${() => {
    return colors.lightGray;
  }};
  border-bottom: 1px solid black;
  margin-top: 30px;

  :hover {
    cursor: pointer;
    background-color: ${() => {
      return colors.Gray;
    }};
  }
`;

const StyledParagraph = styled.p`
  display: inline;
`;

const ListElementDataContainer = styled.div`
  height: 150px;
  width: 90%;
  padding-top: 20px;
`;

const ListElementImgame = styled.img`
  float: left;
  display: inline;
  padding-top: 20px;
`;

const ListElementHeader = styled.h1`
  float: left;
  padding: 20px;
`;

const ListItem = ({ lesson, description }) => {
  return (
    <>
      <StyledListElement
        onClick={() => {
          console.log('data');
        }}
      >
        <ListElementImgame src="https://picsum.photos/200/300" alt="" width={'200px'} height={'125px'} />
        <ListElementDataContainer>
          <ListElementHeader>{lesson}</ListElementHeader>
          <StyledParagraph>{description}</StyledParagraph>
        </ListElementDataContainer>
      </StyledListElement>
    </>
  );
};

export default ListItem;
