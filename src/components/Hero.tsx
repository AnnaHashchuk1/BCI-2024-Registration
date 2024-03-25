import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <section
      className="min-h-screen relative w-full flex flex-col justify-center items-center mt-10"
      id="top"
    >


      <div className="font-montserrat text-bci-white text-left lg:text-center mx-20 mt-32 z-20">
        <h3 className="text-7xl md:text-8xl font-bold mb-5">
          BEST Company Insight
        </h3>
        <p className="flex flex-col text-2xl md:text-4xl font-bold mb-2">
          <span>Привіт, студенте!</span>
          Час відвідати компанію твоєї мрії настав!
        </p>
      </div>
      <Marquee
        className="speed-90 py-3 flex gap-6 z-10"
        speed={7}
        autoFill={true}
      >
        <div className="flex flex-row justify-center items-center gap-6 z-20">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Image
                src={`/Slider${index + 1}.png`}
                width={449}
                height={313}
                alt=" "
                draggable="false"
                className="rounded-xl hover:scale-105 transition-all duration-500"
                key={index}
              />
            ))}
        </div>
      </Marquee>
      <a className="mt-3 mb-14 scale-75" href="https://docs.google.com/forms/d/e/1FAIpQLSeV-6rCYsm2e-Bf7Dcb83vBuk85ggH-QP1zaCZYBRBUUWlxAQ/viewform">
        <button className="font-medium text-bci-gray hover:text-bci-white text-2xl md:text-3xl text-center bg-bci-white py-6 px-14 rounded-2xl hover:scale-110 duration-500 hover:shadow-normal
            border border-bci-white hover:border-bci-white hover:bg-bci-purple z-20">
            <p>Зареєструватися</p>
        </button>
      </a>
      <Image
        src="/BgElement.svg"
        width={800}
        height={600}
        alt=" "
        draggable="false"
        className="absolute w-auto self-center rotate-20 z-0 opacity-20 top-48 overflow-hidden"
      />
    </section>
  );
}
