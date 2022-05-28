import {Outlet} from 'react-router-dom';
import Header from '../component/header/header';

const DefaultLayout = () => {
  return (
    <>
      <div>
        <Header />
        <div className="px-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
