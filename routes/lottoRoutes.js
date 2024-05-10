const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // 로또 번호 저장 로직 구현
});

router.get('/', (req, res) => {
  // 로또 번호 조회 로직 구현
});

router.delete('/:id', (req, res) => {
  //로또 번호 삭제 로직 구현
});

module.exports = router;
