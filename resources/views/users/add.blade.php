@extends('layouts.dashboard')
@section('title')
    Add user
@endsection
@section('content')
    <form method="post" action="{{url('/users/store')}}">
        <h4>Add new user</h4>
        <div class="row">
            <div class="col-sm-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input  type="text" name="name" class="form-control" required=""
                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true">
                        <div class="mda-form-control-line"></div>
                        <label>First Name</label></div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input name="LastName" class="form-control" required=""
                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true">
                        <div class="mda-form-control-line"></div>
                        <label>Last Name</label></div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input type="email" name="email" class="form-control" required=""
                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true">
                        <div class="mda-form-control-line"></div>
                        <label>Email</label></div>
                </div>
            </div>
            <div class="col-md-6">

                <div class="mda-form-control">
                    <select class="form-control" name="role" id="select2-role">
                        @foreach($roles as $role)
                            <option value="{{$role->id}}">{{$role->name}}</option>
                        @endforeach
                    </select>
                </div>

            </div>
            <div class="col-md-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input type="password" name="password" class="form-control"
                                                         required=""
                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true">
                        <div class="mda-form-control-line"></div>
                        <label>Password</label></div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input type="password" name="cpassword" class="form-control"
                                                         required=""
                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true">
                        <div class="mda-form-control-line"></div>
                        <label>Confirm password</label></div>
                </div>
            </div>
        </div>
        <input type="submit" class="btn btn-oval btn-raised btn-primary" value="Submit">
    </form>
@endsection