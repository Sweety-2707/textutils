import { useState } from "react";
import UtilityArea from "./componenets/UtilityArea";
import Header from "./componenets/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header title="TextUtils"/>
    <UtilityArea/>
    </>
  );
}

export default App;
