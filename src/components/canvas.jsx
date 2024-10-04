import React from 'react';
import useCanvas from '../hooks/useCanvas';

function Canvas({ width, height}) {
  const canvasRef = useCanvas((canvas) => {
    canvas.width = width;
    canvas.height = height;
  });

  return (
    <canvas ref={canvasRef} />
  );
};

export default Canvas;