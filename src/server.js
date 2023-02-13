import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import postRouter from './resources/posts/posts.router'
import { protect } from './auth';

const app = express();
app.use(express.json());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(protect);
const port = 4000;

app.use('/api/post', postRouter)

export const start = async () => {
  try {

    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
