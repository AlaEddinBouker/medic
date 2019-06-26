@extends('layouts.dashboard')
@section('title')
   Edit Contract
@endsection

@section('content')
    <form name="f" method="POST" action="{{url('/contracts/update')}}">
        @csrf
        <input type="text"  name="id" value="{{$contract->id}}" hidden>
        <div class="row">
            <div class="col-sm-6">
                <div class="mda-form-group float-label">
                    <div class="mda-form-control"><input name="name" class="form-control" required tabindex="0"
                                                         aria-required="true" aria-invalid="true" value="{{$contract->name}}">
                        <div class="mda-form-control-line"></div>
                        <label style="top: 0px !important;">Name <span style="color: red">*</span></label style="top: 0px !important;"></div>
                </div>
            </div>

        </div>
        <input type="submit" class="btn btn-oval btn-raised btn-primary" value="Submit">
    </form>

@endsection
