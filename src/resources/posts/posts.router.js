import { Router } from 'express'
import controllers, { createOne, deleteOne, getAll, getAllByUserId, getById, updateOne } from './posts.controllers'
const { body, validationResult } = require('express-validator');

const router = Router()

router
    .route('/')
    .get(getAll())
    .post(body('userId').isLength({ min: 1 }), createOne())  // validator : i will optimise
router
    .route('/:id')
    .put(updateOne())
    .delete(deleteOne())
    .get(getById())

router
    .route('/getByUserId/:userId')
    .get(getAllByUserId())

export default router
