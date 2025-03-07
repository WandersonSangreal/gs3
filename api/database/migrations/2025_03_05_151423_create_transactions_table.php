<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();

            $table->string('name');

            $table->float('value');
            $table->timestamp('date');
            $table->integer('by')->default(0);
            $table->boolean('attention')->default(false);

            $table->string('icon');

            $table->unsignedBigInteger('card_id');
            $table->foreign('card_id')->references('id')->on('cards');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
