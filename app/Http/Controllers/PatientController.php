<?php

namespace App\Http\Controllers;

use App\Patient;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $patients = Patient::all();
        return view('patient.index', compact('patients'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('patient.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User();
        $patient = new Patient();
        $patient['nom'] = $request['nom'];
        $patient['prenom'] = $request['prenom'];
        $patient['birth'] = $request['birth'];
        $patient['passport'] = $request['passport'];
        $patient['address'] = $request['Address'];
        $patient['profession'] = $request['Proffession'];
        $patient['sex'] = $request['sex'];
        $patient['status'] = $request['status'];
        $patient['child'] = $request['enfant'];
        $patient['room'] = $request['chambre'];
        $patient['contract'] = $request['contract'];
//            OTHER INFORMATION
        $patient['religion'] = $request['religon'];
        $patient['language'] = $request['language'];
        $patient['passion'] = $request['passions'];
        $patient['ptc'] = $request['ptc'];
        $patient['pee'] = $request['pde'];
        $patient['remarque'] = $request['remarques'];
//      HEALTH INFORMATION

        $patient['gp'] = $request['gs'];
        $patient['poid'] = $request['poid'];
        $patient['tm'] = $request['tm'];
        $patient['operations'] = $request['op'];
        $patient['tMed'] = $request['tmed'];
        $patient['duree'] = $request['dpm'];
        $patient['phobies'] = $request['phobies'];
        $patient['allergies'] = $request['alergies'];
        if ($request['alcool'] == null) {
            $patient['alcool'] = false;
        } else {
            $patient['alcool'] = true;
        }

        $user['name'] = $request['name'];
        $user['lastName'] = $request['LastName'];
        $user['email'] = $request['email'];
        $user['password'] = Hash::make($request['password']);
        $user->save();
        $user->attachRole(4);
        $patient['user_id'] = $user->id;
        $patient->save();
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Patient $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Patient $patient
     * @return \Illuminate\Http\Response
     */
    public function file($id)
    {
        $patient=Patient::where('id',$id)->first();

       $name=$patient->nom.' '.$patient->prenom;
        return view('patient.file',compact('id','name'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Patient $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Patient $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {
        //
    }
}
