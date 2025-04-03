import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/Header";
import FeatureMovie from "./components/FeatureMovie";
import MediaList from "./components/MediaList";

function App() {
  return (
    <div>
      <Header/>
     <FeatureMovie/>
     <MediaList/>
    </div>
  );
}
export default App;
