import { Request, Response, NextFunction } from "express"
import { auth } from "../config/firebaseConfig"

export const authMiddleware = async  (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['token'] as string

  if (token !== undefined) {
    try {
      const { uid } = await auth.verifyIdToken(token)

      req.cookies.userId = uid
      return next()
    } catch (e) {
      return res.status(401).json({ result: -99, resultMessage: 'Token Failed', content: null })
    }
  }

  return res.status(401).json({ result: -99, resultMessage: 'Token Failed', content: null })
}
