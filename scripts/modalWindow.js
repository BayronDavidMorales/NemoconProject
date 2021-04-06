import data from '../database/places.js'
let indexImages=1;
var infoG='holi'
let cerrar = document.querySelectorAll('.close')[0];
let modal = document.querySelectorAll('.modal')[0];
let modalC = document.querySelectorAll('.modal-container')[0];
// botones imagenes
let left = document.querySelectorAll('#left')[0];
let right = document.querySelectorAll('#right')[0];



document.querySelectorAll('.bc').forEach(item => {
    // let place= this.getAttribute("name");
    item.onmouseover = function () { mouseOver(this.getAttribute("name")) };
    item.onmouseout = function () { mouseOut(this.getAttribute("name")) };
    item.addEventListener('click', function (e) {
        e.preventDefault();
        let info=selcetData(this.getAttribute('name'));
        infoG=info;
        abrir(info);
        document.getElementById("placeImages").style.backgroundImage = ('url("database/placeImages/' + info.id + '/1.jpg")').trim();
        document.querySelectorAll('.external-link')[0].href = info.externalLink;
        document.querySelectorAll('.how-to-get')[0].href = info.howToGet;
    });
})

function selcetData(name){
    // console.log(code);
    let selectData;
    switch (name) {
        case 'mina':
            selectData = data.mina;
            // console.log(selectData);
            break;
        case 'hospital':
            selectData = data.hospital;
            // console.log(selectData);
            break;
        default:
            selectData = data.hospital;
            console.log('name: ', name);
            console.log(selectData);
    }
    return selectData;   
}

function mouseOver(name) {
    document.getElementById(name).style.fill = "#F27405";
    // modalC.style.opacity = 1;
    // modalC.style.visibility = 'visible';
    // modal.classList.toggle('modal-close');
}

function mouseOut(name) {
    document.getElementById(name).style.fill = "#909090";
    // modal.classList.toggle('modal-close');
    // setTimeout(function () {
    //     modalC.style.opacity = 0;
    //     modalC.style.visibility = 'hidden';
    // }, 100);
}

function abrir(info){
    modalC.style.opacity = 1;
    modalC.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
    document.getElementById("placeName").innerHTML = info.name;
    document.getElementById("placeDescription").innerHTML = info.description;
}

left.addEventListener('click', function (e) {
    if (indexImages >= infoG.n) {
        indexImages = 1;
        // document.getElementById("placeImages").src = ('database/placeImages/' + infoG.id + '/' + indexImages + '.jpg').trim();
        document.getElementById("placeImages").style.backgroundImage = ('url("database/placeImages/' + infoG.id + '/' + indexImages + '.jpg")').trim();


    } else {
        indexImages++;
        // document.getElementById("placeImages").src = ('database/placeImages/' + infoG.id + '/' + indexImages + '.jpg').trim();
        document.getElementById("placeImages").style.backgroundImage = ('url("database/placeImages/' + infoG.id + '/' + indexImages + '.jpg")').trim();

    }
});
right.addEventListener('click', function (e) {
    if(indexImages<=1){
        indexImages = infoG.n;
        document.getElementById("placeImages").style.backgroundImage = ('url("database/placeImages/' + infoG.id + '/' + indexImages + '.jpg")').trim();
        // document.getElementById("placeImages").src = ('database/placeImages/' + infoG.id + '/' + indexImages + '.jpg').trim();
    }else{
        indexImages--;
        document.getElementById("placeImages").style.backgroundImage = ('url("database/placeImages/' + infoG.id + '/' + indexImages + '.jpg")').trim();

        // document.getElementById("placeImages").src = ('database/placeImages/' + infoG.id + '/' + indexImages + '.jpg').trim();
    }
});

cerrar.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.toggle('modal-close');
    setTimeout(function () {
        modalC.style.opacity = 0;
        modalC.style.visibility = 'hidden';
    }, 100);
});

window.addEventListener('click', function (e) {
    // console.log(e.target);
    if (e.target == modalC) {
        modal.classList.toggle('modal-close');
        setTimeout(function () {
            modalC.style.opacity = 0;
            modalC.style.visibility = 'hidden';
        }, 300);
    }
})