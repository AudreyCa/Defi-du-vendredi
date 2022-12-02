/////////////////page-rechercher////////////////
// Duplication des playslists
let idPlaylist = 2;
let titrePlaylist = ['Conçu spécialement pour vous', 'Classements', 'Dernières sorties', 'Découvrir', ' Ete', 'Hip-hop', 'Pop', 'blabla', 'blabla', 'blabla', 'blabla', 'blabla', 'blabla', 'blabla', 'blabla', 'blabla', 'blabla', 'blabla', 'blabla'];
let newColor = ['red', 'blue','yellow', 'pink', 'violet', 'green','red', 'yellow', 'pink', 'blue','violet', 'green','red', 'yellow','blue', 'pink', 'violet', 'green','blue','red', 'yellow', 'pink', 'violet','blue', 'green','red', 'yellow', 'pink','blue', 'violet', 'green']
let index= 0;


let playlists = {
    multiplier:function(){
        // clone de la div
        let playlist = document.querySelector('.cardPlaylist');
        let clonePlaylist = playlist.cloneNode(true);
        document.querySelector('.cardsplaylists').append(clonePlaylist);
        // clone des images a changer
        clonePlaylist.querySelector('img').src=`images/${idPlaylist}.jpg`;
        idPlaylist++;
        // clone des paragraphes a changer
        clonePlaylist.querySelector('p').innerHTML = titrePlaylist[`${index}`];
        index++;
        // clone des couleurs a changer
        clonePlaylist.style.backgroundColor = newColor[`${index}`];
        index++;
    }
}


for (let index = 0; index < 20; index++) {
    playlists.multiplier();
}