import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { Sneakers } from "../../models/Sneakers";
import { CircularProgress, Flex } from "@chakra-ui/react";

export const Home = () => {
  const [isRotating, setIsRotating] = useState(true);

  const adjustShoesForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [2.9, 2.9, 2.9];
      screenPosition = [2, 20.5, -53.4];
    } else {
      screenScale = [5, 5, 5.5];
      screenPosition = [6, 0, -48];
    }

    return [screenScale, screenPosition];
  };

  const [shoeScale, shoePosition] = adjustShoesForScreenSize();

  return (
    <Flex
      sx={{
        width: "100%",
        position: "relative",
        height: "1000px",
      }}
    >
      <Suspense fallback={<CircularProgress isIndeterminate/>}>
        <Canvas
          style={{ width: "100%", background: "transparent", height: "100%" }}
          camera={{ near: 0.1, far: 1000 }}
        >
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 40, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <Sneakers
            setIsRotating={setIsRotating}
            isRotating={isRotating}
            position={shoePosition}
            scale={shoeScale}
            rotation={[0, 4.5, 0]}
          />
        </Canvas>
      </Suspense>
    </Flex>
  );
};
