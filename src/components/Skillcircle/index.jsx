import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';

function AnimatedCircle({
    circleIcon,
    color="#7e57c2",
    percentage = 75
}) {
  const circleRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate من 0 لـ 75 (عشان 270deg = 75% من الدائرة)
            let current = 0;
            const target = percentage;
            const increment = target / 40; // 60 frames
            
            const animate = () => {
              current += increment;
              if (current < target) {
                setProgress(current);
                requestAnimationFrame(animate);
              } else {
                setProgress(target);
              }
            };
            
            animate();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  // حساب الـ stroke-dashoffset
  const circumference = 2 * Math.PI * 45; // 45 = radius
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={circleRef} className="relative w-24 h-24">
      <svg className="w-24 h-24 transform -rotate-90">
        {/* الدائرة الرمادي (الخلفية) */}
        <circle
          cx="48"
          cy="48"
          r="45"
          stroke="lightgray"
          strokeWidth="6"
          fill="none"
        />
        
        {/* الدائرة البنفسجي (المتحركة) */}
        <circle
          cx="48"
          cy="48"
          r="45"
          stroke={color}
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
        />
      </svg>
      
      {/* الدائرة البيضا الداخلية مع الأيقونة */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center shadow-md">
          {circleIcon}
        </div>
      </div>
    </div>
  );
}

export default AnimatedCircle;