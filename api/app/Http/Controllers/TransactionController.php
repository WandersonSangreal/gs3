<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\Transaction;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;

class TransactionController extends Controller
{
    public function index(Card $card)
    {
        $transactions = Transaction::where('card_id', $card->getKey())->limit(20)->get()->toArray();

        $results = [];

        foreach ($transactions as $transaction) {

            if (!array_key_exists($transaction['d'], $results)) {
                $results[$transaction['d']] = ['date' => $transaction['d'], 'items' => []];
            }

            array_push($results[$transaction['d']]['items'], $transaction);

        }

        return response(array_values($results));
    }

    public function store(StoreTransactionRequest $request)
    {
        //
    }

    public function show(Transaction $transaction)
    {
        //
    }

    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        //
    }

    public function destroy(Transaction $transaction)
    {
        //
    }
}
