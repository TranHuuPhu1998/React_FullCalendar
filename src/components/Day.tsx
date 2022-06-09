import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

interface IProps {
  day: any;
  rowIdx: number;
}

const Day = ({ day, rowIdx }: IProps): JSX.Element => {
  const { setShowEventModal } = useContext(GlobalContext);
  const dayEvents = [
    {
      title: "Event 1",
      label: "red",
    },
  ];
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("dddd").toUpperCase()}</p>
        )}
        <p className={`text-sm text-center`}>{day.format("DD")}</p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            // onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
