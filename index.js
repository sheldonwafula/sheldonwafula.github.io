function showPage(page) {
    document.querySelectorAll('div').forEach(div => {
        div.style.display ='none';
    })
    document.querySelector(`#${page}`).style.display ='block';

}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('button').forEach(button =>{
        button.onclick = function(){
        showPage(this.dataset.page)
        }
    })
})

var today= new Date(); 
var hourNow = today.getHours(); 
var greeting; 
if (hourNow > 18) { 
greeting= 'Good evening!'; 
}else if (hourNow > 12) { 
greeting = ' Good afternoon!'; 
}else if (hourNow > 0) { 
greeting = 'Good morning!'; 
}else { 
greeting = 'Welcome! ' ;



}
document .write( ' <h2>' +greeting + ' </ h2> ');