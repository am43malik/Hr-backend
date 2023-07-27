import express from 'express'
import registerSchema from '../controllers/Auth/registerController'
import LoginSchema from '../controllers/Auth/loginController'
import userController from '../controllers/Auth/userController'
import auth from '../middlewares/auth'
import newEmployeeController from '../controllers/Forms/newEmployeeController'




const Route = express.Router()
//-------------------Auth Routh-----------------------------------------
Route.post('/register',registerSchema.register)
Route.post('/login',LoginSchema.login)
Route.get('/me',  auth, userController.me)

//========================== Forms=================================

//-------------------allEmployee------------------------------------
Route.get('/allEmployee/',newEmployeeController.allEmployee)
Route.get('/oneEmployee/:id',newEmployeeController.oneEmployee)
Route.post('/newEmployee', auth,newEmployeeController.newemployee)
Route.put('/updateEmployee/:id', auth,newEmployeeController.updateEmployee)
Route.delete('/deleteEmployee/:id', auth,newEmployeeController.deleteEmployee)
//--------------------------------allEmployee--------------------------------------





export default Route