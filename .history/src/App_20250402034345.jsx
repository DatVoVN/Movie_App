import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      <header className="h-14 bg-slate-950 flex justify-between text-white">
        <div className="flex items-center">
          <img src="/netflix.png" className="w-28" />
          <a href="#">Phim</a>
          <a href="#">Truyền hình</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </header>
    </div>
  );
}
export default App;
