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

@section('content')
    <table class="table">
        <thead>
        <tr>
            <th>#ID</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Message</th>
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
                <td>{{$appointment->message}}</td>
                <td>
                    <!-- Button trigger modal -->
                    <button class="mb-2 mr-2 btn btn-oval btn-raised btn-danger ripple" data-toggle="modal"
                            data-target="#mymodal{{$appointment->id}}">
                        delete
                    </button>
                    <div class="modal fade" id="mymodal{{$appointment->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Delete Message</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    Are you sure that you want to delete This Message? ?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn  btn-oval  btn-raised btn-secondary ripple" data-dismiss="modal">Close</button>
                                    <a  href="{{url('/contact/delete/'.$appointment->id)}}" class="btn btn-oval btn-raised btn-danger " style="color: white;">Delete
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
