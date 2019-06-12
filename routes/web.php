<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
//user rootes
Route::get('/users/add', 'UsersController@add')->name('add');
Route::get('/users', 'UsersController@index');
Route::post('/users/store','UsersController@store');

//end user rootes

//Roles Rootes
Route::get('/roles/add', 'RolesController@add');
Route::get('/roles/edit/{id}', 'RolesController@edit');
Route::get('/roles', 'RolesController@index');
Route::post('/roles/store', 'RolesController@store');
Route::post('/roles/update', 'RolesController@update');
Route::get('/roles/delete/{id}', 'RolesController@delete');
//END ROLE ROOTES
Route::get('/patients/add','PatientController@create');
Route::post('/patient/store','PatientController@store');
Route::get('/patient','PatientController@index');
Route::get('/patient/file/{id}','PatientController@file');
//End file rootes
//Files rootes
Route::post('/file/store','FileController@store');
//End Files rootes
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/appointment', 'AppointmentsController@index');
Route::post('/appointment','AppointmentsController@create');
Route::get('/appointments/show','AppointmentsController@show');