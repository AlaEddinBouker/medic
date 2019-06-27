<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>Ibn Sina House Care</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet">

    <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="css/animate.css">

    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <link rel="stylesheet" href="css/magnific-popup.css">

    <link rel="stylesheet" href="css/aos.css">

    <link rel="stylesheet" href="css/ionicons.min.css">

    <link rel="stylesheet" href="css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="css/jquery.timepicker.css">


    <link rel="stylesheet" href="css/flaticon.css">
    <link rel="stylesheet" href="css/icomoon.css">
    <link rel="stylesheet" href="css/style.css">
    <style>
        /* Hide all steps by default: */
        .tab {
            display: none;
        }

        #prevBtn {
            background-color: #bbbbbb;
        }

        /* Make circles that indicate the steps of the form: */
        .step {
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: grey;
            border: none;
            border-radius: 50%;
            display: inline-block;
            opacity: 0.5;
        }

        .step.active {
            background-color: deepskyblue;
        }

        /* Mark the steps that are finished and valid: */
        .step.finish {
            background-color: deepskyblue;
        }
    </style>
</head>
<body>
<nav class="navbar py-4 navbar-expand-lg ftco_navbar navbar-light bg-light flex-row">
    <div class="container">
        <div class="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
            <div class="col-lg-2 pr-4 align-items-center">
                <a class="navbar-brand" href="/"><img src="/images/logo.png" alt="Ibn sina" > </a>
            </div>
            <div class="col-lg-9 d-none d-md-block pull-right" style="margin-left: 90px">
                <div class="row d-flex">
                    <div class="col-md-4 pr-4 d-flex topper align-items-center">
                        <div class="icon bg-white mr-2 d-flex justify-content-center align-items-center"><span
                                    class="icon-map"></span></div>
                        <span class="text">Address: Boulevard Mongi Bali 4000 Sousse</span>
                    </div>
                    <div class="col-md pr-4 d-flex topper align-items-center">
                        <div class="icon bg-white mr-2 d-flex justify-content-center align-items-center"><span
                                    class="icon-paper-plane"></span></div>
                        <span class="text">Email: ibnsinahousecare@gmail.com</span>
                    </div>
                    <div class="col-md pr-4 d-flex topper align-items-center">
                        <div class="icon bg-white mr-2 d-flex justify-content-center align-items-center"><span
                                    class="icon-phone2"></span></div>
                        <span class="text">Phone: 73 338 520</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ul class="navbar-nav ml-auto">
        <!-- Authentication Links -->
        <li class="nav-item">
            @guest
                <a class="nav-link" href="/login">Login</a>
            @else
                <a class="nav-link" href="{{ route('logout') }}" onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">Logout</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
            @endguest
        </li>

    </ul>
</nav>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container d-flex align-items-center">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
        </button>
        <p class="button-custom order-lg-last mb-0"><a href="{{url('/examination')}}"
                                                       class="btn btn-secondary py-2 px-3">Consultation</a></p>
        <div class="collapse navbar-collapse" id="ftco-nav">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active"><a href="/" class="nav-link pl-0">Home</a></li>
                <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
                @if(\Illuminate\Support\Facades\Auth::check())
                    <li class="nav-item"><a href="{{url('/home')}}" class="nav-link">Dashboard</a></li>
                @endif
            </ul>
        </div>
    </div>
</nav>
<!-- END nav -->

<section class="hero-wrap hero-wrap-2" style="background-image: url('images/bg_1.jpg');"
         data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
        <div class="row no-gutters slider-text align-items-center justify-content-center">
            <div class="col-md-9 ftco-animate text-center">
                <h1 class="mb-2 bread">Examination</h1>
                <p class="breadcrumbs"><span class="mr-2"><a href="/">Home <i
                                    class="ion-ios-arrow-forward"></i></a></span> <span>Examination <i
                                class="ion-ios-arrow-forward"></i></span></p>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section ftco-no-pt ftco-no-pb ftco-counter" style="padding: 30px;">
    <div class="container">
        <form id="regForm" method="post">

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
            <div class="tab">
                <div class="title-heading1 mb40">
                    <h3>Personal information </h3>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="firstname" class="form-control required" required
                                   placeholder="First name">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="lastname" class="form-control required" required
                                   placeholder="Last name">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="number" name="age" class="qty form-control required" required
                                   placeholder="Age">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <select class="form-control" name="country">
                                <option selected value="0">Country</option>
                                <option value="1">test</option>
                                <option value="2">test</option>
                                <option value="3">test</option>
                                <option value="4">test</option>
                                <option value="5">test</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="email" name="email" class="form-control required" required
                                   placeholder="Email adress">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="phone" class="form-control required" required
                                   placeholder="Phone number">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">

                            <select class="form-control" name="gender">
                                <option selected value="0">Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <select class="form-control" name="marital">
                                <option selected value="0">Marital Stauts</option>
                                <option value="Married">Married</option>
                                <option value="Single">Single</option>
                                <option value="Devorced">Devorced</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab">
                <div class="title-heading1 mb40">
                    <h3>Medical infromation </h3>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="number" name="weight" placeholder="weight" required
                                   class="form-control" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="number" name="height" placeholder="height"
                                   class="form-control" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <select class="form-control" name="color">
                                <option selected value="0">Skin color</option>
                                <option value="white">white</option>
                                <option value="dark">dark</option>
                                <option value="yellow">yellow</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <select class="form-control" name="blood_type">
                                <option selected value="0">blood type</option>
                                <option value="O-positive">O-positive</option>
                                <option value="O-negative">O-negative</option>
                                <option value="A-positive">A-positive</option>
                                <option value="A-negative">A-negative</option>
                                <option value="B-negative">B-negative</option>
                                <option value="B-negative">B-negative</option>
                                <option value="AB-negative">AB-negative</option>
                                <option value="AB-negative">AB-negative</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="diab">Diabet</label>
                            <div id="diab">
                                <input type="radio" id='no' value="No" class="diab" name="diabet" checked> No
                                <input type="radio" id="ok" value="Yes" class="diab" name="diabet"> Yes
                                <input type="text" id="diabetText" style=" display: none;" name="diabetText"
                                       placeholder="Describe your situation" class="form-control">
                            </div>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <select class="form-control" name="cardiac">
                                <option selected value="0">Cardiac</option>
                                <option value="1">Cardiac</option>
                                <option value="2">Cardiac</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="pulse" class="form-control" placeholder="Blood pulse" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="diab">Constipation</label>
                            <div id="diab">
                                <input type="radio" id='no' class="diab" Value="No" name="constipation" checked> No
                                <input type="radio" id="ok" class="diab" Value="Yes" name="constipation"> Yes

                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="diab">Meds alergie</label>
                            <div id="Meds">
                                <input type="radio" id='noMed' class="meds" name="meds" value="No" checked> No
                                <input type="radio" id="okMed" class="meds" value="Yes" name="meds"> Yes
                                <input type="text" id="MedText" style=" display: none;" name="MedText"
                                       placeholder="Describe your situation" class="form-control">
                            </div>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="Thyroid">Thyroid</label>
                            <div id="Thyroid">
                                <input type="radio" id='noThyroid' class="Thyroid" name="Thyroid" value="No" checked> No
                                <input type="radio" id="okThyroid" class="Thyroid" name="Thyroid" value="Yes"> Yes

                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="diab">Previous Operations</label>
                            <div id="prevOp">
                                <input type="radio" id='noPrevOp' class="prevOp" name="prevOp" value="No" checked> No
                                <input type="radio" id="okPrevOp" class="prevOp" name="prevOp" value="Yes"> Yes
                                <input type="text" id="prevOpText" style=" display: none;" name="prevOpText"
                                       placeholder="Describe your situation" class="form-control">
                            </div>

                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="kendny" placeholder="Kidney Status" class="form-control">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" name="sleep" placeholder="Sleep Status" class="form-control" required>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control" name="hairStatue" placeholder="Hair Status"
                                   required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <input type="text" class="form-control" name="hairColor" placeholder="Hair Color" required>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab">
                <div class="title-heading1 mb40">
                    <h3>Description </h3>
                </div>


                <div class="form-group">
                    <input type="text" class="form-control " REQUIRED placeholder="Subject" name="subject">
                </div>
                <div class="form-group">
                    <textarea class="form-control" name="message" placeholder="Message" required></textarea>
                </div>
                <div class="form-group">
                    <label for="attach">Upload a file or an image </label>
                    <input type="file" id="attach" class="form-control" name="attachment">
                </div>
                <div class="form-group">
                    <label for="payment">Methode de Payment</label>
                    <br>
                    <input type="radio" id="payment" name="payment" checked>&nbsp;&nbsp;<strong>Virement
                        Banquaire</strong>
                </div>

            </div>

            <div style="overflow:auto;">
                <div style="float:right;">
                    <button class="btn btn-primary" type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
                    <button class="btn btn-primary" type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
                </div>
            </div>
            <!-- Circles which indicates the steps of the form: -->
            <div style="text-align:center;margin-top:40px;">
                <span class="step"></span>
                <span class="step"></span>
                <span class="step"></span>

            </div>
        </form>
    </div>
    </div>
</section>

<footer class="ftco-footer ftco-bg-dark ftco-section">
    <div class="container">

        <div class="row">
            <div class="col-md-12 text-center">

                <p>
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | Crafted By Dev Hipsters.</a>
                </p>
            </div>
        </div>
    </div>
</footer>


<!-- loader -->
<div id="ftco-loader" class="show fullscreen">
    <svg class="circular" width="48px" height="48px">
        <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>
        <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
                stroke="#F96D00"/>
    </svg>
</div>

<script>
    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the crurrent tab
    function showTab(n) {
        // This function will display the specified tab of the form...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        //... and fix the Previous/Next buttons:
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Submit";
        } else {
            document.getElementById("nextBtn").innerHTML = "Next";
        }
        //... and run a function that will display the correct step indicator:
        fixStepIndicator(n)
    }

    function nextPrev(n) {
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
        // Exit the function if any field in the current tab is invalid:
        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        // if you have reached the end of the form...
        if (currentTab >= x.length) {
            // ... the form gets submitted:
            document.getElementById("regForm").submit();
            return false;
        }
        // Otherwise, display the correct tab:
        showTab(currentTab);
    }

    function fixStepIndicator(n) {
        // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class on the current step:
        x[n].className += " active";
    }
</script>
<script>
    $(document).ready(function () {
        $('.diab').change(function () {
            if ($('#ok').is(':checked')) {
                $('#diabetText').show(400);
            } else {
                $('#diabetText').hide(400);
            }
        });
        $('.meds').change(function () {
            if ($('#okMed').is(':checked')) {
                $('#MedText').show(400);
            } else {
                $('#MedText').hide(400);
            }
        });
        $('.prevOp').change(function () {
            if ($('#okPrevOp').is(':checked')) {
                $('#prevOpText').show(400);
            } else {
                $('#prevOpText').hide(400);
            }
        });
    });
</script>
<script src="js/jquery.min.js"></script>
<script src="js/jquery-migrate-3.0.1.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<script src="js/jquery.waypoints.min.js"></script>
<script src="js/jquery.stellar.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/aos.js"></script>
<script src="js/jquery.animateNumber.min.js"></script>
<script src="js/bootstrap-datepicker.js"></script>
<script src="js/jquery.timepicker.min.js"></script>
<script src="js/scrollax.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false">
</script>
<script src="js/google-map.js"></script>
<script src="js/main.js"></script>

</body>

</html>
