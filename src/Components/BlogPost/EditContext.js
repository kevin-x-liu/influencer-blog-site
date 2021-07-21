import React, { useState, createContext } from "react";

const EditContext = createContext();

export default function EditProvider({ children }) {
  const [edit, setEdit] = useState(false);

  return (
    <EditContext.Provider value={{ edit, setEdit }}>
      {children}
    </EditContext.Provider>
  );
}

export { EditContext };
