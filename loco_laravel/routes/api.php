<?php
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CommandesController;
use App\Http\Controllers\CommercantController;
use App\Http\Controllers\NotationController;
use App\Http\Controllers\ProduitsController;
use App\Http\Controllers\UserController;
use App\Models\Categorie;
use App\Models\Commercant;
use App\Models\Notation;
use App\Models\PointsFidelisation;
use App\Models\Produits;
use App\Models\Stocks;
use Illuminate\Support\Facades\Route;
use App\Models\Commandes;
use Inertia\Inertia;

// Route::get('/api/commandes', function () {
//     return Commandes::all(); 
// });
// Route::get('/api/commandes/{id}', function ($id) {
//     return Commandes::find($id); 
// });

// Route::get('/api/commandes/{id}/produits', fn($id) => Commandes::with('produits')->find($id)->produits);
// Route::get('/api/commandes/{id}/commercants', fn($id) => Commandes::with('commercants')->find($id)->commercants);
// Route::get('/api/commandes/{id}/utilisateurs', fn($id) => Commandes::with('utilisateurs')->find($id)->utilisateurs);


// Route::get('/api/categories', function () {
//     return Categorie::all(); 
// });


// Route::get('/api/stocks', function () {
//     return Stocks::all(); 
// });

// Route::get('/api/commercants', function () {
//     return Commercant::all(); 
// });

// Route::get('/api/notations', function () {
//     return Notation::all(); 
// });

// Route::get('/api/pointsfidelisation', function () {
//     return PointsFidelisation::all(); 
// });

// Route::get('/api/produits', function () {
//     return Produits::all(); 
// });

// Route::get('/api/signalements', function () {
//     return Produits::all(); 
// });

// Route::get('/api/villes', function () {
//     return Produits::all(); 
// });

// ---------------------------------------------------


