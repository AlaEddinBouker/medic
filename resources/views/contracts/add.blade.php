@extends('layouts.dashboard')
@section('title')
    Add New Contract
@endsection

@section('content')
    @if ($message = Session::get('success'))
        <div class="alert alert-success alert-block mb">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <strong>{{ $message }}</strong>
        </div>
    @endif

    <form name="f" method="POST" action="{{url('/contracts/add')}}">
        @csrf
        <div class="row">
            <div class="col-sm-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input name="name" class="form-control" required tabindex="0"
                                                         aria-required="true" aria-invalid="true">
                        <div class="mda-form-control-line"></div>
                        <label>Name <span style="color: red">*</span></label></div>
                </div>
            </div>
        </div>

        <input type="submit" class="btn btn-oval btn-raised btn-primary" value="Submit">
    </form>
@endsection
