import express, { Request, Response, NextFunction } from 'express'

const router = express.Router()

const add = async (a: number, b: number) => {
    const sum = a + b
    if (sum > 1)
        throw new Error('Sum is greater than 1')
    else
        return sum
}

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const n = await add(Math.random(), Math.random())
        res.send(n.toString())
    } catch (err) {
        res.send(err.message)
    } finally {
        next()
    }
})

export default router