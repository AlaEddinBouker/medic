@extends('layouts.dashboard')
@section('title')
   Edit Role
@endsection
{{--@section('navs')
    <div class="content-subheader">
        <div class="content-subheader__titles">
            <h2 class="content-subheader__title">Edit {{$role->name}} role</h2>
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
    <form name="f" method="POST" action="{{url('/roles/update')}}">
        @csrf
        <input type="text"  name="id" value="{{$role->id}}" hidden>
        <div class="row">
            <div class="col-sm-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input name="name" class="form-control" required tabindex="0"
                                                         aria-required="true" aria-invalid="true" value="{{$role->name}}">
                        <div class="mda-form-control-line"></div>
                        <label style="top: 0px !important;">Name <span style="color: red">*</span></label style="top: 0px !important;"></div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control">
                        <input class="form-control" name="displayName" required tabindex="0" aria-required="true" aria-invalid="true" value="{{$role->display_name}}">
                        <div class="mda-form-control-line"></div>
                        <label style="top: 0px !important;">Display Name <span style="color: red">*</span></label style="top: 0px !important;"></div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="mda-form-group">
                    <div class="mda-form-control">
                        <textarea class="form-control" name="description" rows="4" aria-multiline="true">{{$role->description}}</textarea>
                        <div class="mda-form-control-line"></div>
                        <label style="top: 0px !important;">Description <span style="color: red">*</span></label style="top: 0px !important;"></div>
                </div>
            </div>

        </div>
        <input type="submit" class="btn btn-oval btn-raised btn-primary" value="Submit">
    </form>

@endsection
