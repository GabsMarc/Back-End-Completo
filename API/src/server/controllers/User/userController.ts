import { Request, Response } from "express";
import { UserService } from "../../services/User/userServices";


export class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }


    async createUser(req: Request, res: Response) {

        const data = req.body

        try {

            await this.userService.createUser(data)

            return res.status(200).json({ message: "Usuário Criado!" })

        } catch (error) {
            return res.status(500).json({ message: "Erro ao Cadastrar o Usuário." })
        }


    }

}