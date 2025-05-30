import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      <header className="h-14 bg-slate-950 flex justify-between text-white items-center px-8">
        <div className="flex items-center gap-4">
          <img src="/netflix.png" className="w-16 sm:w-28" />
          <a href="#">Phim</a>
          <a href="#">Truyền hình</a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>
      <div>
        <img src=""/>
      </div>
    </div>
  );
}
export default App;
