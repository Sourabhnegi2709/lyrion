import {useEffect , useRef} from "react";
import { gsap } from 'gsap';

import bg1 from "../assets/campaign-art.svg";
import bg2 from "../assets/campaign-art.svg";
import bg3 from "../assets/campaign-art.svg";
import bg4 from "../assets/campaign-art.svg";

const images = [
  { id: 1, img: bg1 },
  { id: 2, img: bg2 },
  { id: 3, img: bg3 },
  { id: 4, img: bg4 },
];

export default function ImageSlider() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const loopedItems = [...images, ...images];
    const isMobile = window.matchMedia('(max-width: 640px)').matches;

    track.style.gap = '1rem';
    track.innerHTML = loopedItems
      .map(
        (img) => `
          <div class="branding_slide w-[56vw] max-w-[320px] min-w-[220px] h-[26vh] min-h-[180px] md:w-[42vw] md:max-w-[420px] md:min-w-[300px] md:h-[42vh] lg:w-[58vh] lg:min-w-[420px] lg:h-[42vh] flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl bg-white p-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
            <img src="${img.img}" alt="Slide ${img.id}" class="w-full h-full object-contain transition-transform duration-700 hover:scale-[1.03]" draggable="false" />
          </div>
        `,
      )
      .join('');

    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: isMobile ? 34 : 30,
      ease: 'none',
      repeat: -1,
      onRepeat: () => gsap.set(track, { x: 0 }),
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f5f5f5]">
      <div className="absolute inset-0 z-10" />

      <div className="relative z-20 h-full flex items-center">
        <div className="w-full overflow-hidden py-8">
          <div
            ref={trackRef}
            className="flex will-change-transform select-none gap-8"
            style={{ width: 'max-content' }}
          />
        </div>
      </div>
    </section>
  );
}

