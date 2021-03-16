<?php

namespace App\Http\Controllers;

use App\Aircrafts;
use Illuminate\Http\Request;

class AircraftController extends Controller
{
    public function showAll()
    {
        return response()->json( Aircrafts::all() );
    }

    public function showOne($id)
    {
        return response()->json(Aircrafts::find($id));
    }

    public function create(Request $request)
    {
        $aircraft = Aircrafts::create($request->all());
        return response()->json( $aircraft, 201);
    }

    public function update($id, Request $request)
    {
        $aircraft = Aircrafts::findOrFail($id);
        $aircraft->update($request->all());
        return response()->json($aircraft, 200);
    }

    public function delete($id)
    {
        Aircrafts::findOrFail($id);
        return response('Aircraft deleted!', 200);
    }


}
