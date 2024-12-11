// src/components/ChessPiece.js
import { useGLTF } from '@react-three/drei';

function ChessPiece({ modelPath, position, scale }) {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} position={position} scale={scale} />;
}

export default ChessPiece;
