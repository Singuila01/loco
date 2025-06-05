<?php

use App\Models\Produits;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

// ✅ Test de création réussie
it('crée un produit avec des données valides', function () {
    $data = [
        'nom_produit' => 'Stylo bleu',
        'description_produit' => 'Un très bon stylo pour écrire.',
        'prix_produit' => 3.5,
        'nouveaute' => 1,
        'nombre_produit' => 50,
        'bio' => 1,
        'quantite_disponible' => '50g',
        'vendu_par' => '25g',
        'id_type_poids' => 1,
        'id_commercant' => 1,
        'id_categorie' => 1,
    ];

    $response = $this->postJson('/api/products', $data);

    $response->assertStatus(201);
    $response->assertJsonFragment($data);
    $this->assertDatabaseHas('produits', $data);
});

// 🚫 Test de validation manquante
it('retourne une erreur si des champs sont manquants', function () {
    $response = $this->postJson('/api/products', []);

    $response->assertStatus(422);
    $response->assertJsonValidationErrors(['nom_produit', 'description_produit', 'prix_produit', 'nouveaute', 'nombre_produit', 'bio', 'quantite_disponible', 'vendu_par', 'id_type_poids', 'id_commercant', 'id_categorie']);
});
