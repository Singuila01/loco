<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\CommandesController;
use App\Http\Controllers\CommercantController;
use App\Http\Controllers\NotationController;
use App\Http\Controllers\ProduitsController;
use App\Http\Controllers\SignalementController;
use App\Http\Controllers\StocksController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VillesController;
use App\Models\Categorie;
use App\Models\Commercant;
use App\Models\Notation;
use App\Models\PointsFidelisation;
use App\Models\Produits;
use App\Models\Stocks;
use Illuminate\Support\Facades\Route;
use App\Models\Commandes;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::post('/test', function (Request $request) {
    return response()->json(['message' => 'Test API OK']);
});

Route::post('/api/register-consumer', [AuthController::class, 'register']);
Route::post('/api/register-merchant', [AuthController::class, 'register']);
Route::get('/api/login', [AuthController::class, 'login']);
Route::post('/api/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/api/user', [AuthController::class, 'me'])->middleware('auth:sanctum');

// 🗂️ Public
Route::get('/api/categories', [CategorieController::class, 'index']);
Route::post('/api/categories', [CategorieController::class, 'store']);
Route::get('/api/products', [ProduitsController::class, 'index']);
Route::post('/api/products', [ProduitsController::class, 'store']);
Route::get('/api/products/{id}', [ProduitsController::class, 'show']);
Route::delete('/api/products/{id}', [ProduitsController::class, 'destroy']);
Route::put('/api/products/{id}', [ProduitsController::class, 'update']);
Route::get('/api/products/{id}/reviews', [NotationController::class, 'productReviews']);

// 👤 Profil Consommateur
    Route::prefix('/api/consumer')->group(function () {
        Route::get('/profile', [UserController::class, 'show']);
        Route::put('/profile/update', [UserController::class, 'update']);
        Route::delete('/delete', [UserController::class, 'destroy']);

        // Gestion des categories
        Route::get('/categories', [CategorieController::class, 'index']);

        // Gestion des commandes
        Route::get('/commandes', [CommandesController::class, 'index']);
        Route::get('/commandes/create', [CommandesController::class, 'create']); 
        Route::post('/commandes', [CommandesController::class, 'store']);
        Route::delete('/commandes/{id}', [CommandesController::class, 'destroy']);
        Route::get('/commandes/{id}/edit', [CommandesController::class, 'edit']);
        Route::put('/commandes/{id}', [CommandesController::class, 'update']);

        // Gestion des commercants
        Route::get('/commercants', [CommercantController::class, 'index']);

        // Gestion des notations
        Route::get('/notations', [NotationController::class, 'index']);
        Route::get('/notations/create', [NotationController::class, 'create']); 
        Route::post('/notations', [NotationController::class, 'store']);
        Route::delete('/notations/{id}', [NotationController::class, 'destroy']);
        Route::get('/notations/{id}/edit', [NotationController::class, 'edit']);
        Route::put('/notations/{id}', [NotationController::class, 'update']);

        // Gestion des produits
        Route::get('/products', [ProduitsController::class, 'index']);
        Route::get('/products/{id}', [ProduitsController::class, 'show']);
        Route::get('/products/create', [ProduitsController::class, 'create']); 
        Route::post('/products', [ProduitsController::class, 'store']);

        // Gestion des signalements
        Route::get('/signalements', [SignalementController::class, 'index']);
        Route::get('/signalements/create', [SignalementController::class, 'create']); 
        Route::post('/signalements', [SignalementController::class, 'store']);
        Route::delete('/signalements/{id}', [SignalementController::class, 'destroy']);
        Route::get('/signalements/{id}/edit', [SignalementController::class, 'edit']);
        Route::put('/signalements/{id}', [SignalementController::class, 'update']);
    });

    // 👤 Profil Commerçant
    Route::prefix('/api/commercant')->group(function () {
        Route::get('/profile', [CommercantController::class, 'show']);
        Route::put('/profile/update', [CommercantController::class, 'update']);
        Route::delete('/delete', [CommercantController::class, 'destroy']);

        // Gestion des produits
        Route::post('/products', [ProduitsController::class, 'store']);
        Route::put('/products/{id}', [ProduitsController::class, 'update']);
        Route::delete('/products/{id}', [ProduitsController::class, 'destroy']);

        // Gestion des commandes
        Route::get('/commandes', [CommandesController::class, 'index']);
        Route::get('/commandes/create', [CommandesController::class, 'create']); 
        Route::post('/commandes', [CommandesController::class, 'store']);
        Route::delete('/commandes/{id}', [CommandesController::class, 'destroy']);
        Route::get('/commandes/{id}/edit', [CommandesController::class, 'edit']);
        Route::put('/commandes/{id}', [CommandesController::class, 'update']);

        // Gestion des notations
        Route::get('/notations', [NotationController::class, 'index']);
        Route::get('/notations/{id}/edit', [NotationController::class, 'edit']);
        Route::put('/notations/{id}', [NotationController::class, 'update']);

        // Gestion des produits
        Route::get('/products', [ProduitsController::class, 'index']);
        Route::get('/products/create', [ProduitsController::class, 'create']); 
        Route::post('/products', [ProduitsController::class, 'store']);
        Route::delete('/products/{id}', [ProduitsController::class, 'destroy']);
        Route::get('/products/{id}/edit', [ProduitsController::class, 'edit']);
        Route::put('/products/{id}', [ProduitsController::class, 'update']);

        // Gestion des signalements
        Route::get('/signalements', [SignalementController::class, 'index']);
        Route::put('/signalements/{id}', [SignalementController::class, 'update']);

        // Gestion des stocks
        Route::get('/stocks', [StocksController::class, 'index']);
        Route::get('/stocks/create', [StocksController::class, 'create']); 
        Route::post('/stocks', [StocksController::class, 'store']);
        Route::delete('/stocks/{id}', [StocksController::class, 'destroy']);
        Route::get('/stocks/{id}/edit', [StocksController::class, 'edit']);
        Route::put('/stocks/{id}', [StocksController::class, 'update']);

        // Gestion des villes
        Route::get('/villes', [VillesController::class, 'index']);
    });

    // Profil Administrateur
    Route::prefix('/api/admin')->group(function () {
        // Gestion des categories
        Route::get('/categories', [CategorieController::class, 'index']);
        Route::get('/categories/create', [CategorieController::class, 'create']); 
        Route::post('/categories', [CategorieController::class, 'store']);
        Route::delete('/categories/{id}', [CategorieController::class, 'destroy']);
        Route::get('/categories/{id}/edit', [CategorieController::class, 'edit']);
        Route::put('/categories/{id}', [CategorieController::class, 'update']);

        // Gestion des commandes
        Route::get('/commandes', [CommandesController::class, 'index']);
        // Route::get('/commandes/create', [SignalementController::class, 'create']); 
        Route::post('/commandes', [CommandesController::class, 'store']);
        Route::delete('/commandes/{id}', [CommandesController::class, 'destroy']);
        Route::get('/commandes/{id}/edit', [CommandesController::class, 'edit']);
        Route::put('/commandes/{id}', [CommandesController::class, 'update']);

        // Gestion des commercants
        Route::get('/commercants', [CommercantController::class, 'index']);
        Route::get('/commercants/create', [CommercantController::class, 'create']); 
        Route::post('/commercants', [CommercantController::class, 'store']);
        Route::delete('/commercants/{id}', [CommercantController::class, 'destroy']);
        Route::get('/commercants/{id}/edit', [CommercantController::class, 'edit']);
        Route::put('/commercants/{id}', [CommercantController::class, 'update']);

        // Gestion des notations
        Route::get('/notations', [NotationController::class, 'index']);
        // Route::get('/notations/create', [UserController::class, 'create']); 
        Route::post('/notations', [NotationController::class, 'store']);
        Route::delete('/notations/{id}', [NotationController::class, 'destroy']);
        Route::get('/notations/{id}/edit', [NotationController::class, 'edit']);
        Route::put('/notations/{id}', [NotationController::class, 'update']);

        // Gestion des produits
        Route::get('/products', [ProduitsController::class, 'index']);
        Route::get('/products/create', [ProduitsController::class, 'create']); 
        Route::post('/products', [ProduitsController::class, 'store']);
        Route::delete('/products/{id}', [ProduitsController::class, 'destroy']);
        Route::get('/products/{id}/edit', [ProduitsController::class, 'edit']);
        Route::put('/products/{id}', [ProduitsController::class, 'update']);

        // Gestion des signalements
        Route::get('/signalements', [SignalementController::class, 'index']);
        Route::get('/signalements/create', [SignalementController::class, 'create']); 
        Route::post('/signalements', [SignalementController::class, 'store']);
        Route::delete('/signalements/{id}', [SignalementController::class, 'destroy']);
        Route::get('/signalements/{id}/edit', [SignalementController::class, 'edit']);
        Route::put('/signalements/{id}', [SignalementController::class, 'update']);

        // Gestion des stocks
        Route::get('/stocks', [StocksController::class, 'index']);
        Route::get('/stocks/create', [StocksController::class, 'create']); 
        Route::post('/stocks', [StocksController::class, 'store']);
        Route::delete('/stocks/{id}', [StocksController::class, 'destroy']);
        Route::get('/stocks/{id}/edit', [StocksController::class, 'edit']);
        Route::put('/stocks/{id}', [StocksController::class, 'update']);

        // Gestion des utilisateurs
        Route::get('/users', [UserController::class, 'index']);
        Route::get('/users/create', [UserController::class, 'create']); 
        Route::post('/users', [UserController::class, 'store']);
        Route::delete('/users/{id}', [UserController::class, 'destroy']);
        Route::get('/users/{id}/edit', [UserController::class, 'edit']);
        Route::put('/users/{id}', [UserController::class, 'update']);

        // Gestion des villes
        Route::get('/villes', [VillesController::class, 'index']);
        Route::get('/villes/create', [VillesController::class, 'create']); 
        Route::post('/villes', [VillesController::class, 'store']);
        Route::delete('/villes/{id}', [VillesController::class, 'destroy']);
        Route::get('/villes/{id}/edit', [VillesController::class, 'edit']);
        Route::put('/villes/{id}', [VillesController::class, 'update']);
    });

// 🛡️ Authentifié (consommateur ou commerçant)
Route::middleware('auth:sanctum')->group(function () {

    // // 👤 Profil Consommateur
    // Route::prefix('/api/consumer')->group(function () {
    //     Route::get('/profile', [UserController::class, 'show']);
    //     Route::put('/profile/update', [UserController::class, 'update']);
    //     Route::delete('/delete', [UserController::class, 'destroy']);

    //     // Gestion des categories
    //     Route::get('/categories', [CategorieController::class, 'index']);

    //     // Gestion des commandes
    //     Route::get('/commandes', [SignalementController::class, 'index']);
    //     Route::get('/commandes/create', [SignalementController::class, 'create']); 
    //     Route::post('/commandes', [SignalementController::class, 'store']);
    //     Route::delete('/commandes/{id}', [SignalementController::class, 'destroy']);
    //     Route::get('/commandes/{id}/edit', [SignalementController::class, 'edit']);
    //     Route::put('/commandes/{id}', [SignalementController::class, 'update']);

    //     // Gestion des commercants
    //     Route::get('/commercants', [CommercantController::class, 'index']);

    //     // Gestion des notations
    //     Route::get('/notations', [UserController::class, 'index']);
    //     Route::get('/notations/create', [UserController::class, 'create']); 
    //     Route::post('/notations', [UserController::class, 'store']);
    //     Route::delete('/notations/{id}', [UserController::class, 'destroy']);
    //     Route::get('/notations/{id}/edit', [UserController::class, 'edit']);
    //     Route::put('/notations/{id}', [UserController::class, 'update']);

    //     // Gestion des produits
    //     Route::get('/products', [ProduitsController::class, 'index']);
    //     Route::get('/products/{id}', [ProduitsController::class, 'show']);
    //     Route::get('/products/create', [ProduitsController::class, 'create']); 
    //     Route::post('/products', [ProduitsController::class, 'store']);

    //     // Gestion des signalements
    //     Route::get('/signalements', [SignalementController::class, 'index']);
    //     Route::get('/signalements/create', [SignalementController::class, 'create']); 
    //     Route::post('/signalements', [SignalementController::class, 'store']);
    //     Route::delete('/signalements/{id}', [SignalementController::class, 'destroy']);
    //     Route::get('/signalements/{id}/edit', [SignalementController::class, 'edit']);
    //     Route::put('/signalements/{id}', [SignalementController::class, 'update']);
    // });

    // // 👤 Profil Commerçant
    // Route::prefix('/api/commercant')->group(function () {
    //     Route::get('/profile', [CommercantController::class, 'show']);
    //     Route::put('/profile/update', [CommercantController::class, 'update']);
    //     Route::delete('/delete', [CommercantController::class, 'destroy']);

    //     // Gestion des produits
    //     Route::post('/products', [ProduitsController::class, 'store']);
    //     Route::put('/products/{id}', [ProduitsController::class, 'update']);
    //     Route::delete('/products/{id}', [ProduitsController::class, 'destroy']);

    //     // Gestion des commandes
    //     Route::get('/commandes', [SignalementController::class, 'index']);
    //     Route::get('/commandes/create', [SignalementController::class, 'create']); 
    //     Route::post('/commandes', [SignalementController::class, 'store']);
    //     Route::delete('/commandes/{id}', [SignalementController::class, 'destroy']);
    //     Route::get('/commandes/{id}/edit', [SignalementController::class, 'edit']);
    //     Route::put('/commandes/{id}', [SignalementController::class, 'update']);

    //     // Gestion des notations
    //     Route::get('/notations', [UserController::class, 'index']);
    //     Route::get('/notations/{id}/edit', [UserController::class, 'edit']);
    //     Route::put('/notations/{id}', [UserController::class, 'update']);

    //     // Gestion des produits
    //     Route::get('/products', [ProduitsController::class, 'index']);
    //     Route::get('/products/create', [ProduitsController::class, 'create']); 
    //     Route::post('/products', [ProduitsController::class, 'store']);
    //     Route::delete('/products/{id}', [ProduitsController::class, 'destroy']);
    //     Route::get('/products/{id}/edit', [ProduitsController::class, 'edit']);
    //     Route::put('/products/{id}', [ProduitsController::class, 'update']);

    //     // Gestion des signalements
    //     Route::get('/signalements', [SignalementController::class, 'index']);
    //     Route::put('/signalements/{id}', [SignalementController::class, 'update']);

    //     // Gestion des stocks
    //     Route::get('/stocks', [StocksController::class, 'index']);
    //     Route::get('/stocks/create', [StocksController::class, 'create']); 
    //     Route::post('/stocks', [StocksController::class, 'store']);
    //     Route::delete('/stocks/{id}', [StocksController::class, 'destroy']);
    //     Route::get('/stocks/{id}/edit', [StocksController::class, 'edit']);
    //     Route::put('/stocks/{id}', [StocksController::class, 'update']);

    //     // Gestion des villes
    //     Route::get('/villes', [VillesController::class, 'index']);
    // });

    // // Profil Administrateur
    // Route::prefix('/api/admin')->group(function () {
    //     // Gestion des categories
    //     Route::get('/categories', [CategorieController::class, 'index']);
    //     Route::get('/categories/create', [CategorieController::class, 'create']); 
    //     Route::post('/categories', [CategorieController::class, 'store']);
    //     Route::delete('/categories/{id}', [CategorieController::class, 'destroy']);
    //     Route::get('/categories/{id}/edit', [CategorieController::class, 'edit']);
    //     Route::put('/categories/{id}', [CategorieController::class, 'update']);

    //     // Gestion des commandes
    //     Route::get('/commandes', [SignalementController::class, 'index']);
    //     // Route::get('/commandes/create', [SignalementController::class, 'create']); 
    //     Route::post('/commandes', [SignalementController::class, 'store']);
    //     Route::delete('/commandes/{id}', [SignalementController::class, 'destroy']);
    //     Route::get('/commandes/{id}/edit', [SignalementController::class, 'edit']);
    //     Route::put('/commandes/{id}', [SignalementController::class, 'update']);

    //     // Gestion des commercants
    //     Route::get('/commercants', [CommercantController::class, 'index']);
    //     Route::get('/commercants/create', [CommercantController::class, 'create']); 
    //     Route::post('/commercants', [CommercantController::class, 'store']);
    //     Route::delete('/commercants/{id}', [CommercantController::class, 'destroy']);
    //     Route::get('/commercants/{id}/edit', [CommercantController::class, 'edit']);
    //     Route::put('/commercants/{id}', [CommercantController::class, 'update']);

    //     // Gestion des notations
    //     Route::get('/notations', [UserController::class, 'index']);
    //     // Route::get('/notations/create', [UserController::class, 'create']); 
    //     Route::post('/notations', [UserController::class, 'store']);
    //     Route::delete('/notations/{id}', [UserController::class, 'destroy']);
    //     Route::get('/notations/{id}/edit', [UserController::class, 'edit']);
    //     Route::put('/notations/{id}', [UserController::class, 'update']);

    //     // Gestion des produits
    //     Route::get('/products', [ProduitsController::class, 'index']);
    //     Route::get('/products/create', [ProduitsController::class, 'create']); 
    //     Route::post('/products', [ProduitsController::class, 'store']);
    //     Route::delete('/products/{id}', [ProduitsController::class, 'destroy']);
    //     Route::get('/products/{id}/edit', [ProduitsController::class, 'edit']);
    //     Route::put('/products/{id}', [ProduitsController::class, 'update']);

    //     // Gestion des signalements
    //     Route::get('/signalements', [SignalementController::class, 'index']);
    //     Route::get('/signalements/create', [SignalementController::class, 'create']); 
    //     Route::post('/signalements', [SignalementController::class, 'store']);
    //     Route::delete('/signalements/{id}', [SignalementController::class, 'destroy']);
    //     Route::get('/signalements/{id}/edit', [SignalementController::class, 'edit']);
    //     Route::put('/signalements/{id}', [SignalementController::class, 'update']);

    //     // Gestion des stocks
    //     Route::get('/stocks', [StocksController::class, 'index']);
    //     Route::get('/stocks/create', [StocksController::class, 'create']); 
    //     Route::post('/stocks', [StocksController::class, 'store']);
    //     Route::delete('/stocks/{id}', [StocksController::class, 'destroy']);
    //     Route::get('/stocks/{id}/edit', [StocksController::class, 'edit']);
    //     Route::put('/stocks/{id}', [StocksController::class, 'update']);

    //     // Gestion des utilisateurs
    //     Route::get('/users', [UserController::class, 'index']);
    //     Route::get('/users/create', [UserController::class, 'create']); 
    //     Route::post('/users', [UserController::class, 'store']);
    //     Route::delete('/users/{id}', [UserController::class, 'destroy']);
    //     Route::get('/users/{id}/edit', [UserController::class, 'edit']);
    //     Route::put('/users/{id}', [UserController::class, 'update']);

    //     // Gestion des villes
    //     Route::get('/villes', [VillesController::class, 'index']);
    //     Route::get('/villes/create', [VillesController::class, 'create']); 
    //     Route::post('/villes', [VillesController::class, 'store']);
    //     Route::delete('/villes/{id}', [VillesController::class, 'destroy']);
    //     Route::get('/villes/{id}/edit', [VillesController::class, 'edit']);
    //     Route::put('/villes/{id}', [VillesController::class, 'update']);
    // });
    

    // 📦 Panier
    // Route::get('/cart', [CartController::class, 'index']);
    // Route::post('/cart/add/{product_id}', [CartController::class, 'add']);
    // Route::put('/cart/update/{product_id}', [CartController::class, 'update']);
    // Route::delete('/cart/remove/{product_id}', [CartController::class, 'remove']);

    // 🧾 Commandes
    Route::post('/orders/create', [CommandesController::class, 'store']);
    Route::get('/orders/history', [CommandesController::class, 'history']);
    Route::get('/orders/{id}', [CommandesController::class, 'show']);

    // 💬 Avis
    Route::post('/reviews', [NotationController::class, 'store']);

    // ❤️ Favoris
    // Route::get('/favorites', [FavoriteController::class, 'index']);
    // Route::post('/favorites/{product_id}', [FavoriteController::class, 'add']);
    // Route::delete('/favorites/{product_id}', [FavoriteController::class, 'remove']);

});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
