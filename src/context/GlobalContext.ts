import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
  //   smallCalendarMonth: 0,
  //   setSmallCalendarMonth: (index) => {},
  //   daySelected: null,
  //   setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: (show: boolean) => {},
  //   dispatchCalEvent: ({ type, payload }) => {},
  //   savedEvents: [],
  selectedEvent: null,
  //   setSelectedEvent: () => {},
  //   setLabels: () => {},
  //   labels: [],
  //   updateLabel: () => {},
  //   filteredEvents: [],
});

export default GlobalContext;
