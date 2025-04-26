
import Header from "../components/Header";
import FeatureMovie from "../components/FeatureMovie";
import MediaList from "../components/MediaList";
import { TABS_TOP_RATED, TABS_TRENDING } from "../libs/constants";

function HomePage() {

  return (
    <div>
     <FeatureMovie/>
     <MediaList title="TRENDING" tabs={TABS_TRENDING}/>
     <MediaList title="TOP_RATES" tabs={TABS_TOP_RATED}/>
    </div>
  );
}
export default HomePage;
