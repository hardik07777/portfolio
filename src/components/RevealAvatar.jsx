import { useState } from "react";
import profileImg from "../pictures/cover.png";
import profileImg2 from "../pictures/cover2.png";

export default function RevealAvatar() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
     onMouseMove={handleMove}
     onMouseEnter={() => setIsHovering(true)}
     onMouseLeave={() => setIsHovering(false)}
     className="relative w-16 h-16 rounded-full overflow-hidden cursor-pointer border-2 border-gray-600"
   >
      {/* Bottom Image (Profile) */}
      <img
        src={profileImg2}
        alt="profile"
        className="w-full h-full object-cover"
        object-cover
      />
    
      {/* Top Image (Cover) */}
      <div
        className="absolute inset-0"
        style={{
         backgroundImage: `url(${profileImg})`,
         backgroundSize: "cover",
         backgroundPosition: "center",

          WebkitMaskImage: isHovering
            ? `radial-gradient(circle 70px at ${pos.x}px ${pos.y}px, 
                transparent 0%, 
                rgba(0,0,0,0.4) 40%, 
                black 80%)`
            : "none",
        
          maskImage: isHovering
            ? `radial-gradient(circle 70px at ${pos.x}px ${pos.y}px, 
                transparent 0%, 
                rgba(0,0,0,0.4) 40%, 
                black 80%)`
            : "none",
}}
      />
    </div>
  );
}