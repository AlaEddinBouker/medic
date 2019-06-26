<?php

namespace App\Http\Controllers;

use App\Contract;
use Illuminate\Http\Request;

class ContractsController extends Controller
{
    public function index()
    {
        $contracts=Contract::all();
      return view('contracts.index',compact('contracts'));
    }
    public function addview()
    {
      return view('contracts.add');
    }
    public function add(Request $request)
    {
        $contract=new Contract();
        $contract->name =$request['name'];

        $contract->save();
        return view('contracts.add')->with('success','Contract created successfully!');
    }
    public function edit($id)
    {
        $contract=Contract::where('id',$id)->first();
        if($contract==null)return back();
        return view('contracts.edit',compact('contract'));
    }
    public function update(Request $request)
    {
       $data=[
           'name'=>$request['name'],
       ];
       Contract::where('id',$request['id'])->update($data);
        $contracts=Contract::all();
       return view('contracts.index',compact('contracts'));
    }
    public function delete(Request $request)
    {

        Contract::where('id',$request['id'])->delete();
   return back();
    }
}
