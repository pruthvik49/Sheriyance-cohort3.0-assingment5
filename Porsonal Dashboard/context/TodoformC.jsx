import React, { createContext, useEffect, useState } from "react";

const STORAGE_KEY = "todo";

const loadTodos = () => {
  const savedTodos = window.localStorage.getItem(STORAGE_KEY);
  return savedTodos ? JSON.parse(savedTodos) : [];
};

// Setup blank store
export const UserContext = createContext();

// Provider wraps the app and serves state to consumers
export const ContextProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState(loadTodos);
  const [resisteruser, setResisteruser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("Ruser") || localStorage.getItem("Ruser") || "[]") || [];
    } catch {
      return [];
    }
  });
  const [loginuser, setLoginuser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("Luser")) || null;
    } catch {
      return null;
    }
  });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <UserContext.Provider value={{ showForm, setShowForm, todos, setTodos, resisteruser, setResisteruser, loginuser, setLoginuser }}>
      {children}
    </UserContext.Provider>
  );
};
