<?php

namespace App\Http\Controllers;

use App\Appointment;
use Illuminate\Http\Request;

class AppointmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('appointment');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request, [
			'fname'	=>	'required',
			'lname'	=>	'required',
            'phone'	=>	'required',
            'email'	=>	'required',
            'date'	=>	'required',
            'time'	=>	'required',
            'message'	=>	'required',
            'payment'	=>	'required',
		]);
		
		//Create new Message
		$appoint = new Appointment;
		$appoint->fname	=	$request->input('fname');
		$appoint->lname	=	$request->input('lname');
        $appoint->phone	=	$request->input('phone');
        $appoint->email	=	$request->input('email');
        $appoint->date	=	$request->input('date');
        $appoint->time	=	$request->input('time');
        $appoint->message	=	$request->input('message');
        $appoint->payment	=	$request->input('payment');
        $appoint->status	=	"Pending";
		
		//Save Message
		$appoint->save();
		
		
		return redirect()->back()->with('success_message', 'We successfully recieved your message!');  
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        $appointments=Appointment::all();
        return view('appointments.index',compact('appointments'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}
