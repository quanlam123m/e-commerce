import './App.css';
import logo from './logo.svg';
import { createBrowserHistory } from "history";
import { Route, Switch, withRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

export const history = createBrowserHistory();

function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actTryLogin(props.history));
  }, [])

  return (
    <Suspense fallback={<><Loader/></>}>
      <ScrollToTop />
        <Switch>
        {/* {renderRouteAdmin()}
        {renderRouteQC()}
        {renderRouteStaff()} */}
        {/* <Route 
         path="/"
         exact
         component={lazy(() => import("./containers/Admin/AuthPage"))}
        /> */}
        </Switch>
    </Suspense>
  )

};

export default withRouter(App);
