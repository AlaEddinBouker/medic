@extends('layouts.dashboard')
@section('title')
    Add New patient
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
    <div class="card card-default mb">
        <div class="card-header">Adding a new patient</div>
        <div class="card-body">
            <form id="example-vertical" method="post" action="{{url('/patient/store')}}">
                @csrf
                <h4>Basic information</h4>
                <section>
                    {{--                    BASIC INFORMATION--}}
                    <h5>Basic information</h5>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="nom" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>First Name</label></div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="prenom" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Last Name</label></div>
                            </div>
                        </div>
                        <div class="col-md-4">

                            <div class="mda-form-control"><input class="form-control" id="example-datepicker-4"
                                                                 type="date" name="birth" data-date="12/13/2016"
                                                                 placeholder="Select a date..">
                                <div class="mda-form-control-line"></div>
                                <label>Date of birth</label></div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="Address" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Address</label></div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="Proffession" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Occupation</label></div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="passport" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>N° Passport</label></div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mda-form-control">
                                <select class="form-control" name="sex" id="select2-4">
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mda-form-control">
                                <select class="form-control" name="status" id="select2-stauts">
                                    <option value="Célibataire">Single</option>
                                    <option value="Marié">Married</option>
                                    <option value="Autre">Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input type="number" name="enfant" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Number of children (if maried)</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-control">
                                <select class="form-control" name="contract" id="select2-contract">
                                    @foreach($contracts as $contract)
                                        <option value="{{$contract->name}}">{{$contract->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input type="number" name="chambre" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Room number</label></div>
                            </div>
                        </div>
                    </div>

                </section>
                <h4>Health info</h4>
                <section>
                    <h5>Health info</h5>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="gs" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Blood Type</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="poid" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Weight</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="tm" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Illness types</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="op" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Previous Surgeries</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="dpm" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Duration of medication use</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="phobies" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Phobias</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="alergies" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Allergies</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-control6">

                                <label class="switch switch-primary">
                                    <input type="checkbox" name="alcool"  value="on" checked><span></span></label>Alcohol

                            </div>

                        </div>
                        <div class="col-sm-12">
                            <div class="mda-form-group">
                                <div class="mda-form-control">
                                    <textarea name="tmed" class="form-control" rows="4"
                                              aria-multiline="true" tabindex="0"
                                              aria-invalid="false"></textarea>
                                    <div class="mda-form-control-line"></div>
                                    <label>Medications Types</label>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
                <h4>Other information</h4>
                <section>
                    <h5>Other information</h5>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="mda-form-control">
                                <select class="form-control" name="religon" id="select2-religion">
                                    <option value="S">Christian</option>
                                    <option value="M">Jewish</option>
                                    <option value="O">Muslim</option>
                                    <option value="O">Other</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-5 col-sm-8">
                            <div class="mda-form-control">
                                <select class="form-control" name="language" id="select2-langue">
                                    <option value="S">English</option>
                                    <option value="M">German</option>
                                    <option value="O">French</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top:25px ">

                        <div class="col-sm-12">
                            <div class="mda-form-group">
                                <div class="mda-form-control">
                                    <textarea name="passions" class="form-control" rows="4"
                                              aria-multiline="true" tabindex="0"
                                              aria-invalid="false"></textarea>
                                    <div class="mda-form-control-line"></div>
                                    <label>Hobbies</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="mda-form-group">
                                <div class="mda-form-control">
                                    <textarea name="pde" class="form-control" rows="4"
                                              aria-multiline="true" tabindex="0"
                                              aria-invalid="false"></textarea>
                                    <div class="mda-form-control-line"></div>
                                    <label>Preference of the burial site</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="mda-form-group">
                                <div class="mda-form-control">
                                    <textarea name="ptc" class="form-control" rows="4"
                                              aria-multiline="true" tabindex="0"
                                              aria-invalid="false"></textarea>
                                    <div class="mda-form-control-line"></div>
                                    <label>Preferences of cure type</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="mda-form-group">
                                <div class="mda-form-control">
                                    <textarea name="remarques" class="form-control" rows="4"
                                              aria-multiline="true" tabindex="0"
                                              aria-invalid="false"></textarea>
                                    <div class="mda-form-control-line"></div>
                                    <label>Particular notes</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <h4>Family member information</h4>
                <section>
                    <h4>Family member information</h4>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control"><input name="name" class="form-control" required=""
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
                        <div class="col-sm-12">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control"><input type="email" name="email" class="form-control" required=""
                                                                     tabindex="0"
                                                                     aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Email</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control"><input type="password" name="password" class="form-control" required=""
                                                                     tabindex="0"
                                                                     aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Password</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control"><input type="password" name="cpassword" class="form-control" required=""
                                                                     tabindex="0"
                                                                     aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Confirm password</label></div>
                            </div>
                        </div>

                    </div>
                </section>
            </form>
        </div>
    </div>

@endsection
