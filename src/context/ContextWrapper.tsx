import dayjs from "dayjs";
import { useState } from "react";
import GlobalContext from "./GlobalContext";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal, setShowEventModal] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModal,
        setShowEventModal,
        selectedEvent: null,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
