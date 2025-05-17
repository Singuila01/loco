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
            $table->integer('id_stock');
            $table->integer('id_commercant');
            $table->integer('id_categorie');
            $table->integer('nouveaute')->default(1);
            $table->foreign('id_stock')->references('id')->on('stock')->onDelete('cascade');
            $table->foreign('id_commercant')->references('id')->on('commercants')->onDelete('cascade');
            $table->foreign('id_categorie')->references('id')->on('categories')->onDelete('cascade');
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
