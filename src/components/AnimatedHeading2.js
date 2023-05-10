import useIntersectionObserver from "../hooks/useIntersectionObserver";

const AnimatedHeading2 = ({ textColor, text }) => {
  const headingRef = useIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.5,
  });
  return (
    <h2 ref={headingRef} className={`${textColor} h2 animation-hidden`}>
      {text}
    </h2>
  );
};

export default AnimatedHeading2;
