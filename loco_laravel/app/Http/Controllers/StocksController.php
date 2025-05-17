<?php

namespace App\Http\Controllers;

use App\Models\Stocks;
use App\Http\Requests\StoreStocksRequest;
use App\Http\Requests\UpdateStocksRequest;
use Illuminate\Http\Request;

class StocksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $stocks = Stocks::all();
        return response()->json($stocks);
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
        $stock = Stocks::create($validatedData);
        return response()->json($stock, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $stock = Stocks::findOrFail($id);
        return response()->json($stock);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Stocks $stocks)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Récupérer l'utilisateur à modifier
        $stock = Stocks::findOrFail($id);

        // Valider les données de la requête
        $validatedData = $request->validate([
            'nombre_produits' => 'required|integer|max:255',
        ]);

        // Mettre à jour les données de l'utilisateur
        $stock->update($validatedData);

        // Rediriger avec un message de succès
        return redirect()->route('')->with('success', 'Stock mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Stocks $stocks)
    {
        $stocks->delete();
        return response()->json(['message' => 'Commande supprimée avec succès']);
    }
}
