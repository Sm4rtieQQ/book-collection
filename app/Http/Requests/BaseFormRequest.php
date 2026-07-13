<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Override;

class BaseFormRequest extends FormRequest
{
    #[Override]
    protected function failedValidation(Validator $validator): void
    {
        throw new HttpResponseException(new JsonResponse([
            'errors' => $validator->errors(),
            'messages' => 'De ingevoerde waardes zijn niet juist.'
        ], 422));
    }
}
