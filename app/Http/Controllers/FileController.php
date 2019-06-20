<?php

namespace App\Http\Controllers;

use App\file;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'id' => 'required',
            'alimentation' => 'required',
            'petitdej' => 'required',
            'dinner' => 'required',
            'dejene' => 'required',
            'poid' => 'required',
            'temperature' => 'required',
            'tension' => 'required',
            'pouls' => 'required',
            'glycerine' => 'required',
            'viste' => 'required',
            'heurR' => 'required',
            'heurC' => 'required',
            'sieste' => 'required',
            'deplacement' => 'required',
            'promenade' => 'required',
            'contention' => 'required',
        ]);


        $file = new file;
        $file->patient_id = $request->input('id');
        $file->alimentation = $request->input('alimentation');
        $file->petitdej = $request->input('petitdej');
        $file->dejene = $request->input('dejene');
        $file->dinner = $request->input('dinner');
        $file->poid = $request->input('poid');
        $file->temperature = $request->input('temperature');
        $file->tension = $request->input('tension');
        $file->pouls = $request->input('pouls');
        $file->glycerine = $request->input('glycerine');
        $file->viste = $request->input('viste');
        if ($request->input('cream') === "on") {
            $file->cream = true;
        } else {
            $file->cream = false;
        }
        if ($request->input('coupeOngles') === "on") {
            $file->coupeOngles = true;
        } else {
            $file->coupeOngles = false;
        }
        if ($request->input('douche') === "on") {
            $file->douche = true;
        } else {
            $file->douche = false;
        }
        if ($request->input('doucheShamp') === "on") {
            $file->doucheShamp = true;
        } else {
            $file->doucheShamp = false;
        }
        if ($request->input('entretientChambre') === "on") {
            $file->entretientChambre = true;
        } else {
            $file->entretientChambre = false;
        }
        if ($request->input('bainBouche') === "on") {
            $file->bainBouche = true;
        } else {
            $file->bainBouche = false;
        }
        if ($request->input('coiffure') === "on") {
            $file->coiffure = true;
        } else {
            $file->coiffure = false;
        }
        if ($request->input('rassage') === "on") {
            $file->rassage = true;
        } else {
            $file->rassage = false;
        }
        if ($request->input('soinPied') === "on") {
            $file->soinPied = true;
        } else {
            $file->soinPied = false;
        }
        $file->heurR = $request->input('heurR');
        $file->heurC = $request->input('heurC');
        $file->sieste = $request->input('sieste');
        $file->deplacement = $request->input('deplacement');
        $file->promenade = $request->input('promenade');
        $file->contention = $request->input('contention');
        if ($request->input('security') === "on") {
            $file->security = true;
        } else {
            $file->security = false;
        }
        if ($request->input('piscine') === "on") {
            $file->piscine = true;
        } else {
            $file->piscine = false;
        }
        if ($request->input('golf') === "on") {
            $file->golf = true;
        } else {
            $file->golf = false;
        }
        if ($request->input('tennis') === "on") {
            $file->tennis = true;
        } else {
            $file->tennis = false;
        }
        if ($request->input('jeux') === "on") {
            $file->jeux = true;
        } else {
            $file->jeux = false;
        }
        if ($request->input('lecture') === "on") {
            $file->lecture = true;
        } else {
            $file->lecture = false;
        }
        if ($request->input('cinema') === "on") {
            $file->cinema = true;
        } else {
            $file->cinema = false;
        }
        if ($request->input('danse') === "on") {
            $file->danse = true;
        } else {
            $file->danse = false;
        }
        if ($request->input('Television') === "on") {
            $file->Television = true;
        } else {
            $file->Television = false;
        }
        if ($request->input('tir') === "on") {
            $file->tir = true;
        } else {
            $file->tir = false;
        }
        $file->autre = $request->input('autre');
        $file->user_id = Auth::user()->id;
        //Save Message
        $file->save();


        return redirect()->back()->with('success_message', 'You have successfully submitted the file!');

    }

    /**
     * Display the specified resource.
     *
     * @param \App\file $file
     * @return \Illuminate\Http\Response
     */
    public function history($id)
    {
        $files=file::where('patient_id',$id)->get();
        return view('files.index',compact('files'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\file $file
     * @return \Illuminate\Http\Response
     */
    public function edit(file $file)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\file $file
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, file $file)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\file $file
     * @return \Illuminate\Http\Response
     */
    public function destroy(file $file)
    {
        //
    }
}
