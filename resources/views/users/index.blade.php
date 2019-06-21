@extends('layouts.dashboard')
@section('title')
    Roles
@endsection
@section('css')
    <style>
        #desc {
            flex: auto;
        }
    </style>
@endsection
{{--@section('navs')
    <div class="content-subheader">
        <div class="content-subheader__titles">
            <h2 class="content-subheader__title">Roles</h2>
            <nav class="content-subheader__breadcrumb-menu">
                <ul>
                    <li><a href="{{url('/home')}}">Dashboard</a></li>
                </ul>
            </nav>
        </div>

        <div class="content-subheader__options">

            <div class="content-subheader__dropdown">
                <a class="button button--general button--green-border" href="{{url('/roles/add')}}">+ Add new Role</a>
            </div>

        </div>
    </div>
@endsection--}}
@section('content')
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
                    <a href="{{url('/users/edit/'.$user->id)}}"
                       class="mb-2 mr-2 btn btn-oval btn-raised btn-success ripple">Edit </a>
                    <!-- Button trigger modal -->
                    <button class="mb-2 mr-2 btn btn-oval btn-raised btn-danger ripple" data-toggle="modal"
                            data-target="#mymodal{{$user->id}}">
                        delete
                    </button>
                    <div class="modal fade" id="mymodal{{$user->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <button type="button" class="btn  btn-oval  btn-raised btn-secondary ripple" data-dismiss="modal">Close</button>
                                    <a  href="{{url('/users/delete/'.$user->id)}}" class="btn btn-oval btn-raised btn-danger " style="color: white;">Delete
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
@endsection

@section('js')
    <script
            src="https://code.jquery.com/jquery-3.4.1.js"
            integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
            crossorigin="anonymous"></script>
@endsection
