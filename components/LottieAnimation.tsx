import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottieAnimationProps {
  animationPath?: string;
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationPath = '/lottie/animation.json',
  className = 'lottie-responsive reveal',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: animationPath,
    });

    return () => animation.destroy();
  }, [animationPath]);

  return <div id="lottie-container" ref={containerRef} className={className} />;
};

export default LottieAnimation;
