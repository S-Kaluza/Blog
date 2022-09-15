import Nav from 'components/molecules/Nav/Nav';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default MainTemplate;
