<?php

namespace App\Http\Controllers;

use App\Models\commandes_produit;
use Illuminate\Http\Request;

class CommandesProduitController extends Controller
{
    public function index()
    {
        $commandes = commandes_produit::all();
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
        $commande = commandes_produit::create($validatedData);
        return response()->json($commande, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $commande = commandes_produit::findOrFail($id);
        return response()->json($commande);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(commandes_produit $commandes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Récupérer l'utilisateur à modifier
        $commande = commandes_produit::findOrFail($id);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'quantite' => 'required|integer|max:2',
            'prix_unitaire' => 'required|integer|max:255',
        ]);

        // Mettre à jour les données de l'utilisateur
        $commande->update($validatedData);

        // Rediriger avec un message de succès
        return redirect()->route('')->with('success', 'Utilisateur mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(commandes_produit $commandes)
    {
        $commandes->delete();
        return response()->json(['message' => 'Commande supprimée avec succès']);
    }
}
