// src/components/ChessBoard.js
import { useGLTF } from '@react-three/drei';
import ChessPiece from './ChessPiece';

function ChessBoard() {
  // Load your 3D chessboard model
  const { scene: boardScene } = useGLTF('/assets/Chessboard.glb');

  // Pieces' starting positions
  const piecesData = [
    { modelPathWhite: "/assets/king-white.glb", modelPathBlack: "/assets/king-black.glb", position: [0, 0.5, 0], color: 'white' },
    { modelPathWhite: "/assets/queen_white.glb", modelPathBlack: "/assets/models/queen_black.glb", position: [1, 0.5, 0], color: 'white' },
    { modelPathWhite: "/assets/rook_white.glb", modelPathBlack: "/assets/models/rook_black.glb", position: [2, 0.5, 0], color: 'white' },
    { modelPathWhite: "/assets/models/bishop_white.glb", modelPathBlack: "/assets/models/bishop_black.glb", position: [3, 0.5, 0], color: 'white' },
    { modelPathWhite: "/assets/models/knight_white.glb", modelPathBlack: "/assets/models/knight_black.glb", position: [4, 0.5, 0], color: 'white' },
    { modelPathWhite: "/assets/models/pawn_white.glb", modelPathBlack: "/assets/models/pawn_black.glb", position: [5, 0.5, 0], color: 'white' },
    // Define black pieces with different positions, e.g.:
    { modelPathWhite: "/assets/models/king_white.glb", modelPathBlack: "/assets/models/king_black.glb", position: [0, 0.5, 7], color: 'black' },
    { modelPathWhite: "/assets/models/queen_white.glb", modelPathBlack: "/assets/models/queen_black.glb", position: [1, 0.5, 7], color: 'black' },
    { modelPathWhite: "/assets/models/rook_white.glb", modelPathBlack: "/assets/models/rook_black.glb", position: [2, 0.5, 7], color: 'black' },
    { modelPathWhite: "/assets/models/bishop_white.glb", modelPathBlack: "/assets/models/bishop_black.glb", position: [3, 0.5, 7], color: 'black' },
    { modelPathWhite: "/assets/models/knight_white.glb", modelPathBlack: "/assets/models/knight_black.glb", position: [4, 0.5, 7], color: 'black' },
    { modelPathWhite: "/assets/models/pawn_white.glb", modelPathBlack: "/assets/models/pawn_black.glb", position: [5, 0.5, 7], color: 'black' },
  ];

  return (
    <>
      {/* Render the chessboard */}
      <primitive object={boardScene} position={[0, 0, 0]} scale={[1, 1, 1]} />

      {/* Render chess pieces on the chessboard */}
      {piecesData.map((piece, index) => (
        <ChessPiece
          key={index}
          modelPath={piece.modelPath}
          position={piece.position}
          scale={[0.5, 0.5, 0.5]}
        />
      ))}
    </>
  );
}

export default ChessBoard;
