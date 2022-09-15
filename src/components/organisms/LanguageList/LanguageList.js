import ListItem from 'components/molecules/LanguageListItem/LanguageListItem';
import { Link } from 'react-router-dom';
import { MainContext } from 'providers/MainProvider/MainProvider';
import { useContext } from 'react';

const LanguageList = () => {
  const context = useContext(MainContext);
  return (
    <>
      {context.Languages.map((language) => {
        return (
          <Link to="/ListOfLessons" state={language.language}>
            <ListItem language={language.language} id={language.id} description={language.description} key={language.id} />
          </Link>
        );
      })}
    </>
  );
};

export default LanguageList;
