require('dotenv').config();

module.exports = {
  jwtSecret: process.env.SECRET_KEY, // 本番環境では環境変数から取得することを推奨
  jwtOptions: {
    expiresIn: '1h', // トークンの有効期限（例: 1時間）
  },
};
