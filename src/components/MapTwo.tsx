import { useState } from "react";

import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@arcgis/map-components/components/arcgis-fullscreen";

export default function MapTwo(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const handleViewReady = (event: CustomEvent): void => {
    const viewElement = event.target as HTMLArcgisMapElement;

    const view = viewElement.view;
    view.goTo({
      center: [124.89, 4.75],
      zoom: 7.5,
    });

    setIsLoading(false);
  };

  return (
    <>
      <section className="map-two">
        <div className="text">
          <h1>USGS Global Earthquakes</h1>
          <p>Credits to: Emily Meriam</p>
        </div>

        {isLoading && (
          <div className="map-loader-overlay">
            <calcite-loader
              label="Loading map..."
              text="USGS Global Earthquakes..."
            />
          </div>
        )}

        <arcgis-map
          item-id="31cfc5b138e24dee866c457948773ac4"
          onarcgisViewReadyChange={handleViewReady}
          className="map"
        >
          <arcgis-zoom slot="top-left" />
          <arcgis-fullscreen slot="top-left"></arcgis-fullscreen>

          <arcgis-expand slot="bottom-left">
            <arcgis-legend></arcgis-legend>
          </arcgis-expand>
        </arcgis-map>
      </section>
    </>
  );
}
