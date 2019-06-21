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
		    		<a class="navbar-brand" href="/">Ibn Sina <span>House Care</span></a>
	    		</div>
		    </div>
        </div>
        <ul class="navbar-nav ml-auto">
            <!-- Authentication Links -->
                                        <li class="nav-item">
                    @guest
                    <a class="nav-link" href="/login">S'identifier</a>
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
	        <span class="oi oi-menu"></span> Menu
	      </button>
	      <p class="button-custom order-lg-last mb-0"><a href="/appointment" class="btn btn-secondary py-2 px-3">Make An Appointment</a></p>
	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav mr-auto">
	            <li class="nav-item active"><a href="/" class="nav-link pl-0">Home</a></li>
	            <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    <!-- END nav -->

    <section class="home-slider owl-carousel">
      <div class="slider-item" style="background-image:url(images/bg_1.jpg);" data-stellar-background-ratio="0.5">
      	<div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
          <div class="col-md-6 text ftco-animate">
            <h1 class="mb-4">Helping Your <span>Stay Happy One</span></h1>
            <h3 class="subheading">Everyday We Bring Hope and Smile to the Patient We Serve</h3>
            <p><a href="#" class="btn btn-secondary px-4 py-3 mt-3">View our works</a></p>
          </div>
        </div>
        </div>
      </div>

      <div class="slider-item" style="background-image:url(images/bg_2.jpg);">
      	<div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
          <div class="col-md-6 text ftco-animate">
            <h1 class="mb-4">We Care <span>About Your Health</span></h1>
            <h3 class="subheading">Your Health is Our Top Priority with Comprehensive, Affordable medical.</h3>
            <p><a href="#" class="btn btn-secondary px-4 py-3 mt-3">View our works</a></p>
          </div>
        </div>
        </div>
      </div>
    </section>



		<section class="ftco-section ftco-no-pt ftc-no-pb">
			<div class="container">
				<div class="row no-gutters">
					<div class="col-md-5 p-md-5 img img-2 mt-5 mt-md-0" style="background-image: url(images/about.jpg);">
					</div>
					<div class="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
	          <div class="heading-section mb-5">
	          	<div class="pl-md-5 ml-md-5">
		          	<span class="subheading">Présentation de la residence</span>
		            <h2 class="mb-4" style="font-size: 28px;">« Ibn Sina House Care »</h2>
	            </div>
	          </div>
	          <div class="pl-md-5 ml-md-5 mb-5">
							<p>est un opérateur spécialisé dans la prise en charge des personnes
                                âgées étrangères. Notre résidence est un lieu de vie, de vacances et de soins pour les
                                personnes qui mérite un atmosphère de détente après leurs retraites offrant un service
                                d&#39;hôtellerie de haute gamme.</p>
						</div>
					</div>
				</div>
			</div>
        </section>

        <section class="ftco-section ftco-no-pt ftc-no-pb">
			<div class="container">
				<div class="row no-gutters">
					<div class="col-md-5 p-md-5 img img-2 mt-5 mt-md-0" style="background-image: url(images/about.jpg);">
					</div>
					<div class="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
	          <div class="heading-section mb-5">
	          	<div class="pl-md-5 ml-md-5">
		          	<span class="subheading">Cadre d’hébergement</span>
	            </div>
	          </div>
	          <div class="pl-md-5 ml-md-5 mb-5">
							<p>Notre résidence médicalisée dispose de chambres et de suites, confortables et spacieuses,
                                disposant toutes d’un balcon ainsi que d’une vue sur mer inspirante, sur le jardin bien ou sur
                                la piscine.</p>
                            <p>Nos résidents ont à leur disposition un service hôtelier prestigieux et privilégié (salons,
                                jardins, salle de cinéma et de spectacle, piscine intérieure d’eau douce chauffée, piscine
                                intérieure et extérieure…), ainsi que divers services de soins (coiffeur, pédicure,
                                esthéticienne (Thalasso intégrée à la résidence)</p>
                            <p>Un programme d’animation varié et bien sûr, une équipe médicale (Médecins, Infirmiers,
                                Psychologue kinésithérapeutes, diététicienne…).</p>
						</div>
					</div>
				</div>
			</div>
        </section>

        <section class="ftco-section ftco-no-pt ftc-no-pb">
			<div class="container">
				<div class="row no-gutters">
					<div class="col-md-5 p-md-5 img img-2 mt-5 mt-md-0" style="background-image: url(images/about.jpg);">
					</div>
					<div class="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
	          <div class="heading-section mb-5">
	          	<div class="pl-md-5 ml-md-5">
		          	<span class="subheading">Dossier informatisé des résidents</span>
	            </div>
	          </div>
	          <div class="pl-md-5 ml-md-5 mb-5">
							<p>Grâce à notre application disponible pour smartphone, tablette, et ordinateur, les membres de familles des résidents peuvent suivre les mises à jour de l’état de santé de son parent (température, tension, poids, glycémie, etc), aussi les soins, évènements et suivi alimentaire ainsi que le nom de la responsable ayant réalisée l’action. Sur cette interface sécurisée, les familles peuvent également utiliser la boîte de dialogue pour interagir avec la résidence et le personnel de santé et en plus visionner les photos et vidéos prises lors des activités.</p>
						</div>
					</div>
				</div>
			</div>
        </section>

        <section class="ftco-section ftco-no-pt ftc-no-pb">
			<div class="container">
				<div class="row no-gutters">
					<div class="col-md-5 p-md-5 img img-2 mt-5 mt-md-0" style="background-image: url(images/about.jpg);">
					</div>
					<div class="col-md-7 wrap-about py-4 py-md-5 ftco-animate">
	          <div class="heading-section mb-5">
	          	<div class="pl-md-5 ml-md-5">
		          	<span class="subheading">Quel climat fait-il à la résidence ?</span>
	            </div>
	          </div>
	          <div class="pl-md-5 ml-md-5 mb-5">
                            <p>Un Climat méditerranéen avec 300 Jours de Soleil par An</p>
                            <p>Riche d’une longue tradition médicale, et classée en 2009 au 27e rang mondial sur le critère de la santé par le rapport de Davos, la Tunisie se positionne aujourd’hui comme une destination phare de santé et de bien-être. </p>
						</div>
					</div>
				</div>
			</div>
		</section>

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
          	<span class="subheading">Qualité</span>
          </div>
        </div>
    		<div class="ftco-departments">
					<div class="row">
            <div class="col-md-12 nav-link-wrap">
	            <div class="nav nav-pills d-flex text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
	              <a class="nav-link ftco-animate active" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Prestation medicale</a>

	              <a class="nav-link ftco-animate" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Prestation de bien-être</a>

	              <a class="nav-link ftco-animate" id="v-pills-3-tab" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">Prestation hôtellerie et services</a>

	            </div>
	          </div>
	          <div class="col-md-12 tab-wrap">

	            <div class="tab-content bg-light p-4 p-md-5 ftco-animate" id="v-pills-tabContent">

	              <div class="tab-pane py-2 fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="day-1-tab">
	              	<div class="row departments">
	              		<div class="col-lg-4 order-lg-last d-flex align-items-stretch">
	              			<div class="img d-flex align-self-stretch" style="background-image: url(images/dept-1.jpg);"></div>
	              		</div>
	              		<div class="col-lg-8">
											<div class="row mt-5 pt-2">
												<div class="col-lg-12">
													<div class="services-2 d-flex">
														<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-first-aid-kit"></span></div>
														<div class="text">
															<h3>Prise en charge quotidienne </h3>
                                                            <p>Le personnel de notre résidence fait de son mieux chaque jour pour répondre aux besoins de ses résidents et la disponibilité d'un personnel nombreux et expérimenté garantit une qualité de soins unique.</p>
                                                            <p>L'équipe médicale est responsable des soins médicaux quotidiens des résidents.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-12">
													<div class="services-2 d-flex">
														<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-dropper"></span></div>
														<div class="text">
															<h3>Nourriture</h3>
                                                            <p>Puisque le plaisir vient du goût, tous les repas sont offerts aux résidents par la résidence (petit-déjeuner, déjeuner, goûter, dîner). Ils sont servis dans les restaurants de l'hôtel ou dans la chambre.</p>
                                                            <p>D'autant que les repas sont préparés tous les jours sur place par notre chef et avec des produits frais.</p>
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
	              			<div class="img d-flex align-self-stretch" style="background-image: url(images/dept-2.jpg);"></div>
	              		</div>
	              		<div class="col-md-8">
											<div class="row mt-5 pt-2">
												<div class="col-lg-12">
													<div class="services-2 d-flex">
														<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-first-aid-kit"></span></div>
														<div class="text">
															<h3>Plage privée</h3>
															<p>Profitez d'une plage de sable fin, d'une piscine d'eau douce extérieure et intérieure et d'un jardin aussi beau et plaisant à l’oeil. </p>
														</div>
													</div>
												</div>
												<div class="col-lg-12">
													<div class="services-2 d-flex">
														<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-dropper"></span></div>
														<div class="text">
															<h3>Centre de Thalasso</h3>
                                                            <p>Dans une ambiance alliant tradition et modernité, le centre de thalassothérapie intégré à l'hôtel vous accueille et vous permet de garder la forme dans notre salle de sport spécialement conçue pour les seniors.</p>
                                                            <p>Ce dernier propose des soins haut de gamme, hammam, sauna, salle de relaxation, salon de coiffure et bien plus encore.</p>
                                                            <p>Soins des cheveux: Les cheveux, la manucure et la pédicure sont fournis gratuitement à tous les résidents.</p>
														</div>
													</div>
												</div>
											</div>
	              		</div>
	              	</div>
	              </div>
	              <div class="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-day-3-tab">
	              	<div class="row departments">
	              		<div class="col-lg-4 order-lg-last d-flex align-items-stretch">
	              			<div class="img d-flex align-self-stretch" style="background-image: url(images/dept-3.jpg);"></div>
	              		</div>
	              		<div class="col-md-8">
											<div class="row mt-5 pt-2">
												<div class="col-lg-12">
													<div class="services-2 d-flex">
														<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-first-aid-kit"></span></div>
														<div class="text">
															<h3>La chambre</h3>
															<p>Lumineuses et spacieuses, l’ensemble des chambres et suites disposent de balcons. Une magnifique vue sur mer, jardin ou sur la piscine. Les chambres de la résidence médicalisée sont équipées d’une salle de bains avec baignoire/douche ainsi que des toilettes séparées.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-12">
													<div class="services-2 d-flex">
														<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-dropper"></span></div>
														<div class="text">
															<h3>L’accompagnement</h3>
															<p>Chaque résident(e) est accompagné en permanence par une aide-soignante et ceci 24H/24.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-12">
													<div class="services-2 d-flex">
														<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-experiment-results"></span></div>
														<div class="text">
															<h3>Activités</h3>
															<p>De nombreuses activités sont proposées pour les résidents : Salle de Spectacle, Cinéma, Jardin thérapeutique … toutes, d’ordre manuel, ludique, ou intellectuel.</p>
														</div>
													</div>
												</div>
												<div class="col-lg-12">
													<div class="services-2 d-flex">
														<div class="icon mt-2 mr-3 d-flex justify-content-center align-items-center"><span class="flaticon-heart-rate"></span></div>
														<div class="text">
															<h3>Lavage du linge</h3>
															<p>Pour une offre encore plus complète, nous proposons un service de blanchisserie au sein même de la maison de retraite pour s’occuper du linge, et ce, à titre gracieux.</p>
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
  Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | Crafted By Devrows.</a>
</p>
          </div>
        </div>
      </div>
    </footer>



  <!-- loader -->
  <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>


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
