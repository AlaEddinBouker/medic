<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <title>@yield('title')</title>
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
                    <img src="/src/images/logo.png"  style="width: 30px; height: 30px;" alt="Logo"><span
                        class="sidebar-header-logo-text" style="font-size:14px;">Ibn sina house care</span></a>
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
        @yield('profile')
        <main class="main-container">
            <section>
                <div class="content-heading bg-white">
                    <div class="row">
                        <div class="col-sm-9">
                            <h4 class="m0 text-thin"><span class="mr-1" data-i18n="WELCOME">Welcome
                                    to</span><span>Ibn sina house care dashboard</span>
                            </h4>
                            <small>Centre medical</small>
                        </div>
                        <div class="col-sm-3 text-right d-none d-sm-block">
                            <button class="mt-sm btn btn-labeled btn-secondary ripple" type="button">Add patients<span
                                    class="btn-label btn-label-right"><i class="ion-plus-round"></i></span></button>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">

                    <div class="cardbox">
                        <div class="cardbox-body">
                            @yield('content')
                        </div>
                    </div>

                </div>

            </section>
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
    @yield('js')
</body>

</html>