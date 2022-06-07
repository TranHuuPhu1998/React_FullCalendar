interface IProps {
  dayItem: any;
  rowIdx: number;
}

const Day = ({ dayItem, rowIdx }: IProps): JSX.Element => {
  return (
    <div className="border border-gray-200 flex flex-col h-40">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <div className="p-2 border-b border-gray-200 w-full xl:text-sm text-xs text-center font-bold">
            <span className="xl:block lg:block md:block sm:block hidden">
              {dayItem.format("dddd").toUpperCase()}
            </span>
            <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
              {dayItem.format("ddd").toUpperCase()}
            </span>
          </div>
        )}
        <p className={`text-sm p-1 my-1 text-center`}>{dayItem.format("DD")}</p>
      </header>
    </div>
  );
};

export default Day;
