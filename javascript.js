

// Block randomize
const block = ['<a href="urknall/urknall.html" id="link1"><img src="urknall/bilder/Urknall.webp" id="img1"><p id="p1">Urknall</p></a>'
            ,'<a href="orient/sumer.html"><img src="orient/bilder/sumer.png"><p>Alter Orient</p></a>'
            ,'<a href="abrahamismus/abrahamismus.html"><img src="abrahamismus/bilder/abrahamismus.png"><p>Abrahamismus</p></a>'
            ,'<a href="griechish/griechisch.html"><img src="griechisch/bilder/griechisch.jpg"><p>Griechische Antike</p></a>'
            ,'<a href="zoroastrismus/zoroastrismus.html"><img src="zoroastrismus/bilder/zoroastrismus.svg"><p>Zoroastrismus</p></a>']


rndBlock = Math.floor(Math.random() * block.length);

document.getElementById('block1').innerHTML = block[rndBlock];
block.splice(rndBlock,1);
rndBlock = Math.floor(Math.random() * block.length);
document.getElementById('block2').innerHTML = block[rndBlock];
block.splice(rndBlock,1);
rndBlock = Math.floor(Math.random() * block.length);
document.getElementById('block3').innerHTML = block[rndBlock];
block.splice(rndBlock,1);
rndBlock = Math.floor(Math.random() * block.length);
document.getElementById('block4').innerHTML = block[rndBlock];
block.splice(rndBlock,1);


function changeZitat() {
    document.getElementById('Zitat').innerHTML = '"Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit, aber bei dem Universum bin ich mir noch nicht ganz sicher."';
}

function changeZitatBack() {
    document.getElementById('Zitat').innerHTML = '"Das Unverständlichste am Universum ist im Grunde, dass wir es verstehen können."';
}