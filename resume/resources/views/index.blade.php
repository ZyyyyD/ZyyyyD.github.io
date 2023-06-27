<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Zyrel James</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg static-top my-3">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="assets/img/logo-no-background.png" alt="logo" height="36">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item px-2" style="border-right: 1px solid black">
                        <a class="nav-link text-dark active" href="{{url('/project')}}" aria-current="page">Project</a>
                    </li>
                    <li class="nav-item px-2">
                        <a class="nav-link text-dark" href="{{url('/resume')}}">Resume</a>
                    </li>
                    <li class="nav-item px-2" style="border-left: 1px solid black">
                        <a class="nav-link text-dark" href="{{url('/about')}}">
                            About
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6 ">
                <div class=" d-flex justify-content-center align-items-center my-3">
                    <img style="width: 20em" src="assets/img/logo-no-background.png" alt="main">
                </div>
            </div>
            <div class="col-md-6 d-flex justify-content-evenly align-items-center">
                <div class="d-flex justify-content-evenlyS flex-column py-3">
                    <div class="d-flex justify-content-evenly align-items-center">
                        <a class="rounded-circle"
                            style="text-decoration:none; color:white; padding:30px; background-color:#F7DEA9"
                            href="{{url('/resume')}}">Resume</a>
                        <a class="rounded-circle"
                            style="text-decoration:none; color:white; padding:30px; background-color:#B52D43"
                            href="{{url('/project')}}">Project</a>
                        <a class="rounded-circle"
                            style="text-decoration:none; color:white; padding:30px; background-color:#7CE8DA"
                            href="{{url('/about')}}">About</a>
                    </div>
                    <h3 class="display-3">Zyrel James</h3>
                    <h6 class="display-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam.</h6>

                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="row">
            <div class="d-flex justify-content-around ">
                <div class="col-md-4 col-sm-4">
                    <h6 class="text-center">Phone</h6>
                    <p>01234124</p>
                </div>
                <div class="col-md-4 col-sm-4">
                    <h6 class="text-center">Email</h6>
                    <p>asdfas@</p>
                </div>
                <div class="col-md-4 col-sm-4">
                    <h6 class="text-center">Social Media</h6>
                    <a href="">F</a>
                    <a href="">git</a>
                </div>
            </div>

        </div>
    </footer>

</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous">
</script>

</html>