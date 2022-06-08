export default function EventModal() {
  return (
    <form className="bg-white rounded-lg shadow-2xl w-1/4">
      <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
        <span className="material-icons-outlined text-gray-400">
          drag_handle
        </span>
        <div>
          <button>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        </div>
      </header>
      <div className="p-3">
        <div className="grid grid-cols-1/5 items-end gap-y-7">
          <div />
          <input
            type="text"
            name="title"
            placeholder="Add title"
            required
            className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
          />
          <span className="material-icons-outlined text-gray-400">
            schedule
          </span>
          <p>Friday, June 03</p>
          <span className="material-icons-outlined text-gray-400">segment</span>
          <input
            type="text"
            name="description"
            placeholder="Add a description"
            required
            className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            defaultValue
          />
          <span className="material-icons-outlined text-gray-400">
            bookmark_border
          </span>
          <div className="flex gap-x-2">
            <span className="bg-indigo-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
              <span className="material-icons-outlined text-white text-sm">
                check
              </span>
            </span>
            <span className="bg-gray-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer" />
            <span className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer" />
            <span className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer" />
            <span className="bg-red-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer" />
            <span className="bg-purple-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer" />
          </div>
        </div>
      </div>
      <footer className="flex justify-end border-t p-3 mt-5">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
        >
          Save
        </button>
      </footer>
    </form>
  );
}
