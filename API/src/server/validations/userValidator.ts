import { z } from "zod";


export const UserSchema = z.object({
    name: z.string().min(1, 'Nome obrigatório!'),
    lastname: z.string().min(1, 'Sobrenome obrigatório!'),
    age: z.int().positive('Idade deve ser positiva.'),
    email: z.email('Email inválido!')
})


