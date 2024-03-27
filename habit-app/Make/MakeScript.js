//komponen yang akan ditambahkan
let box = document.createElement('div');
let eleJudulHabit = document.createElement('h4');
let eleHari = document.createElement('div');

//teks judul dan hari
let arrTeksJudul = JSON.parse(localStorage.getItem('TeksJudul'));
let arrJumlahHari = JSON.parse(localStorage.getItem('JumlahHari'));
let arrTanggal = JSON.parse(localStorage.getItem('Tanggal'));


//element nilai di laman make
let createButton = document.querySelector('.btn-create');
let teksJudul = document.querySelector('.inp-habit');
let jumlahHari = document.querySelector('.jumlah-hari');

//elemen di home
let homeButton =  document.querySelector('.habit-area');

 
//pengambilan nilai yang diperlukan
createButton.addEventListener('click',function(){

    //kondisi apabila data fill yang diisikan tidak penuh
    if(jumlahHari.value=="" || teksJudul.value==""){
        //style yang akan terjadi
        teksJudul.style.borderColor = 'red';
        jumlahHari.style.borderColor = 'red';
        teksJudul.setAttribute("placeholder","Di isi dulu bro!")
        jumlahHari.setAttribute("placeholder","Di isi dulu bro!")
    }

    //apabila sudah penuh, masukkan ke local storage
    else{
        //apabila local storage kosong
        if(arrJumlahHari==null || arrTeksJudul==null || arrTanggal==null){
            let arrJumlahHari = [];
            let arrTeksJudul = [];
            let arrTanggal = [];
            let d = new Date();
            let day = d.getDate();
            let month = d.getMonth();
            let year = d.getFullYear();
            
            //pembuatan array untuk nilai teks judul dan jumlah hari
            arrJumlahHari.push(jumlahHari.value);
            arrTeksJudul.push(teksJudul.value);
            arrTanggal.push(day + ((1 + month) * 30) + (year * 365));

            //memasukkan data ke local storage
            localStorage.setItem('TeksJudul',JSON.stringify(arrTeksJudul));
            localStorage.setItem('JumlahHari',JSON.stringify(arrJumlahHari));
            localStorage.setItem('Tanggal',JSON.stringify(arrTanggal));

        }else{
            //pembuatan array untuk nilai teks judul dan jumlah hari
                let d = new Date();
                let day = d.getDate();
                let month = d.getMonth();
                let year = d.getFullYear();

            arrTeksJudul.push(teksJudul.value);
            arrJumlahHari.push(jumlahHari.value);    
            arrTanggal.push(day + ((1 + month) * 30) + (year * 365));


            //memasukkan data ke local storage
            localStorage.setItem('TeksJudul',JSON.stringify(arrTeksJudul));
            localStorage.setItem('JumlahHari',JSON.stringify(arrJumlahHari));
            localStorage.setItem('Tanggal',JSON.stringify(arrTanggal));
        }

       

        window.location.href = "../Home/Home.html";
        //element habit card
        let card = document.createElement('div');
        let jumlah = document.createElement('div');
        let judul = document.createElement('div');

        //penamaan class
        card.className = "habit-card";
        jumlah.className = "home-jumlah-hari";
        judul.className = "home-jumlah-hari";

        //memasukkan ke elemen card
        card.append(judul);
        card.append(jumlah);
        habitArea.append(card);
    }
});
