// import jwt from 'jsonwebtoken'

import { User } from "./utils/firebaseConfig"

// import { User } from './firebaseConfig';
export const protect = async (req, res, next) => {
    const bearer = req.headers.authorization;
    const param = req?.url.split('/')?.at(-1) 
    
    if (req?.method === 'PUT' || req?.method === 'DELETE')
    {
    if (!bearer || !bearer.startsWith('Bearer ')) {
      return res.status(401).end()
    }
  
    const token = bearer.split('Bearer ')[1].trim();
    console.log("bearer:", token, param)
    
     User.doc(param).onSnapshot((snap) => {
        const data = snap.data();
        console.log("snap by id in auth:", param, data);
        if (token === data?.userId) {
          return next();
        } else if (token === data?.userId){
        return  res.status(401).end()
       } else {
        return  res.status(401).end()
       }
    })
} else {
    return next();
}
  
  }
  