let nama = document.querySelector('.ask-username')
let button = document.querySelector('.next-button');


//apabila button ditekan, lalu apakah sudah ada username belum ada yang join
button.addEventListener('click',function(e){
    e.preventDefault(); 
    localStorage.setItem('localUsername',nama.value)
    location.href = "../Home/Home.html";
    }
);





