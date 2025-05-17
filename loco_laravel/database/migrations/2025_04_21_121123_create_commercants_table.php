<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('commercants', function (Blueprint $table) {
            $table->id();
            $table->string('nom_entreprise');
            $table->string('email')->unique();
            $table->string('adresse');
            $table->string('password');
            $table->string('phone');
            $table->string('SIRET');
            $table->string('SIREN');
            $table->integer('id_ville');
            $table->foreign('id_ville')->references('id')->on('villes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commercants');
    }
};
