//meletakkan nilai di local storage
let idValue = new Date();
let bookTitle = document.querySelector("#inputBookTitle");
let bookAuthor = document.querySelector("#inputBookAuthor");
let bookYear = document.querySelector("#inputBookYear");
let inputBookIsComplete = document.querySelector("#inputBookIsComplete");
let butBookSubmit = document.querySelector("#bookSubmit");
let inCompleteArea = document.querySelector("#incompleteBookshelfList");

butBookSubmit.addEventListener('click',function(){
    if(localStorage.getItem('buku') == null){
        let arrayBook = [];
        let book = {
            id : idValue.getTime(),
            title : `${bookTitle.value}`,
            author : `${bookAuthor.value}`,
            year : `${bookYear.value}`,
            isComplete : inputBookIsComplete.checked
        }
        arrayBook.push(book);
        localStorage.setItem('buku', JSON.stringify(arrayBook));
    }
    else{
        let arrayBook = JSON.parse(localStorage.getItem('buku'));
        let book = {
            id : idValue.getTime(),
            title : `${bookTitle.value}`,
            author : `${bookAuthor.value}`,
            year : `${bookYear.value}`,
            isComplete : inputBookIsComplete.checked
        }
        arrayBook.push(book);
        localStorage.setItem('buku', JSON.stringify(arrayBook));
    }
    
});


let arrayBook = JSON.parse(localStorage.getItem('buku'));
checkIfReady(arrayBook);

function checkIfReady(arrayBook){
    //meletakkan di rak belum dibaca dan sudah dibaca
    for(let i=0;i<arrayBook.length;i++){    
        let areaBookIncomplete = document.createElement('div');
        areaBookIncomplete.setAttribute('id','incompleteBookshelfList');
        areaBookIncomplete.className = "ibook_list";

        let areaBookcomplete = document.createElement('div');
        areaBookcomplete.setAttribute('id','completeBookshelfList');
        areaBookcomplete.className = "cbook_list";

        let book = document.createElement('article'); book.className = "book_item"; //satuan buku

        let h3 = document.createElement('h3');
        let penulis = document.createElement('p'); penulis.className = "penulis";
        let tahun = document.createElement('p'); penulis.className = "tahun";

        let actionArea = document.createElement('div'); actionArea.className = "action";
        let butSelesaiDibaca = document.createElement('button'); butSelesaiDibaca.className = "green";
        let butHapusBuku = document.createElement('button'); butHapusBuku.className = "red";

        let iBookShelf = document.querySelector(".ibook_shelf"); //area semua buku incomplete
        let cBookShelf = document.querySelector(".cbook_shelf"); //area semua buku complete


        book.append(h3); 
        h3.textContent = arrayBook[i].title;
        book.append(penulis);
        penulis.textContent = 'Penulis: '+arrayBook[i].author;
        book.append(tahun); 
        tahun.textContent = 'Tahun: ' + arrayBook[i].year; 

        actionArea.append(butSelesaiDibaca);
        actionArea.append(butHapusBuku);
        butHapusBuku.textContent = 'Hapus Buku';
        book.append(actionArea);

        if(arrayBook[i].isComplete == false){
            areaBookIncomplete.append(book);
            butSelesaiDibaca.textContent = "Selesai dibaca";
            iBookShelf.append(areaBookIncomplete);
        }
        else{
            areaBookcomplete.append(book);
            butSelesaiDibaca.textContent = "Belum selesai dibaca";
            cBookShelf.append(areaBookcomplete);
        }
    }
}


deleteButtons = document.querySelectorAll('.red');
for(deleteButton of deleteButtons){
    deleteButton.addEventListener('click',function(){
        let element = this.parentElement;
        let element2 = element.parentElement;
        console.log(element2.textContent);
         for(let i=0;i<arrayBook.length;i++){
             if(element2.textContent == arrayBook[i].title + "Penulis: " +arrayBook[i].author+"Tahun: "+arrayBook[i].year + "Selesai dibacaHapus Buku" || element2.textContent == arrayBook[i].title + "Penulis: " +arrayBook[i].author+"Tahun: "+arrayBook[i].year + "Belum selesai dibacaHapus Buku"){
                console.log('yes');
                penghapusBook(i);
                location.reload();
            }
            else{
                console.log('kok yang ini?');
            }
        } 
    });
}

removeButtons = document.querySelectorAll('.green');
for(removeButton of removeButtons){
    removeButton.addEventListener('click',function(){
        let element = this.parentElement;
        let element2 = element.parentElement;
        console.log(element2.textContent);
         for(let i=0;i<arrayBook.length;i++){
             if(element2.textContent == arrayBook[i].title + "Penulis: " +arrayBook[i].author+"Tahun: "+arrayBook[i].year + "Selesai dibacaHapus Buku" || element2.textContent == arrayBook[i].title + "Penulis: " +arrayBook[i].author+"Tahun: "+arrayBook[i].year + "Belum selesai dibacaHapus Buku"){
                if(arrayBook[i].isComplete == true){
                    console.log('true');
                    arrayBook[i].isComplete = false;                   
                    localStorage.setItem('buku',JSON.stringify(arrayBook));
                    location.reload();
                }
                else{
                    console.log('false');
                    arrayBook[i].isComplete = true;
                    localStorage.setItem('buku',JSON.stringify(arrayBook));
                    location.reload();
                }
            }
        } 
    });
}


function penghapusBook(indeks){
    arrayBook.splice(indeks,1);
    localStorage.setItem('buku',JSON.stringify(arrayBook));
}




