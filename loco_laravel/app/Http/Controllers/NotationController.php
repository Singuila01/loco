<?php

namespace App\Http\Controllers;

use App\Models\Notation;
use App\Http\Requests\StoreNotationRequest;
use App\Http\Requests\UpdateNotationRequest;
use Illuminate\Http\Request;

class NotationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notation = Notation::all();
        return response()->json($notation);
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
        $notation = Notation::create($validatedData);
        return response()->json($notation, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $notation = Notation::findOrFail($id);
        return response()->json($notation);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Notation $notation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Récupérer l'utilisateur à modifier
        $notation = Notation::findOrFail($id);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'note' => 'required|integer|max:255',
            'description_note' => 'required|string|max:255',
        ]);

        // Mettre à jour les données de l'utilisateur
        $notation->update($validatedData);

        // Rediriger avec un message de succès
        return redirect()->route('')->with('success', 'Notation mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Notation $notation)
    {
        $notation->delete();
        return response()->json(['message' => 'Commande supprimée avec succès']);
    }
}
