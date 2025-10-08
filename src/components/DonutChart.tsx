import { useEffect, useRef } from "react";

interface DonutChartProps {
  percentage: number;
  size?: number;
}

export const DonutChart = ({ percentage, size = 160 }: DonutChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 10;
    const lineWidth = 20;

    // Clear canvas
    ctx.clearRect(0, 0, size, size);

    // Determine color based on risk level
    const getColor = (percent: number) => {
      if (percent < 30) return { start: "hsl(145, 65%, 50%)", end: "hsl(155, 65%, 55%)" };
      if (percent < 60) return { start: "hsl(35, 90%, 55%)", end: "hsl(25, 90%, 60%)" };
      return { start: "hsl(0, 70%, 60%)", end: "hsl(10, 75%, 65%)" };
    };

    const colors = getColor(percentage);

    // Draw background circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "hsl(210, 20%, 88%)";
    ctx.lineWidth = lineWidth;
    ctx.stroke();

    // Draw gradient arc
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, colors.start);
    gradient.addColorStop(1, colors.end);

    ctx.beginPath();
    ctx.arc(
      centerX,
      centerY,
      radius,
      -Math.PI / 2,
      -Math.PI / 2 + (2 * Math.PI * percentage) / 100
    );
    ctx.strokeStyle = gradient;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.stroke();

    // Draw percentage text
    ctx.font = "bold 32px sans-serif";
    ctx.fillStyle = "hsl(215, 25%, 20%)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${percentage.toFixed(1)}%`, centerX, centerY);
  }, [percentage, size]);

  return <canvas ref={canvasRef} width={size} height={size} className="mx-auto" />;
};
