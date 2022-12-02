// Duplication des div/card
let idCarte = 2;
// let lienCard = ['#','#','Spotify-gardelapeche.html', '#', '#'];
// let index= 0;

let cartes = {
    dupliquer:function(){
        // première ligne...j'aurai pu faire une boucle.
        let card = document.querySelector('.card');
        let cloneCard = card.cloneNode(true);
        document.querySelector('.cards').append(cloneCard);
        // Clone des image a changer
        cloneCard.querySelector('img').src=`images/cover${idCarte}.jpg`;
        // clone des href a changer...n'a pas marché...ressayé avec ce changement(deja mis)
        // cloneCard.querySelector('a').setAttribute('src', `lienCard[${index}]`);
        // index++;

        // deuxième ligne
        let card2 = document.querySelector('.card2');
        let cloneCard2 = card2.cloneNode(true);
        cloneCard2.querySelector('img').src=`images/cover${idCarte}.jpg`;
        document.querySelector('.cards2').append(cloneCard2);

        // troisième ligne
        let card3 = document.querySelector('.card3');
        let cloneCard3 = card3.cloneNode(true);
        cloneCard3.querySelector('img').src=`images/cover${idCarte}.jpg`;
        document.querySelector('.cards3').append(cloneCard3);

        // quatrième ligne
        let card4 = document.querySelector('.card4');
        let cloneCard4 = card4.cloneNode(true);
        cloneCard4.querySelector('img').src=`images/cover${idCarte}.jpg`;
        document.querySelector('.cards4').append(cloneCard4);
      
        idCarte++;
    }
}


for (let index = 0; index < 20; index++) {
    cartes.dupliquer();
}

// Agrandir le footer
let agrandir = document.querySelector('.fa-up-right-and-down-left-from-center');
let footer = document.querySelector('.footer');

agrandir.addEventListener('click', function () {
    footer.classList.toggle("active");
});