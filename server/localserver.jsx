const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors"); // cors 미들웨어 추가
const app = express();

app.use(cors()); // cors 미들웨어 사용
app.use(express.json());

// 사용자 정보 배열
const users = [
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
];

// 로그인 API
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // 사용자 인증 처리
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    res.status(401).json({ message: "로그인에 실패했습니다." });
    return;
  }

  // JWT 발급
  const payload = { username };
  const secretKey = "mysecretkey";
  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, secretKey, options);
  // 응답
  res.header("Authorization", `Bearer ${token}`);
  res.json({ message: "로그인에 성공했습니다." });
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
