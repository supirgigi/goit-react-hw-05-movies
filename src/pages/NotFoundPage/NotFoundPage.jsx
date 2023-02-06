import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <>
      <h2 className="title">Page not found</h2>
      <Link to="/">To Main Page</Link>
    </>
  );
};

export default NotFoundPage;
