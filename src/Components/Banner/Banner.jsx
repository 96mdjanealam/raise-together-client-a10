import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="mx-4 my-8">
      <div onClick={toggleTheme} className="flex justify-end">
        <button className="btn btn-sm -mt-4 mb-2 btn-outline btn-info">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      <Carousel className="rounded-xl">
        <div className="h-72 lg:h-96 relative">
          <img
            src="https://images.pexels.com/photos/4968382/pexels-photo-4968382.jpeg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="w-4/5 md:w-11/12 h-full mx-auto flex flex-col items-center justify-center">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white  px-4 text-center lg:leading-relaxed">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  deleteSpeed={25}
                  loop={0}
                  typeSpeed={120}
                  words={["Empower Change, One Click at a Time"]}
                />
              </h2>
              <Fade className="text-white/80 mt-4  px-4 text-center lg:leading-relaxed" direction="right">
                Join a community of changemakers! Support causes that matter
                most to you and make a lasting impact.
              </Fade>
            </div>
          </div>
        </div>
        <div className="h-72 lg:h-96 relative">
          <img
            src="https://images.peopleimages.com/picture/202403/3035303-charity-artwork-and-illustration-of-colourful-hands-holding-a-heart-for-support-relief-and-donations.-closeup-mockup-and-awareness-poster-or-banner-for-background-wallpaper-and-digital-design-zoom_90.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="w-4/5 md:w-11/12 h-full mx-auto flex flex-col items-center justify-center">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white  px-4 text-center lg:leading-relaxed">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  deleteSpeed={25}
                  loop={0}
                  typeSpeed={120}
                  words={["Turn Compassion into Action"]}
                />
              </h2>
              <Fade className="text-white/80 mt-4  px-4 text-center lg:leading-relaxed" direction="right">
                Your contributions can transform lives. Explore campaigns,
                donate securely, and help create a better tomorrow.
              </Fade>
            </div>
          </div>
        </div>
        <div className="h-72 lg:h-96 relative">
          <img
            src="https://hrzone.com/app/uploads/2018/09/istockthitareesarmkasat-1024x576.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50">
            <div className="w-4/5 md:w-11/12 h-full mx-auto flex flex-col items-center justify-center">
              <h2 className="text-3xl lg:text-5xl font-semibold text-white  px-4 text-center lg:leading-relaxed">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  deleteSpeed={25}
                  loop={0}
                  typeSpeed={120}
                  words={["Together, We Build a Better Future"]}
                />
              </h2>
              <Fade direction="right" className="text-white/80 mt-4  px-4 text-center lg:leading-relaxed">
                Be part of the solution. Discover inspiring stories and fund
                initiatives that drive real change.
              </Fade>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
