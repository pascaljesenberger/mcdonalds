const logo = document.querySelector('.main-logo');

logo.addEventListener('click', () => {
    const audio = new Audio('audio/jingle.mp3');
    audio.play();
});

const reponse1 = document.querySelector('#a');
const reponse2 = document.querySelector('#b');
const reponse3 = document.querySelector('#c');

reponse1.addEventListener('click', () => {
    alert('Oups, mauvaise réponse !');
});

reponse2.addEventListener('click', () => {
    alert('Sérieusement ? Le Burger King ? 🙄');
});

reponse3.addEventListener('click', () => {
	alert('Bravo, bonne réponse !');
});


const fritesImage = document.querySelector('.frites-img');
const radioInputs = document.querySelectorAll('input[name="frites"]')
radioInputs.forEach(input => {
    input.addEventListener('click', () => {
        if (input.id === 'frites-s') {
          fritesImage.src = './img/frites-s.png';
        } else if (input.id === 'frites-m') {
          fritesImage.src = './img/frites-m.png';
        } else if (input.id === 'frites-l') {
          fritesImage.src = './img/frites-l.png';
        }
    });
  });
