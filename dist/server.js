"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = require("body-parser");
var _posts = _interopRequireDefault(require("./resources/posts/posts.router"));
var _auth = require("./auth");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use(_auth.protect);
const port = 4000;
app.use('/api/post', _posts.default);
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
exports.start = start;