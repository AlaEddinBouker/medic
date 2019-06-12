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
               
            </div>

        </div>
    </div>
@endsection--}}
@section('content')
    <table class="table">
        <thead>
        <tr>
            <th>#ID</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Message</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        @foreach($appointments as $appointment)
            <tr>

                <td>{{$appointment->id}}</td>
                <td>{{$appointment->fname}}</td>
                <td>{{$appointment->lname}}</td>
                <td>{{$appointment->email}}</td>
                <td>{{$appointment->phone}}</td>
                <td>{{$appointment->date}}</td>
                <td>{{$appointment->time}}</td>
                <td>{{$appointment->message}}</td>
                <td>{{$appointment->payment}}</td>
                <td>{{$appointment->status}}</td>
                <td>
                    <!-- Button trigger modal -->
                    <button class="mb-2 mr-2 btn btn-oval btn-raised btn-danger ripple" data-toggle="modal"
                            data-target="#mymodal}">
                        delete
                    </button>
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