import ListItem from 'components/molecules/LanguageListItem/LanguageListItem';
import LanguageList from 'components/organisms/LanguageList/LanguageList';
import LessonsList from 'components/organisms/LessonsList/LessonsList';
import LessonView from 'components/organisms/LessonView/LessonView';
import EditProfile from 'components/organisms/EditProfile/EditProfile';
import UserProfile from 'components/organisms/UserProfile/UserProfile';
import BeerProvider from 'providers/MainProvider/MainProvider';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainTemplate from 'Templates/MainTemplate/MainTemplate';
import About from 'components/molecules/About/About';

function root() {
  return (
    <>
      <Router>
        <BeerProvider>
          <MainTemplate>
            <Routes>
              <Route path="/" element={<LanguageList />} />
              <Route path="/about" element={<About />} />
              <Route path="/listoflessons" element={<LessonsList />} />
              <Route path="/viewOfLesson" element={<LessonView />} />
              <Route path="/Account" element={<UserProfile />} />
              <Route path="/Account/EditProfile" element={<EditProfile />} />
            </Routes>
          </MainTemplate>
        </BeerProvider>
      </Router>
    </>
  );
}

export default root;
