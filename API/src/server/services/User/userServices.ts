import { UserModel } from '../../database/model/models';
import { prisma } from '../../database/prisma/client';



export class UserService {

    async createUser(data: UserModel) {
        return await prisma.users.create({
            data
        })
    }


    async getUsers() {
        return await prisma.users.findMany()
    }


    async getUserByName(name: string) {

        if (name.length < 0){
            return 
        }

        // return await prisma.users.findUnique({
        //     where: {
        //         name: name
        //     }
        // })
    }


    async updateById(id: number) {
        
        return
    }


    async deleteById(id: string) {
        
        return await prisma.users.delete({
            where:{
                id: id
            }
        })
    }

}
