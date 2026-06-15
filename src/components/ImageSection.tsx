import { useState, useRef, useEffect } from "react";
import "@esri/calcite-components/components/calcite-carousel";
import "@esri/calcite-components/components/calcite-carousel-item";

const images = [
  {
    src: "https://images.gmanews.tv/webpics/2026/06/Sarangani_earthquake_2026_06_10_05_16_39.jpg",
    caption: "Damage assessment in Sarangani Province following the June 7 earthquake.",
  },
  {
    src: "https://www.stuff.co.nz/media/images/9Tzi8ywRz924XE3uHaD6DZ3Ef+IdbOiYlvIROR5vlqUeRrexTocZGobKRJ9od/gnk3B/CeKTmTAsIjj6Q0YaYVLLquPCEw6padklLo9jGyjdmWs7YEtuPgT6t6o5DdieRH41ryTvRGccXxeER/uJHdl9C89kOro2wnsdGzBX90ykuYYsqD+L3aWz1y2ERlu0T4HXxOIrAc3GdofemLYij7XgG3Lh2bxDeUHieLlISLg=",
    caption: "Residents evacuate coastal areas amid tsunami advisories.",
  },
  {
    src: "https://image.cnbcfm.com/api/v1/image/108317982-17809126402026-06-08t051403z_433354413_rc21plapom1f_rtrmadp_0_philippines-quake.jpeg?v=1780912741",
    caption: "Emergency crews respond to collapsed structures in General Santos City.",
  },
  {
    src: "https://newsinfo.inquirer.net/files/2026/06/One-of-the-buildings-at-the-Notre-Dame-of-Dadiangas-University-in-General-Santos-City-collapsed-after-a-magnitude-7.0-earthquake-struck-Mindanao-on-Monday-June-8-2026.png",
    caption: "Notre Dame of Dadiangas University building collapse, General Santos City.",
  },
  {
    src: "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/06/1024/512/philippines-earthquake-aftermath-1.jpeg?ve=1&tl=1",
    caption: "Aerial view of earthquake aftermath across southern Mindanao.",
  },
];

export default function ImageSection() {
  const [current, setCurrent] = useState(1);
  const carouselRef = useRef<HTMLCalciteCarouselElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleCarouselChange = (e: Event) => {
      const carousel = e.target as HTMLCalciteCarouselElement;
      const selected = carousel.selectedItem as HTMLElement;
      const items = Array.from(
        carousel.querySelectorAll("calcite-carousel-item")
      );
      const idx = items.indexOf(selected as HTMLCalciteCarouselItemElement);
      setCurrent(idx + 1);
    };

    el.addEventListener("calciteCarouselChange", handleCarouselChange);
    return () => {
      el.removeEventListener("calciteCarouselChange", handleCarouselChange);
    };
  }, []);

  return (
    <section className="image-section">

      <calcite-carousel
        ref={carouselRef}
        label="Earthquake images"
        autoplay
        loop
      >
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