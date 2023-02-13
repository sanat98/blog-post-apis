"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.User = void 0;
var _firebase = _interopRequireDefault(require("firebase"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const firebaseConfig = {
  apiKey: "AIzaSyCMLk5Y1jE1qluGyNSx-26tpI0qgp_piEI",
  authDomain: "blog-post-apis.firebaseapp.com",
  projectId: "blog-post-apis",
  storageBucket: "blog-post-apis.appspot.com",
  messagingSenderId: "785719343260",
  appId: "1:785719343260:web:0b1022d39018aeb5bb9559",
  measurementId: "G-CW3YRR2DGM"
};
_firebase.default.initializeApp(firebaseConfig);
const db = _firebase.default.firestore();
exports.db = db;
const User = db.collection("Users");
exports.User = User;