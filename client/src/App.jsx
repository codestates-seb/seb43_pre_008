//import { Counter } from "./features/counter/Counter";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Mypage from "./pages/Mypages/Mypage";
import Ask from "./pages/Ask";
import QuestionSearch from "./pages/QuestionSearch";
import Question from "./pages/Question";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import MypageSetting from "./pages/Mypages/MypageSetting";
import MypageDelete from "./pages/Mypages/MypageDelete";
import MypageEdit from "./pages/Mypages/MypageEdit";
import axios from "axios";
import { useState, useLayoutEffect } from "react";

function App() {
  const [questionData, setQuestionData] = useState([]);
  useLayoutEffect(() => {
    axios.get("http://localhost:4000/discussions").then((res) => {
      setQuestionData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  questionData={questionData}
                  setQuestionData={setQuestionData}
                />
              }
            />
            <Route path="/ask" element={<Ask />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/mypage/profile" element={<Mypage />} />
            <Route path="/mypage/setting" element={<MypageSetting />} />
            <Route path="/mypage/userdelete" element={<MypageDelete />} />
            <Route path="/mypage/useredit" element={<MypageEdit />} />
            <Route path="/questionsearch" element={<QuestionSearch />} />
            <Route path="/question/:questionId" element={<Question />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
