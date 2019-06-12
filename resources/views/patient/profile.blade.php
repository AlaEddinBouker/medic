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
                                <table class="table table-striped">
                                    <tbody>
                                    <tr>
                                        <td><em class="ion-document-text icon-fw mr"></em>Area</td>
                                        <td>Research &amp; development</td>
                                    </tr>
                                    <tr>
                                        <td><em class="ion-egg icon-fw mr"></em>Birthday</td>
                                        <td><span class="is-editable text-inherit" data-type="combodate"
                                                  data-mode="inline">10/11/2000</span></td>
                                    </tr>
                                    <tr>
                                        <td><em class="ion-ios-body icon-fw mr"></em>Member since</td>
                                        <td><span class="is-editable text-inherit" data-type="combodate"
                                                  data-mode="inline">05/11/2015</span></td>
                                    </tr>
                                    <tr>
                                        <td><em class="ion-man icon-fw mr"></em>Gender</td>
                                        <td><a class="text-inherit" id="gender" href="#" data-type="select" data-pk="1"
                                               data-value="2" data-title="Select sex"></a></td>
                                    </tr>
                                    <tr>
                                        <td><em class="ion-android-home icon-fw mr"></em>Address</td>
                                        <td><span class="is-editable text-inherit">Some street, 123</span></td>
                                    </tr>
                                    <tr>
                                        <td><em class="ion-email icon-fw mr"></em>Email</td>
                                        <td><span class="is-editable text-inherit"><a href="#">user@mail.com</a></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><em class="ion-ios-telephone icon-fw mr"></em>Contact phone</td>
                                        <td><span class="is-editable text-inherit">13-123-46578</span></td>
                                    </tr>
                                    </tbody>
                                </table>
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
                                               FILE STUFF HERE
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