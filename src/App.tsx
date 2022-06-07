import { useState } from "react";
import "./App.css";
import { CalendarHeader } from "./components/CalendarHeader";
import Month from "./components/Month";
import { getMonth } from "./utils";

function App() {
  const [currenMonth] = useState(getMonth());

  return (
    <div className="h-screen flex flex-col">
      <CalendarHeader />
      <div className="flex flex-1">
        <Month month={currenMonth} />
      </div>
    </div>
  );
}

export default App;
