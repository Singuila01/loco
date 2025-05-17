<?php

namespace App\Http\Controllers;

use App\Models\Villes;
use App\Http\Requests\StoreVillesRequest;
use App\Http\Requests\UpdateVillesRequest;
use Illuminate\Http\Request;

class VillesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $villes = Villes::all(); // Récupérer toutes les catégories
        return response()->json($villes); // Retourner les catégories en JSON
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
        $ville = Villes::create($validatedData); // Créer une nouvelle catégorie
        return response()->json($ville, 201); // Retourner une réponse
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $ville = Villes::findOrFail($id); // Récupère un seul élément ou retourne une 404
        return response()->json($ville); // ou return view('posts.show', compact('post'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Villes $villes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVillesRequest $request, Villes $villes)
    {
        $validatedData = $request->validated();
        $villes->update($validatedData);
        return response()->json($villes);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Villes $villes)
    {
        $villes->delete();
        return response()->json(['message' => 'Ville supprimée avec succès']);
    }
}
