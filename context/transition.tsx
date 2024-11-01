"use client";
import React, { createContext, useState, ReactNode } from "react";

interface TransitionContextType {
  completed: boolean;
  toggleCompleted: (value: boolean) => void;
}

// Define the context with a default value
const TransitionContext = createContext<TransitionContextType>({
  completed: false,
  toggleCompleted: () => {},
});

interface TransitionProviderProps {
  children: ReactNode;
}

export const TransitionProvider: React.FC<TransitionProviderProps> = ({
  children,
}) => {
  const [completed, setCompleted] = useState<boolean>(false);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{
        completed,
        toggleCompleted,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
