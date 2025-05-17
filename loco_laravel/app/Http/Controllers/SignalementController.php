<?php

namespace App\Http\Controllers;

use App\Models\Signalement;
use App\Http\Requests\StoreSignalementRequest;
use App\Http\Requests\UpdateSignalementRequest;
use Illuminate\Http\Request;

class SignalementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $signalement = Signalement::all();
        return response()->json($signalement);
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
        $signalement = Signalement::create($validatedData);
        return response()->json($signalement, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $signalement = Signalement::findOrFail($id);
        return response()->json($signalement);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Signalement $signalement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Récupérer l'utilisateur à modifier
        $commande = Signalement::findOrFail($id);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'description_signalement' => 'required|string|max:255',
        ]);

        // Mettre à jour les données de l'utilisateur
        $commande->update($validatedData);

        // Rediriger avec un message de succès
        return redirect()->route('')->with('success', 'Utilisateur mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Signalement $signalement)
    {
        //
    }
}
