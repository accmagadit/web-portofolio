//elemen habit card di home
let habitCardsHome = document.querySelectorAll('.habit-card');
let arrTeksJudulStorage = JSON.parse(localStorage.getItem('TeksJudul'));
let arrJumlahHariStorage = JSON.parse(localStorage.getItem('JumlahHari'));
let arrTanggalStorage = JSON.parse(localStorage.getItem('Tanggal'));

//elemen di one habitcard
let container = document.querySelector('.card-container');
let cardJudul = document.querySelector('.card-judul');
let cardTanggal = document.querySelector('.tanggal');
let cardDaerah = document.querySelector('.card-daerah-kotak');
let buttonTrue = document.querySelector('.card-tombol-kehadiran-true');
let buttonFalse = document.querySelector('.card-tombol-kehadiran-false');
let jumlahTrue = document.querySelector('.card-jumlah-dilakukan');
let jumlahFalse = document.querySelector('.card-jumlah-tidak-dilakukan');
let xTombol = document.querySelectorAll('.tanda-hapus');
let kurangSatu = document.querySelector('.hapus-isi');

let hitungBenar = 0;
let hitungSalah = 0;

//habit card yang berada di home
for(habitCard of habitCardsHome){
    habitCard.addEventListener('click',function(){
        for(let i=0;i<arrTeksJudulStorage.length;i++){
            if(xTombol[i].style.visibility == '' || xTombol[i].style.visibility == 'hidden'){         
                let elemen = this.textContent;
                localStorage.setItem('valueBox',elemen);
                window.location.href = '../HabitCard/HabitCard.html';
            }
        }      
    });
}


setJudul(); //fungsi ngatur judul card
setHitungHari();
setKotak(); //fungsi ngarur banyak box
setLocalStorage(); //fungsi untuk memasukkan dan mengatur ke local storage
setWarnaKotak(arrSementara); //untuk ngatur warna
buttonWhenKotakFull();
setJumlah(); //untuk menghitung jumlah benar dan salah



function buttonWhenKotakFull(){
    if(cardDaerah.lastChild.style.backgroundColor == 'red' || cardDaerah.lastChild.style.backgroundColor == 'green'){
        buttonFalse.style.display = 'none';
        buttonTrue.style.display = 'none';
    }
}


function setLocalStorage(){
    if(localStorage.getItem(`${cardJudul.textContent}`)==null){
        arrSementara = [];
        setArrayKotak(arrSementara);
    }
    else{
        arrSementara = JSON.parse(localStorage.getItem(`${cardJudul.textContent}`));
        setArrayKotak(arrSementara);
    }
}

function setArrayKotak(arrSementara){
    buttonTrue.addEventListener('click',function(){
        arrSementara.push(true);
        localStorage.setItem(`${cardJudul.textContent}`,JSON.stringify(arrSementara));
        location.reload();
    });

    buttonFalse.addEventListener('click',function(){
        arrSementara.push(false);
        localStorage.setItem(`${cardJudul.textContent}`,JSON.stringify(arrSementara));
        location.reload();
    });
}

function setWarnaKotak(elemen){
    for(let i=0;i<elemen.length;i++){
        if(elemen[i]==true){
            cardDaerah.children[i].style.backgroundColor = 'green';
        }
        else{
            cardDaerah.children[i].style.backgroundColor = 'red';
        }
    }
}


function setJudul(){
    for(let i=0;i<arrTeksJudulStorage.length;i++){
        if(localStorage.getItem('valueBox')== arrTeksJudulStorage[i] + arrJumlahHariStorage[i] + " Harix"){
            cardJudul.textContent = arrTeksJudulStorage[i]
        }
    }
}

function setHitungHari(){
    for(let i=0;i<arrTeksJudulStorage.length;i++){
        if(localStorage.getItem('valueBox')== arrTeksJudulStorage[i] + arrJumlahHariStorage[i] + " Harix"){
            //cardTanggal.textContent = "It Must " + (Math.trunc(tanggal.getTime() / 86400000 ) - arrTanggalStorage[i]) + '!';
            let tanggal = new Date(); 
            let day = tanggal.getDate();
            let month = tanggal.getMonth();
            let year = tanggal.getFullYear();
            let valueDate = day + ((1 + month) * 30) + (year * 365);
            
            cardTanggal.textContent = "It Must " + (1 + valueDate  - arrTanggalStorage[i]) +'!';
        }
    }
}

function setKotak(){
    //cek kesamaan
    for(let i=0;i<arrJumlahHariStorage.length;i++){
        if(localStorage.getItem('valueBox')== arrTeksJudulStorage[i] + arrJumlahHariStorage[i] + " Harix"){
            //apabila sama, buat sebanyak isi dari array tersebut
            for(let j=0;j<arrJumlahHariStorage[i];j++){
                let kotak = document.createElement('div');
                kotak.className = 'card-kotak';
                cardDaerah.append(kotak);
            }
        }
    }
}

function setJumlah(){
    for(let i=0;i<arrSementara.length;i++){
        if(arrSementara[i]==true){
            hitungBenar++;
            jumlahTrue.textContent = hitungBenar + " Yes";
        }
        else{
            hitungSalah++;
            jumlahFalse.textContent = hitungSalah + " No";
        }
    } 
}



kurangSatu.addEventListener('click',function(){
    arrSementara.splice(arrSementara.length-1,1);
    localStorage.setItem(`${cardJudul.textContent}`,JSON.stringify(arrSementara));
    location.reload();
});
