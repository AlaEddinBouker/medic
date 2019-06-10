<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('patient_id');
            // Relevé

            $table->string('alimentation')->nullable();
            $table->string('petitdej')->nullable();
            $table->string('dejene')->nullable();
            $table->string('dinner')->nullable();
            $table->string('poid')->nullable();
            $table->string('temperature')->nullable();
            $table->string('tension')->nullable();
            $table->string('pouls')->nullable();
            $table->string('glycerine')->nullable();
            $table->date('viste')->nullable();

            //Hygiéne

            $table->boolean('cream')->default(false);
            $table->boolean('coupeOngles')->default(false);
            $table->boolean('douche')->default(false);
            $table->boolean('doucheShamp')->default(false);
            $table->boolean('entretientChambre')->default(false);
            $table->boolean('bainBouche')->default(false);
            $table->boolean('coiffure')->default(false);
            $table->boolean('rassage')->default(false);
            $table->boolean('soinPied')->default(false);
            //Comfort

            $table->time('heurR');
            $table->time('heurC');
            $table->string('sieste')->nullable();
            $table->string('deplacement')->nullable();
            $table->string('promenade')->nullable();

            //organisation
            $table->string('contention')->nullable();
            //securtiy
            $table->boolean('security');
            //loisir
            $table->boolean('piscine');
            $table->boolean('golf');
            $table->boolean('tennis');
            $table->boolean('jeux');
            $table->boolean('lecture');
            $table->boolean('cinema');
            $table->boolean('danse');
            $table->boolean('Television');
            $table->boolean('tir');
            $table->string('autre');


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
        Schema::dropIfExists('files');
    }
}
