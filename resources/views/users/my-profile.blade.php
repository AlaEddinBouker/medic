@extends('layouts.dashboard')
@section('title')
    Profile
@endsection

@section('content')
<form method="post" action="{{ route('users.update') }}">
    @method('patch')
    @if (session()->has('success_message'))
        <div class="alert alert-success">
            {{ session()->get('success_message') }}
        </div>
    @endif
    @if(count($errors) > 0)
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    {{ csrf_field() }}
    <h4>Edit Profile</h4>
    <div class="row">
        <div class="col-sm-6">
            <div class="mda-form-group float-label">
                <div class="mda-form-control"><input type="text" name="name" class="form-control" required=""
                                                     tabindex="0"
                                                     aria-required="true" aria-invalid="true" value="{{ old('name', $user->name) }}">
                    <div class="mda-form-control-line"></div>
                    <label style="top: 0px !important;">First Name</label style="top: 0px !important;"></div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="mda-form-group float-label">
                <div class="mda-form-control"><input name="LastName" class="form-control" required=""
                                                     tabindex="0"
                                                     aria-required="true" aria-invalid="true" value="{{ old('LastName', $user->lastName) }}">
                    <div class="mda-form-control-line"></div>
                    <label style="top: 0px !important;">Last Name</label style="top: 0px !important;"></div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="mda-form-group float-label">
                <div class="mda-form-control"><input type="email" name="email" class="form-control" required=""
                                                     tabindex="0"
                                                     aria-required="true" aria-invalid="true" value="{{ old('email', $user->email) }}">
                    <div class="mda-form-control-line"></div>
                    <label style="top: 0px !important;">Email</label style="top: 0px !important;"></div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="mda-form-group float-label">
                <div class="mda-form-control"><input type="password" name="password" class="form-control"

                                                     tabindex="0"
                                                     aria-required="true" aria-invalid="true" >
                    <div class="mda-form-control-line"></div>
                    <label style="top: 0px !important;">Password</label style="top: 0px !important;"></div>
                    <div>Leave password blank to keep current password</div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="mda-form-group float-label">
                <div class="mda-form-control"><input type="password" name="password_confirmation"
                                                     class="form-control"

                                                     tabindex="0"
                                                     aria-required="true" aria-invalid="true">
                    <div class="mda-form-control-line"></div>
                    <label style="top: 0px !important;">Confirm password</label style="top: 0px !important;"></div>
            </div>
        </div>
            <div class="col-md-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input type="text" name="tel1" class="form-control"

                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true" value="{{ old('tel1', $user->tel1) }}">
                        <div class="mda-form-control-line"></div>
                        <label style="top: 0px !important;">Phone number 1</label style="top: 0px !important;"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input type="text" name="tel2" class="form-control"

                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true" value="{{ old('tel2', $user->tel2) }}">
                        <div class="mda-form-control-line"></div>
                        <label style="top: 0px !important;">Phone number 2</label style="top: 0px !important;"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input type="text" name="cin" class="form-control"

                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true" value="{{ old('cin', $user->cin) }}">
                        <div class="mda-form-control-line"></div>
                        <label style="top: 0px !important;">CIN</label style="top: 0px !important;"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input type="text" name="passport" class="form-control"
                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true" value="{{ old('passport', $user->passport) }}">
                        <div class="mda-form-control-line"></div>
                        <label style="top: 0px !important;">Passport</label style="top: 0px !important;"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input type="text" name="address" class="form-control"
                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true" value="{{ old('address', $user->address) }}">
                        <div class="mda-form-control-line"></div>
                        <label style="top: 0px !important;">Address</label style="top: 0px !important;"></div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mda-form-control">
                    <select class="form-control" name="shift" id="select2-shift">
                        <option value="{{ old('shift', $user->shift) }}" selected>{{ old('shift', $user->shift) }}</option>
                        <option value="Nuit">Nuit</option>
                        <option value="Jour">Jour</option>

                    </select>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mda-form-control">
                    <select class="form-control" name="status" id="select2-stauts">
                            <option value="{{ old('status', $user->staus) }}" selected>{{ old('status', $user->staus) }}</option>
                        <option value="S">Célibataire</option>
                        <option value="M">Marié</option>
                        <option value="O">Autre</option>
                    </select>
                </div>
            </div>


    </div>
    <br><br>
    <input type="submit" class="btn btn-oval btn-raised btn-primary" value="Submit">
</form>

@endsection

@section('js')
    <script
            src="https://code.jquery.com/jquery-3.4.1.js"
            integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
            crossorigin="anonymous"></script>
@endsection
