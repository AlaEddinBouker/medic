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
Route::get('/contact', 'AppointmentsController@index');
Route::post('/contact', 'AppointmentsController@create');
Route::get('/examination', 'ExaminationsController@index');
Route::post('/examination', 'ExaminationsController@create');
Auth::routes();
Route::group(['middleware' => 'auth'], function () {
    Route::get('/my-profile', 'UsersController@edit')->name('users.edit');
    Route::patch('/my-profile', 'UsersController@update')->name('users.update');

    Route::group(['middleware' => ['role:Admin']], function () {
        //user rootes
        Route::get('/users/add', 'UsersController@add')->name('add');
        Route::get('/users', 'UsersController@index');
        Route::get('/users/delete/{id}', 'UsersController@delete');
        Route::post('/users/store', 'UsersController@store');
        Route::get('/users/edit/{id}', 'UsersController@useredit');
        Route::patch('/users/update', 'UsersController@userupdate');

//Contracts rootes
        Route::get('/contracts/add', 'ContractsController@addview');
        Route::post('/contracts/add', 'ContractsController@add');
        Route::get('/contracts/edit/{id}', 'ContractsController@edit');
        Route::get('/contracts', 'ContractsController@index');
        Route::post('/contracts/update', 'ContractsController@update');
        Route::get('/contracts/delete/{id}', 'ContractsController@delete');
//Roles Rootes
        Route::get('/roles/add', 'RolesController@add');
        Route::get('/roles/edit/{id}', 'RolesController@edit');
        Route::get('/roles', 'RolesController@index');
        Route::post('/roles/store', 'RolesController@store');
        Route::post('/roles/update', 'RolesController@update');
        Route::get('/roles/delete/{id}', 'RolesController@delete');
//END ROLE ROOTES
    });
    Route::group(['middleware' => ['role:Admin|personelle']], function () {
        Route::get('/patient', 'PatientController@index');
        Route::get('/patient/file/{id}', 'PatientController@file');
        Route::post('/file/store', 'FileController@store');
    });
    Route::group(['middleware' => ['role:Admin']], function () {
        Route::get('/patients/add', 'PatientController@create');
        Route::post('/patient/store', 'PatientController@store');
        Route::get('/file/history/{id}', 'FileController@history');
    });



    Route::get('/patient/profile/{id}', 'PatientController@profile');
//End file rootes
//Files rootes


//End Files rootes
    Route::get('/home', 'HomeController@index')->name('home');
    Route::group(['middleware' => ['role:Admin']], function () {
        Route::get('/contact/show', 'AppointmentsController@show');
        Route::get('/contact/delete/{id}', 'AppointmentsController@delete');
        Route::get('/patient/delete/{id}', 'PatientController@delete');
    });

});
