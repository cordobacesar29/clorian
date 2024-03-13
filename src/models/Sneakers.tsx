import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//@ts-ignore
import sneakersScene from "../assets/nike_shoe.glb";
import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";

interface Props {
  position: number[];
  scale: number[];
  isRotating: boolean;
  setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
  rotation: number[];
}

export const Sneakers = ({ isRotating, setIsRotating, ...props }: Props) => {
  const shoeRef = useRef();
  const { nodes, materials, animations } = useGLTF(sneakersScene);
  const { actions } = useAnimations(animations, shoeRef);

  const rotationSpeed = useRef(0); // Use a ref for rotation speed
  const dampingFactor = 0.95; // Define a damping factor to control rotation damping

  const selfRotate = (object: any, speed: any) => {
    object.rotation.y -= speed;
    object.rotation.x += speed;
  };

  useFrame(() => {
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;
      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      //@ts-ignore
      shoeRef.current.rotation.y += rotationSpeed.current;
    } else {
      rotationSpeed.current = 0.001 * Math.PI;
      selfRotate(shoeRef.current, rotationSpeed.current);
    }
  });

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  return (
    //@ts-ignore
    <a.group {...props} ref={shoeRef}>
      <mesh
        //@ts-ignore
        geometry={nodes.Object_6.geometry}
        material={materials.defaultMat}
      />
      <mesh
        //@ts-ignore
        geometry={nodes.Object_7.geometry}
        material={materials.defaultMat}
      />
    </a.group>
  );
};
