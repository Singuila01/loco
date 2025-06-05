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
        Schema::create('produits', function (Blueprint $table) {
            $table->id();
            $table->string('nom_produit');
            $table->text('description_produit')->nullable();
            $table->decimal('prix_produit', 8, 2);
            $table->integer('nouveaute')->default(1);
            $table->integer('nombre_produit');
            $table->integer('bio');
            $table->string('quantite_disponible');
            $table->string('vendu_par');
            
            $table->unsignedBigInteger('id_type_poids');
            $table->foreign('id_type_poids')->references('id')->on('type_poids');

            $table->unsignedBigInteger('id_commercant');
            $table->foreign('id_commercant')->references('id')->on('commercants')->onDelete('cascade');

            $table->unsignedBigInteger('id_categorie');
            $table->foreign('id_categorie')->references('id')->on('categories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produits');
    }
};
