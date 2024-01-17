export const fadeIn = (direction, delay) => {
  const shouldAnimate = window.innerWidth > 768; // змініть розмір екрану за потребою

  return {
    hidden: {
      y: shouldAnimate ? (direction === 'up' ? 80 : direction === 'down' ? -80 : 0) : 0,
      opacity: shouldAnimate ? 0 : 1,
      x: shouldAnimate ? (direction === 'left' ? 80 : direction === 'right' ? -80 : 0) : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: shouldAnimate ? 1.2 : 0, // встановлюємо тривалість анімації
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
 
 export const fadeVan = (direction, delay) => {
   return {
     hidden: {
       y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
       opacity: 0,
       x: direction === 'left' ? 800: direction === 'right' ? -80 : 0,
     },
     show: {
       y: 0,
       x: 0,
       opacity: 1,
       transition: {
         type: 'tween',
         duration: 1.8,
         delay: delay,
         ease: [0.25, 0.25, 0.25, 0.75],
       },
     },
   };
 };
 