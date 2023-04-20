//import { Counter } from "./features/counter/Counter";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Mypage from "./pages/Mypages/Mypage";
import Ask from "./pages/Ask";
import Question from "./pages/Question";
import QuestionSearch from "./pages/QuestionSearch";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import MypageSetting from "./pages/Mypages/MypageSetting";
import MypageDelete from "./pages/Mypages/MypageDelete";
import MypageEdit from "./pages/Mypages/MypageEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/mypage/profile" element={<Mypage />} />
            <Route path="/mypage/setting" element={<MypageSetting />} />
            <Route path="/mypage/userdelete" element={<MypageDelete />} />
            <Route path="/mypage/useredit" element={<MypageEdit />} />
            <Route path="/questionsearch" element={<QuestionSearch />} />
            <Route path="/question" element={<Question />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
