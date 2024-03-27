if(localStorage.getItem('localUsername')==null)
    setInterval(function(){
        window.location.href = 'NewUser/User.html';
    },3000);
else{
    setInterval(function(){
        window.location.href = 'Home/Home.html';
    },3000);
}
