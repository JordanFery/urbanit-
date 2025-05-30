// "use client";
// import { useEffect, useState } from "react";

// export default function AnimatedNumber({ target, duration = 1000 }) {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         let start = 0;
//         const increment = target / (duration / 16); // ≈ 60fps

//         const animate = () => {
//             start += increment;
//             if (start < target) {
//                 setCount(Math.floor(start));
//                 requestAnimationFrame(animate);
//             } else {
//                 setCount(target);
//             }
//         };

//         animate();
//     }, [target, duration]);

//     return (
//         <span className="text-4xl font-bold text-[var(--color-title)]">
//             {count}
//         </span>
//     );
// }


"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ target, duration = 1000 }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    animateNumber();
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.6 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const animateNumber = () => {
        let start = 0;
        const step = target / (duration / 16); // ~60fps

        const update = () => {
            start += step;
            if (start < target) {
                setCount(Math.floor(start));
                requestAnimationFrame(update);
            } else {
                setCount(target);
            }
        };

        update();
    };

    return (
        <span ref={ref} className="inline-block">
            {count}
        </span>
    );
}
