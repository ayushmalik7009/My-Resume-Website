var about = document.getElementById('about-js');

about.addEventListener('click', function (event) {
    event.preventDefault();
    var scrollInterval = setInterval(function(){
        if(window.pageYOffset >= 400){
            clearInterval(scrollInterval);
            return;
        }
        window.scrollBy(0,50);
    },50);
    
});

//animation function

var elem = document.getElementsByClassName('eighty-five-percent');
var m;
function percent(){
    var scroll = setInterval(function()
    {    m = m+1;
        par = m +'%';

        if(m >=50)
        { }else{elem[0].style.width= par;elem[4].style.width= par;}
        if(m >=55)
        { }else{elem[3].style.width= par;}
        if(m >=77)
        { }else{elem[2].style.width= par;elem[5].style.width= par;}
      
        if(m >=85)
        { clearInterval(scroll);return;}else{elem[1].style.width= par;}
           
        
        },30);
}
var i =true;
window.addEventListener('scroll',() => {const scrolled = window.scrollY;
var c;
var scrollInterval = setInterval(function(){
    if(scrolled >= 700 && scrolled< 800 && i == true){
        m=0;
        i = false;
        percent();
        clearInterval(scrollInterval);   
    }
},50);
if(scrolled >=2000 || scrolled ==0){
     i = true;  
}
});
c=0;


var skills = document.getElementById('skills-js');

skills.addEventListener('click', function (event) {
    event.preventDefault();
    var scrollInterval = setInterval(function(){
        if(window.pageYOffset >= 720){
            clearInterval(scrollInterval);
            percent();
            return;
        }
        window.scrollBy(0,50);
    },50);
   m=0;
});

var experience = document.getElementById('experience-js');

experience.addEventListener('click', function (event) {
    event.preventDefault();
    var scrollInterval = setInterval(function(){
        if(window.pageYOffset >= 1900){
            clearInterval(scrollInterval);
            return;
        }
        window.scrollBy(0,50);
    },50);
    
});

var education = document.getElementById('education-js');

education.addEventListener('click', function (event) {
    event.preventDefault();
    var scrollInterval = setInterval(function(){
        if(window.pageYOffset >= 2800){
            clearInterval(scrollInterval);
            return;
        }
        window.scrollBy(0,50);
    },50);
    
});

var portfolio = document.getElementById('portfolio-js');

portfolio.addEventListener('click', function (event) {
    event.preventDefault();
    var scrollInterval = setInterval(function(){
        if(window.pageYOffset >= 1090){
            clearInterval(scrollInterval);
            return;
        }
        window.scrollBy(0,50);
    },50);
    
});

var contact = document.getElementById('contact-js');

contact.addEventListener('click', function (event) {
    event.preventDefault();
    var scrollInterval = setInterval(function(){
        if(window.pageYOffset >= 3400){
            clearInterval(scrollInterval);
            return;
        }
        window.scrollBy(0,50);
    },50);
    
});


var blue = document.getElementsByClassName('mb-blue');

