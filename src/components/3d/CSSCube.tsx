interface CSSCubeProps {
  color: string;
  delay?: string;
}

export const CSSCube = ({ color, delay = "0s" }: CSSCubeProps) => {
  return (
    <div className="perspective-container" style={{ animationDelay: delay }}>
      <div className={`cube ${color}`}>
        <div className="cube-face front"></div>
        <div className="cube-face back"></div>
        <div className="cube-face right"></div>
        <div className="cube-face left"></div>
        <div className="cube-face top"></div>
        <div className="cube-face bottom"></div>
      </div>
    </div>
  );
};
