"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React from "react";
import { useState, FormEvent } from "react";


export default function Home() {
  const [inpValue, setInpValue] = useState("");
  const{ push }=useRouter();
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    push(`/prediction-name/${inpValue}`)
  
  }
  return (
    <div className="flex flex-col items-center justify-center">
    <h1 className="mb-4">Prediction Information</h1>
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
      <label htmlFor="" className="mb-2">Enter your name</label>
      <div className="">

      <input
        type="text"
        placeholder="Enter your name"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
        className="border-yellow-200 border-2  p-1"
        />
      <button type="submit" className="p-1 border-yellow-200 border-2 m-1 bg-black text-white">submit</button>
        </div>
    </form>
  </div>
  );
}
