
const menuButton = document.querySelector('.mobile-menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
    const closeMenu = () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Buka menu');
    };

    menuButton.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
    });

    nav.addEventListener('click', (event) => {
        if (event.target instanceof Element && event.target.closest('a')) {
            closeMenu();
        }
    });

    document.addEventListener('click', (event) => {
        if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    window.matchMedia('(min-width: 701px)').addEventListener('change', (event) => {
        if (event.matches) {
            closeMenu();
        }
    });
}

const partnerCarousel = document.querySelector('[data-partner-carousel]');

if (partnerCarousel) {
    const viewport = partnerCarousel.querySelector('[data-partner-viewport]');
    const track = partnerCarousel.querySelector('[data-partner-track]');
    const partnerSet = partnerCarousel.querySelector('[data-partner-set]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (viewport && track && partnerSet) {
        const prepareCarousel = () => {
            track.querySelectorAll('[data-partner-clone]').forEach((clone) => clone.remove());
            track.style.removeProperty('--partner-distance');
            track.style.removeProperty('--partner-duration');

            if (reducedMotion.matches) {
                return;
            }

            const partnerSetWidth = partnerSet.getBoundingClientRect().width;

            if (partnerSetWidth === 0 || viewport.clientWidth === 0) {
                return;
            }

            while (track.scrollWidth < viewport.clientWidth + partnerSetWidth) {
                const clone = partnerSet.cloneNode(true);
                clone.removeAttribute('data-partner-set');
                clone.setAttribute('data-partner-clone', '');
                clone.setAttribute('aria-hidden', 'true');
                track.append(clone);
            }

            track.style.setProperty('--partner-distance', `-${partnerSetWidth}px`);
            track.style.setProperty('--partner-duration', `${Math.max(partnerSetWidth / 35, 12)}s`);
        };

        let resizeFrame;
        const resizeObserver = new ResizeObserver(() => {
            cancelAnimationFrame(resizeFrame);
            resizeFrame = requestAnimationFrame(prepareCarousel);
        });

        resizeObserver.observe(viewport);
        reducedMotion.addEventListener('change', prepareCarousel);
        prepareCarousel();

        partnerCarousel.querySelectorAll('[data-partner-direction]').forEach((button) => {
            button.addEventListener('click', () => {
                const direction = button.dataset.partnerDirection;
                const animation = track.getAnimations()[0];

                if (animation) {
                    if ((direction === 'next' && animation.playbackRate < 0)
                        || (direction === 'previous' && animation.playbackRate > 0)) {
                        animation.reverse();
                    }

                    return;
                }

                viewport.scrollBy({
                    left: direction === 'next' ? viewport.clientWidth : -viewport.clientWidth,
                    behavior: reducedMotion.matches ? 'auto' : 'smooth',
                });
            });
        });
    }
}
