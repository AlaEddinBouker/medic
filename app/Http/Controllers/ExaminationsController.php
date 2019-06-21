<?php

namespace App\Http\Controllers;

use App\Examination;
use Illuminate\Http\Request;

class ExaminationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('examination');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request, [
			'firstname'	=>	'required',
			'lastname'	=>	'required',
            'age'	=>	'required',
            'country'	=>	'required',
            'email'	=>	'required',
            'phone'	=>	'required',
            'gender'	=>	'required',
            'marital'	=>	'required',
            'weight'	=>	'required',
            'height'	=>	'required',
            'color'	=>	'required',
            'blood_type'	=>	'required',
        ]);

        //Create new Examination
        $exam = new Examination;
        //First Part
        $exam->first_name	=	$request->input('firstname');
		$exam->last_name	=	$request->input('lastname');
        $exam->age	=	$request->input('age');
        $exam->phone	=	$request->input('phone');
		$exam->gender	=	$request->input('gender');
        $exam->martial_status	=	$request->input('marital');
        $exam->email	=	$request->input('email');
        $exam->country	=	$request->input('country');

        //Second Part
        $exam->weight	=	$request->input('weight');
        $exam->height	=	$request->input('height');
		$exam->skin_color	=	$request->input('color');
        $exam->blood_type	=	$request->input('blood_type');
        $exam->diabet	=	$request->input('diabet');
        $exam->diabet_description	=	$request->input('diabetText');
        $exam->cardiac	=	$request->input('cardiac');
        $exam->blood_pulse	=	$request->input('pulse');
        $exam->constipation	=	$request->input('constipation');
        $exam->meds_allergy	=	$request->input('meds');
        $exam->meds_allergy_description	=	$request->input('MedText');
        $exam->thyroid	=	$request->input('Thyroid');
        $exam->previous_operations	=	$request->input('prevOp');
        $exam->previous_operations_description	=	$request->input('prevOpText');
        $exam->kidney_status	=	$request->input('kendny');
        $exam->sleep_status	=	$request->input('sleep');
        $exam->hair_status	=	$request->input('hairStatue');
        $exam->hair_color	=	$request->input('hairColor');
        //Third Part
        $exam->subject	=	$request->input('subject');
        $exam->message	=	$request->input('message');
        $exam->attachements	=	$request->input('attachment');
        $exam->payment	=	$request->input('payment');
        $exam->status	=	"Pending";
        $exam->save();
        return redirect()->back()->with('success_message', 'We successfully recieved your Examination!');
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
