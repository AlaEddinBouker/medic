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
</head>
<body>
<nav class="navbar py-4 navbar-expand-lg ftco_navbar navbar-light bg-light flex-row">
    <div class="container">
        <div class="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
            <div class="col-lg-2 pr-4 align-items-center">
                <a class="navbar-brand" href="/"><img src="/images/logo.png" alt="Ibn sina"> </a>
            </div>
            <div class="col-lg-9 d-none d-md-block pull-right" >
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

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
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

<section class="home-slider owl-carousel">
    <div class="slider-item" style="background-image:url(images/1.jpg);" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-start"
                 data-scrollax-parent="true">
                <div class="col-md-6 text ftco-animate">
                    <h1 class="mb-4">Helping Your <span>Stay Happy One</span></h1>
                    <h3 class="subheading">Everyday We Bring Hope and Smile to the Patient We Serve</h3>
                </div>
            </div>
        </div>
    </div>

    <div class="slider-item" style="background-image:url(images/3.jpg);" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-start"
                 data-scrollax-parent="true">
                <div class="col-md-6 text ftco-animate">

                </div>
            </div>
        </div>
    </div>
    <div class="slider-item" style="background-image:url(images/7.jpg);" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-start"
                 data-scrollax-parent="true">
                <div class="col-md-6 text ftco-animate">


                </div>
            </div>
        </div>
    </div>
    <div class="slider-item" style="background-image:url(images/10.jpg);" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-start"
                 data-scrollax-parent="true">
                <div class="col-md-6 text ftco-animate">
                </div>
            </div>
        </div>
    </div>
</section>


<section class="ftco-section ftco-no-pt ftc-no-pb" style="padding: 30px;">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-md-5 p-md-5 img img-2 mt-5 mt-md-0" style="background-image: url(images/3.jpg);">
            </div>
            <div class="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
                <div class="heading-section mb-5">
                    <div class="pl-md-5 ml-md-5">
                        <span class="subheading">Residence presentation</span>
                        <h2 class="mb-4" style="font-size: 28px;">« Ibn Sina House Care »</h2>
                    </div>
                </div>
                <div class="pl-md-5 ml-md-5 mb-5">
                    <p>is an operator specialized in caring of foreign seniors. Our residence
                        is a place of life, holidays and care for the people who deserve an atmosphere of relaxation
                        after their retirement with a high-end hotel services.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb" style="padding: 30px;">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-md-5 p-md-5 img img-2 mt-5 mt-md-0" style="background-image: url(images/4.jpg);">
            </div>
            <div class="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
                <div class="heading-section mb-5">
                    <div class="pl-md-5 ml-md-5">
                        <span class="subheading">Accomodation atmosphere</span>
                    </div>
                </div>
                <div class="pl-md-5 ml-md-5 mb-5">
                    <p>Our medecalized residence has comfortable and spacious rooms and suites, all with a balcony and
                        an inspiring view of the sea, the garden or the pool.
                    </p>
                    <p>Our residents have at their disposal a prestigious and privileged hotel service (lounges,
                        gardens, cinema and entertainment room, indoor heated freshwater pool, swimming pool
                        interior and exterior...), as well as various care services (hairdresser, pedicure,
                        beautician (Thalasso integrated into the residence).
                    </p>
                    <p>A varied entertainment program and of course, a medical team (Doctors, Nurses,
                        Psychologist, physiotherapists, dietician...).
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb" style="padding: 30px;">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-md-5 p-md-5 img img-2 mt-5 mt-md-0" style="background-image: url(images/2.jpg);">
            </div>
            <div class="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
                <div class="heading-section mb-5">
                    <div class="pl-md-5 ml-md-5">
                        <span class="subheading">Residents' digital file</span>
                    </div>
                </div>
                <div class="pl-md-5 ml-md-5 mb-5">
                    <p>Thanks to our application available for smartphones, tablets, and computers, the
                        family members of residents can follow updates on the health status of
                        their parent (temperature, blood pressure, weight, blood sugar, etc.), also care, events and
                        nutritional follow-up as well as the name of the person in charge who carried out the action.
                        With this secure interface, families can also use the dialog box to interact with the residence
                        and health care staff and view photos and videos taken during the activities.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section ftco-no-pt ftc-no-pb" style="padding: 30px;">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-md-5 p-md-5 img img-2 mt-5 mt-md-0" style="background-image: url(images/8.jpg);">
            </div>
            <div class="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
                <div class="heading-section mb-5">
                    <div class="pl-md-5 ml-md-5">
                        <span class="subheading">What is the climate like at the residence?</span>
                    </div>
                </div>
                <div class="pl-md-5 ml-md-5 mb-5">
                    <p>
                        A Mediterranean Climate with 300 Days of Sunshine per year
                        Rich with great medical traditions, and ranked 27th in the world in 2009 on the criterion of
                        health by the Davos report, Tunisia is now positioning itself as a leading destination for
                        health and well-being.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
<br>
<section class="ftco-intro" style="background-image: url(images/bg_3.jpg);" data-stellar-background-ratio="0.5">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <h2>We Provide Health Care Consultation</h2>
                <p class="mb-0">Your Health is Our Top Priority with Comprehensive, Affordable medical.</p>
                <p></p>
            </div>
            <div class="col-md-3 d-flex align-items-center">
                <p class="mb-0"><a href="/examination" class="btn btn-secondary px-4 py-3">Consutation</a></p>
            </div>
        </div>
    </div>
</section>

<section class="ftco-section">
    <div class="container">
        <div class="row justify-content-center mb-5 pb-2">
            <div class="col-md-8 text-center heading-section ftco-animate">
                <span class="subheading" style="font-size: 30px">QUALITIES</span>
            </div>
        </div>
        <div class="ftco-departments">
            <div class="row">
                <div class="col-md-12 nav-link-wrap">
                    <div class="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist"
                         aria-orientation="vertical">
                        <a class="nav-link ftco-animate active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1"
                           role="tab" aria-controls="v-pills-1" aria-selected="true">Medical services</a>

                        <a class="nav-link ftco-animate" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2"
                           role="tab" aria-controls="v-pills-2" aria-selected="false">Well-being services</a>

                        <a class="nav-link ftco-animate" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3"
                           role="tab" aria-controls="v-pills-3" aria-selected="false">Hotel services
                        </a>

                    </div>
                </div>
                <div class="col-md-12 tab-wrap">

                    <div class="tab-content bg-light p-4 p-md-5 ftco-animate" id="v-pills-tabContent">

                        <div class="tab-pane py-2 fade show active" id="v-pills-1" role="tabpanel"
                             aria-labelledby="day-1-tab">
                            <div class="row departments">
                                <div class="col-lg-4 order-lg-last ">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel"
                                         style="height: 100%" data-interval="3000">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="/images/slider1.jpg" alt="First slide">
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/images/slider2.jpg" alt="Second slide">
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/images/slider3.jpg" alt="Third slide">
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                                           data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                                           data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="row mt-5 pt-2">
                                        <div class="col-lg-12">
                                            <div class="services-2 d-flex">
                                                <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                                                    <span class="flaticon-003-aroma" style="align-content: center;"><img
                                                                src="/fonts/flaticon2/svg/care.png" height="50px"
                                                                width="50px"></span></div>
                                                <div class="text">
                                                    <h3>Daily Care</h3>
                                                    <p>The medical team is responsible for the daily medical care of the
                                                        residents.

                                                    </p>
                                                    <p>The staff at our residence do their best every day to meet the
                                                        needs of its residents and the availability of a large and
                                                        experienced
                                                        staff guarantees unique quality of care.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="services-2 d-flex">
                                                <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                                                    <span class="flaticon-003-aroma" style="align-content: center;"><img
                                                                src="/fonts/flaticon2/svg/meal.png" height="50px"
                                                                width="50px"></span></div>
                                                <div class="text">
                                                    <h3>Food and beverages</h3>
                                                    <p>PSince pleasure comes from taste, all meals are offered to
                                                        residents by the residence (breakfast, lunch, snack,
                                                        dinner).</p>
                                                    <p>They are served in the hotel restaurants or in the
                                                        room, especially since meals are prepared every day on site by
                                                        our chef and with fresh and healthy products adapted to the
                                                        dietary plan to every resident particularly .</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-day-2-tab">
                            <div class="row departments">
                                <div class="col-lg-4 order-lg-last d-flex align-items-stretch">
                                    <div id="carouselExampleControls2" class="carousel slide" data-ride="carousel"
                                         style="height: 100%" data-interval="3000">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="/images/slider4.jpg" alt="First slide">
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/images/slider5.jpg" alt="Second slide">
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls2" role="button"
                                           data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls2" role="button"
                                           data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="row mt-5 pt-2">
                                        <div class="col-lg-12">
                                            <div class="services-2 d-flex">
                                                <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                                                    <span class="icon-beach_access"></span></div>
                                                <div class="text">
                                                    <h3>Private beach</h3>
                                                    <p>Enjoy a fine sandy beach, an outdoor and indoor freshwater pool
                                                        and a garden as beautiful and pleasant to the eye.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="services-2 d-flex">
                                                <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                                                    <span class="flaticon-003-aroma" style="align-content: center;"><img
                                                                src="/fonts/flaticon2/svg/001-relax.png" height="50px"
                                                                width="50px"></span></div>
                                                <div class="text">
                                                    <h3>Thalasso center</h3>
                                                    <p>In an atmosphere combining tradition and modernity, the
                                                        thalassotherapy centre integrated into the hotel welcomes our
                                                        residents and allows them to keep in shape in our specially
                                                        designed gym designed for seniors.
                                                    </p>
                                                    <p>We offer high-end treatments, hammam, sauna, relaxation room,
                                                        lounge, hairdressing and much more.
                                                    </p>
                                                    <p>Care: Hair, manicure and pedicure are provided free of charge to
                                                        all residents.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
                            <div class="row departments">
                                <div class="col-lg-4 order-lg-last ">
                                    <div id="carouselExampleControls3" class="carousel slide" data-ride="carousel"
                                         style="height: 100%" data-interval="3000">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="/images/slided6.jpg" alt="First slide">
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/images/slider7.jpg" alt="Second slide">
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="/images/slider8.jpg" alt="Third slide">
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls3" role="button"
                                           data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls3" role="button"
                                           data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="row mt-5 pt-2">
                                        <div class="col-lg-12">
                                            <div class="services-2 d-flex">
                                                <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                                                    <span class="flaticon-003-aroma" style="align-content: center;"><img
                                                                src="/fonts/flaticon2/svg/chambre.png" height="50px"
                                                                width="50px"></span></div>
                                                <div class="text">
                                                    <h3>Rooms</h3>
                                                    <p>
                                                        Bright and spacious, all rooms and suites have balconies.
                                                    </p>
                                                    <p>
                                                        A magnificent view on the sea, garden or swimming pool.</p>
                                                    <p>
                                                        The rooms of the residence are equipped with a bathroom with
                                                        bath/shower and toilets separated.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="services-2 d-flex">
                                                <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                                                    <span class="flaticon-24-hours"></span></div>
                                                <div class="text">
                                                    <h3>Assistance</h3>
                                                    <p>Each resident is permanently accompanied by a nursing assistant
                                                        24 hours a day.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="services-2 d-flex">
                                                <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                                                    <span class="flaticon-003-aroma" style="align-content: center;"><img
                                                                src="/fonts/flaticon2/svg/losir.png" height="50px"
                                                                width="50px"></span></div>
                                                <div class="text">
                                                    <h3>Activities</h3>
                                                    <p>Many activities are available for residents: Showroom, Cinema,
                                                        Garden therapeutic... all of them playful, or intellectual.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="services-2 d-flex">
                                                <div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                                                    <span class="flaticon-003-aroma" style="align-content: center;"><img
                                                                src="/fonts/flaticon2/svg/lavage.png" height="50px"
                                                                width="50px"></span></div>
                                                <div class="text">
                                                    <h3>Laundry washing
                                                    </h3>
                                                    <p>For an even more complete offer, we offer a laundry service
                                                        inside the residence to take care of cleaning residents laundry
                                                        for free.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<footer class="ftco-footer ftco-bg-dark ftco-section">
    <div class="container">

        <div class="row">
            <div class="col-md-12 text-center">

                <p><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>
                    All rights reserved | Created By Dev Hipsters.</a>
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
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
<script src="js/google-map.js"></script>
<script src="js/main.js"></script>

</body>
</html>
