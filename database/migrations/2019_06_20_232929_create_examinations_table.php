<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateExaminationsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('examinations', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('first_name')->nullable();
			$table->string('last_name')->nullable();
			$table->integer('age')->nullable();
			$table->string('phone')->nullable();
			$table->string('gender')->nullable();
			$table->string('martial_status')->nullable();
			$table->integer('weight')->nullable();
			$table->integer('height')->nullable();
			$table->string('skin_color')->nullable();
			$table->string('blood_type')->nullable();
			$table->string('diabet')->nullable();
			$table->text('diabet_description', 65535)->nullable();
			$table->string('constipation')->nullable();
			$table->string('thyroid')->nullable();
			$table->string('meds_allergy')->nullable();
			$table->text('meds_allergy_description', 65535)->nullable();
			$table->string('previous_operations')->nullable();
			$table->text('previous_operations_description', 65535)->nullable();
			$table->string('kidney_status')->nullable();
			$table->string('sleep_status')->nullable();
			$table->string('hair_status')->nullable();
			$table->string('hair_color')->nullable();
			$table->string('subject')->nullable();
			$table->string('message')->nullable();
			$table->string('attachements')->nullable();
			$table->timestamps();
			$table->string('country')->nullable();
			$table->string('blood_pulse')->nullable();
			$table->string('email')->nullable();
			$table->string('cardiac')->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('examinations');
	}

}
