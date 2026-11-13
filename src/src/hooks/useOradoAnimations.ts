
import { useEffect } from 'react';

export default function useOradoAnimations(routeKey: string) {
  useEffect(() => {
    const root = document.getElementById('root');

    if (!root) return;

    const header = root.querySelector('header');
    header?.classList.add('orado-header-motion');

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      return () => {
        header?.classList.remove('orado-header-motion');
      };
    }

    const main = root.querySelector('main');

    if (!main) {
      return () => {
        header?.classList.remove('orado-header-motion');
      };
    }

    // Animate meaningful sections only; never hide the whole page.
    const sections = Array.from(
      main.querySelectorAll<HTMLElement>('section')
    ).filter((section) => {
      if (section.querySelector('iframe')) return false;
      if (section.offsetHeight < 40) return false;
      return true;
    });

    // Select common product and category card structures.
    const cards = Array.from(
      main.querySelectorAll<HTMLElement>(
        'a.group, [class*="grid"] > a, [class*="grid"] > div'
      )
    ).filter((card) => !card.querySelector('iframe'));

    sections.forEach((section, index) => {
      section.classList.add('orado-reveal');
      section.style.setProperty(
        '--orado-reveal-delay',
        `${(index % 3) * 70}ms`
      );
    });

    cards.forEach((card) => {
      card.classList.add('orado-card-motion');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('orado-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -25px 0px',
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();

      sections.forEach((section) => {
        section.classList.remove('orado-reveal', 'orado-visible');
        section.style.removeProperty('--orado-reveal-delay');
      });

      cards.forEach((card) => {
        card.classList.remove('orado-card-motion');
      });

      header?.classList.remove('orado-header-motion');
    };
  }, [routeKey]);
}
