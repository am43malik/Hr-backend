import express from 'express'
import registerSchema from '../controllers/Auth/registerController'
import LoginSchema from '../controllers/Auth/loginController'
import userController from '../controllers/Auth/userController'
import auth from '../middlewares/auth'
import newEmployeeController from '../controllers/Forms/newEmployeeController'
import endofServicesController from '../controllers/Forms/endofServicesController'
import exitForLeaveController from '../controllers/Forms/exitForLeaveController'




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

//----------------------end of services-----------------------------
Route.get('/allEndofservice/',endofServicesController.allEndofservice)
Route.get('/oneEndofservice/:id',endofServicesController.oneEndofservice)
Route.post('/endofservices', auth,endofServicesController.endofservices)
Route.put('/UpdateEndofservices/:id', auth,endofServicesController.UpdateEndofservices)
Route.delete('/deleteEndofservice/:id', auth,endofServicesController.deleteEndofservice)
//-----------------------------enf of services----------------------------------------

//=========================exit for leave======================================
Route.get('/allExitofleave/',exitForLeaveController.allExitofleave)
Route.get('/oneExitofleave/:id',exitForLeaveController.oneExitofleave)
Route.post('/exitofleave', auth,exitForLeaveController.exitofleave)
Route.put('/updateExitofleave/:id', auth,exitForLeaveController.updateExitofleave)
Route.delete('/deleteExitofleave/:id', auth,exitForLeaveController.deleteExitofleave)
//=====================================================================================




export default Route