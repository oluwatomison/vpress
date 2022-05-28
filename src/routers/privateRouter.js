import {Navigate, useLocation} from 'react-router-dom';
import AuthModule from '../modules/Auth.module';
const PrivateRouter = ({children}) => {
  const location = useLocation();

  if (!AuthModule.isUserAuthenticated()) {
    return <Navigate to="/login" state={{path: location.pathname}} />;
  }

  return children;
};

export default PrivateRouter;
