import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      <header className="h-14 bg-slate-950 flex justify-between">
        <div className="w-28">
          <img src="/netflix.png" />
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
