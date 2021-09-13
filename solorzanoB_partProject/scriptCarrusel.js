$(document).ready(function(){

    let banner1 = {
        padre: $('#banner1'),
        numeroSlider:  $('#banner1').children('.slide').length,
        posicion: 1,
        id: '#banner1'
    }
    console.log(banner1.padre)
    let banner2 = {
        padre: $('#banner2'),
        numeroSlider:  $('#banner2').children('.slide').length,
        posicion: 1,
        id: '#banner2'
    }
    let banner3 = {
        padre: $('#banner3'),
        numeroSlider:  $('#banner3').children('.slide').length,
        posicion: 1,
        id: '#banner3'
    }
    let banner4 = {
        padre: $('#banner4'),
        numeroSlider:  $('#banner4').children('.slide').length,
        posicion: 1,
        id: '#banner4'
    }
    let banner5 = {
        padre: $('#banner5'),
        numeroSlider:  $('#banner5').children('.slide').length,
        posicion: 1,
        id: '#banner5'
    }
    let banner6 = {
        padre: $('#banner6'),
        numeroSlider:  $('#banner6').children('.slide').length,
        posicion: 1,
        id: '#banner6'
    }
    let banner7 = {
        padre: $('#banner7'),
        numeroSlider:  $('#banner7').children('.slide').length,
        posicion: 1,
        id: '#banner7'
    }

    // SEGUNDA SECCIÓN
    banner1.padre.children('.slide').first().css({
        'left': 0
    })
    banner2.padre.children('.slide').first().css({
        'left': 0
    })
    banner3.padre.children('.slide').first().css({
        'left': 0
    })
    banner4.padre.children('.slide').first().css({
        'left': 0
    })
    banner5.padre.children('.slide').first().css({
        'left': 0
    })
    banner6.padre.children('.slide').first().css({
        'left': 0
    })
    banner7.padre.children('.slide').first().css({
        'left': 0
    })
 
    // TERCERA SECCIÓN #RECALCULAR

    let altoBanner1 = function(){
        let alto = banner1.padre.children('.slide').outerHeight()
        banner1.padre.css({
            'height': alto + 'px'
        })   
        console.log(alto)
    }
    let altoBanner2 = function(){
        let alto = banner2.padre.children('.slide').outerHeight()
        banner2.padre.css({
            'height': alto + 'px'
        })   
        console.log(alto)
    }
    let altoBanner3 = function(){
        let alto = banner3.padre.children('.slide').outerHeight()
        banner3.padre.css({
            'height': alto + 'px'
        })   
        console.log(alto)
    }
    let altoBanner4 = function(){
        let alto = banner4.padre.children('.slide').outerHeight()
        banner4.padre.css({
            'height': alto + 'px'
        })   
        console.log(alto)
    }
    let altoBanner5 = function(){
        let alto = banner5.padre.children('.slide').outerHeight()
        banner5.padre.css({
            'height': alto + 'px'
        })   
        console.log(alto)
    }
    let altoBanner6 = function(){
        let alto = banner6.padre.children('.slide').outerHeight()
        banner6.padre.css({
            'height': alto + 'px'
        })   
        console.log(alto)
    }
    let altoBanner7 = function(){
        let alto = banner7.padre.children('.slide').outerHeight()
        banner7.padre.css({
            'height': alto + 'px'
        })   
        console.log(alto)
    }

    // APLICACIÓN DE LA TERCERA SECCIÓN
    altoBanner1()
    altoBanner2()
    altoBanner3()
    altoBanner4()
    altoBanner5()
    altoBanner6()
    altoBanner7()
   
    
    // Para saber cuando la pagina cambie de tamaño, ejecutara la función altoBanner
    $(window).resize(function(){
        altoBanner1()
        altoBanner2()
        altoBanner3()
        altoBanner4()
        altoBanner5()
        altoBanner6()
        altoBanner7()
    })



    // ------------------------------
    //             Banner
    // ------------------------------

    function bannerNext(event){
        event.preventDefault()
        const banner = event.data.banner;
        const deploy = event.data.banner.id;
        console.log(banner)
        console.log(deploy)
        if(banner.posicion < banner.numeroSlider){
           // Asegurarnos de que todos los sliders empiecen desde la derecha
           banner.padre.children().not('.active').css({
               'left': '100%'
           })

           // Para la animación, se quita la clase active y se la ponemos al sigueinte elmento
           $(`${deploy} .active`).removeClass('active').next().addClass('active').animate({
               'left': '0'
           })

           // Animamos el slide anterior para que se deslice hacia la izquierda 
           $(`${deploy} .active`).prev().animate({
               'left': '-100%'
           })

           banner.posicion = banner.posicion + 1
        } else{
           //  Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha
            $(`${deploy} .active`).animate({
                'left': '-100%'
            })

           //  Seleccionamos todos los slides que no tengan la clase .active
           // +y los posicionamos a la derecha
            banner.padre.children().not('.active').css({
                'left': '100%'
            })

           //  Eliminar la clase active y se la ponemos al primer elemento
            // Despues lo animamos
            $(`${deploy} .active`).removeClass('active')
            banner.padre.children('.slide').first().addClass('active').animate({
                'left': '0'
            })

           //  Reseteamos la posición a 1
            banner.posicion = 1
        }
    }

    function bannerPrev(event){
        event.preventDefault()
        const banner = event.data.banner
        const deploy = event.data.banner.id;
        console.log(banner)
        console.log(deploy)
        if(banner.posicion > 1){
            // Manda todas las imagenes a la izquierda
            banner.padre.children().not('.active').css({
                'left': '-100%'
            })
    
            $(`${deploy} .active`).animate({
                'left': '100%'
            })

            $(`${deploy} .active`).removeClass('active').prev().addClass('active').animate({
                'left': 0
            })

            banner.posicion = banner.posicion - 1

        } else{
            banner.padre.children().not('.active').css({
                'left': '-100%'
            })

            $(`${deploy} .active`).animate({
                'left': '100%'
            })

            $(`${deploy} .active`).removeClass('active')
            banner.padre.children().last().addClass('active').animate({
                'left': 0
            })

            banner.posicion = banner.numeroSlider

        }

    }

    // ACCIONA LA FLECHA NEXT DE CADA CARRUSEL IMG
    $('#banner-next1').click({banner: banner1}, bannerNext);
    $('#banner-next2').click({banner: banner2}, bannerNext);
    $('#banner-next3').click({banner: banner3}, bannerNext);
    $('#banner-next4').click({banner: banner4}, bannerNext);
    $('#banner-next5').click({banner: banner5}, bannerNext);
    $('#banner-next6').click({banner: banner6}, bannerNext);
    $('#banner-next7').click({banner: banner7}, bannerNext);

    // ACCIONA LA FLECHA PREV DE CADA CARRUSEL IMG
    $('#banner-prev1').click({banner: banner1}, bannerPrev);
    $('#banner-prev2').click({banner: banner2}, bannerPrev);
    $('#banner-prev3').click({banner: banner3}, bannerPrev);
    $('#banner-prev4').click({banner: banner4}, bannerPrev);
    $('#banner-prev5').click({banner: banner5}, bannerPrev);
    $('#banner-prev6').click({banner: banner6}, bannerPrev);
    $('#banner-prev7').click({banner: banner7}, bannerPrev);

    
})

