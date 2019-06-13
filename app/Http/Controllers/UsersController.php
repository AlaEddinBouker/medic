<?php

namespace App\Http\Controllers;

use App\Role;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
    public  function store(Request $request)
    {
        $this->validate($request, [
			'name'	=>	'required',
			'LastName'	=>	'required',
            'email'	=>	'required|email',
            'password'	=>	'required|confirmed',
            'role'	=>	'required'
        ]);

        $user = new User();
        $user->name = $request->input('name');
        $user->LastName = $request->input('LastName');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        $user->attachRole($request->input('role'));

        return redirect()->back()->with('success_message', 'We successfully recieved your message!');
    }
}
