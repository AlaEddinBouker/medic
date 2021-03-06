@extends('layouts.dashboard')
@section('title')
Fiche patient
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
<h4>Fiche de {{$name}}</h4>
<hr>
<form method="POST" action="{{url('/file/store')}}">
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
    @csrf
    <input type="text" value="{{$id}}" name="id" hidden>
    <div class="cardbox">
        <div class="cardbox-heading">Statement</div>
        <div class="cardbox-body">
            <div class="row">
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="alimentation" class="form-control" required="" tabindex="0"
                                aria-required="true" aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Nutrition</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="petitdej" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Breakfast</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="dejene" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Lunch</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="dinner" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Dinner</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="poid" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Weight</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="temperature" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Temperature</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="tension" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Blood pressure</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="pouls" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Heart rate</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="glycerine" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Blood sugar level</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="rel-wrapper ui-datepicker ui-datepicker-popup dp-theme-primary"
                        id="example-datepicker-container-4">
                        <div class="mda-form-control"><input name="viste" class="form-control" id="example-datepicker-4"
                                type="text" data-date="2016-12-13" placeholder="Date de visite">
                            <div class="mda-form-control-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cardbox">
        <div class="cardbox-heading">Hygiene</div>
        <div class="cardbox-body">
            <div class="row">
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-sm-8"><label class="switch">
                                <input name="cream" type="checkbox" checked="checked">
                                <span></span></label>Cream Application
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-sm-8"><label class="switch">
                                <input name="coupeOngles" type="checkbox" checked="checked">
                                <span></span></label>Nails trimming
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-sm-8"><label class="switch">
                                <input name="douche" type="checkbox" checked="checked">
                                <span></span></label>Shower
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-sm-8"><label class="switch">
                                <input name="doucheShamp" type="checkbox" checked="checked">
                                <span></span></label>Shower and shampoo
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-sm-8"><label class="switch">
                                <input name="entretientChambre" type="checkbox" checked="checked">
                                <span></span></label>Room maintenance
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-sm-8"><label class="switch">
                                <input name="bainBouche" type="checkbox" checked="checked">
                                <span></span></label>Mouthwash
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-sm-8"><label class="switch">
                                <input name="coiffure" type="checkbox" checked="checked">
                                <span></span></label>Hairdressing Saloon
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-sm-8"><label class="switch">
                                <input name="rassage" type="checkbox" checked="checked">
                                <span></span></label>Shaving
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-sm-8"><label class="switch">
                                <input name="soinPied" type="checkbox" checked="checked">
                                <span></span></label>Foot care
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </div>
    <div class="cardbox">
        <div class="cardbox-heading">
            Comfort
        </div>
        <div class="cardbox-body">
            <div class="row">
                <div class="col-md-6">
                    <div class="mda-form-group mda-input-group clockpicker" data-autoclose="true">
                        <div class="mda-form-control"><input name="heurR" class="form-control" type="text"
                                placeholder="Wake-up time">
                            <div class="mda-form-control-line"></div>
                        </div>
                        <span class="mda-input-group-addon"><span class="ion-clock"></span></span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mda-form-group mda-input-group clockpicker" data-autoclose="true">
                        <div class="mda-form-control"><input name="heurC" class="form-control" type="text"
                                placeholder="Bedtime">
                            <div class="mda-form-control-line"></div>
                        </div>
                        <span class="mda-input-group-addon"><span class="ion-clock"></span></span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="sieste" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Nap</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="deplacement" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Movement</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="promenade" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Walk</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cardbox">
        <div class="cardbox-heading">
            Organisation et security
        </div>
        <div class="cardbox-body">
            <div class="row">
                <div class="col-md-12">
                    <div class="mda-form-group float-label">
                        <div class="mda-form-control">
                            <input name="contention" class="form-control" required="" tabindex="0" aria-required="true"
                                aria-invalid="true">
                            <div class="mda-form-control-line"></div>
                            <label>Contention</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row mb">
                        <div class="col-md-12"><label class="switch">
                                <input name="security" type="checkbox" checked="checked">
                                <span></span></label>Security
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="cardbox">
        <div class="card-header">
            Loisir
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-md-12"><label class="switch">
                                <input name="piscine" type="checkbox" checked="checked">
                                <span></span></label>Pool
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-md-12"><label class="switch">
                                <input name="golf" type="checkbox" checked="checked">
                                <span></span></label>Golf
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-md-12"><label class="switch">
                                <input name="tennis" type="checkbox" checked="checked">
                                <span></span></label>Tennis
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-md-12"><label class="switch">
                                <input name="jeux" type="checkbox" checked="checked">
                                <span></span></label>Games
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-md-12"><label class="switch">
                                <input name="lecture" type="checkbox" checked="checked">
                                <span></span></label>Reading
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-md-12"><label class="switch">
                                <input name="cinema" type="checkbox" checked="checked">
                                <span></span></label>Cinema
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-md-12"><label class="switch">
                                <input name="danse" type="checkbox" checked="checked">
                                <span></span></label>Dancing
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-md-12"><label class="switch">
                                <input name="Television" type="checkbox" checked="checked">
                                <span></span></label>Television
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row mb">
                        <div class="col-md-12"><label class="switch">
                                <input name="tir" type="checkbox" checked="checked">
                                <span></span></label>Shooting
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="mda-form-group">
                        <div class="mda-form-control">
                            <textarea class="form-control" name="autre" rows="4" aria-multiline="true"></textarea>
                            <div class="mda-form-control-line"></div>
                            <label>Others <span style="color: red"></span></label></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <input type="submit" class="btn btn-oval btn-raised btn-primary" value="Submit">
</form>
@endsection