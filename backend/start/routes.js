'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('login', 'UserController.login')
  Route.post('register', 'UserController.register')
  Route.get('getuser/:id', 'UserController.show')
  Route.delete('deleteuser/:id', 'UserController.delete')
  Route.put('putuser/:id', 'UserController.update')
}).prefix('users')

Route.group(() => {
  Route.post('register', 'PatientController.register')
  Route.get('getpatient/:id', 'PatientController.show')
  Route.delete('deletepatient/:id', 'PatientController.destroy')
  Route.put('putpatient/:id', 'PatientController.update')

}).prefix('patients')

Route.group(() => {
  Route.post('register', 'AnamneseController.register')
  Route.get('getanamnese/:id', 'AnamneseController.buscar')
  Route.delete('deleteanamnese/:id', 'AnamneseController.destroy')
  Route.put('putanamnese/:id', 'AnamnseController.update')

}).prefix('anamneses')