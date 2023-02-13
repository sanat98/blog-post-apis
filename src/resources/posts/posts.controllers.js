import { db, User } from "../../utils/firebaseConfig";
const { body, validationResult } = require('express-validator');

// get all

export const getAll = ()=>
async (req, res) => {
    const snapshot = await User.get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(data);
}


// get by id
export const getById = ()=>
async (req, res) => {
    User.doc(req.params.id).onSnapshot((snap) => {
        const data = snap.data();
        console.log("snap by id:", req.params.id, data);
        if (data === undefined) {
            res.send({ msg: "no data found" })
        }
        res.status(200).json(data)
    })
}

// get by user id
export const getAllByUserId = ()=>
 async (req, res) => {
    console.log("param", req.params.userId)
    db.collection("Users").where('uid', '==', req.params.userId).onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("snap by id:", req.params.userId, data);
        if (data === undefined) {
            res.status(400).json({"message": "no data found"})
        }
        res.status(200).json(data)
    })
}


 export const createOne = ()=>
 async (req, res) => {
    const data = req.body;
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    await User.add(data).then((resData)=>{
        res.status(201).json({ msg: "User Added" }); 
    })
    .catch((e)=>{
        res.status(400).json({ msg: "User not Added" }); 
    })  
}


export const updateOne = ()=>
 async (req, res) => {
    console.log("update:", req.params.id)
    const id = req.params.id;
    const data = req.body;
    await User.doc(id).update(data);
    res.status(200).json({ msg: `${id} Updated` });
}


export const deleteOne = ()=>
async (req, res) => {
    const id = req.params.id;
    await User.doc(id).delete();
    res.status(200).json({ msg: `${id} Deleted` });
}

