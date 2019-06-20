@extends('layouts.dashboard')
@section('title')
    File history
@endsection
@section('content')
    <div class="table-responsive">
        <table class="table-datatable table table-striped table-hover mv-lg" id="datatable1">
            <thead>
            <tr>
                <th>Numéro fiche</th>
                <th>Personelle</th>
                <th>D/M/Y</th>
                <th class="sort-numeric"></th>

            </tr>
            </thead>
            <tbody>
            @foreach($files as $file)
                <tr>
                    <td>{{$file->id}}</td>
                    <td>{{Auth::user()->userinfo($file->user_id)}}</td>
                    <td>{{$file->updated_at->format('d/m/Y')}}</td>
                    <td>
                        <a href="#"
                           class="mb-2 mr-2 btn btn-oval btn-raised btn-primary ripple" data-toggle="modal" data-target="#mymodal{{$file->id}}">View </a>
                        <div class="modal fade" id="mymodal{{$file->id}}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Fiche numéro {{$file->id}}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="cardbox">
                                            <div class="cardbox-heading">Relevé</div>
                                            <div class="cardbox-body">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="alimentation" class="form-control" tabindex="0" value="{!! $file->alimentation !!}" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Alimentation</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="petitdej" class="form-control" value="{!! $file->petitdej !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Petite déjeuner</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="dejene" class="form-control" value="{!! $file->dejene !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Déjeuner</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="dinner" class="form-control" value="{!! $file->dinner !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Dinner</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="poid" class="form-control" value="{!! $file->poid !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Poid</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="temperature" class="form-control" value="{!! $file->temperature !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Temperature</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="tension" class="form-control" value="{!! $file->tension !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Tension</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="pouls" class="form-control" value="{!! $file->pouls !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Pouls</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="glycerine" class="form-control" value="{!! $file->glycerine !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Glycerine</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="viste" class="form-control" value="{!! $file->viste !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Date de visite</label>
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
                                                                    @if ($file->cream == 1)

                                                                        <input name="cream" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="cream" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif

                                                                Créme
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-sm-8"><label class="switch">
                                                                    @if ($file->coupeOngles == 1)

                                                                        <input name="coupeOngles" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="coupeOngles" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Coupe ongles
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-sm-8"><label class="switch">
                                                                    @if ($file->douche == 1)

                                                                        <input name="douche" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="douche" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Douche
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-sm-8"><label class="switch">
                                                                    @if ($file->doucheShamp == 1)

                                                                        <input name="doucheShamp" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="doucheShamp" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                douche et champoing
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-sm-8"><label class="switch">
                                                                    @if ($file->entretientChambre == 1)

                                                                        <input name="entretientChambre" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="entretientChambre" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Entretient de chambre
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-sm-8"><label class="switch">
                                                                    @if ($file->bainBouche == 1)

                                                                        <input name="bainBouche" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="bainBouche" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Bain de bouche
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-sm-8"><label class="switch">
                                                                    @if ($file->coiffure == 1)

                                                                        <input name="coiffure" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="coiffure" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Salon coiffure
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-sm-8"><label class="switch">
                                                                    @if ($file->rassage == 1)

                                                                        <input name="rassage" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="rassage" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Rassage
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-sm-8"><label class="switch">
                                                                    @if ($file->soinPied == 1)

                                                                        <input name="soinPied" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="soinPied" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Soin des pieds
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
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="heurR" class="form-control" value="{!! $file->heurR !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Heur reveille</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="heurC" class="form-control" value="{!! $file->heurC !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Heur couche</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="sieste" class="form-control" value="{!! $file->sieste !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Sieste</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="deplacement" class="form-control" value="{!! $file->deplacement !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Deplacement</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="promenade" class="form-control" value="{!! $file->promenade !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Promenade</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="cardbox">
                                            <div class="cardbox-heading">
                                                Oraganisation et sécurité
                                            </div>
                                            <div class="cardbox-body">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="mda-form-group float-label">
                                                            <div class="mda-form-control">
                                                                <input name="contention" class="form-control" value="{!! $file->contention !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                <div class="mda-form-control-line"></div>
                                                                <label style="top: 0px !important;">Contention</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="row mb">
                                                            <div class="col-md-12"><label class="switch">
                                                                    @if ($file->security == 1)

                                                                        <input name="security" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="security" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Sécurité
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
                                                                    @if ($file->piscine == 1)

                                                                        <input name="piscine" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="piscine" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Piscine
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-md-12"><label class="switch">
                                                                    @if ($file->golf == 1)

                                                                        <input name="golf" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="golf" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Golf
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-md-12"><label class="switch">
                                                                    @if ($file->tennis == 1)

                                                                        <input name="tennis" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="tennis" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Tennis
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-md-12"><label class="switch">
                                                                    @if ($file->jeux == 1)

                                                                        <input name="jeux" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="jeux" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Jeux
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-md-12"><label class="switch">
                                                                    @if ($file->lecture == 1)

                                                                        <input name="lecture" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="lecture" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Lecture
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-md-12"><label class="switch">
                                                                    @if ($file->cinema == 1)

                                                                        <input name="cinema" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="cinema" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Cinema
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-md-12"><label class="switch">
                                                                    @if ($file->danse == 1)

                                                                        <input name="danse" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="danse" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Dance
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-md-12"><label class="switch">
                                                                    @if ($file->Television == 1)

                                                                        <input name="Television" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="Television" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Television
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="row mb">
                                                            <div class="col-md-12"><label class="switch">
                                                                    @if ($file->tir == 1)

                                                                        <input name="tir" type="checkbox" checked="checked" disabled>
                                                                        <span style="background-color: #ec407a !important;"></span></label>

                                                                @else
                                                                    <input name="tir" type="checkbox" disabled>
                                                                    <span></span></label>
                                                                @endif
                                                                Tir
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-12">
                                                        <div class="mda-form-group">
                                                            <div class="mda-form-control">
                                                                <textarea class="form-control" name="autre" rows="4" aria-multiline="true" style="opacity : 1 !important;" disabled>{!! $file->contention !!}</textarea>
                                                                <div class="mda-form-control-line"></div>
                                                                <label>Autre <span style="color: red"></span></label></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>








                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn  btn-oval  btn-raised btn-secondary ripple" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
@endsection
