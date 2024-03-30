import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import StartPage from "./start";
import SearchResults from "./searchResult";

function App() {
  return (
    <BrowserRouter>
    {/* <Home /> */}
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/searchTask" element={<SearchResults />} />
    </Routes>
  </BrowserRouter>
      
    
  );
}

export default App;
