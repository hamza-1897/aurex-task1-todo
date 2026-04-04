import React from "react";
import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import "./global.css";

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
     
      <Home />
    
    </>
       
  );
}
