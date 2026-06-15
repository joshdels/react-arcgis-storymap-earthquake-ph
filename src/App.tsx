import Author from "./components/Author";
import HeroSection from "./components/HeadlineSection";
import ImageSection from "./components/ImageSection";
import { MapOne } from "./components/MapOne";
import NarrativeSection from "./components/Narrative";

export function App(): React.JSX.Element {
  return (
    <calcite-shell>
      <HeroSection />
      <NarrativeSection />
      <ImageSection />
      <MapOne />
      <Author />
    </calcite-shell>
  );
}
