<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Authenticatable
{
    use EntrustUserTrait;
    use Notifiable;

    /*
    To attach a role to a user you simply use
      $user->roles->attach(RoleId or RoleObject)
    To detach a role from a user you need to use :
     $user->detachRoles(RoleObject); PS: This only accept role Object
    */


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','lastName', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function patient()
    {
        return $this->hasOne('App\Patient');
    }
    function userinfo($id)
    {
       $user=User::where('id',$id)->first();
       if($user==null)
       {
           return 'Accune utilisateur';
       }else{
           $name=$user->name.' '.$user->lastName;
           return $name;
       }

    }

}
