import React, { useRef, useEffect } from 'react';

interface SineWaveProps {
  width: number;
  height: number;
  speed: number;
  amplitude: number;
  frequency: number;
  lineWidth: number;
  strokeStyle: string;
}

const SineWave: React.FC<SineWaveProps> = ({
  width,
  height,
  speed,
  amplitude,
  frequency,
  lineWidth,
  strokeStyle,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrameId: number;

    const draw = (time: number) => {
      if (!context) return;

      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.lineWidth = lineWidth;
      context.strokeStyle = strokeStyle;

      for (let x = 0; x < width; x++) {
        const y =
          amplitude *
            Math.sin((x + time * speed) * frequency * (Math.PI / width)) +
          height / 2;
        context.lineTo(x, y);
      }

      context.stroke();
      animationFrameId = requestAnimationFrame(draw);
    };

    draw(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height, speed, amplitude, frequency, lineWidth, strokeStyle]);

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default SineWave;
