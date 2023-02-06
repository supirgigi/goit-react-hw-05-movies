import Movies from 'modules/Movies';

const HomePage = () => {
  return (
    <>
      <h2 className="title">Trending today</h2>
      <Movies />
    </>
  );
};

export default HomePage;
