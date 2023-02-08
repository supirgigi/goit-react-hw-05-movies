import { ToastContainer } from 'react-toastify';

import Navbar from 'modules/Navbar';
import UserRoutes from 'UserRoutes';

import 'react-toastify/dist/ReactToastify.css';
import 'shared/styles/style.css';

const App = () => {
  return (
    <>
      <Navbar />
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
