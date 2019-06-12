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
                                    <label>Nom</label></div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="prenom" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Prénom</label></div>
                            </div>
                        </div>
                        <div class="col-md-4">

                            <div class="mda-form-control"><input class="form-control" id="example-datepicker-4"
                                                                 type="date" name="birth" data-date="12/13/2016"
                                                                 placeholder="Select a date..">
                                <div class="mda-form-control-line"></div>
                                <label>Date naissance</label></div>
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
                                    <label>Profession</label></div>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="passport" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>passport</label></div>
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
                                    <option value="S">Célibataire</option>
                                    <option value="M">Marié</option>
                                    <option value="O">Autre</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input type="number" name="enfant" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Nombre d'enfant</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-control">
                                <select class="form-control" name="contract" id="select2-contract">
                                    <option value="S">Type 1</option>
                                    <option value="M">Type 2</option>
                                    <option value="O">Type 3</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input type="number" name="chambre" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Nombre chambre</label></div>
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
                                    <label>Groupe sanguin</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="poid" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Poid</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="tm" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Type maladies</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="op" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Opréations précédents</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="dpm" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Durée de prise de médicaments</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="phobies" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Phobies</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-group float-label">
                                <div class="mda-form-control">
                                    <input name="alergies" class="form-control" required="" tabindex="0"
                                           aria-required="true" aria-invalid="true">
                                    <div class="mda-form-control-line"></div>
                                    <label>Allegies</label></div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="mda-form-control6">

                                <label class="switch switch-primary">
                                    <input type="checkbox" name="alcool"  value="on" checked><span></span></label>Alcool

                            </div>

                        </div>
                        <div class="col-sm-12">
                            <div class="mda-form-group">
                                <div class="mda-form-control">
                                    <textarea name="tmed" class="form-control" rows="4"
                                              aria-multiline="true" tabindex="0"
                                              aria-invalid="false"></textarea>
                                    <div class="mda-form-control-line"></div>
                                    <label>Type médicaments</label>
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
                                    <option value="S">Religion 1</option>
                                    <option value="M">Religion 2</option>
                                    <option value="O">Religion 3</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-5 col-sm-8">
                            <div class="mda-form-control">
                                <select class="form-control" name="language" id="select2-langue">
                                    <option value="S">language 1</option>
                                    <option value="M">language 2</option>
                                    <option value="O">language 3</option>
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
                                    <label>Passions</label>
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
                                    <label>Préference de l'emplacements</label>
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
                                    <label>Préférence de type de cure</label>
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
                                    <label>Remarques particulier</label>
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
