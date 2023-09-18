/* --pocicion inicial */
let ubicacionPrincipal = window.scrollY;
let $nav = document.querySelector("nav");

/* --evento scroll */
window.addEventListener("scroll", function() {
    /* --muestra la ubicacion cada vez que hagas scroll */
    //console.log(window.pageYOffset);

    /* --donde nos encontramos actualmente */
    let desplazamientoActual = window.scrollY;

    /* --condicon para ocultar o mostrar el menu */
    if(ubicacionPrincipal >= desplazamientoActual) {
        /* --si es mayor o igual se muesta */
        $nav.style.top = "0px";
        $nav.classList.add("scroll-down");
       
       
    } else {
        /* --si no lo ocultamos añadiendo un top negativo */
        $nav.style.top = "-90px";
        $nav.classList.remove("scroll-up");
       
        
    }
    if (desplazamientoActual === 0) {
        $nav.classList.remove("scroll-down");
    }

    /* --actulizamos la ubicacion principal */
    ubicacionPrincipal = desplazamientoActual;
});