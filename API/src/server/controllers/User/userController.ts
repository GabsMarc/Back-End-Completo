import { Request, Response } from "express"
import { UserService } from "../../services/User/userServices"


export class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }


    async createUser(req: Request, res: Response) {

        //Verifica se o email já existe
        const verifyMail = await this.userService.getUserByEmail(req.body.email);

        if (verifyMail instanceof Error) {
            return res.status(500).json({ message: verifyMail.message });
        }

        if (verifyMail.length > 0) {
            return res.json({ message: "Email já cadastrado." });
        }


        //Faz o cadastro do usuário
        const result = await this.userService.createUser(req.body)

        if (result instanceof Error) {
            return res.status(500).json({ message: result.message })
        }

        return res.status(200).json(result)

    }


    async getUser(req: Request, res: Response) {


        const result = await this.userService.getUsers()

        if (result instanceof Error) {
            return res.status(500).json({ message: "Erro ao fazer a busca de Usuários." })
        }

        return res.json(result)

    }


    async getUserByEmail(req: Request, res: Response) {

        const { email } = req.body

        const result = await this.userService.getUserByEmail(email)

        if (result instanceof Error) {
            return res.status(500).json({ message: "Erro ao buscar o usuário pelo Email." })
        } else if (result.length < 1) {
            return res.status(200).json({ message: "Usuário não encontrado." })
        }

        return res.status(200).json(result[0])

    }


    async updateUserById(req: Request, res: Response) {

        const data = req.body

        const result = await this.userService.updateUserById(data)

        if (result instanceof Error) {
            return res.status(500).json({ message: "Erro ao fazer a atulização no cadastro do usuário." })
        }

        return res.status(200).json({ message: "Campos atualizados!" })
    }
}