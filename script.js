console.log('js ok')

const images = ['01', '02' , '03', '04', '05']
let imageindex = 0;


const container = document.querySelector('carousel');

for (i = 0 ; i < images.lenght ; i++) {

    const image = images[i];
    const imageClass = i === imageindex ? 'object active' : 'object'
}

