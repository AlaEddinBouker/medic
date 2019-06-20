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
            'role'	=>	'required',
        ]);

        $user = new User();
        $user->name = $request->input('name');
        $user->LastName = $request->input('LastName');
        $user->tel1 = $request->input('tel1');
        $user->tel2 = $request->input('tel2');
        $user->cin = $request->input('cin');
        $user->cin = $request->input('passport');
        $user->staus = $request->input('status');
        $user->address = $request->input('address');
        $user->shift = $request->input('shift');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));
        $user->save();
        $user->attachRole($request->input('role'));

        return redirect()->back()->with('success_message', 'User was added successfully');
    }
    public function delete(Request $request)
    {

        User::where('id',$request['id'])->delete();
        return redirect()->back()->with('success_message', 'User was deleted successfully');
    }
}
