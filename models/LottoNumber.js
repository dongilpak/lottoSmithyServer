const mongoose = require('mongoose');

const lottoNumberSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  numbers: { type: [Number], required: true },
  createdAt: { type: Date, default: Date.now },
});

const LottoNumber = mongoose.model('LottoNumber', lottoNumberSchema);

module.exports = LottoNumber;
