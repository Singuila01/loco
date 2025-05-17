<?php

namespace App\Http\Controllers;

use App\Models\PointsFidelisation;
use App\Http\Requests\StorePointsFidelisationRequest;
use App\Http\Requests\UpdatePointsFidelisationRequest;
use Illuminate\Http\Request;

class PointsFidelisationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $point_fidelite = PointsFidelisation::all();
        return response()->json($point_fidelite);
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
        $point_fidelisation = PointsFidelisation::create($validatedData);
        return response()->json($point_fidelisation, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $point_fidelisation = PointsFidelisation::findOrFail($id);
        return response()->json($point_fidelisation);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PointsFidelisation $pointsFidelisation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Récupérer l'utilisateur à modifier
        $point_fidelisation = PointsFidelisation::findOrFail($id);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'nombre' => 'required|integer|max:255',
        ]);

        // Mettre à jour les données de l'utilisateur
        $point_fidelisation->update($validatedData);

        // Rediriger avec un message de succès
        return redirect()->route('')->with('success', 'Point de fidelisation mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PointsFidelisation $pointsFidelisation)
    {
        $pointsFidelisation->delete();
        return response()->json(['message' => 'Commande supprimée avec succès']);
    }
}
