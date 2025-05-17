<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Http\Requests\StoreCategorieRequest;
use App\Http\Requests\UpdateCategorieRequest;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categorie::all(); // Récupérer toutes les catégories
        return response()->json($categories); // Retourner les catégories en JSON
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return response()->json(['message' => 'Formulaire de création disponible']); // Exemple de réponse
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validated(); // Valider les données
        $categorie = Categorie::create($validatedData); // Créer une nouvelle catégorie
        return response()->json($categorie, 201); // Retourner une réponse
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $categorie = Categorie::findOrFail($id); // Récupère un seul élément ou retourne une 404
        return response()->json($categorie); // ou return view('posts.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categorie $categorie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Récupérer l'utilisateur à modifier
        $categorie = Categorie::findOrFail($id);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'nom_categorie' => 'required|string|max:255',
        ]);

        // Mettre à jour les données de l'utilisateur
        $categorie->update($validatedData);

        // Rediriger avec un message de succès
        return redirect()->route('')->with('success', 'Catégorie mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categorie $categorie)
    {
        $categorie->delete();
        return response()->json(['message' => 'Catégorie supprimée avec succès']);
    }
}
