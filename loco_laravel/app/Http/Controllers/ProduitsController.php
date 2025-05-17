<?php

namespace App\Http\Controllers;

use App\Models\Produits;
use App\Http\Requests\StoreProduitsRequest;
use App\Http\Requests\UpdateProduitsRequest;
use Illuminate\Http\Request;

class ProduitsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $produits = Produits::all(); // Récupérer toutes les catégories
        return response()->json($produits); // Retourner les catégories en JSON
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return response()->json(['message' => 'Formulaire de création disponible']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $produit = Produits::create($request->validated()); // Crée un nouveau produit avec les données validées
        return response()->json($produit, 201); // Retourne le produit créé avec un code 201
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $post = Produits::findOrFail($id); // Récupère un seul élément ou retourne une 404
        return response()->json($post); // ou return view('posts.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produits $produits)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Récupérer l'utilisateur à modifier
        $produit = Produits::findOrFail($id);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'nom_produit' => 'required|string|max:255',
            'description_produit' => 'required|string|max:255',
            'prix' => 'required|float|max:255',
        ]);

        // Mettre à jour les données de l'utilisateur
        $produit->update($validatedData);

        // Rediriger avec un message de succès
        return redirect()->route('')->with('success', 'Produit mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produits $produits)
    {
        $produits->delete(); // Supprime le produit
        return response()->json(['message' => 'Produit supprimé avec succès']); // Retourne un message de succès
    }
}
