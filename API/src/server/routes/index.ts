import { Validate } from '../middleware/validate'
import { Request, Response, Router } from "express"
import { Validations } from '../validations'
import { UserController } from '../controllers/User/userController'

const router = Router()
const userController = new UserController()


//Rota teste de conexão com o banco
router.get('/', (req: Request, res: Response) => { res.json('Entrou na rota base de teste.') })



//Rotas USER
router.get('/user',       (req: Request, res: Response) => userController.getUser(req, res))
router.get('/userEmail',  (req: Request, res: Response) => userController.getUserByEmail(req, res))
router.post('/user',      Validate(Validations.UserSchema), (req: Request, res: Response) => userController.createUser(req, res))
router.put('/user',       (req: Request, res: Response) => userController.updateUserById(req, res))




export { router }