import { useContext } from 'react';
import { MainContext } from 'providers/MainProvider/MainProvider';
import styled from 'styled-components';
import { colors } from 'theme/MainTheme/MainTheme';
import { Link } from 'react-router-dom';

const StyledForm = styled.div`
  min-width: 400px;
  min-height: 450px;
  margin: auto;
  width: 30vw;
  height: 40vh;
  padding: 50px;
  background-color: ${() => {
    return colors.lightGray;
  }};
`;

const StyledSelect = styled.select`
  display: block;
  height: 30px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

const StyledInputText = styled.input`
  display: block;
  height: 30px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

const StyledTextArea = styled.textarea`
  display: block;
  height: 50%;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 13%;
`;

const StyledSubmitInDiv = styled.div`
  display: block;
  height: 4vh;
  width: 8vw;
  margin-right: auto;
  margin-left: auto;
  margin-top: 15px;
  background-color: ${() => {
    return colors.Gray;
  }};
  text-align: center;
  :hover {
    cursor: pointer;
    outline-style: solid;
    outline-width: 1px;
  }
`;

const EditProfile = () => {
  const context = useContext(MainContext);
  console.log(context);
  return (
    <>
      <StyledForm>
        <StyledSelect name="FavouriteLanguage" id="languages" value={context.User.FavouriteLanguage} onChange={context.handleInputChange}>
          <option value="Python">Python</option>
          <option value="C_Language">C Language</option>
          <option value="Cs_Language">C# Language</option>
          <option value="cpp_Language">C++ Language</option>
          <option value="R_Language">R Language</option>
          <option value="Assembler">Assembler</option>
          <option value="Go">Go Language</option>
          <option value="PHP">PHP</option>
          <option value="SQL">SQL</option>
        </StyledSelect>
        <StyledInputText placeholder="E-mail" name="Email" value={context.User.Email} onChange={context.handleInputChange}></StyledInputText>
        <StyledInputText placeholder="Age" name="Age" value={context.User.Age} onChange={context.handleInputChange}></StyledInputText>
        <StyledTextArea
          placeholder="description"
          name="Description"
          value={context.User.Description}
          onChange={context.handleInputChange}
        ></StyledTextArea>
        <Link to="/Account">
          <StyledSubmitInDiv>Save</StyledSubmitInDiv>
        </Link>
      </StyledForm>
    </>
  );
};

export default EditProfile;
