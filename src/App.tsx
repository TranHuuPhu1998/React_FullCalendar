import { useContext, useEffect, useState } from "react";
import "./App.css";
import { CalendarHeader } from "./components/CalendarHeader";
import EventModal from "./components/EventModal";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import { getMonth } from "./utils";

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currenMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
