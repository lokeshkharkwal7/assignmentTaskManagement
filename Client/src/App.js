import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import StartPage from "./start";
import SearchResults from "./searchResult";
import ResultMatrix from "./resultMatrix";
import DoandUndo from "./doandUndo";
import ListOfTasks from "./listOfTasks";
import AnalysisTask from "./analysisTask";

function App() {
  return (
    <BrowserRouter>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/searchTask" element={<ResultMatrix />} />
        <Route path="/analytics" element={<AnalysisTask />} />
        <Route
          path="/category/completedUncompleted/done"
          element={<ListOfTasks />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
