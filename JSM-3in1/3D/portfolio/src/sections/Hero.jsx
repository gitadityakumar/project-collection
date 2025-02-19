import { Canvas } from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from "react-responsive"
import {calculateSizes} from "../constants/index"

const Hero = () => {
  // const x = useControls('HackerRoom', {
  //   // scale: { value: 1, min: 0.1, max: 1 },
  //   // scale: { value: 2.5, min: -10, max: 10 },
  //   // scaleZ: { value: 2.5, min: -10, max: 10 },
  //   positionX: {value:2.5, min:-10, max:10},
  //   positionY: {value:2.5, min:-10, max:10},
  //   positionZ: {value:2.5, min:-10, max:10},
  //   rotationX: {value:0, min:-10, max:10},
  //   rotationY: {value:0, min:-10, max:10},
  //   rotationZ: {value:0, min:-10, max:10},
  // });
  const isMobile = useMediaQuery({maxWidth:768});
  const isTablet = useMediaQuery({minWidth:768,maxWidth:1024});
  const isSmall = useMediaQuery({maxWidth:440});
  const sizes = calculateSizes(isSmall,isMobile,isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      {/* <Leva /> Moved Leva outside of Canvas */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi I am Aditya <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Learning & Building Apps</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <perspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}

              rotation={[0,-Math.PI,0]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
