import Author from "./components/Author";
import Citations from "./components/Citations";
import HeroSection from "./components/HeadlineSection";
import ImageSection from "./components/ImageSection";
import MapOne from "./components/MapOne";
import MapTwo from "./components/MapTwo";
import NarrativeSection from "./components/Narrative";

export function App(): React.JSX.Element {
  return (
    <calcite-shell>
      <HeroSection />
      <MapTwo />
      <NarrativeSection />
      <ImageSection />
      <MapOne />
      <Citations />
      <Author />
    </calcite-shell>
  );
}
