import { CSSCube } from "./CSSCube";

export const Scene3D = () => {
  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-background via-muted to-background flex items-center justify-center gap-12">
      <style>{`
        .perspective-container {
          perspective: 1000px;
          animation: float 3s ease-in-out infinite;
        }
        
        .cube {
          width: 100px;
          height: 100px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate-cube 8s linear infinite;
        }
        
        .cube-face {
          position: absolute;
          width: 100px;
          height: 100px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }
        
        .cube.primary .cube-face { background: linear-gradient(135deg, hsl(var(--primary) / 0.8), hsl(var(--primary-glow) / 0.6)); }
        .cube.secondary .cube-face { background: linear-gradient(135deg, hsl(var(--secondary) / 0.8), hsl(var(--secondary-glow) / 0.6)); }
        .cube.accent .cube-face { background: linear-gradient(135deg, hsl(var(--accent) / 0.8), hsl(var(--accent-glow) / 0.6)); }
        
        .front  { transform: rotateY(0deg) translateZ(50px); }
        .back   { transform: rotateY(180deg) translateZ(50px); }
        .right  { transform: rotateY(90deg) translateZ(50px); }
        .left   { transform: rotateY(-90deg) translateZ(50px); }
        .top    { transform: rotateX(90deg) translateZ(50px); }
        .bottom { transform: rotateX(-90deg) translateZ(50px); }
        
        @keyframes rotate-cube {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
      
      <CSSCube color="primary" delay="0s" />
      <CSSCube color="secondary" delay="0.5s" />
      <CSSCube color="accent" delay="1s" />
    </div>
  );
};
