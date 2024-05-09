const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const lottoRoutes = require('./routes/lottoRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/lotto', lottoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
