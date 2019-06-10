<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->bigIncrements('id');
//            BSIC INFORMATION
            $table->string('nom');
            $table->string('prenom');
            $table->date('birth');
            $table->string('passport');
            $table->string('address');
            $table->string('profession');
            $table->string('sex');
            $table->string('status');
            $table->integer('child')->nullable();
            $table->integer('room');
            $table->string('contract');
//            OTHER INFORMATION
            $table->string('religion')->nullable();
            $table->string('language')->nullable();
            $table->string('passion')->nullable();
            $table->string('ptc')->nullable(); //Préférence de type de cure
            $table->string('pee')->nullable(); //Préférence de l'emplacement de l’enterrement
            $table->string('remarque')->nullable(); //Préférence de l'emplacement de l’enterrement
//      HEALTH INFORMATION

            $table->string('gp')->nullable(); //groupe songuin
            $table->string('poid')->nullable();
            $table->string('tm')->nullable(); //Types maladies
            $table->string('operations')->nullable();
            $table->string('tMed')->nullable();
            $table->string('duree')->nullable();
            $table->string('phobies')->nullable();
            $table->string('allergies')->nullable();
            $table->boolean('alcool')->default(true);
            $table->unsignedInteger('user_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');
    }
}
