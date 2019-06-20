@extends('layouts.dashboard')

@section('content')
    @role('Admin')
    <div class="row">
        <div class="col-6 col-md-6 col-xl-3">
            <div class="cardbox">
                <div class="cardbox-body pv">
                    <div class="clearfix">
                        <div class="float-left">
                            <h4 class="m0 text-thin">{{$usersCount}}</h4>
                            <small class="m0 text-muted"><em class="mr-sm ion-arrow-up-b"></em>Total users
                            </small>
                        </div>
                        <div class="float-right mt-lg">
                            <div class="sparkline" id="sparkline2" data-line-color="#4caf50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6 col-md-6 col-xl-3">
            <div class="cardbox">
                <div class="cardbox-body pv">
                    <div class="clearfix">
                        <div class="float-left">
                            <h4 class="m0 text-thin">{{$patients}}</h4>
                            <small class="m0 text-muted"><em class="mr-sm ion-arrow-up-b"></em>Total patients
                            </small>
                        </div>
                        <div class="float-right mt-lg">
                            <div class="sparkline" id="sparkline2" data-line-color="#4caf50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6 col-md-6 col-xl-3">
            <div class="cardbox">
                <div class="cardbox-body pv">
                    <div class="clearfix">
                        <div class="float-left">
                            <h4 class="m0 text-thin">{{$personells}}</h4>
                            <small class="m0 text-muted"><em class="mr-sm ion-arrow-up-b"></em>Total doctors
                            </small>
                        </div>
                        <div class="float-right mt-lg">
                            <div class="sparkline" id="sparkline2" data-line-color="#4caf50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <a href="{{url('users/add')}}"
       class="mb-2 mr-2 btn btn-default btn-raised btn-primary ripple">Add new user </a>

    <table class="table-datatable table table-striped table-hover mv-lg" id="datatable1">
        <thead>
        <tr>
            <th>#ID</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>role</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        @foreach($users as $user)
            <tr>

                <td>{{$user->id}}</td>
                <td>{{$user->name}}</td>
                <td>{{$user->lastName}}</td>
                <td>
                    @foreach($user->roles as $role)
                        {{$role->name}}
                    @endforeach
                </td>
                <td>
                    <a href="{{url('roles/edit/'."2")}}"
                       class="mb-2 mr-2 btn btn-oval btn-raised btn-success ripple">Edit </a>
                    <!-- Button trigger modal -->
                    <button class="mb-2 mr-2 btn btn-oval btn-raised btn-danger ripple" data-toggle="modal"
                            data-target="#mymodal{{$user->id}}">
                        delete
                    </button>
                    <div class="modal fade" id="mymodal{{$user->id}}" tabindex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Delete {{$user->name}}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Are you sure that you want to delete " {{$user->name}} " ?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn  btn-oval  btn-raised btn-secondary ripple"
                                            data-dismiss="modal">Close
                                    </button>
                                    <a href="{{url('/users/delete/'.$user->id)}}"
                                       class="btn btn-oval btn-raised btn-danger " style="color: white;">Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        @endforeach
        </tbody>
    </table>
    @endrole
    @role('personelle')
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
                        @role('Admin')
                        <a href=""
                           class="mb-2 mr-2 btn btn-oval btn-raised btn-danger ripple">Delete </a>
                        @endrole
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
    @endrole
@endsection
