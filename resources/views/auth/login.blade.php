{{--@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection--}}
<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from themicon.co/theme/centric/v2.0/static-html5/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 30 May 2019 11:25:19 GMT -->
<head>
    <meta charset="utf-8">

    <title>Centre medical Bensina</title>
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
</head>
<body>
<div class="layout-container">
    <div class="page-container bg-blue-grey-900">
        <div class="container-full">
            <div class="container container-xs">
                <div class="text-center"><img class="mv-lg img-fluid thumb64" src="src/images/logo.png"></div>
                <form class="cardbox b0 form-validate" id="user-login" method="POST" action="{{ route('login') }}" name="loginForm" novalidate="">
                    @csrf
                    <div class="cardbox-heading">
                        <div class="cardbox-title text-center">Login</div>
                    </div>
                    <div class="cardbox-body">
                        <div class="mda-form-group float-label mda-input-group">
                            <div class="mda-form-control">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                                <div class="mda-form-control-line"></div>
                                <label>Email address</label></div>

                        </div>
                        <div class="mda-form-group float-label mda-input-group">
                            <div class="mda-form-control">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror

                                <label>Password</label></div>

                        </div>
                    </div>
                    <button class="btn btn-primary btn-flat" type="submit">Authenticate</button>
                </form>
                <div class="text-center text-sm"><a class="text-inherit" href="{{ route('password.request') }}">Forgot password?</a></div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="/js/app.js"></script>
<script type="text/javascript" src="/js/vendor.js"></script>



</body>
<!-- Mirrored from themicon.co/theme/centric/v2.0/static-html5/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 30 May 2019 11:25:20 GMT -->
</html>