@extends('layouts.dashboard')
@section('title')
    Contracts
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
            <th>Name</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        @foreach($contracts as $contract)
            <tr>

                <td>{{$contract->id}}</td>
                <td>{{$contract->name}}</td>
                <td>
                    <a href="{{url('/contracts/edit/'.$contract->id)}}"
                       class="mb-2 mr-2 btn btn-oval btn-raised btn-success ripple">Edit </a>
                    <!-- Button trigger modal -->
                    <button  class="mb-2 mr-2 btn btn-oval btn-raised btn-danger ripple" data-toggle="modal" data-target="#mymodal{{$contract->id}}">
                      delete
                    </button>
                    <div class="modal fade" id="mymodal{{$contract->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Delete {{$contract->name}}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                   Are you sure that you want to delete " {{$contract->name}} " Contract
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn  btn-oval  btn-raised btn-secondary ripple" data-dismiss="modal">Close</button>
                                    <a  href="{{url('/contracts/delete/'.$contract->id)}}" class="btn btn-oval btn-raised btn-danger " style="color: white;">Delete
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
