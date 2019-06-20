<?php

namespace App\Http\Controllers;

use App\Patient;
use App\User;
use Illuminate\Http\Request;
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
        $usersCount=User::count();
        $patients=Patient::count();
        $users=User::all();
        $personells=DB::table('role_user')->where('role_id',5)->count();

        return view('home',compact('users','patients','personells','usersCount'));
    }
}
