import { ToastContainer } from 'react-toastify';

import Menu from 'modules/Menu';
import UserRoutes from 'UserRoutes';

import 'react-toastify/dist/ReactToastify.css';
import 'shared/styles/style.css';

const App = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <UserRoutes />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        theme="light"
        pauseOnHover={false}
      />
    </>
  );
};

export default App;
