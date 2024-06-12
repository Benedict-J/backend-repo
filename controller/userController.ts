import { Request, Response } from "express"
import { db } from "../config/firebaseConfig"

const fetchUserData = async (req: Request, res: Response) => {
  const usersRef = db.collection('User')

  try {
    const doc = await usersRef.doc(req.cookies.userId).get();
    if (doc.exists) {
      return res.status(200).json({
        result: 0,
        resultMessage: 'success',
        content: await doc.data()
      })
    } else {
      return res.send({
        result: -1,
        resultMessage: 'Not Found',
        content: null,
      })
    }
  } catch (e) {
    res.send({
      result: -1,
      resultMessage: 'Internal Server Error',
      content: null
    })
  }
}

const updateUserData = async (req: Request, res: Response) => {
  const usersRef = db.collection('User')

  // console.log(req)

  try {
    const doc = await usersRef.doc(req.cookies.userId).update(req.body);

    console.log(req.body)

    res.send({
      result: 0,
      resultMessage: 'Updated'
    })
  } catch (e) {
    console.log(e)
    res.send({
      result: -1,
      resultMessage: 'Internal Server Error'
    })
  }
}

const UserController = {
  fetchUserData,
  updateUserData
}

export default UserController