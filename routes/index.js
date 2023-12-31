import express from 'express'
import registerSchema from '../controllers/Auth/registerController'
import LoginSchema from '../controllers/Auth/loginController'
import userController from '../controllers/Auth/userController'
import auth from '../middlewares/auth'
import newEmployeeController from '../controllers/Forms/newEmployeeController'
import endofServicesController from '../controllers/Forms/endofServicesController'
import exitForLeaveController from '../controllers/Forms/exitForLeaveController'
import EmployeeResumeController from '../controllers/Forms/EmployeeResumeController'
import RprenewalformController from '../controllers/Forms/RprenewalformController'
import AnnualsettelmentController from '../controllers/Forms/AnnualsettelmentController'




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

//=========================Resume of work======================================
Route.get('/allEmployeeResume/',EmployeeResumeController.allEmployeeResume)
Route.get('/oneEmployeeResume/:id',EmployeeResumeController.oneEmployeeResume)
Route.post('/EmployeeResume', auth,EmployeeResumeController.EmployeeResume)
Route.put('/UpdateEmployeeResume/:id', auth,EmployeeResumeController.UpdateEmployeeResume)
Route.delete('/deleteEmployeeResume/:id', auth,EmployeeResumeController.deleteEmployeeResume)
//=====================================================================================


//=========================RP Renewal Form======================================
Route.get('/allRprenewalform/',RprenewalformController.Rprenewalform)
Route.get('/oneRprenewalform/:id',RprenewalformController.oneRprenewalform)
Route.post('/Rprenewalform', auth,RprenewalformController.Rprenewalform)
Route.put('/UpdateRprenewalform/:id', auth,RprenewalformController.UpdateRprenewalform)
Route.delete('/deleteUpdateRprenewalform/:id', auth,RprenewalformController.deleteUpdateRprenewalform)
//=====================================================================================


//=========================Annualsettelment======================================
Route.get('/allAnnualsettelment/',AnnualsettelmentController.allAnnualsettelment)
Route.get('/oneRprenewalform/:id',AnnualsettelmentController.oneRprenewalform)
Route.post('/Annualsettelment', auth,AnnualsettelmentController.Annualsettelment)
Route.put('/UpdateAnnualsettelment/:id', auth,AnnualsettelmentController.UpdateAnnualsettelment)
Route.delete('/deleteAnnualsettelment/:id', auth,AnnualsettelmentController.deleteAnnualsettelment)
//=====================================================================================


export default Route