import "@esri/calcite-components/components/calcite-panel";

export default function HeroSection() {
  return (
    <section className="hero">
      <calcite-panel className="hero-panel">
        <div className="hero-bg">
          <img
            src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/4XW53Q5IDRMNRJ7XURF5WJVQ7Y.jpg"
            alt="jollibe-collapse"
            className="hero-image"
          />

          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Magnitude 7.8 Earthquake Strikes Southern Philippines</h1>
              <h3>By: Joshua De Leon</h3>
              <p>June 8, 2026</p>
            </div>
          </div>
        </div>
      </calcite-panel>
    </section>
  );
}
