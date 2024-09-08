import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages";
import { ENTRY } from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path={ENTRY} element={<LandingPage />} />
    </Routes>
  );
};

export default App;
