"use client";

import {
  decrement,
  increment,
  incrementByAmount,
  resetCount,
} from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";

const Count = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div>
      <div className="flex items-center justify-center gap-4 m-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-4 rounded-md bg-purple-700"
        >
          Increment
        </button>
        <h4 className="p-5 rounded-md border border-orange-500">{count}</h4>
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-4 rounded-md bg-red-400"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-6 py-4 rounded-md bg-green-400"
        >
          Increment By Value (5)
        </button>
        <button
          onClick={() => dispatch(resetCount())}
          className="px-6 py-4 rounded-md bg-yellow-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Count;
