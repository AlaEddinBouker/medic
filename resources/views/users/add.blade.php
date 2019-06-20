@extends('layouts.dashboard')
@section('title')
    Add user
@endsection
@section('content')
    <form method="post" action="{{url('/users/store')}}">
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
        <h4>Add new user</h4>
        <div class="row">
            <div class="col-sm-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input type="text" name="name" class="form-control" required=""
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
                    <select class="form-control role" name="role" id="role">
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
                    <div class="mda-form-control"><input type="password" name="password_confirmation"
                                                         class="form-control"
                                                         required=""
                                                         tabindex="0"
                                                         aria-required="true" aria-invalid="true">
                        <div class="mda-form-control-line"></div>
                        <label>Confirm password</label></div>
                </div>
            </div>
            <div class="row col-md-12" id="info" style="display: none;">
                <div class="col-md-6">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control"><input type="text" name="tel1" class="form-control"
                                                             required=""
                                                             tabindex="0"
                                                             aria-required="true" aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Phone number 1</label></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control"><input type="text" name="tel2" class="form-control"
                                                             required=""
                                                             tabindex="0"
                                                             aria-required="true" aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Phone number 2</label></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control"><input type="text" name="cin" class="form-control"
                                                             required=""
                                                             tabindex="0"
                                                             aria-required="true" aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>CIN</label></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control"><input type="text" name="passport" class="form-control"
                                                             required=""
                                                             tabindex="0"
                                                             aria-required="true" aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Passport</label></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control"><input type="text" name="address" class="form-control"
                                                             required=""
                                                             tabindex="0"
                                                             aria-required="true" aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Address</label></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mda-form-control">
                        <select class="form-control" name="shift" id="select2-shift">

                            <option value="Nuit">Nuit</option>
                            <option value="Jour">Jour</option>

                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mda-form-control">
                        <select class="form-control" name="status" id="select2-stauts">
                            <option value="S">Célibataire</option>
                            <option value="M">Marié</option>
                            <option value="O">Autre</option>
                        </select>
                    </div>
                </div>
            </div>


        </div>

        <input type="submit" class="btn btn-oval btn-raised btn-primary" value="Submit">
    </form>
@endsection
@section('js')
<script>
    $(document).ready(function() {
        $('#role').on('change', function() {
           if(this.value==5)
           {
               $('#info').show(500);
           }else {
               $('#info').hide(500);
           }
        });
    });



</script>
@endsection
