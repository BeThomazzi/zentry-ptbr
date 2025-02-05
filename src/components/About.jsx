import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/all'
import AnimatedTitle from "./AnimatedTitle"

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: "#clip",
            start: "center center",
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
          },
        });
    
        clipAnimation.to(".mask-clip-path", {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
        });
      });

  return (

    <div id="about" className="min-h-screen w-screen">

        <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">

            <h2 className="font-general texm-sm uppercase md:text-[10px]">
                Bem Vindo ao Zentry
            </h2>

            <AnimatedTitle title="Desc<b>u</b>bra a mai<b>o</b>r <br />a<b>v</b>entura compartil<b>h</b>ada<br />do <b>m</b>undo" containerClass="mt-5 !text-black text-center"/>

            <div className="about-subtext">
                <p className="text-gray-500">
                  Zentry une jogadores de inúmeros jogos e plataformas, tanto digitais quanto físicos, em uma Economia de Jogo unificada.
                </p>
            </div>

        </div>

        <div className="h-dvh w-screen" id="clip">

            <div className="mask-clip-path about-image">
                    
                <img 
                    src="img/about.webp"
                    alt="Background"
                    className="absolute left-0 top-0 size-full object-cover"
                />
                    
            </div>

        </div>

    </div>

  )
}

export default About