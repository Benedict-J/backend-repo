import express from 'express'
import UserController from '../controller/userController'
import {authMiddleware} from '../middleware/authMiddleware'

const userRouter = express.Router()

userRouter.get('/fetch-user-data', authMiddleware, UserController.fetchUserData)
userRouter.post('/update-user-data', authMiddleware, UserController.updateUserData)


export default userRouter