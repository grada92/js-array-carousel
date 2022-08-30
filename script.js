console.log('js ok')

const images = ['01', '02' , '03', '04', '05'];

let index = 0;

const container = document.querySelector('.container-carousel');

// Ciclo per immagini 
for (i = 0 ; i < images.length ; i++) {
    const image = images[i];
    const activeClass = i === index ? 'object active' : 'object' // aggiungo condizione per attivare le classi da
    container.innerHTML += '<img class="'+ activeClass +'" src="img/'+ image +'.jpg" alt="due" />'
}



// Imposto la prima immagine visibile
/*const firstImage = document.querySelector('.object');
firstImage.classList.add('active');*/


const previousButton = document.getElementById('previous');

const nextButton = document.getElementById('next');

// Imposto button next per scorrere immagini in avanti
nextButton.addEventListener('click',
    function(){
        console.log('mi hai cliccato');

        if (index < images.length -1 ){
            container.innerHTML='';
            index++;
            
            for (let i = 0; i < images.length; i++){
                const image = images[i];
                const activeClass = i === index ? 'object active' : 'object'

                container.innerHTML += '<img class="'+ activeClass +'" src="img/'+ image +'.jpg" alt="due" />'

            }
        }
    }

);

// Imposto button previous per scorrere immagini indietro

previousButton.addEventListener('click',
    function(){
        
        if (index > 0){
            container.innerHTML='';
            index--;
            
            for (let i = 0; i < images.length; i++){
                const image = images[i];
                const activeClass = i === index ? 'object active' : 'object'

                container.innerHTML += '<img class="'+ activeClass +'" src="img/'+ image +'.jpg" alt="due" />'

            }
        }

    }
)  