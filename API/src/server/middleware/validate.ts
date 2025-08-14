import { NextFunction, Request, Response } from 'express'
import { ZodTypeAny } from './../../../node_modules/zod/src/v3/types'
import { ZodObject } from 'zod'


export function Validate(schema: ZodObject) {

    return (req: Request, res: Response, next: NextFunction) => {

        const validate = schema.safeParse(req.body)


        if (Object.keys(req.body).length === 0) {

            return res.status(200).json({ mensagem: 'Campos da requisição vazios!' })
        }

        if (!validate.success) {
            return res.status(400).json({
                errors: validate.error.issues.map(err => ({
                    campo: err.path[0],
                    mensagem: err.message
                }))
            })
        } else {
            // console.log("Dados válidos:", validate.data);
        }

        req.body = validate.data
        next()
    }

}