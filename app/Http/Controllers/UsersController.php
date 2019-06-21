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
            'email'	=>	'required|string|email|max:255|unique:users,email',
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
    public function edit()
    {
        return view('Users.my-profile')->with('user', auth()->user());
    }
    public function useredit($id)
    {
        $user=User::where('id',$id)->first();
        if($user==null)return back();
        $roles=Role::all();

        return view('Users.edit',compact('user','roles'));
    }
    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'LastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|',
            'password' => 'sometimes|nullable|string|min:6|confirmed',
        ]);
        $user = auth()->user();
        $user->staus = $request->input('status');
        $input = $request->except('password', 'password_confirmation');
        if (! $request->filled('password')) {
            $user->fill($input)->save();
            return back()->with('success_message', 'Profile updated successfully!');
        }
        $user->password = Hash::make($request->input('password'));
        $user->fill($input)->save();
        return back()->with('success_message', 'Profile (and password) updated successfully!');
    }
    public function userupdate(Request $request)
    {
        $request->validate([
            'email' => 'string|email|max:255',
            'password' => 'sometimes|nullable|string|min:6|confirmed',
        ]);
        $user=User::where('id',$request['id'])->first();
        $input = $request->except('password', 'password_confirmation', 'id');
        if (! $request->filled('password')) {
            $user->fill($input)->save();
            return back()->with('success_message', 'User updated successfully!');
        }
        $user->password = Hash::make($request->input('password'));
        $user->fill($input)->save();
        //User::where('id',$request['id'])->update($data);

        return back()->with('success_message', 'User updated successfully!');
    }
}
