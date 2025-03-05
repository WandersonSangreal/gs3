<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Http\Requests\StoreFavoriteRequest;
use App\Http\Requests\UpdateFavoriteRequest;

class FavoriteController extends Controller
{
    public function index()
    {
        $favorites = Favorite::where('user_id', auth()->id())->get();

        return response($favorites);
    }

    public function store(StoreFavoriteRequest $request)
    {
        //
    }

    public function show(Favorite $favorite)
    {
        //
    }

    public function update(UpdateFavoriteRequest $request, Favorite $favorite)
    {
        //
    }

    public function destroy(Favorite $favorite)
    {
        //
    }
}
