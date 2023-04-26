const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors"); // cors 미들웨어 추가
const app = express();

app.use(cors()); // cors 미들웨어 사용
app.use(express.json());

// 사용자 정보 배열
const users = [
  {
    name: "kimcodingding",
    email: "kcdd@gmail.com",
    password: "1111",
  },
  {
    name: "kimcoding",
    email: "kcd00@gmail.com",
    password: "2222",
  },
];

// 로그인 API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // 사용자 인증 처리
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    res.status(401).json({ message: "로그인에 실패했습니다." });
    return;
  }

  // JWT 발급
  const payload = { email };
  const secretKey = "mysecretkey";
  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, secretKey, options);
  // 응답
  res.header("Authorization", `Bearer ${token}`);
  res.json({ message: "로그인에 성공했습니다." });
});

app.post("/api/signup", (req, res) => {
  const { email, password, name } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    res.status(400).json({ message: "이미 존재하는 이메일입니다." });
    return;
  }
  users.push({ name, email, password });
  res.json({ message: "회원가입에 성공했습니다." });
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
