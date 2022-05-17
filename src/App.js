import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { Fragment } from "react";
import { authSliceActions } from "./store/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const dispatch = useDispatch();
  const isAuthented = useSelector((state) => state.auth.isAuthented);

  const loginHandler = () => {
    dispatch(authSliceActions.logedIn());
  };

  const logedOutHandler = () => {
    dispatch(authSliceActions.logedOut());
  };

  return (
    <Fragment>
      <Header logedOutHandler={logedOutHandler} />
      {isAuthented && <UserProfile />}
      {!isAuthented && <Auth loginHandler={loginHandler} />}
      <Counter />;
    </Fragment>
  );
}

export default App;
