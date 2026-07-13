<?php

namespace App\Http\Requests;

class StoreAuthorRequest extends BaseFormRequest
{
    public function rules(): array
    {
        return [
            'name' => "required|string|max:255"
        ];
    }
}
