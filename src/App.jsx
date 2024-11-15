import "./style/App.css";
import React from "react";
import Container from "./components/container.jsx";
import {
  useContext,
  createContext,
  useState,
} from "react";

export const cartContext = React.createContext();

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState("Arcade");
  const [page, setPage] = useState(1);
  const [planPrice,setPlanPrice] = useState(9)
  const [duration, setDuration] =
    useState("Monthly");
  const [selectedAddOns, setSelectedAddOns] =
    useState([]);
  const [addOnPrice, setAddOnPrice] = useState(0);


  return (
    <cartContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        page,
        setPage,
        plan,
        setPlan,
        duration,
        setDuration,
        selectedAddOns,
        setSelectedAddOns,
        planPrice,
        setPlanPrice,
        addOnPrice,
        setAddOnPrice,
      }}
    >
      <Container />
    </cartContext.Provider>
  );
}

export default App;
