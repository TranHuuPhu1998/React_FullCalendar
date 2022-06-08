import dayjs from "dayjs";
import { useState } from "react";
import GlobalContext from "./GlobalContext";

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [showEventModal] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        showEventModal,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
