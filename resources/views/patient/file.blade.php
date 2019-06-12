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
    <form method="post" action="#">
        @csrf
        <div class="cardbox">
            <div class="cardbox-heading">Relevé</div>
            <div class="cardbox-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="alimentation" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Alimentation</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="petitdej" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Petite déjeuner</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="dejene" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Déjeuner</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="dinner" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Dinner</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="poid" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Poid</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="temperature" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Temperature</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="tension" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Tension</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="pouls" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Pouls</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="glycerine" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Glycerine</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="rel-wrapper ui-datepicker ui-datepicker-popup dp-theme-primary"
                             id="example-datepicker-container-4">
                            <div class="mda-form-control"><input name="viste" class="form-control"
                                                                 id="example-datepicker-4"
                                                                 type="text" data-date="12/13/2016"
                                                                 placeholder="Date de visite">
                                <div class="mda-form-control-line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cardbox">
            <div class="cardbox-heading">Hygiéne</div>
            <div class="cardbox-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="row mb">
                            <div class="col-sm-8"><label class="switch">
                                    <input name="cream" type="checkbox" checked="checked">
                                    <span></span></label>Créme
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row mb">
                            <div class="col-sm-8"><label class="switch">
                                    <input name="coupeOngles" type="checkbox" checked="checked">
                                    <span></span></label>Coupe ongles
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row mb">
                            <div class="col-sm-8"><label class="switch">
                                    <input name="douche" type="checkbox" checked="checked">
                                    <span></span></label>Douche
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row mb">
                            <div class="col-sm-8"><label class="switch">
                                    <input name="doucheShamp" type="checkbox" checked="checked">
                                    <span></span></label>douche et champoing
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row mb">
                            <div class="col-sm-8"><label class="switch">
                                    <input name="entretientChambre" type="checkbox" checked="checked">
                                    <span></span></label>Entretient de chambre
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row mb">
                            <div class="col-sm-8"><label class="switch">
                                    <input name="bainBouche" type="checkbox" checked="checked">
                                    <span></span></label>Bain de bouche
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row mb">
                            <div class="col-sm-8"><label class="switch">
                                    <input name="coiffure" type="checkbox" checked="checked">
                                    <span></span></label>Salon coiffure
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row mb">
                            <div class="col-sm-8"><label class="switch">
                                    <input name="rassage" type="checkbox" checked="checked">
                                    <span></span></label>Rassage
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="row mb">
                            <div class="col-sm-8"><label class="switch">
                                    <input name="soinPied" type="checkbox" checked="checked">
                                    <span></span></label>Soin des pieds
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
                                                                 placeholder="Heur reveille">
                                <div class="mda-form-control-line"></div>
                            </div>
                            <span class="mda-input-group-addon"><span class="ion-clock"></span></span></div>
                    </div>
                    <div class="col-md-6">
                        <div class="mda-form-group mda-input-group clockpicker" data-autoclose="true">
                            <div class="mda-form-control"><input name="heurC" class="form-control" type="text"
                                                                 placeholder="Heur couche">
                                <div class="mda-form-control-line"></div>
                            </div>
                            <span class="mda-input-group-addon"><span class="ion-clock"></span></span></div>
                    </div>
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="sieste" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Sieste</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="deplacement" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Deplacement</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="mda-form-group float-label">
                            <div class="mda-form-control">
                                <input name="promenade" class="form-control" required="" tabindex="0"
                                       aria-required="true" aria-invalid="true">
                                <div class="mda-form-control-line"></div>
                                <label>Promenade</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
@endsection
