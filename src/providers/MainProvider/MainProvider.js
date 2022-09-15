import React, { useState } from 'react';
import data from 'data/data';
import LessonData from 'data/lessonData';
import userData from 'data/userData';

export const MainContext = React.createContext({
  Languages: [],
  Lessons: [],
  User: {},
  handleInputChange: () => {},
});

const MainProvider = ({ children }) => {
  const [Languages, setLanguages] = useState(data);
  const [Lessons, setLessons] = useState(LessonData);
  const [User, setUser] = useState(userData);

  const handleInputChange = (e) => {
    setUser({
      ...User,
      [e.target.name]: e.target.value,
    });
    console.log(e);
  };

  return (
    <MainContext.Provider
      value={{
        Languages,
        Lessons,
        User,
        handleInputChange,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
