import { useState } from "react";
import profileImg from "../pictures/cover.png";
import profileImg2 from "../pictures/cover2.png";

export default function RevealAvatar() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    setPos({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={() => setIsHovering(true)}
      onTouchMove={handleMove}
      onTouchEnd={() => setIsHovering(false)}
      className="
        relative 
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16   /* responsive size */
        rounded-full 
        overflow-hidden 
        cursor-pointer 
        border-2 border-gray-600
      "
    >
      {/* Bottom Image */}
      <img
        src={profileImg2}
        alt="profile"
        className="w-full h-full object-cover"
      />

      {/* Top Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${profileImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          WebkitMaskImage:
            isHovering && window.innerWidth > 640
              ? `radial-gradient(circle 70px at ${pos.x}px ${pos.y}px, 
                  transparent 0%, 
                  rgba(0,0,0,0.4) 40%, 
                  black 80%)`
              : "none",

          maskImage:
            isHovering && window.innerWidth > 640
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