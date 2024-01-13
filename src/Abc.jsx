// import React from 'react';
// import { useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { failed, fetchUser, handlefruitCakeLike, ordered, progress } from "./redux/fruits/fruitCake";
import { useDispatchWrapper } from "./redux/fruits/useDispatch";

export const Abc = () => {
  const { loading, loadingData } = useSelector((state) => state.fruitCake);
  const dispatch = useDispatchWrapper();

  // const handlefruitCakeLik = (amount) => {
  //   try {
  //     dispatch(progress());
  //     dispatch(ordered(amount));
  //     // dispatch(failed());
  //   } catch {
  //     console.warn("error");
  //   }
  // };

  return (
    <div>
      <div>
        <h1>No. of liked - {loadingData} </h1>
        <button onClick={() => dispatch(handlefruitCakeLike(5))}>
          progress cake
        </button>
        <button onClick={() => dispatch(ordered("3"))}>order cake</button>
        <button onClick={() => dispatch(ordered("3"))}>order cake</button>
        <button onClick={() => dispatch(fetchUser())}>fetch</button>
        <button onClick={() => dispatch(failed())}>failed cake</button>
      </div>
    </div>
  );
};
