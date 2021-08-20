/* Codigo mailto para copiar correo */

$(document).ready(function() {
	
	$('a[href^=mailto]').addClass('mailto-link');

	var mailto = $('.mailto-link');
	var messageCopy = '';
	var messageSuccess = '';
	
	mailto.append('<span class="mailto-message"></span>');
	$('.mailto-message').append(messageCopy);

	$('a[href^=mailto]').click(function() {
		return false; 
	})
	
	mailto.click(function() {
		var href = $(this).attr('href');
		var email = href.replace('mailto:', '');
		copyToClipboard(email);
		$('.mailto-message').empty().append(messageSuccess);
		setTimeout(function() {
			$('.mailto-message').empty().append(messageCopy);}, 2000); 
	});
	
});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}



/* Codigo para hacer vibrar el punteador del mouese y y hacer correr el nombre */

const typed = new Typed('.typed', {
  /*   strings: [
        '<i class="mascota">Gato</i>', 
        '<i class="mascota">Perro</i>',
        '<i class="mascota">Pez</i>', 
        '<i class="mascota">Conejo</i>'
    ], */
    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '.', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});






/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+sectionId + ']').classList.remove('active')
            }
    }
    )

}

