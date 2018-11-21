var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/photo_app');

mongoose.connection.on("connected", () => {
  console.log("mongodb数据库连接成功")
});
mongoose.connection.on("error", (error) => {
  console.log("mongodb数据库连接失败", error)
});

var schema = new mongoose.Schema({
  name: String,
  path: String
});

module.exports = mongoose.model('Photo', schema);

