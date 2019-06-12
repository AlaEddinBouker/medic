@extends('layouts.dashboard')
@section('title')
    Add New patient
@endsection
{{--@section('navs')
    <div class="content-subheader">
        <div class="content-subheader__titles">
            <h2 class="content-subheader__title">Add new role</h2>
            <nav class="content-subheader__breadcrumb-menu">
                <ul>
                    <li><a href="{{url('/roles')}}">Roles</a></li>
                    <li><a href="{{url('/home')}}">Dashboard</a></li>
                </ul>
            </nav>
        </div>
    </div>
@endsection--}}
@section('content')
    <div class="table-responsive">
        <table class="table-datatable table table-striped table-hover mv-lg" id="datatable1">
            <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Numéro de chambre</th>
                <th class="sort-numeric"></th>

            </tr>
            </thead>
            <tbody>
            @foreach($patients as $patient)
                <tr>
                    <td>{{$patient->nom}}</td>
                    <td>{{$patient->prenom}}</td>
                    <td>{{$patient->room}}</td>
                    <td>
                        <a href="{{url('/patient/profile/'.$patient->id)}}"
                           class="mb-2 mr-2 btn btn-oval btn-raised btn-primary ripple">Profile </a>
                        <a href="{{url('patient/file/'.$patient->id)}}"
                           class="mb-2 mr-2 btn btn-oval btn-raised btn-success ripple">File </a>
                        <a href=""
                           class="mb-2 mr-2 btn btn-oval btn-raised btn-danger ripple">Delete </a>

                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection
