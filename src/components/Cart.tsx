"use client";

import React from "react";
import Image from "next/image";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IProduct } from "@/types/globalTypes";
import productsData from "../../public/data/products.json";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.cart);

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };

  const total = products.reduce(
    (acc, product) => acc + product.price * (product.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8 text-center">
        Your Cart
      </h2>
      {products.length > 0 ? (
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {products.map((item: IProduct) => (
                <li
                  key={item._id}
                  className="p-4 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 border text-black">
                    <label
                      htmlFor={`quantity-${item._id}`}
                      className="sr-only text-black"
                    >
                      Quantity {item.quantity || 1}
                    </label>
                    <input
                      id={`quantity-${item._id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleUpdateQuantity(item._id, parseInt(e.target.value))
                      }
                      className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => handleRemoveFromCart(item._id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 text-2xl font-bold text-gray-900 text-right">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      ) : (
        <p className="text-xl text-gray-600 text-center">
          Your cart is empty. Add some products!
        </p>
      )}

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product: IProduct) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
