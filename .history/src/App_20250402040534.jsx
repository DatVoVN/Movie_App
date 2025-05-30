import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
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
      <div className="relative text-white">
        <img src="https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg" className="aspect-video brightness-50"/>
        <div className="absolute bottom-[10%] left-8 w-1/3">
          <p>Inside Out 2</p>
          <div>
            <p>PG13</p>
            <p>2024-05-11</p>
          </div>
          <div>
            <p>Overview</p>
            <p>Teenager Riley&apos;s mind headquarters is undergoing a sudden
              demolition to make room for something entirely unexpected: new
              Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been
              running a successful operation by all accounts, aren’t sure how to
              feel when Anxiety shows up. And it looks like she’s not alone.</p>
          </div>
          <div>
            <button> <FontAwesomeIcon icon={faPlay}/>Trailer</button>
            <button>View Detail</button>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
          <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
          <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
          <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
        </ul>
      </div>
    </div>
  );
}
export default App;
