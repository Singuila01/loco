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
        Schema::create('points_fidelisations', function (Blueprint $table) {
            $table->id();
            $table->integer('nombre_fidelite');
            $table->integer('id_utilisateur');
            $table->integer('id_commercant');
            $table->foreign('id_utilisateur')->references('id')->on('utilisateurs')->onDelete('cascade');
            $table->foreign('id_commercant')->references('id')->on('commercants')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('points_fidelisations');
    }
};
