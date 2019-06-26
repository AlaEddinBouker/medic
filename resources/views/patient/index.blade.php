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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Room Number</th>
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
                        @role('Admin')
                        <button class="mb-2 mr-2 btn btn-oval btn-raised btn-danger ripple" data-toggle="modal"
                            data-target="#mymodal{{$patient->id}}">
                        delete
                    </button>
                    <div class="modal fade" id="mymodal{{$patient->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Delete {{$patient->nom}}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Are you sure that you want to delete "{{$patient->nom}}"? ?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn  btn-oval  btn-raised btn-secondary ripple" data-dismiss="modal">Close</button>
                                    <a  href="{{url('/patient/delete/'.$patient->id)}}" class="btn btn-oval btn-raised btn-danger " style="color: white;">Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                        @endrole
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection
