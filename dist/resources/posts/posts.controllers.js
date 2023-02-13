"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOne = exports.getById = exports.getAllByUserId = exports.getAll = exports.deleteOne = exports.createOne = void 0;
var _firebaseConfig = require("../../utils/firebaseConfig");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const {
  body,
  validationResult
} = require('express-validator');

// get all

const getAll = () => async (req, res) => {
  const snapshot = await _firebaseConfig.User.get();
  const list = snapshot.docs.map(doc => _objectSpread({
    id: doc.id
  }, doc.data()));
  res.send(list);
};

// get by id
exports.getAll = getAll;
const getById = () => async (req, res) => {
  _firebaseConfig.User.doc(req.params.id).onSnapshot(snap => {
    const data = snap.data();
    console.log("snap by id:", req.params.id, data);
    if (data === undefined) {
      res.send({
        msg: "no data found"
      });
    }
    res.send(data);
  });
};

// get by user id
exports.getById = getById;
const getAllByUserId = () => async (req, res) => {
  console.log("param", req.params.userId);
  _firebaseConfig.db.collection("Users").where('uid', '==', req.params.userId).onSnapshot(snapshot => {
    const data = snapshot.docs.map(doc => _objectSpread({
      id: doc.id
    }, doc.data()));
    console.log("snap by id:", req.params.userId, data);
    if (data === undefined) {
      res.send({
        msg: "no data found"
      });
    }
    res.send(data);
  });
};
exports.getAllByUserId = getAllByUserId;
const createOne = () => async (req, res) => {
  const data = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  await _firebaseConfig.User.add(data).then(resData => {
    res.status(201).json({
      msg: "User Added"
    });
  }).catch(e => {
    res.status(400).json({
      msg: "User not Added"
    });
  });
};
exports.createOne = createOne;
const updateOne = () => async (req, res) => {
  console.log("update:", req.params.id);
  const id = req.params.id;
  const data = req.body;
  await _firebaseConfig.User.doc(id).update(data);
  res.status(200).json({
    msg: `${id} Updated`
  });
};
exports.updateOne = updateOne;
const deleteOne = () => async (req, res) => {
  const id = req.params.id;
  await _firebaseConfig.User.doc(id).delete();
  res.status(200).json({
    msg: `${id} Deleted`
  });
};
exports.deleteOne = deleteOne;