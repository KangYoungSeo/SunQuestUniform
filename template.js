module.exports = {
    HTML:function(title, body){
      return `<!DOCTYPE html>
<html lang="en">

<head>
    <title>CLOVER - ${title}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="apple-touch-icon" href="/img/apple-icon.png" />
    <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico" />

    <link rel="stylesheet" href="/css/bootstrap.min.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/css/templatemo.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/css/custom.css" type = "Content-Type: text/css"/>

    <!-- Start timezone-master-css index.html fonts -->
    <link rel="stylesheet" href="/timezone-master-css/bootstrap.min.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/timezone-master-css/owl.carousel.min.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/timezone-master-css/flaticon.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/timezone-master-css/slicknav.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/timezone-master-css/animate.min.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/timezone-master-css/magnific-popup.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/timezone-master-css/fontawesome-all.min.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/timezone-master-css/themify-icons.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/timezone-master-css/slick.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/timezone-master-css/nice-select.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/timezone-master-css/style.css" type = "Content-Type: text/css"/>
    <!-- End timezone-master-css index.html fonts -->

    <!--ogani-master css Start-->
    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet" />

    <!-- Css Styles -->
    <link rel="stylesheet" href="/ogani-master-css/bootstrap.min.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/ogani-master-css/font-awesome.min.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/ogani-master-css/elegant-icons.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/ogani-master-css/nice-select.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/ogani-master-css/jquery-ui.min.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/ogani-master-css/owl.carousel.min.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/ogani-master-css/slicknav.min.css" type = "Content-Type: text/css"/>
    <link rel="stylesheet" href="/ogani-master-css/style.css" type = "Content-Type: text/css"/>
    <!--ogani-master css End-->

    <!-- Load fonts style after rendering the layout styles -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;700;900&display=swap" />
    <link rel="stylesheet" href="/css/fontawesome.min.css" type = "Content-Type: text/css"/>

    <!-- Load map styles -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
<!--
    
TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

-->
</head>

<body>
    <!-- Start Top Nav -->
    <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div class="container text-light">
            <div class="w-100 d-flex justify-content-between">
                <div>
                    <i class="fa fa-envelope mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@styleciti.com">info@styleciti.com</a>
                    <i class="fa fa-phone mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="tel:212-730-2831">212-730-2831</a>
                </div>
                <div>
                    <a class="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                    <a class="text-light" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                    <a class="text-light" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                    <!--a class="text-light" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a-->
                </div>
            </div>
        </div>
    </nav>
    <!-- Close Top Nav -->


    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container d-flex justify-content-between align-items-center">

            <a class="navbar-brand text-success logo h1 align-self-center" href="/">
                Zay
            </a>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div class="flex-fill">
                    <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/womens">Womens</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/mens">Mens</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/accessories">Accessories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Group Order</a>
                        </li>
                    </ul>
                </div>
                <div class="navbar align-self-center d-flex">
                    <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div class="input-group">
                            <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ...">
                            <div class="input-group-text">
                                <i class="fa fa-fw fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <!--a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        <i class="fa fa-fw fa-search text-dark mr-2"></i>
                    </a-->
                    <a class="nav-icon position-relative text-decoration-none" href="#">
                        <!--i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                        <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span-->
                    </a>
                    <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        <i class="fa fa-fw fa-search text-dark mr-2"></i>
                    </a>
                    <a class="nav-icon position-relative text-decoration-none" href="#">
                        <i class="fa fa-fw fa-user text-dark mr-3"></i>
                        <!--span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span-->
                    </a>
                </div>
            </div>

        </div>
    </nav>
    <!-- Close Header -->

    <!-- Modal -->
    <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="w-100 pt-1 mb-5 text-right">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" class="modal-content modal-body border-0 p-0">
                <div class="input-group mb-2">
                    <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ...">
                    <button type="submit" class="input-group-text bg-success text-light">
                        <i class="fa fa-fw fa-search text-white"></i>
                    </button>
                </div>
            </form>
        </div>
    </div>

    ${body}

    <!-- Start Footer -->
    <footer class="bg-dark" id="tempaltemo_footer">
        <div class="container">
            <div class="row">

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-success border-bottom pb-3 border-light logo">Zay Shop</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li>
                            <i class="fas fa-map-marker-alt fa-fw"></i>
                            123 Consectetur at ligula 10660
                        </li>
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            <a class="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw"></i>
                            <a class="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                        </li>
                        <li>                
                            <a class="text-decoration-none" href="#">About</a>
                        </li>
                        <li>
                            <a class="text-decoration-none" href="#">Term & Policy</a>
                        </li>
                        <li>                            
                            <a class="text-decoration-none" href="#">FAQs</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none" href="#">Scrubs</a></li>
                        <li><a class="text-decoration-none" href="#">Lab Coats</a></li>
                        <li><a class="text-decoration-none" href="#">Under Scrubs</a></li>
                        <li><a class="text-decoration-none" href="#">Patient Gown</a></li>
                        <li><a class="text-decoration-none" href="/contact">Group Order</a></li>
                        <li><a class="text-decoration-none" href="#">Accessories</a></li>                        
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-light border-bottom pb-3 border-light">More Info</h2>
                    <ul class="list-unstyled text-light footer-link-list">
                        <li><a class="text-decoration-none" href="/">Home</a></li>
                        <li><a class="text-decoration-none" href="#">About Us</a></li>
                        <li><a class="text-decoration-none" href="#">Shop Locations</a></li>
                        <li><a class="text-decoration-none" href="#">FAQs</a></li>
                        <li><a class="text-decoration-none" href="/contact">Contact</a></li>
                    </ul>
                </div>

            </div>

            <div class="row text-light mb-4">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <!--div class="col-auto me-auto">
                    <ul class="list-inline text-left footer-icons">
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-auto">
                    <label class="sr-only" for="subscribeEmail">Email address</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address">
                        <div class="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div-->
            </div>
        </div>

        <div class="w-100 bg-black py-3">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                        <p class="text-left text-light">
                            Copyright &copy; 2021 Company Name 
                            | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    <!-- End Footer -->

    <!-- Start Script -->
    <script src="assets/js/jquery-1.11.0.min.js"></script>
    <script src="assets/js/jquery-migrate-1.2.1.min.js"></script>
    <script src="/js/bootstrap.bundle.min.js"></script>
    <script src="/js/templatemo.js"></script>
    <script src="/js/custom.js"></script>
    <!-- End Script -->

    <!-- Contact Form Script Start-->
    <!--script data-cfasync="false" type="text/javascript"
src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"></script-->
    <script data-cfasync="false" type="text/javascript" src="/js/form-submission-handler.js"></script>
    <!-- Contact Form Script End-->
</body>

</html>
`;
    },
    productMenu:function(category, criteria, productList){
        return `
        <!-- Product Shop Section Begin -->
    <section class="product-shop spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                    ${category}
                    ${criteria}
                    
                    <div class="filter-widget">
                        <h4 class="fw-title">Color</h4>
                        <div class="fw-color-choose">
                            <div class="cs-item">
                                <input type="radio" id="cs-black">
                                <label class="cs-black" for="cs-black">Black</label>
                            </div>
                            <div class="cs-item">
                                <input type="radio" id="cs-violet">
                                <label class="cs-violet" for="cs-violet">Violet</label>
                            </div>
                            <div class="cs-item">
                                <input type="radio" id="cs-blue">
                                <label class="cs-blue" for="cs-blue">Blue</label>
                            </div>
                            <div class="cs-item">
                                <input type="radio" id="cs-yellow">
                                <label class="cs-yellow" for="cs-yellow">Yellow</label>
                            </div>
                            <div class="cs-item">
                                <input type="radio" id="cs-red">
                                <label class="cs-red" for="cs-red">Red</label>
                            </div>
                            <div class="cs-item">
                                <input type="radio" id="cs-green">
                                <label class="cs-green" for="cs-green">Green</label>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="col-lg-9 order-1 order-lg-2">
                    <div class="product-show-option">
                        <div class="row">
                            <div class="col-lg-7 col-md-7">
                                <div class="select-option">
                                    <select class="sorting">
                                        <option value="Descending">Order: Descending</option>
                                        <option value="Ascending">Order: Ascending</option>
                                        <option value="Popularity">Order: Popularity</option>
                                    </select>
                                    <select class="p-show">
                                        <option value="">Show: 9 </option>
                                    </select>
                                </div>
                            </div>
                            <!--div class="col-lg-5 col-md-5 text-right">
                                <p>Show 01- 09 Of 36 Product</p>
                            </div-->
                        </div>
                    </div>
                    ${productList}
                    <div class="loading-more">
                        <div class="btn-toolbar justify-content-center pb-4" role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-secondary text-white">Previous</button>
                            </div>
                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-light">1</button>
                            </div>
                            <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-secondary text-white">2</button>
                            </div>
                            <div class="btn-group" role="group" aria-label="Third group">
                                <button type="button" class="btn btn-secondary text-white">Next</button>
                            </div>
                        </div>
                        <!--i class="icon_loading"></i>
                        <a href="#">
                            Loading More
                        </a-->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->
        `
    }
  }
  