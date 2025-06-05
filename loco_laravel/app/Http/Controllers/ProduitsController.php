<?php

namespace App\Http\Controllers;

use App\Models\Produits;
use App\Http\Requests\StoreProduitsRequest;
use App\Http\Requests\UpdateProduitsRequest;
use Illuminate\Http\Request;

class ProduitsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $produits = Produits::all();
        return response()->json($produits);
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
        $produit = Produits::create($request->validate([
            'nom_produit' => 'required|string|max:100',
            'description_produit' => 'required|string|max:255',
            'prix_produit' => 'required|numeric|max:999.99',
            'nouveaute' => 'required|numeric|max:1',
            'nombre_produit' => 'required|numeric|max:999',
            'bio' => 'required|numeric|max:1',
            'quantite_disponible' => 'required|string|max:10',
            'vendu_par' => 'required|string|max:10',
            'id_type_poids' => 'required|numeric|max:1', 
            'id_commercant' => 'required|numeric|max:1', 
            'id_categorie' => 'required|numeric|max:1', 
        ]));
        return response()->json($produit, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $post = Produits::findOrFail($id);
        return response()->json($post);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produits $produits)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $produit = Produits::findOrFail($id);

        $validatedData = $request->validate([
            'nom_produit' => 'required|string|max:100',
            'description_produit' => 'required|string|max:255',
            'prix_produit' => 'required|numeric|max:999.99',
            'nouveaute' => 'required|numeric|max:1',
            'nombre_produit' => 'required|numeric|max:10',
            'bio' => 'required|numeric|max:1',
            'quantite_disponible' => 'required|string|max:10',
            'vendu_par' => 'required|string|max:10',
        ]);

        $produit->update($validatedData);

        return redirect()->route('')->with('success', 'Produit mis à jour avec succès.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produits $produits)
    {
        $produits->delete();
        return response()->json(['message' => 'Produit supprimé avec succès']);
    }
}
