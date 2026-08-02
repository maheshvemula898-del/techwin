import { CSSProperties, ReactNode, useCallback, useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

type ScrollStackItemProps = { children: ReactNode; itemClassName?: string; className?: string };

type ScrollStackProps = {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
};

type CardTransform = { translateY: number; scale: number; rotation: number; blur: number };

export const ScrollStackItem = ({ children, itemClassName = "", className = "" }: ScrollStackItemProps) => (
  <article className={`scroll-stack-card ${itemClassName || className}`.trim()}>{children}</article>
);

const ScrollStack = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const completedRef = useRef(false);
  const frameRef = useRef<number | undefined>(undefined);
  const lenisRef = useRef<Lenis | undefined>(undefined);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, CardTransform>());

  const parsePosition = useCallback((value: string | number, height: number) => {
    if (typeof value === "string" && value.includes("%")) return (parseFloat(value) / 100) * height;
    return Number.parseFloat(String(value));
  }, []);

  const updateCards = useCallback(() => {
    const root = scrollerRef.current;
    if (!root || !cardsRef.current.length) return;
    const scrollTop = useWindowScroll ? window.scrollY : root.scrollTop;
    const height = useWindowScroll ? window.innerHeight : root.clientHeight;
    const stackPositionPx = parsePosition(stackPosition, height);
    const scaleEndPx = parsePosition(scaleEndPosition, height);
    const end = root.querySelector<HTMLElement>(".scroll-stack-end");
    const offset = (element: HTMLElement) => useWindowScroll ? element.getBoundingClientRect().top + window.scrollY : element.offsetTop;
    const endTop = end ? offset(end) : 0;

    cardsRef.current.forEach((card, index) => {
      const cardTop = offset(card);
      const start = cardTop - stackPositionPx - itemStackDistance * index;
      const scaleEnd = cardTop - scaleEndPx;
      const progress = Math.max(0, Math.min(1, (scrollTop - start) / Math.max(1, scaleEnd - start)));
      const scale = 1 - progress * (1 - (baseScale + index * itemScale));
      const pinEnd = endTop - height / 2;
      const translateY = scrollTop >= start ? Math.min(scrollTop, pinEnd) - cardTop + stackPositionPx + itemStackDistance * index : 0;
      const topIndex = cardsRef.current.reduce((result, current, currentIndex) => scrollTop >= offset(current) - stackPositionPx - itemStackDistance * currentIndex ? currentIndex : result, 0);
      const transform: CardTransform = { translateY, scale, rotation: rotationAmount * index * progress, blur: index < topIndex ? (topIndex - index) * blurAmount : 0 };
      const previous = lastTransformsRef.current.get(index);
      if (!previous || JSON.stringify(previous) !== JSON.stringify(transform)) {
        card.style.transform = `translate3d(0, ${transform.translateY}px, 0) scale(${transform.scale}) rotate(${transform.rotation}deg)`;
        card.style.filter = transform.blur ? `blur(${transform.blur}px)` : "";
        lastTransformsRef.current.set(index, transform);
      }
      if (index === cardsRef.current.length - 1) {
        const complete = scrollTop >= start && scrollTop <= pinEnd;
        if (complete && !completedRef.current) onStackComplete?.();
        completedRef.current = complete;
      }
    });
  }, [baseScale, blurAmount, itemScale, itemStackDistance, onStackComplete, parsePosition, rotationAmount, scaleEndPosition, stackPosition, useWindowScroll]);

  useLayoutEffect(() => {
    const root = scrollerRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    cardsRef.current = Array.from(root.querySelectorAll<HTMLElement>(".scroll-stack-card"));
    cardsRef.current.forEach((card, index) => {
      card.style.marginBottom = index < cardsRef.current.length - 1 ? `${itemDistance}px` : "0";
      card.style.willChange = "transform, filter";
      card.style.transformOrigin = "top center";
    });
    const lenis = new Lenis(useWindowScroll ? { duration: 1.2, smoothWheel: true, syncTouch: true } : { wrapper: root, content: root.querySelector<HTMLElement>(".scroll-stack-inner") ?? undefined, duration: 1.2, smoothWheel: true, syncTouch: true });
    lenis.on("scroll", updateCards);
    const raf = (time: number) => { lenis.raf(time); frameRef.current = requestAnimationFrame(raf); };
    frameRef.current = requestAnimationFrame(raf);
    lenisRef.current = lenis;
    updateCards();
    window.addEventListener("resize", updateCards);
    const lastTransforms = lastTransformsRef.current;
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      lenisRef.current?.destroy();
      window.removeEventListener("resize", updateCards);
      cardsRef.current = [];
      lastTransforms.clear();
    };
  }, [itemDistance, updateCards, useWindowScroll]);

  return <div className={`scroll-stack-scroller ${useWindowScroll ? "is-window" : ""} ${className}`.trim()} ref={scrollerRef}><div className="scroll-stack-inner">{children}<div className="scroll-stack-end" /></div></div>;
};

export default ScrollStack;
