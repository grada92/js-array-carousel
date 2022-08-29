console.log('js ok')

const images = ['01', '02' , '03', '04', '05'];


const container = document.querySelector('.container-carousel');

// Ciclo per immagini 
for (i = 0 ; i < images.length ; i++) {
    const image = images[i];
    container.innerHTML += '<img class="object" src="img/'+ image +'.jpg" alt="due" />'
}
// Imposto la prima immagine visibile
const firstImage = document.querySelector('.object');
firstImage.classList.add('active');


const previousButton = document.getElementById('previous');

const nextButton = document.getElementById('next');

// Imposto button next per scorrere immagini in avanti
nextButton.addEventListener('click',
    function(){
        console.log('mi hai cliccato');

        const activeImage = document.querySelector('.object.active');
        console.log(activeImage);
        const nextElement = activeImage.nextElementSibling; 
        console.log(nextElement);

        if (nextElement){
            activeImage.classList.remove('active');
            nextElement.classList.add('active');
        }
    }

);

// Imposto button previous per scorrere immagini indietro

  