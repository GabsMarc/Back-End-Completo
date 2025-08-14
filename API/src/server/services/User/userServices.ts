import { IUserModel } from '../../database/model/models'
import { prisma } from '../../database/prisma/client'



export class UserService {

    async createUser(data: IUserModel): Promise<Error | Omit<IUserModel, 'id'>> {
        try {
            return await prisma.users.create({
                data
            })
        } catch (error) {
            return new Error("Erro ao criar o Usuário.")
        }
    }


    async getUsers(): Promise<Error | IUserModel[]> {

        try {

            const result = await prisma.users.findMany()

            return result

        } catch (error) {
            return new Error('Erro ao buscar os Usuários.')
        }
    }


    async getUserByEmail(email: string): Promise<Error | Array<Object>> {
        try {
            
            const result = await prisma.users.findMany({
                where: {
                    email: email
                },
                omit: {
                    id: true
                }
            })

            return result

        } catch (error) {
            return new Error('Erro ao buscar o Usuário pelo Email.')
        }
    }


    async updateUserById(data: IUserModel): Promise<Error | IUserModel> {

        try {

            return await prisma.users.update({
                data: {
                    name: data.name,
                    lastname: data.lastname,
                    age: data.age
                },
                where: {
                    id: data.id
                }
            })

        } catch (error) {
            return new Error('Erro ao atualizar o Usuário.')
        }
    }


    async deleteUserById(id: string): Promise<Error | Object> {
        try {
            return await prisma.users.delete({
                where: {
                    id: id
                }
            })
        } catch (error) {
            return new Error('Erro ao deletar o Usuário.')
        }
    }

}
