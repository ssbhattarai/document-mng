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


Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => 'auth'], function(){

   Route::inertia('/', 'Dashboard/Index');


   Route::group(['prefix' => 'admin','as' => 'admin.', 'middleware' => 'isadmin'], function(){
        Route::resource('users', 'UserController');

    });

});

// Route::resource('admin/users', 'UserController');



// Route::inertia('/about', 'AboutComponent'); //thisroute doesnot need any controller


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
