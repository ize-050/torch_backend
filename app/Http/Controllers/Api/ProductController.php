<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\ProductImage;
class ProductController extends Controller
{
    public function getAllproduct()
    {
        try{
            $product = Product::with('product_images')->
            orderBy('cat_id','asc')->
            limit(12)->where('product_status',1)->get();
            foreach($product as $key => $product){
               $res[$key] = [
                       'id' => $product->id,
                       'name' => $product->product_name,
                       'price' => $product->product_price,
                       'images' => asset('images/product/' . $product->id . '/' . $product->product_images[0]->image_names),
                       'description' => $product->product_detail,
                       'catgory_id' => $product->cat_id,
                       'created_at' => $product->created_at,
                       'updated_at' => $product->updated_at
                   
               ];
            }

            return response()->json($res);
        }
        catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    public function getProductDetail($id){
        try{
            $product = Product::with('product_images')->where('id', $id)->first();
            $res = [
                'id' => $product->id,
                'name' => $product->product_name,
                'price' => $product->product_price,
                'product_images' => $product->product_images->map(function($image) use ($product){
                    return asset('images/product/' . $product->id . '/' . $image->image_names);
                }),
                'description' => $product->product_detail,
                'category' => $product->cat_id,
                'created_at' => $product->created_at,
                'updated_at' => $product->updated_at
            ];
            return  response()->json($res);
        }
        catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    public function getAllproductByid($id){
        try{
            $product = Product::with('product_images')->where('cat_id',$id)->where('product_status',1)->get();
            foreach($product as $key => $product){
               $res[$key] = [
                       'id' => $product->id,
                       'name' => $product->product_name,
                       'price' => $product->product_price,
                       'images' => asset('images/product/' . $product->id . '/' . $product->product_images[0]->image_names),
                       'description' => $product->product_detail,
                       'catgory_id' => $product->cat_id,
                       'created_at' => $product->created_at,
                       'updated_at' => $product->updated_at
                   
               ];
            }

            return response()->json($res);
        }
        catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    public function updateImages(Request $request, $id)
    {

        try {
            $res =[];
            $request->validate([
                'product_images' => 'required',
            ]);
            if ($request->hasFile('product_images')) {
                $images = $request->file('product_images');
                $data = [];
                foreach ($images as $index => $image) {
                    $extension = $image->getClientOriginalExtension(); // Get the original extension of the file
                    $name = time() . '_' . uniqid() . '.' . $extension;
                    $productDirectory = public_path('/images/product/') . $id;
                    if (!file_exists($productDirectory)) {
                        mkdir($productDirectory, 0777, true); // Create the directory recursively
                    }

                    $destinationPath = $productDirectory;
                    $image->move($destinationPath, $name);

                    $productImage = new ProductImage;
                    $productImage->product_id = $id;
                    $productImage->image_names = $name;
                    $productImage->save();

                    $data = ProductImage::where('id', $productImage->id)->first();

                    $url = asset("/images/product/" . $id . "/" . $data->image_names);

                    $res[$index] = [
                        'image_id' => $data->id,
                        'url' => $url
                    ];
                }

            }


            return response()->json($res);
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function deleteImages($id)
    {
      
        try {
            
            
            // Find the image entry in the database
            $image = ProductImage::findOrFail($id);
            // Delete the image file from the folder
            $filePath = public_path('images/product/' . $image->product_id . '/' . $image->image_names);
            if (file_exists($filePath)) {
                unlink($filePath); 
            $image->delete();
            return response()->json(['message' => 'success'])->setStatusCode(200);
        } 
        } catch (\Exception $e) {
           
            return response()->json($e)->setStatusCode(500);
        }
    }
}


