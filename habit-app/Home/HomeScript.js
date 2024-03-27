//nilai nama user yang udah pernah join
let usernameValue = localStorage.getItem('localUsername');
let usernameLabel = document.querySelector('.username');
usernameLabel.textContent = usernameValue;

//element nilai di laman home
let plusButton = document.querySelector('.plus');
let habitArea = document.querySelector('.habit-area');
let oneHabit = document.querySelector('.one-habit');
let deleteButton = document.querySelector('.delete');

//buat habit card
if(habitArea.childElementCount == 0){
    for(let i=0;i<JSON.parse(localStorage.getItem("TeksJudul")).length;i++){
    
        let card = document.createElement('div');
        let jumlah = document.createElement('div');
        let judul = document.createElement('div');
        let x = document.createElement('div');

        //penamaan class
        card.className = "habit-card";
        jumlah.className = "home-jumlah-hari";
        judul.className = "home-judul-habit";
        x.className = "tanda-hapus";

        //memasukkan ke elemen card
        card.append(judul);
        card.append(jumlah);
        card.appendChild(x);

        habitArea.append(card);

        judul.textContent = JSON.parse(localStorage.getItem("TeksJudul"))[i];
        jumlah.textContent = JSON.parse(localStorage.getItem("JumlahHari"))[i] + " Hari";
        x.textContent = "x";
    }
}

//elemen card
let card = document.querySelectorAll('.habit-card');
let color = ['purple','green','black','gray','aqua','brown','darkgreen','coral','tomato','darkviolet','purple','green','black','gray','aqua','brown','darkgreen','coral','tomato','darkviolet','purple','green','black','gray','aqua','brown','darkgreen','coral','tomato','darkviolet','purple','green','black','gray','aqua','brown','darkgreen','coral','tomato','darkviolet','purple','green','black','gray','aqua','brown','darkgreen','coral','tomato','darkviolet'];
localStorage.setItem('color',JSON.stringify(color));

//ngubah background
function colorCard(){
    for(let i=0;i<arrTeksJudul.length;i++){
        let warnaStorage = JSON.parse(localStorage.getItem('color'));
        card[i].style.backgroundColor = warnaStorage[i];
    }
}

//ngaktifin tombol delete
deleteButton.addEventListener('click',function(){
    for(x of xButtons){
        if(x.style.visibility == "visible"){
            x.style.visibility = "hidden"
        }
        else{
            x.style.visibility = "visible";
        }
    }
    
});

//ngapus habit card
let xButtons = document.querySelectorAll('.tanda-hapus');
for( xButton of xButtons){
    xButton.addEventListener('click',function(){
        let elemen = this.parentElement;
        for(let i=0;i<arrTeksJudul.length;i++){
            if(elemen.textContent == arrTeksJudul[i]+arrJumlahHari[i]+" Harix"){
                localStorage.removeItem(`${arrTeksJudul[i]}`);
                penghapusIndeks(i);
                location.reload();
            }
        }
    });
}

//fungsi menghapus data di local storage
function penghapusIndeks(indeksChildren){
    arrTeksJudul.splice(indeksChildren, 1);
    localStorage.setItem('TeksJudul',JSON.stringify(arrTeksJudul));

    arrJumlahHari.splice(indeksChildren,1);
    localStorage.setItem('JumlahHari',JSON.stringify(arrJumlahHari));

    arrTanggal.splice(indeksChildren,1);
    localStorage.setItem('Tanggal',JSON.stringify(arrTanggal));

    color.splice(indeksChildren,1);
    localStorage.setItem('color',JSON.stringify(color));
}

colorCard();



