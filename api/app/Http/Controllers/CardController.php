<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Http\Requests\StoreCardRequest;
use App\Http\Requests\UpdateCardRequest;

class CardController extends Controller
{
    public function index()
    {

        $cards = Card::where('user_id', auth()->id())->get();

        return response($cards);

    }

    public function store(StoreCardRequest $request)
    {
        //
    }

    public function show(Card $card)
    {
        //
    }

    public function update(UpdateCardRequest $request, Card $card)
    {
        //
    }

    public function destroy(Card $card)
    {
        //
    }
}
