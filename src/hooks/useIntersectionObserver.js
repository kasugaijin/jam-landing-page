import { useRef, useEffect } from "react";

function useIntersectionObserver(options) {
  const ref = useRef(null);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animation-show");
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref, options]);

  return ref;
}

export default useIntersectionObserver;
