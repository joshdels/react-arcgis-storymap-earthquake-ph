import "@esri/calcite-components/components/calcite-panel";
import "@esri/calcite-components/components/calcite-card";
import "@esri/calcite-components/components/calcite-chip";

export default function NarrativeSection() {
  return (
    <div className="narrative-panel">
      <h1>What Happened?</h1>

      <div className="metrics-grid">
        <calcite-card>
          <h3 slot="heading">Magnitude</h3>
          <h1 className="accent">7.8</h1>
        </calcite-card>

        <calcite-card>
          <h3 slot="heading">Time (UTC)</h3>
          <h2>11:37 PM</h2>
          <p>June 7, 2026</p>
        </calcite-card>

        <calcite-card>
          <h3 slot="heading">Depth</h3>
          <h1>55 km</h1>
        </calcite-card>

        <calcite-card>
          <h3 slot="heading">Max Intensity</h3>
          <h2>MMI VIII</h2>
          <p>Severe Shaking</p>
        </calcite-card>

        <calcite-card>
          <h3 slot="heading">Aftershocks</h3>
          <h1>180+</h1>
          <p>Largest: M6.5</p>
        </calcite-card>
      </div>

      <div className="narrative-content">
        <p>
          A magnitude 7.8 earthquake struck the southern coast of Mindanao at
          11:37 p.m. UTC on June 7, 2026, causing widespread damage across
          multiple regions of southern Philippines.
        </p>

        <p>
          According to USGS, the epicenter was approximately 16 miles
          west-southwest of Kablalan at a depth of 55 km, resulting in strong
          regional shaking due to thrust faulting near major trench systems.
        </p>

        <p>
          PHIVOLCS recorded a maximum intensity of{" "}
          <strong>MMI VIII (Severe)</strong>, with shaking lasting ~30 seconds
          and triggering over 180 aftershocks including a M6.5 event.
        </p>
      </div>

      <footer className="narrative-footer">
        <div className="footer-block">
          <h3>Epicenter</h3>
          <p>~16 mi WSW of Kablalan, Mindanao</p>
        </div>

        <div className="footer-block">
          <h3>Duration</h3>
          <p>~30 seconds of primary shaking</p>
        </div>

        <div className="footer-block">
          <h3>Affected Regions</h3>
          <div className="chips">
            <calcite-chip label="SOCCSKSARGEN">SOCCSKSARGEN</calcite-chip>
            <calcite-chip label="Zamboanga">Zamboanga</calcite-chip>
            <calcite-chip label="Davao">Davao</calcite-chip>
            <calcite-chip label="BARMM">BARMM</calcite-chip>
          </div>
        </div>
      </footer>
    </div>
  );
}
