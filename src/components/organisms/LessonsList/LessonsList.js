import ListItem from 'components/molecules/LessonListItem/LessonListItem';
import { useLocation, useParams } from 'react-router-dom';
import { MainContext } from 'providers/MainProvider/MainProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const LessonsList = () => {
  const context = useContext(MainContext);
  const Location = useLocation();
  return (
    <>
      {context.Lessons[Location.state].map((lesson) => {
        return (
          <Link to="/viewOfLesson" state={{ lesson }}>
            <ListItem lesson={lesson.name} description={lesson.description} />
          </Link>
        );
      })}
    </>
  );
};

export default LessonsList;
