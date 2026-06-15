import { useState } from "react";

import "@arcgis/map-components/components/arcgis-expand";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@esri/calcite-components/components/calcite-shell";
import "@esri/calcite-components/components/calcite-navigation";
import "@arcgis/map-components/components/arcgis-fullscreen";

export default function MapOne(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const handleViewReady = (event: CustomEvent): void => {
    const viewElement = event.target as HTMLArcgisMapElement;

    const view = viewElement.view;
    view.goTo({
      center: [220.0, 10.0],
      zoom: 3,
    });

    setIsLoading(false);
  };

  return (
    <>
      <section className="map-one">
        <div className="text">
          <h1>Plate tectonics and ring of fire mapping</h1>
          <p>Credits to: bktanner_UWM</p>
        </div>

        {isLoading && (
          <div className="map-loader-overlay">
            <calcite-loader
              label="Loading map..."
              text="Loading Ring of Fire map..."
            />
          </div>
        )}

        <arcgis-map
          item-id="3e6ed761b0e74e8c93b477416cf909d2"
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
