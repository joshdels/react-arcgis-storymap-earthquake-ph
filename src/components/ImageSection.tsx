import "@esri/calcite-components/components/calcite-carousel";
import "@esri/calcite-components/components/calcite-carousel-item";

const images = [
  {
    src: "https://od2-image-api.abs-cbn.com/prod/editorImage/17812462765881781246270862.jpeg",
    caption:
      "A Food Mart building lies in ruins after sustaining severe structural damage from the earthquake.",
  },
  {
    src: "https://images.gmanews.tv/webpics/2026/06/Sarangani_earthquake_2026_06_10_05_16_39.jpg",
    caption:
      "Roads rendered impassable as ground ruptures and debris block critical routes across affected areas.",
  },
  {
    src: "https://media.theonlinecitizen.com/Philippines_earthquake_June_2026_update_e0a0706f6c.jpg",
    caption:
      "A residential wooden house is reduced to rubble, reflecting the widespread destruction in local communities.",
  },
  {
    src: "https://live-production.wcms.abc-cdn.net.au/5b2dde5bd02ad27d0030cae2a95e0b61?impolicy=wcms_crop_resize&cropH=1080&cropW=1920&xPos=0&yPos=0&width=862&height=485",
    caption:
      "Students scramble in panic as the earthquake strikes during the first-day-of-school flag ceremony.",
  },
  {
    src: "https://image.cnbcfm.com/api/v1/image/108317982-17809126402026-06-08t051403z_433354413_rc21plapom1f_rtrmadp_0_philippines-quake.jpeg?v=1780912741",
    caption:
      "A Jollibee branch collapses under the force of the tremor — miraculously, all occupants escaped unharmed.",
  },
  {
    src: "https://newsinfo.inquirer.net/files/2026/06/One-of-the-buildings-at-the-Notre-Dame-of-Dadiangas-University-in-General-Santos-City-collapsed-after-a-magnitude-7.0-earthquake-struck-Mindanao-on-Monday-June-8-2026.png",
    caption:
      "A building at Notre Dame of Dadiangas University in General Santos City crumbles following the magnitude 7.0 strike.",
  },
  {
    src: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/06/1024/512/philippines-earthquake-aftermath-1.jpeg?ve=1&tl=1",
    caption:
      "A two-storey restaurant collapses entirely, adding to the growing toll of destroyed commercial structures.",
  },
  {
    src: "https://news.cgtn.com/news/2026-06-15/Deadly-Philippine-earthquake-raised-seabed-by-up-to-2-meters-1NZmdrq1LFu/img/44ed6b5a05cd4c4a80c348415e6246fd/44ed6b5a05cd4c4a80c348415e6246fd.jpeg",
    caption:
      "Scientists confirm the deadly earthquake reshaped the ocean floor, lifting the seabed by as much as two meters.",
  },
];

export default function ImageSection() {
  return (
    <section className="image-section">
      <h1>During the Earthquake</h1>

      <calcite-carousel label="Earthquake images" autoplay loop>
        {images.map((img, index) => (
          <calcite-carousel-item key={index} label={`Image ${index + 1}`}>
            <div className="slide-wrapper">
              <img src={img.src} alt={`Earthquake scene ${index + 1}`} />
              <div className="slide-caption">
                <p>{img.caption}</p>
              </div>
            </div>
          </calcite-carousel-item>
        ))}
      </calcite-carousel>
    </section>
  );
}
