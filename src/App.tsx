import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StyleSheet, css } from "aphrodite";
import { ToastContainer } from "react-toastify";
import StartTimer from "./components/Start/StartTimer";
import { LevelOne } from "./components/Levels/LevelOne";
import EndClassic from "./components/End/EndClassic";
import { PrivateRoutes } from "./PrivateRoutes";
import "react-toastify/dist/ReactToastify.css";

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#282c34",
    textAlign: "center",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
  },
});

const App = () => {
  return (
    <div className={css(styles.app)}>
      <Router>
        <Routes>
          <Route path={PrivateRoutes.PARAM_ONE} element={<StartTimer />} />
          <Route path={PrivateRoutes.PARAM_TWO} element={<LevelOne />} />
          <Route path={PrivateRoutes.PARAM_THREE} element={<EndClassic />} />
        </Routes>
      </Router>

      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
};

export default App;
