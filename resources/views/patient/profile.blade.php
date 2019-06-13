<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <title>Profile Patient</title>
    <link href="/css/file0.css" rel="stylesheet">
    <link href="/css/file1.css" rel="stylesheet">
    <link href="/css/file2.css" rel="stylesheet">
    <link href="/css/file3.css" rel="stylesheet">
    <link href="/css/file4.css" rel="stylesheet">
    <link href="/css/file5.css" rel="stylesheet">
    <link href="/css/file6.css" rel="stylesheet">
    <link href="/css/file7.css" rel="stylesheet">
    <link href="/css/file8.css" rel="stylesheet">
    <link href="/css/file9.css" rel="stylesheet">
    <link href="/css/file10.css" rel="stylesheet">
    <link href="/css/file11.css" rel="stylesheet">
    <link href="/css/file12.css" rel="stylesheet">
    <link href="/css/file13.css" rel="stylesheet">
    <link href="/css/file14.css" rel="stylesheet">
    <link href="/css/file15.css" rel="stylesheet">
    <link href="/css/file16.css" rel="stylesheet">
    <link href="/css/file17.css" rel="stylesheet">
    <link href="/css/file18.css" rel="stylesheet">
    <link href="/css/file19.css" rel="stylesheet">
    <link href="/css/file20.css" rel="stylesheet">
    <link href="/css/file21.css" rel="stylesheet">
    <link href="/css/file22.css" rel="stylesheet">
    <link href="/css/file23.css" rel="stylesheet">
    <script type="text/javascript" src="/js/wizard.js"></script>
    @yield('css')
    <script src="./js/ga.js"></script>
</head>

<body class="theme-1">
<div class="layout-container">
    <header class="header-container">
        <nav>
            <ul class="d-lg-none">
                <li>
                    <a class="menu-link menu-link-slide" id="sidebar-toggler" href="#"><span><em></em></span></a>
                </li>
            </ul>
            <ul class="d-none d-sm-block">
                <li>
                    <a class="menu-link menu-link-slide" id="offcanvas-toggler" href="#"><span><em></em></span></a>
                </li>
            </ul>
            <h2 class="header-title"><a href="#" data-toggle-fullscreen="">
                    <em class="ion-arrow-expand"></em>
                </a></h2>
            <ul class="float-right">
                <li class="dropdown">
                    <a class="dropdown-toggle has-badge ripple" href="#" data-toggle="dropdown"><em
                                class="ion-person"></em>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="profile.html"><em class="ion-home icon-fw"></em>Profile</a>
                        <div class="dropdown-divider" role="presentation"></div>

                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();"><em
                                    class="ion-log-out icon-fw"></em>Logout</a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                </li>
                <li>

                </li>
            </ul>
        </nav>
    </header>
    <aside class="sidebar-container">
        <div class="sidebar-header">
            <div class="float-right pt-lg text-muted invisible"><em class="ion-close-round"></em></div>
            <a class="sidebar-header-logo" href="#">
                <img src="/src/images/logo.png" data-svg-replace="src/images/logo.svg" alt="Logo"><span
                        class="sidebar-header-logo-text">Bensina</span></a>
        </div>
        <div class="sidebar-content">
            <div class="sidebar-toolbar text-center">
                <a href="#">
                    <img class="rounded-circle thumb64" src="/src/images/01.jpg" alt="Profile">
                </a>
                <div class="mt"><span data-i18n="user.WELCOME">Welcome</span><span>, {{Auth::user()->name}}</span>
                </div>
            </div>
            <nav class="sidebar-nav">
                <ul>
                    <li>
                        <a class="ripple" href="{{url('/home')}}"><span class="float-right nav-label"></span><span
                                    class="nav-icon"><img class="invisible"
                                                          data-svg-replace="src/images/radio-waves.svg"
                                                          alt="MenuItem"></span><span>Dashboard</span></a>
                    </li>
                    <li>
                        <a class="ripple" href="#">
                                <span class="float-right nav-caret">
                                    <em class="ion-ios-arrow-right"></em>
                                </span>
                            <span class="float-right nav-label"></span>
                            <span class="nav-icon">
                                    <img class="invisible" data-svg-replace="src/images/connection-bars.svg"
                                         alt="MenuItem">
                                </span>
                            <span>Users</span>
                        </a>
                        <ul class="sidebar-subnav">
                            <li>
                                <a class="ripple" href="{{url('/users/add')}}"><span
                                            class="float-right nav-label"></span><span>Add user</span></a>
                            </li>
                            <li>
                                <a class="ripple" href="{{url('/users')}}"><span
                                            class="float-right nav-label"></span><span>User list</span></a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <a class="ripple" href="#">
                                <span class="float-right nav-caret">
                                    <em class="ion-ios-arrow-right"></em>
                                </span>
                            <span class="float-right nav-label"></span>
                            <span class="nav-icon">
                                    <img class="invisible" data-svg-replace="src/images/connection-bars.svg"
                                         alt="MenuItem">
                                </span>
                            <span>Roles</span>
                        </a>
                        <ul class="sidebar-subnav">
                            <li>
                                <a class="ripple" href="{{url('roles/add')}}"><span
                                            class="float-right nav-label"></span><span>Add Roles</span></a>
                            </li>
                            <li>
                                <a class="ripple" href="{{url('/roles')}}"><span
                                            class="float-right nav-label"></span><span>Roles list</span></a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <a class="ripple" href="#">
                                <span class="float-right nav-caret">
                                    <em class="ion-ios-arrow-right"></em>
                                </span>
                            <span class="float-right nav-label"></span>
                            <span class="nav-icon">
                                    <img class="invisible" data-svg-replace="src/images/connection-bars.svg"
                                         alt="MenuItem">
                                </span>
                            <span>Patients</span>
                        </a>
                        <ul class="sidebar-subnav">
                            <li>
                                <a class="ripple" href="{{url('/patients/add')}}"><span
                                            class="float-right nav-label"></span><span>Add Patient</span></a>
                            </li>
                            <li>
                                <a class="ripple" href="{{url('/patient')}}"><span
                                            class="float-right nav-label"></span><span>Patiens list</span></a>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <a class="ripple" href="#">
                                <span class="float-right nav-caret">
                                    <em class="ion-ios-arrow-right"></em>
                                </span>
                            <span class="float-right nav-label"></span>
                            <span class="nav-icon">
                                    <img class="invisible" data-svg-replace="src/images/connection-bars.svg"
                                         alt="MenuItem">
                                </span>
                            <span>Appointments</span>
                        </a>
                        <ul class="sidebar-subnav">
                            <li>
                                <a class="ripple" href="{{url('/appointments/show')}}"><span
                                            class="float-right nav-label"></span><span>Show Appointments</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
    <div class="sidebar-layout-obfuscator"></div>
    <main class="main-container">
        <section>
            <div class="container-overlap bg-blue-500">
                <div class="media m0 pv">
                    <div class="d-flex mr"><a href="#"><img class="rounded-circle thumb64" src="/src/images/03.jpg"
                                                            alt="User"></a></div>
                    <div class="media-body"><h4 class="mt-sm mb0">{{$patient->nom.' '.$patient->prenom}}</h4><span class="text-muted">Chambre Numéro {{$patient->room}}</span>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-7 col-xl-8">
                        <form class="cardbox" editable-form="" name="user.profileForm">

                            <h5 class="cardbox-heading pb0">Fiche numéro {{$f->id}}</h5>
                            <div class="cardbox-body">

                                    <div class="cardbox">
                                            <div class="cardbox-heading">Relevé</div>
                                            <div class="cardbox-body">
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="mda-form-group float-label">
                                                                <div class="mda-form-control">
                                                                    <input name="alimentation" class="form-control" tabindex="0" value="{!! $f->alimentation !!}" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                    <div class="mda-form-control-line"></div>
                                                                    <label style="top: 0px !important;">Alimentation</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="mda-form-group float-label">
                                                                <div class="mda-form-control">
                                                                    <input name="petitdej" class="form-control" value="{!! $f->petitdej !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                    <div class="mda-form-control-line"></div>
                                                                    <label style="top: 0px !important;">Petite déjeuner</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="mda-form-group float-label">
                                                                <div class="mda-form-control">
                                                                    <input name="dejene" class="form-control" value="{!! $f->dejene !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                    <div class="mda-form-control-line"></div>
                                                                    <label style="top: 0px !important;">Déjeuner</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="mda-form-group float-label">
                                                                <div class="mda-form-control">
                                                                    <input name="dinner" class="form-control" value="{!! $f->dinner !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                    <div class="mda-form-control-line"></div>
                                                                    <label style="top: 0px !important;">Dinner</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="mda-form-group float-label">
                                                                <div class="mda-form-control">
                                                                    <input name="poid" class="form-control" value="{!! $f->poid !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                    <div class="mda-form-control-line"></div>
                                                                    <label style="top: 0px !important;">Poid</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="mda-form-group float-label">
                                                                <div class="mda-form-control">
                                                                    <input name="temperature" class="form-control" value="{!! $f->temperature !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                    <div class="mda-form-control-line"></div>
                                                                    <label style="top: 0px !important;">Temperature</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="mda-form-group float-label">
                                                                <div class="mda-form-control">
                                                                    <input name="tension" class="form-control" value="{!! $f->tension !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                    <div class="mda-form-control-line"></div>
                                                                    <label style="top: 0px !important;">Tension</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="mda-form-group float-label">
                                                                <div class="mda-form-control">
                                                                    <input name="pouls" class="form-control" value="{!! $f->pouls !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                    <div class="mda-form-control-line"></div>
                                                                    <label style="top: 0px !important;">Pouls</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="mda-form-group float-label">
                                                                <div class="mda-form-control">
                                                                    <input name="glycerine" class="form-control" value="{!! $f->glycerine !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                    <div class="mda-form-control-line"></div>
                                                                    <label style="top: 0px !important;">Glycerine</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                                <div class="mda-form-group float-label">
                                                                        <div class="mda-form-control">
                                                                            <input name="viste" class="form-control" value="{!! $f->viste !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
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
                                                                @if ($f->cream == 1)

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
                                                                @if ($f->coupeOngles == 1)

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
                                                                 @if ($f->douche == 1)

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
                                                                @if ($f->doucheShamp == 1)

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
                                                                @if ($f->entretientChambre == 1)

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
                                                                @if ($f->bainBouche == 1)

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
                                                                @if ($f->coiffure == 1)

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
                                                                @if ($f->rassage == 1)

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
                                                                @if ($f->soinPied == 1)

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
                                                                                <input name="heurR" class="form-control" value="{!! $f->heurR !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                                <div class="mda-form-control-line"></div>
                                                                                <label style="top: 0px !important;">Heur reveille</label>
                                                                            </div>
                                                                        </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                    <div class="mda-form-group float-label">
                                                                            <div class="mda-form-control">
                                                                                <input name="heurC" class="form-control" value="{!! $f->heurC !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                                <div class="mda-form-control-line"></div>
                                                                                <label style="top: 0px !important;">Heur couche</label>
                                                                            </div>
                                                                        </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="mda-form-group float-label">
                                                                    <div class="mda-form-control">
                                                                        <input name="sieste" class="form-control" value="{!! $f->sieste !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                        <div class="mda-form-control-line"></div>
                                                                        <label style="top: 0px !important;">Sieste</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="mda-form-group float-label">
                                                                    <div class="mda-form-control">
                                                                        <input name="deplacement" class="form-control" value="{!! $f->deplacement !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                        <div class="mda-form-control-line"></div>
                                                                        <label style="top: 0px !important;">Deplacement</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="mda-form-group float-label">
                                                                    <div class="mda-form-control">
                                                                        <input name="promenade" class="form-control" value="{!! $f->promenade !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
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
                                                                            <input name="contention" class="form-control" value="{!! $f->contention !!}" tabindex="0" aria-required="true" aria-invalid="true" style="opacity : 1 !important;" disabled>
                                                                            <div class="mda-form-control-line"></div>
                                                                            <label style="top: 0px !important;">Contention</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                    <div class="row mb">
                                                                        <div class="col-md-12"><label class="switch">
                                                                        @if ($f->security == 1)

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
                                                                                @if ($f->piscine == 1)

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
                                                                            @if ($f->golf == 1)

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
                                                                            @if ($f->tennis == 1)

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
                                                                            @if ($f->jeux == 1)

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
                                                                                @if ($f->lecture == 1)

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
                                                                            @if ($f->cinema == 1)

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
                                                                            @if ($f->danse == 1)

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
                                                                             @if ($f->Television == 1)

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
                                                                            @if ($f->tir == 1)

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
                                                                                <textarea class="form-control" name="autre" rows="4" aria-multiline="true" style="opacity : 1 !important;" disabled>{!! $f->contention !!}</textarea>
                                                                                <div class="mda-form-control-line"></div>
                                                                                <label>Autre <span style="color: red"></span></label></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>









                            </div>
                            <div class="cardbox-divider"></div>
                        </form>
                    </div>
                    <div class="col-lg-5 col-xl-4">
                        <div class="cardbox">
                            <h5 class="cardbox-heading">Historique</h5>
                            @foreach($files as $file)
                                <div class="cardbox-body pb0"><p class="float-left mr"><em
                                                class="ion-record text-info"></em></p>
                                    <div class="oh"><p><strong class="mr-sm"><a href="#"  data-toggle="modal" data-target="#mymodal{{$file->id}}"> Fiche numéro {{$file->id}}</a></strong><span>

                                        <div class="clearfix">
                                            <div class="float-left text-muted"><em
                                                        class="ion-android-time mr-sm"></em><span>{{$file->created_at->diffForHumans()}}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cardbox-divider"></div>

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
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <footer><span>2019 - DEVROWS †</span></footer>
    </main>
</div>

<script type="text/javascript" src="/js/app.js"></script>
<script type="text/javascript" src="/js/formsAdvanced.js"></script>
<script type="text/javascript" src="/js/bootgrid.js"></script>
<script type="text/javascript" src="/js/bootstrapui.js"></script>
<script type="text/javascript" src="/js/cards.js"></script>
<script type="text/javascript" src="/js/dashboard.js"></script>
<script type="text/javascript" src="/js/datamaps.js"></script>
<script type="text/javascript" src="/js/datatable.js"></script>
<script type="text/javascript" src="/js/dropzone.js"></script>
<script type="text/javascript" src="/js/editor.js"></script>
<script type="text/javascript" src="/js/flot.js"></script>

<script type="text/javascript" src="/js/gallery.js"></script>
<script type="text/javascript" src="/js/google-map-full.js"></script>
<script type="text/javascript" src="/js/google-map.js"></script>
<script type="text/javascript" src="/js/grid-masonry.js"></script>
<script type="text/javascript" src="/js/lists.js"></script>
<script type="text/javascript" src="/js/lock.js"></script>
<script type="text/javascript" src="/js/login.js"></script>
<script type="text/javascript" src="/js/messages.js"></script>
<script type="text/javascript" src="/js/nestable.js"></script>
<script type="text/javascript" src="/js/profile.js"></script>
<script type="text/javascript" src="/js/radial.js"></script>
<script type="text/javascript" src="/js/recover.js"></script>
<script type="text/javascript" src="/js/rickshaw.js"></script>
<script type="text/javascript" src="/js/signup.js"></script>
<script type="text/javascript" src="/js/spinners.js"></script>
<script type="text/javascript" src="/js/sweetalert.js"></script>
<script type="text/javascript" src="/js/timeline.js"></script>
<script type="text/javascript" src="/js/validation.js"></script>
<script type="text/javascript" src="/js/vector-map.js"></script>
<script type="text/javascript" src="/js/vendor.js"></script>
<script type="text/javascript" src="/js/wall.js"></script>
<script type="text/javascript" src="/js/xeditable.js"></script>

</body>

</html>
