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
    <div>
    <h1>Prediction Information</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Enter your name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  </div>
  );
}
