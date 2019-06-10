<?php

namespace App\Http\Controllers;

use App\Role;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    public function index()
    {
        $roles=Role::all();
      return view('roles.index',compact('roles'));
    }
    public function add()
    {
      return view('roles.add');
    }
    public function store(Request $request)
    {

       $role=new Role();
       $role->name =$request['name'];
       $role->display_name =$request['displayName'];
       $role->description =$request['description'];
       $role->save();
       return view('roles.add')->with('success','Item created successfully!');

    }
    public function edit($id)
    {
        $role=Role::where('id',$id)->first();
        if($role==null)return back();
        return view('roles.edit',compact('role'));
    }
    public function update(Request $request)
    {
       $data=[
           'name'=>$request['name'],
           'display_name'=>$request['displayName'],
           'description'=>$request['description'],
       ];
       Role::where('id',$request['id'])->update($data);
       return back();
    }
    public function delete(Request $request)
    {

   Role::where('id',$request['id'])->delete();
   return back();
    }
}
