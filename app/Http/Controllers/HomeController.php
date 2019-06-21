<?php

namespace App\Http\Controllers;

use App\file;
use App\Patient;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        foreach (Auth::user()->roles as $role) {
            if ($role->id == 4) {
                $patient = Patient::where('user_id', Auth::user()->id)->first();
                if ($patient == null) {
                    return redirect('/');
                }
                $f = file::where('patient_id', $patient->id)->orderBy('created_at', 'desc')->first();
                if ($f == null) {
                    return redirect('/');
                } else {
                    $files = file::where('patient_id', $patient->id)->orderBy('created_at', 'desc')->take(10)->get();;
                    $user = User::where('id', $f->user_id)->first();
                    return view('patient.profile', compact('patient', 'f', 'files', 'user'));
                }
            }
        }
        $usersCount = User::count();
        $patientsCount = Patient::count();
        $users = User::all();
        $personells = DB::table('role_user')->where('role_id', 5)->count();
        $patients = Patient::all();

        return view('home', compact('users', 'patients', 'personells', 'usersCount', 'patientsCount'));
    }
}
