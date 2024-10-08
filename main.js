const apiKey = 'PBQ3tOSKUj1qc6knIuno9aWBUz8G8kin0hDQP58JTAXtHnz0ngyIXJcu';  // Reemplaza con tu clave API de Pexels
const landingData = JSON.parse(localStorage.getItem('landingData') || '{}');
const businessModel = landingData.businessModel || 'cryptocurrency+fintech+investment';

fetch('./landingData.json')  // Ajusta la ruta según la plantilla seleccionada
  .then(response => response.json())
  .then(landingData => {
$(document).ready(function() {
    // Mostrar el menú
    $('.menu-icon').on('click', function() {
        $('.menu').toggleClass('show');
    });

    // Cerrar el menú al hacer clic en la "X"
    $('.close-menu').on('click', function() {
        $('.menu').removeClass('show');
    });

    // Smooth scroll for menu links
    $('nav ul li a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
    const editableContent = JSON.parse(localStorage.getItem('editableContent') || '{}');

// Obtener referencia al elemento de la imagen principal
const mainImage = document.getElementById('main-image');
fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(businessModel)}&per_page=1`, {
    headers: {
        Authorization: apiKey
    }
})
.then(response => response.json())
.then(data => {
    if (data.photos.length > 0) {
        mainImage.src = data.photos[0].src.large;
        mainImage.alt = data.photos[0].alt;

        // Esperar a que la imagen se cargue
        mainImage.onload = function() {
            // Solo si hay una imagen personalizada la cargamos, de lo contrario dejamos la de Pexels
            if (editableContent.imagen) {
              mainImage.src = editableContent.imagen;
              mainImage.alt = 'Imagen personalizada';
            }
          };
          
    }
})
.catch(error => console.error('Error fetching main image:', error));

// Gallery carousel functionality
let currentIndex2 = 0;
let pexelsData = []; // Variable para almacenar los datos de las imágenes desde Pexels

function updateMainImage(index) {
    if (pexelsData.length > 0 && pexelsData[index]) {
        const selectedImageSrc = pexelsData[index].src.large;
        $('#pexels-media-image').attr('src', selectedImageSrc);
        $('.thumbnail').removeClass('active');
        $('.thumbnail').eq(index).addClass('active');
    } else {
        console.error(`Imagen no encontrada en pexelsData para el índice ${index}`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Supongamos que landingData ya está cargado desde landingData.json
    const landingData = JSON.parse(localStorage.getItem('landingData'));

    if (landingData && landingData.logo) {
        // Encuentra el logo en el DOM
        const logoElement = document.getElementById('logo-header');
        if (logoElement) {
            // Actualiza el src con el logo en base64
            logoElement.src = landingData.logo;
        }
    } else {
        console.error('Logo no encontrado en landingData');
    }
});


console.log('landingData:', landingData);
console.log('businessModel:', businessModel);

// Obtener la imagen principal relacionada con "digital assets" o "financial technology"
fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(businessModel)}&per_page=1`, {
    headers: {
        Authorization: apiKey
    }
})
.then(response => response.json())
.then(data => {
    const mainImage = document.getElementById('pexels-media-image');
    if (data.photos.length > 0) {
        mainImage.src = data.photos[0].src.large;
        mainImage.alt = data.photos[0].alt;
        pexelsData.push(data.photos[0]); // Almacena la imagen principal en pexelsData
    }
})
.catch(error => console.error('Error fetching main image:', error));

$(document).ready(function() {
    let currentIndex2 = 0;
    let pexelsData = []; // Variable para almacenar los datos de las imágenes desde Pexels
    const totalImages = 5; // El número de imágenes que tienes en la galería

    function updateMainImage(index) {
        if (pexelsData.length > 0 && pexelsData[index]) {
            const selectedImageSrc = pexelsData[index].src.large;
            $('#pexels-media-image').attr('src', selectedImageSrc);
            $('.thumbnail').removeClass('active');
            $('.thumbnail').eq(index).addClass('active');
        } else {
            console.error(`Imagen no encontrada en pexelsData para el índice ${index}`);
        }
    }
    console.log(businessModel);
    fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(businessModel)}&per_page=5`, {
        headers: {
            Authorization: apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const thumbnails = ['pexels-thumb1', 'pexels-thumb2', 'pexels-thumb3', 'pexels-thumb4', 'pexels-thumb5'];
        data.photos.forEach((photo, index) => {
            const thumbElement = document.getElementById(thumbnails[index]);
            
            if (thumbElement) {
                thumbElement.src = photo.src.small;
                thumbElement.alt = photo.alt;
                pexelsData.push(photo); // Almacena las miniaturas en pexelsData
                
                thumbElement.addEventListener('click', function() {
                    updateMainImage(index);
                });
                console.log(`Imagen business ${index + 1} asignada:`, photo.src.medium);
            } else {
                console.error(`Elemento de miniatura con ID ${thumbnails[index]} no encontrado.`);
            }
        });

        // Asegúrate de inicializar la primera imagen correctamente
        updateMainImage(0);
        
    })
    .catch(error => console.error('Error fetching thumbnails:', error));

    // Función para cambiar la imagen automáticamente
    function autoChangeImage() {
        currentIndex2 = (currentIndex2 + 1) % totalImages; // Avanza el índice y lo vuelve a 0 al llegar al final
        updateMainImage(currentIndex2); // Cambia la imagen principal
    }

    // Cambiar automáticamente cada 3 segundos
    setInterval(autoChangeImage, 3000);
});

});$(document).ready(function() {
    const totalTestimonials = $('.small-testimonial').length;

    function updateFeaturedTestimonial(index) {
        const selectedTestimonial = $(`.small-testimonial:eq(${index})`);
        const featuredImageElement = $('.testimonial-image');
        const featuredText = $('#testimonial-description');
        const featuredTitle = $('#testimonial-title');
        const featuredRating = $('.testimonial-rating');

        // Obtener la URL de la imagen de fondo del testimonio pequeño
        const newImageUrl = selectedTestimonial.find(`.testimonial-image-${index + 1}`).css('background-image');

        // Asegúrate de que la URL de la imagen esté limpia (sin 'url("")' alrededor)
        const cleanedImageUrl = newImageUrl ? newImageUrl.replace(/(^url\()|(\)$|[\"\'])/g, '') : '';

        // Aplicar la imagen de fondo correctamente
        if (cleanedImageUrl) {
            featuredImageElement.css({
                'background-image': `url(${cleanedImageUrl})`,
                'background-size': 'cover',
                'background-position': 'center',
                'background-repeat': 'no-repeat'
            });
        }

        // Actualizar el texto y título del testimonio destacado
        const newText = selectedTestimonial.find('.small-testimonial-text p').text();
        const newTitle = `Testimonio ${index + 1}`;
        const newRating = selectedTestimonial.find('.testimonial-rating').html();  // Obtiene el contenido de estrellas

        featuredTitle.text(newTitle);
        featuredText.text(newText);
        featuredRating.html(newRating);  // Asegúrate de usar .html() para copiar las estrellas correctamente

        // Actualizar el estado activo
        $('.small-testimonial').removeClass('active');
        selectedTestimonial.addClass('active');
    }

    // Función para asegurarte de que el testimonio inicial se carga correctamente
    function initializeTestimonials() {
        if (totalTestimonials > 0) {
            // Inicializar el primer testimonio como activo al cargar la página
            updateFeaturedTestimonial(0);
        } else {
            console.error('No se encontraron testimonios.');
        }
    }

    // Ejecuta la inicialización de los testimonios después de que se ha completado la carga de la página
    $(window).on('load', function() {
        initializeTestimonials();
    });

    // Escuchar los eventos de clic en los pequeños testimonios
    $('.small-testimonial').on('click', function() {
        const index = $(this).index();
        updateFeaturedTestimonial(index);
    });

    // Funcionalidad de flechas
    $('.next').on('click', function() {
        if (currentIndex < totalTestimonials - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Si estamos en el último testimonio, volver al primero
        }
        updateFeaturedTestimonial(currentIndex);
    });

    $('.prev').on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalTestimonials - 1; // Si estamos en el primer testimonio, ir al último
        }
        updateFeaturedTestimonial(currentIndex);
    });
});

fetch('https://api.pexels.com/v1/search?query=person&per_page=3', {
    headers: {
        Authorization: apiKey
    }
})
.then(response => response.json())
.then(data => {
    if (data.photos.length > 0) {
        // Recorre las imágenes de los testimonios y asigna cada una a la clase correspondiente
        data.photos.forEach((photo, index) => {
            const className = `.testimonial-image-${index + 1}`;
            const testimonialImageElement = $(className);

            if (testimonialImageElement.length) {
                testimonialImageElement.css({
                    'background-image': `url(${photo.src.medium})`,
                    'background-size': 'cover',
                    'background-position': 'center',
                    'width': '100px',  // Ajusta el tamaño según sea necesario
                    'height': '100px', // Ajusta el tamaño según sea necesario
                    'border-radius': '50%'  // Para hacer la imagen circular
                });
                console.log(`Imagen testimonial ${index + 1} asignada:`, photo.src.medium);
            } else {
                console.error(`No se encontró el elemento testimonial-image-${index + 1} para asignar la imagen.`);
            }
        });
    } else {
        console.error('No se encontraron imágenes en la respuesta de Pexels.');
    }
})
.catch(error => console.error('Error fetching testimonial images from Pexels:', error));
// Supongamos que ya has cargado las imágenes de los testimonios pequeños (testimonial-image-1, testimonial-image-2, testimonial-image-3)

// Funcionalidad de carrusel de testimonios
let currentIndex = 0;
const totalCards = $('.testimonial-cards .card').length;



document.addEventListener('DOMContentLoaded', function() {
    const companyName = localStorage.getItem('companyName') || '[Nombre de tu Empresa]';
    const businessModel = localStorage.getItem('businessModel') || 'Servicios de Activos Digitales';

    // Actualizar los elementos en el DOM con el nombre de la empresa
    document.querySelectorAll('#company-name, #company-name-service, #company-name-testimonial').forEach(el => {
        el.textContent = companyName;
    });

    // Actualizar el modelo de negocio en la sección de servicios
    const serviceTitleElement = document.getElementById('company-name-service');
    if (serviceTitleElement) {
        serviceTitleElement.textContent = `Nuestros ${businessModel}`;
    }
});


// Obtener datos del localStorage
if (landingData) {
    console.log(landingData);
    // Reemplazar los placeholders con los datos reales
    document.querySelectorAll('#company-name-placeholder').forEach(el => el.textContent = landingData.companyName);
    document.querySelectorAll('#business-model-placeholder').forEach(el => el.textContent = landingData.businessModel);

    // Actualizar el logo en el header y el footer
    if (landingData.logo) {
        document.getElementById('logo-header').src = landingData.logo;
        document.getElementById('logo-footer').src = landingData.logo;
    }
    document.getElementById('main-title').textContent = landingData.mainTitle;
    document.getElementById('main-paragraph').textContent = landingData.mainParagraph;
   
    document.getElementById('testimonial-1').textContent = landingData.testimonials[0];
    document.getElementById('testimonial-2').textContent = landingData.testimonials[2];
    document.getElementById('testimonial-3').textContent = landingData.testimonials[4];

    // Ejemplo al aplicar contenido al HTML en el frontend
    document.getElementById('titulo-1').textContent = landingData.titulo1.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-1').textContent = landingData.subtitulo1.replace(/[*"]/g, '').replace(/['"]/g, '');

    document.getElementById('titulo-2').textContent = landingData.titulo2.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-2').textContent = landingData.subtitulo2.replace(/[*"]/g, '').replace(/['"]/g, '');

    document.getElementById('titulo-3').textContent = landingData.titulo3.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-3').textContent = landingData.subtitulo3.replace(/[*"]/g, '').replace(/['"]/g, '');

    document.getElementById('titulo-4').textContent = landingData.titulo4.replace(/[*"]/g, '').replace(/['"]/g, '');
    document.getElementById('subtitulo-4').textContent = landingData.subtitulo4.replace(/[*"]/g, '').replace(/['"]/g, '');

    // Aplicar los enlaces a los botones
    if (landingData['button-1-link']) {
        document.getElementById('button-1').onclick = () => { window.location.href = landingData['button-1-link']; };
    }
    if (landingData['button-2-link']) {
        document.getElementById('button-2').onclick = () => { window.location.href = landingData['button-2-link']; };
    }
    if (landingData['button-1-text']) {
        document.getElementById('button-1').textContent = landingData['button-1-text'];
      }
      if (landingData['button-2-text']) {
        document.getElementById('button-2').textContent = landingData['button-2-text'];
      }
      
}
document.body.style.fontFamily = data.fontFamily || 'default-font';

data.customizations.forEach(customization => {
    const element = document.getElementById(customization.elementId);
    if (element) {
      element.setAttribute('href', customization.content); // O el atributo correspondiente
    }
  });
  
  // Aplicar los enlaces de redes sociales
  document.getElementById('facebook-link').setAttribute('href', data.socialLinks.facebook);
  document.getElementById('twitter-link').setAttribute('href', data.socialLinks.twitter);
  document.getElementById('instagram-link').setAttribute('href', data.socialLinks.instagram);
  
})
.catch(error => {
  console.error('Error al cargar landingData.json:', error);
});