import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./components/Header";
import FeatureMovie from "./components/FeatureMovie";
import MediaList from "./components/MediaList";
import { TABS_TRENDING } from "./libs/constants";

function App() {
  return (
    <div>
      <Header/>
     <FeatureMovie/>
     <MediaList title="TRENDING" tabs={TABS_TRENDING}/>
    </div>
  );
}
export default App;
