export const prevSlide = (slideshow) => {
    if (slideshow.current.children.length > 0) {
        const index = slideshow.current.children.length - 1;
        const latestElement = slideshow.current.children[index];
        slideshow.current.insertBefore(latestElement, slideshow.current.firstChild);

        slideshow.current.style.transition = 'none';
        const slideWidth = slideshow.current.children[0].offsetWidth;
        slideshow.current.style.transform = `translateX(-${slideWidth}px)`;

        setTimeout(() => {
            slideshow.current.style.transition = `600ms ease-out all`;
            slideshow.current.style.transform = `translateX(0)`;
        }, 30);
    }
}