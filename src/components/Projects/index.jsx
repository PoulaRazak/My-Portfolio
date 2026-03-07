import { motion, useScroll, useTransform } from "motion/react";
import SwiperImage from "../../assets/images/swiper.png";
import EcommerceImage from "../../assets/images/ecommerceimage.png"
import FastBuyImage from "../../assets/images/fastbuy.png"
import ClothingImage from "../../assets/images/clothing.png"
import Video from "../../assets/videos/video.mp4";
import Video2 from "../../assets/videos/project2v.mp4";
import Pic3 from "../../assets/images/furniture.png";
import { useState, useEffect, useRef } from "react";


export default function ScrollHorizontal() {

  const [itemWidth, setItemWidth] = useState(400);
  const [gap, setGap] = useState(30);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 600);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 600) {
        setItemWidth(280);
        setGap(15);
        setIsMobile(true);
      } else {
        setItemWidth(400);
        setGap(30);
        setIsMobile(false);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [leaving, setLeaving] = useState(false);
  const handleOpen = (url) => {
    setLeaving(true);
    setTimeout(() => {
      window.location.href = url;
    }, 600);
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Use state variables for responsive calculation
  const totalDistance = (items.length - 1) * (itemWidth + gap);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <div id="example">
      <section id="projects" className="intro-section">
        <p className="text-gray-400 font-serif">Click to open project</p>
        <h2 className="impact font-bold">My Projects</h2>
      </section>

      {isMobile ? (
        /* ---- Mobile: native horizontal scroll, no sticky magic ---- */
        <div className="mobile-scroll-container">
          <motion.div
            className="mobile-gallery"
            animate={leaving ? { opacity: 0, scale: 0.95 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="gallery-item cursor-pointer"
                whileTap={{ scale: 0.95 }}
                onClick={() => handleOpen(item.url)}
                style={{
                  "--item-color": item.color,
                  "--item-image": `url(${item.video})`,
                }}
              >
                <video
                  src={item.video}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                  poster={item.image}
                />
                <div className="item-content">
                  <span className="item-number">0{item.id}</span>
                  <h2>{item.label}</h2>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ) : (
        /* ---- Desktop: scroll-linked sticky animation ---- */
        <div
          ref={containerRef}
          className="scroll-container"
          style={{ position: "relative" }}
        >
          <div className="sticky-wrapper">
            <motion.div
              className="gallery"
              style={{ x, gap: `${gap}px` }}
              animate={leaving ? { opacity: 0, scale: 0.95 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  className="gallery-item cursor-pointer hover:scale-102 transition-all duration-300 ease-in-out"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleOpen(item.url)}
                  style={{
                    "--item-color": item.color,
                    "--item-image": `url(${item.video})`,
                    width: `${itemWidth}px`,
                    height: "400px",
                    flexShrink: 0,
                  }}
                >
                  <video
                    src={item.video}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                    poster={item.image}
                  />
                  <div className="item-content">
                    <span className="item-number">0{item.id}</span>
                    <h2>{item.label}</h2>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      )}
      <StyleSheet />
    </div>
  );
}


/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
            body {
                overflow-x: hidden;
            }

            #example {
                height: auto;
                overflow: visible;
            }

            .intro-section {
                height: 50vh;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                text-align: center;
                padding-bottom: 40px;
            }

            .intro-section h2 {
                font-size: clamp(36px, 6vw, 52px);
                color: #6b6b6b;
                margin: 0;
                text-transform: uppercase;
            }

            /* ---- Desktop sticky scroll ---- */
            .scroll-container {
                height: 200vh;
                position: relative;
            }

            .sticky-wrapper {
                position: sticky;
                top: 0;
                height: 100vh;
                width: 400px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                overflow: visible;
            }

            .gallery {
                display: flex;
                will-change: transform;
            }

            .gallery-item {
                flex-shrink: 0;
                width: max(300px, 30vw);
                height: 400px;
                border-radius: 12px;
                position: relative;
                overflow: hidden;
                background-image: var(--item-image);
                background-size: cover;
                background-position: center;
            }

            .gallery-item::before {
                content: "";
                position: absolute;
                inset: 0;
                background: linear-gradient(
                    to bottom,
                    transparent 60%,
                    var(--item-color)
                );
                mix-blend-mode: multiply;
            }

            .item-content {
                position: absolute;
                bottom: 30px;
                left: 30px;
                z-index: 1;
            }

            .item-number {
                font-size: 14px;
                color: var(--item-color);
                font-family: "Azeret Mono", monospace;
                display: block;
                margin-bottom: 8px;
            }

            .gallery-item h2 {
                font-size: 28px;
                font-weight: 600;
                color: #f5f5f5;
                margin: 0;
            }

            /* ---- Mobile native horizontal scroll ---- */
            .mobile-scroll-container {
                width: 100%;
                padding: 16px 23px 40px;
                /* NO overflow:hidden here — that would block horizontal scroll */
                overflow: visible;
            }

            .mobile-gallery {
                display: flex;
                gap: 16px;
                overflow-x: auto;
                overflow-y: visible;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                /* left padding so first card is indented, right so last card peeks */
                padding: 8px 20px 20px 20px;
                scrollbar-width: none;
            }

            .mobile-gallery::-webkit-scrollbar {
                display: none;
            }

            .mobile-gallery .gallery-item {
                width: 85vw;
                max-width: 340px;
                height: 380px;
                scroll-snap-align: start;
                flex-shrink: 0;
            }

            @media (max-width: 600px) {
                .intro-section {
                    height: auto;
                    padding-top: 40px;
                    padding-bottom: 24px;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .gallery {
                    transform: none !important;
                }
                .scroll-container {
                    height: auto;
                }
                .sticky-wrapper {
                    position: relative;
                    height: auto;
                    width: min(100%, 1200px);
                    overflow-x: auto;
                    padding: 50px 0;
                }
            }
        `}</style>
  );
}

/**
 * ==============   Data   ================
 */

const items = [
  {
    id: 1,
    color: "#ff0088",
    label: "Filmak Movies Website",
    video: Video,
    image: SwiperImage,
    url: "https://movies-react-website-lime.vercel.app/",
  },
  {
    id: 2,
    color: "#dd00ee",
    label: "Shopy Ecommerce Website",
    video: Video2,
    image: EcommerceImage,
    url: "https://github.com/PoulaRazak/ecommerce-next.js-tailwind",
  },
  {
    id: 3,
    color: "#9911ff",
    label: "Furniture Website",
    video: null,
    image: Pic3,
    url: "",
  },
  {
    id: 4,
    color: "#0d63f8",
    label: "FastBuy Mobile App",
    video: null,
    image: FastBuyImage,
    url: "https://github.com/PoulaRazak/fastbuy_flutter_firebase",
  },
  {
    id: 5,
    color: "#0cdcf7",
    label: "Clothing Mobile App",
    video: null,
    image: ClothingImage,
    url: "https://github.com/PoulaRazak/ecommerce_app_with_api",
  },
];


