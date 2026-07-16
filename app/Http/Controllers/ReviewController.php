<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReviewRequest;
use App\Http\Resources\ReviewResource;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index(Request $request)
    {
        $query = Review::query();

        foreach ($request->query() as $field => $value) {
            $query->where($field, $value);
        }

        return ReviewResource::collection($query->get());
    }

    public function store(StoreReviewRequest $request)
    {
        Review::create($request->validated());

        $reviews = Review::all();
        return ReviewResource::collection($reviews);
    }

    public function update(StoreReviewRequest $request, Review $review)
    {
        $review->update($request->validated());

        $reviews = Review::all();
        return ReviewResource::collection($reviews);
    }

    public function destroy(Review $review)
    {
        $review->delete();
        return response()->json(['message' => 'Recensie verwijderd']);
    }
}
