const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
  // 회원 가입 로직 구현
});

router.post('/login', (req, res) => {
  // 로그인 로직 구현
});

router.post('/logout', (req, res) => {
  // 로그아웃 로직 구현
});

module.exports = router;
