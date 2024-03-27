window.addEventListener('DOMContentLoaded', function() {
  var scrollMe = document.querySelector('.scroll-me');
  var windowWidth = window.innerWidth;

  if (windowWidth < 1000) {
    scrollMe.style.opacity = '1';
  }

  window.addEventListener('scroll', function() {
    scrollMe.style.display = 'none';
  });
});


//home
const home = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.area-text');
  
      if (entry.isIntersecting) {
        square.classList.add('area-text-animation');
        return; // if we added the class, exit the function
      }

      // square.classList.remove('area-text-animation');
    });
  });
  
  home.observe(document.querySelector('.home-container'));


const profile = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.profile');
  
      if (entry.isIntersecting) {
        square.classList.add('profile-animation');
        return; // if we added the class, exit the function
      }

      // square.classList.remove('profile-animation');
    });
  });
  
  profile.observe(document.querySelector('.home-container'));


  //skill
  function box() {
    var box = document.querySelector(".box");
  
    for (var i = 0; i < 2; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = box.getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        box.classList.add("box-animation");
      } 
      // else {
      //   box.classList.remove("box-animation");
      // }
    }
  }
  
  window.addEventListener("scroll", box);



  //bar
  function bar1() {
    var box = document.querySelector(".bar-1");
  
    for (var i = 0; i < 2; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = box.getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        box.classList.add("bar-1-animation");
      } 
      // else {
      //   box.classList.remove("bar-1-animation");
      // }
    }
  }
  
  window.addEventListener("scroll", bar1);

  //bar
  function bar2() {
    var box = document.querySelector(".bar-2");
  
    for (var i = 0; i < 2; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = box.getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        box.classList.add("bar-2-animation");
      } 
      // else {
      //   box.classList.remove("bar-2-animation");
      // }
    }
  }
  
  window.addEventListener("scroll", bar2);


 //bar
 function bar3() {
  var box = document.querySelector(".bar-3");

  for (var i = 0; i < 2; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = box.getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      box.classList.add("bar-3-animation");
    } 
    // else {
    //   box.classList.remove("bar-3-animation");
    // }
  }
}

window.addEventListener("scroll", bar3);


//bar
function bar4() {
 var box = document.querySelector(".bar-4");

 for (var i = 0; i < 2; i++) {
   var windowHeight = window.innerHeight;
   var elementTop = box.getBoundingClientRect().top;
   var elementVisible = 150;

   if (elementTop < windowHeight - elementVisible) {
     box.classList.add("bar-4-animation");
   } 
   // else {
   //   box.classList.remove("bar-4-animation");
   // }
 }
}
window.addEventListener("scroll", bar4);

//bar
function bar5() {
 var box = document.querySelector(".bar-5");

 for (var i = 0; i < 2; i++) {
   var windowHeight = window.innerHeight;
   var elementTop = box.getBoundingClientRect().top;
   var elementVisible = 150;

   if (elementTop < windowHeight - elementVisible) {
     box.classList.add("bar-5-animation");
   } 
   // else {
   //   box.classList.remove("bar-4-animation");
   // }
 }
}
window.addEventListener("scroll", bar5);


//projek
function projek() {
 var box = document.querySelector(".judul");

 for (var i = 0; i < 2; i++) {
   var windowHeight = window.innerHeight;
   var elementTop = box.getBoundingClientRect().top;
   var elementVisible = 150;

   if (elementTop < windowHeight - elementVisible) {
     box.classList.add("judul-animation");
   } 
   // else {
   //   box.classList.remove("bar-4-animation");
   // }
 }
}
window.addEventListener("scroll", projek);



function administrationCafe() {
 var box = document.querySelector(".administration-cafe");

 for (var i = 0; i < 2; i++) {
   var windowHeight = window.innerHeight;
   var elementTop = box.getBoundingClientRect().top;
   var elementVisible = 150;

   if (elementTop < windowHeight - elementVisible) {
     box.classList.add("administration-cafe-animation");
   } 
   // else {
   //   box.classList.remove("bar-4-animation");
   // }
 }
}
window.addEventListener("scroll", administrationCafe);



function habitFigma() {
 var box = document.querySelector(".habit-figma");

 for (var i = 0; i < 2; i++) {
   var windowHeight = window.innerHeight;
   var elementTop = box.getBoundingClientRect().top;
   var elementVisible = 150;

   if (elementTop < windowHeight - elementVisible) {
     box.classList.add("habit-figma-animation");
   } 
   // else {
   //   box.classList.remove("bar-4-animation");
   // }
 }
}
window.addEventListener("scroll", habitFigma);


function habitApp() {
 var box = document.querySelector(".habit-app");

 for (var i = 0; i < 2; i++) {
   var windowHeight = window.innerHeight;
   var elementTop = box.getBoundingClientRect().top;
   var elementVisible = 150;

   if (elementTop < windowHeight - elementVisible) {
     box.classList.add("habit-app-animation");
   } 
   // else {
   //   box.classList.remove("bar-4-animation");
   // }
 }
}
window.addEventListener("scroll", habitApp);


function bookShelf() {
  var box = document.querySelector(".bookshelf");
 
  for (var i = 0; i < 2; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = box.getBoundingClientRect().top;
    var elementVisible = 100;
 
    if (elementTop < windowHeight - elementVisible) {
      box.classList.add("bookshelf-animation");
    } 
    // else {
    //   box.classList.remove("bar-4-animation");
    // }
  }
 }
 window.addEventListener("scroll", bookShelf);


 function absensi() {
  var box = document.querySelector(".absensi");
 
  for (var i = 0; i < 2; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = box.getBoundingClientRect().top;
    var elementVisible = 100;
 
    if (elementTop < windowHeight - elementVisible) {
      box.classList.add("absensi-animation");
    } 
    // else {
    //   box.classList.remove("bar-4-animation");
    // }
  }
 }
 window.addEventListener("scroll", absensi);
 
function tallyTask() {
  var box = document.querySelector(".tally-task");
 
  for (var i = 0; i < 2; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = box.getBoundingClientRect().top;
    var elementVisible = 50;
 
    if (elementTop < windowHeight - elementVisible) {
      box.classList.add("tally-task-animation");
    } 
    // else {
    //   box.classList.remove("bar-4-animation");
    // }
  }
 }
 window.addEventListener("scroll", tallyTask);


 function game() {
  var box = document.querySelector(".game");
 
  for (var i = 0; i < 2; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = box.getBoundingClientRect().top;
    var elementVisible = 50;
 
    if (elementTop < windowHeight - elementVisible) {
      box.classList.add("game-animation");
    } 
    // else {
    //   box.classList.remove("bar-4-animation");
    // }
  }
 }
 window.addEventListener("scroll", game);
 




