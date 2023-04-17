//import { Counter } from "./features/counter/Counter";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
