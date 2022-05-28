import {Navigate, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRouter = ({children}) => {
  const location = useLocation();
  const loginStatus = useSelector((state) => state.userLoginData.userStatus);
  if (!loginStatus) {
    return <Navigate to="/login" state={{path: location.pathname}} />;
  }

  return children;
};

export default PrivateRouter;
