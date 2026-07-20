<?php

namespace App\Http\Requests;

class StoreReviewRequest extends BaseFormRequest
{
    public function rules(): array
    {
        return [
            'text' => 'required|string|max:255',
            'book_id' => 'required|exists:books,id',
        ];
    }
}
