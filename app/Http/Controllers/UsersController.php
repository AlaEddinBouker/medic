<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{
    public function index()
    {
        $users=User::all();
        return view('Users.index',compact('users'));
    }
    public  function add()
    {
        $roles=Role::all();
        return view('Users/add',compact('roles'));
    }
}
