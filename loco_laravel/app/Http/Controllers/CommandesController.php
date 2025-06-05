<?php

namespace App\Http\Controllers;

use App\Models\Commandes;
use App\Http\Requests\StoreCommandesRequest;
use App\Http\Requests\UpdateCommandesRequest;
use Illuminate\Http\Request;

class CommandesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $commandes = Commandes::all();
        return response()->json($commandes);
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
        $commande = Commandes::create($validatedData);
        return response()->json($commande, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $commande = Commandes::findOrFail($id);
        return response()->json($commande);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Commandes $commandes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Récupérer l'utilisateur à modifier
        $commande = Commandes::findOrFail($id);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'nom_produit' => 'required|string|max:100',
            'description_commande' => 'required|string|max:255',
            'prix_total' => 'required|numeric|max:999.99',
            'etat_commande' => 'required|integer|max:2',
        ]);

        // Mettre à jour les données de l'utilisateur
        $commande->update($validatedData);

        // Rediriger avec un message de succès
        return redirect()->route('')->with('success', 'Utilisateur mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Commandes $commandes)
    {
        $commandes->delete();
        return response()->json(['message' => 'Commande supprimée avec succès']);
    }
}
