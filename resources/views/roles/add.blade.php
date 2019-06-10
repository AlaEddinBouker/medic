@extends('layouts.dashboard')
@section('title')
    Add New Role
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
    @if ($message = Session::get('success'))
        <div class="alert alert-success alert-block mb">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>{{ $message }}</strong>
        </div>
    @endif

    <form name="f" method="POST" action="{{url('/roles/store')}}">
        @csrf
        <div class="row">
            <div class="col-sm-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input name="name" class="form-control" required tabindex="0"
                                                         aria-required="true" aria-invalid="true">
                        <div class="mda-form-control-line"></div>
                        <label>Name <span style="color: red">*</span></label></div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control">
                        <input class="form-control" name="displayName" required tabindex="0" aria-required="true" aria-invalid="true">
                        <div class="mda-form-control-line"></div>
                        <label>Display Name <span style="color: red">*</span></label></div>
                </div>
            </div>
            <div class="col-sm-12">
                <div class="mda-form-group">
                    <div class="mda-form-control">
                        <textarea class="form-control" name="description" rows="4" aria-multiline="true"></textarea>
                        <div class="mda-form-control-line"></div>
                        <label>Description <span style="color: red">*</span></label></div>
                </div>
            </div>

        </div>

        <input type="submit" class="btn btn-oval btn-raised btn-primary" value="Submit">
    </form>
@endsection
