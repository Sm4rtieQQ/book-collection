<?php

namespace App\Http\Requests;

class StoreBookRequest extends BaseFormRequest
{
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'summary' => 'required|string',
            'author_id' => 'required|exists:authors,id'
        ];
    }
}
