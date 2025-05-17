<?php

namespace App\Http\Controllers;

use App\Models\Commercant;
use App\Http\Requests\StoreCommercantRequest;
use App\Http\Requests\UpdateCommercantRequest;
use Illuminate\Http\Request;

class CommercantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $commercant = Commercant::all();
        return response()->json($commercant);
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
        $commercant = Commercant::create($validatedData);
        return response()->json($commercant, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $commercant = Commercant::findOrFail($id);
        return response()->json($commercant);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Commercant $commercant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Récupérer l'utilisateur à modifier
        $commercant = Commercant::findOrFail($id);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'nom_entreprise' => 'required|string|max:255',
            'adresse_mail' => 'required|string|max:255',
            'adresse' => 'required|string|max:255',
            'SIRET' => 'required|integer|max:255',
            'SIREN' => 'required|integer|max:255',
            'telephone' => 'required|integer|max:255',
            'mot_de_passe' => 'required|password|max:255',
        ]);

        // Mettre à jour les données de l'utilisateur
        $commercant->update($validatedData);

        // Rediriger avec un message de succès
        return redirect()->route('')->with('success', 'Commercant mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Commercant $commercant)
    {
        $commercant->delete();
        return response()->json(['message' => 'Commande supprimée avec succès']);
    }
}
