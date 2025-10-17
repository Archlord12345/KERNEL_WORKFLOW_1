<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
=======
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';  // Importer les styles globaux
import './styles/App.css';  // Importer les styles globaux
>>>>>>> 94a91554e4fabb3bc9f53ef7137338392db017cc

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
