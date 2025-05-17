<?php

namespace App\Http\Controllers;

use App\Models\TypesUtilisateur;
use App\Http\Requests\StoreTypesUtilisateurRequest;
use App\Http\Requests\UpdateTypesUtilisateurRequest;
use Illuminate\Http\Request;

class TypesUtilisateurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $type_utilisateur = TypesUtilisateur::all();
        return response()->json($type_utilisateur);
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
        $validatedData = $request->validated();
        $type_utilisateur = TypesUtilisateur::create($validatedData);
        return response()->json($type_utilisateur, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $type_utilisateur = TypesUtilisateur::findOrFail($id);
        return response()->json($type_utilisateur);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TypesUtilisateur $typesUtilisateur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Récupérer l'utilisateur à modifier
        $type_utilisateur = TypesUtilisateur::findOrFail($id);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'libelle_type' => 'required|string|max:255',
        ]);

        // Mettre à jour les données de l'utilisateur
        $type_utilisateur->update($validatedData);

        // Rediriger avec un message de succès
        return redirect()->route('')->with('success', 'Utilisateur mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TypesUtilisateur $typesUtilisateur)
    {
        $typesUtilisateur->delete();
        return response()->json(['message' => 'Type utilisateur supprimé avec succès']);
    }
}
