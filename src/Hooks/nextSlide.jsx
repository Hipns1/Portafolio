export const nextSlide = (slideshow) => {
    //comprobar que el slider tenga elementos
    if (slideshow.current.children.length > 0) {
        //obtener el primer elemento del slide
        const firstElement = slideshow.current.children[0];
        //declarar transicion del slide
        slideshow.current.style.transition = `600ms all ease-in-out`;
        //obtener tamaño del slide
        const slideWidth = slideshow.current.children[0].offsetWidth;
        //mover el slide
        slideshow.current.style.transform = `translateX(-${slideWidth}px)`;
        //al terminar la animacion, eliminar la transicion y el transform
        const transition = () => {
            slideshow.current.style.transition = `none`;
            slideshow.current.style.transform = `translateX(0)`;
            //mandar el primer elemento al final del slide
            slideshow.current.appendChild(firstElement);
            slideshow.current.removeEventListener('transitionend', transition);
        }
        slideshow.current.addEventListener('transitionend', transition);
    }
}