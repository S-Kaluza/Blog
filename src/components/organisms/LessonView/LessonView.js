import { MainContext } from 'providers/MainProvider/MainProvider';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const LessonView = () => {
  const context = useContext(MainContext);
  const Location = useLocation();
  return (
    <>
      <h1>{Location.state.lesson.name}</h1>
      {Location.state.lesson.sections.map((section) => {
        return (
          <>
            <h2>{section.name}</h2>
            <p>{section.contents}</p>
          </>
        );
      })}
    </>
  );
};

export default LessonView;
