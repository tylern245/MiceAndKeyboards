<?php

function template_header($title){
    echo <<<EOT
    <!doctype html>     
    <html lang="en">
    <head>
        <title>$title</title>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <link href="assets/css/global.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Mina&display=swap');
        </style>  
    </head> 
    <body class="d-flex flex-column min-vh-100">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    EOT;
    subheader();
}

function subheader()
{
    navbar1();
    navbar2();
}

function navbar1()
{
    echo <<<EOT
    <nav class="navbar navbar-expand-md bg-navbar" style="padding: 0;">
    EOT;
    siteLogoAndName();
    echo <<<EOT
    <div class="collapse navbar-collapse" id="navMenu">
    EOT;
    searchbar();
    topRightMenu();
    echo <<<EOT
    </div>
    EOT;
    echo <<<EOT
    </nav>
    EOT;

}

function navbar2()
{
    echo <<<EOT
    <nav class="navbar navbar-expand-md bg-info border-bottom" style="padding: 0;">        
    EOT;
    productpagelinks();
    echo <<<EOT
    </nav>      
    EOT;
}

function siteLogoAndName()
{
    echo <<<EOT
    <a href="index.php?page=home" class="brand">
        <img src="/assets/img/keyboard-icon.png" class=" mx-2" alt="Site Logo">
    </a>
    <div class="me-5">
        <a href="index.php?page=home" style="color:black; text-decoration:none">
            <h2 style="font-size:25px;">MiceAndKeyboards.com</h2>
        </a>
    </div>
    EOT;
}

function searchbar()
{   
    echo <<<EOT
    <form action="index.php" method="get" class="input-group nav-item mx-auto" style="max-width: 800px">
    <input type="hidden" name="page" value="search">
    <input type="text" name="term" class="form-control" placeholder="Razer Deathadder, Ducky One 3...">
    <button class="input-group-text" id="searchButton"><i class="bi-search" style="color:black; font-size:1.2rem"></i></button>
    </form>
    EOT;
}

function topRightMenu()
{
    $logout = $accountlink = $adminlink = '';

    if ($_SESSION['signedin'] == true)
    {
        $logout = '<li class="nav-item me-6"><a href="index.php?page=sign-out" class="nav-link"><i class="bi-box-arrow-right" style="color:black"></i></a></li>';
        $accountlink = 'index.php?page=my-account';
    }
    else
    {
        $logout = '';
        $accountlink = 'index.php?page=sign-in';
    }

    if ($_SESSION['signedin'] == true && $_SESSION['admin_flag'] == 1)
    {
        $adminlink = '<li class="nav-item me-6"><a href="index.php?page=admin" class="nav-link"><i class="bi-clipboard-data" style="color:black"></i></a></li>';
    }
    
    
    echo <<<EOT
    <ul class="navbar-nav ms-auto text-center " style="font-size: 2rem!important">
    $logout $adminlink
    <li class="nav-item me-2">
        <a href="$accountlink" class="nav-link">
        <i class="bi-person-circle" style="color:black">
        </i>
        </a>
    </li>
    <li class="nav-item me-4">
        <a href="index.php?page=cart"class="nav-link">
        <i class="bi-cart2" style="color:black"></i>
        <span class="badge"  id="cartIcon" style="position:absolute; display:block; color:blue; background-color:lightgreen; border-radius:50%; border:1px solid black; margin-top:-45px; margin-left:20px; font-size:13px">3</span>
        </a>
    </li>
    </ul>
    EOT;
}
function cartNotification(){
#Put the total number of items in cart on the cart number icon
$quantity = 0;
foreach($_SESSION['cart'] as $item) {
  $quantity += $item;
}

echo <<<EOT
<script>
  var numItems = 0;
  const cartNum = document.getElementById("cartIcon");
  if($quantity === 0){
      cartNum.style="display:none"
  }
  cartNum.innerText = $quantity
  </script>
EOT;
}
function productpagelinks()
{
    echo <<<EOT
    <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav text-center mx-auto">
        <li class="nav-item hover-item">
            <a href="index.php?page=home" class="nav-link link-navbar">
            Home
            </a>
        </li>
        <li class="nav-item hover-item">
            <a href="index.php?page=products" class="nav-link link-navbar">
            Shop
            </a>
        </li>
        <li class="nav-item hover-item">
            <a href="index.php?page=products&sortby=releasedate" class="nav-link link-navbar">
            New Arrivals
            </a>
        </li>
        <li class="nav-item hover-item">
            <a href="index.php?page=products&category=keyboard" class="nav-link link-navbar">
            Keyboards
            </a>
        </li>
        <li class="nav-item hover-item">
            <a href="index.php?page=products&category=switch" class="nav-link link-navbar">
            Switches
            </a>
        </li>
        <li class="nav-item hover-item">
            <a href="index.php?page=products&category=keycap" class="nav-link link-navbar">
            Keycaps
            </a>
        </li>
        <li class="nav-item hover-item">
            <a href="index.php?page=products&category=mouse" class="nav-link link-navbar">
            Mice
            </a>
        </li>
        <li class="nav-item hover-item">
            <a href="index.php?page=faq" class="nav-link link-navbar">
            Keyboard FAQ
            </a>
        </li>
        <li class="nav-item hover-item">
            <a href="index.php?page=switch-guide" class="nav-link link-navbar">
            Switch Guide
            </a>
        </li>
        </ul>
    </div>
    EOT;
}

function template_footer(){
    echo <<<EOT
    <footer class="footer bg-footer border-top mt-auto">
    <div class="container py-4">
        <div class="row gx-5">
            <div class="col-lg-4 col-md-6">
              <a href="index.php?page=home"><img src="/assets/img/keyboard-icon.png" class="ms-2 me-2" alt="Site Logo">
                <p class="small mb-0">&copy; MiceAndKeyboards.com</p>
                <p class="small mb-0"> Powered by MiceAndKeyboards.com</p></a>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="mb-3" style="color:mediumaquamarine; text-weight:bold">Shop</h5>
                <ul class="list-unstyled">
                    <li><a href="index.php?page=products&category=keyboard">Keyboards</a></li>
                    <li><a href="index.php?page=products&category=switch">Switches</a></li>
                    <li><a href="index.php?page=products&category=keycap">Keycaps</a></li>
                    <li><a href="index.php?page=products&category=mouse">Mice</a></li>
                </ul>
            </div>
            <div class="col-lg-2 col-md-6">
                <h5 class="mb-3" style="color:mediumaquamarine; text-weight:bold">Learn</h5>
                <ul class="list-unstyled">
                    <li><a href="index.php?page=faq">Keyboard FAQ</a></li>
                    <li><a href="index.php?page=switch-guide">Switch Guide</a></li>
                </ul>
            </div>
            <div class="col-lg-4 col-md-6">
                <h5 class="mb-3" style="color:mediumaquamarine; text-weight:bold">Contact Us</h5>
                <ul class="list-unstyled">
                    <li>123 Keycaps Blvd, Kalamazoo, MI 4567, United</li>
                    <li>States</li>
                    <li>+1 123-456-7890</li>
                    <li>support@keyboards.com</li>
                </ul>
            </div>
        </div>
    </div>
    </footer>
        </body>  
    </html>
    EOT;
    cartNotification();
}

?>