const  choices = document.getElementsByClassName('choice');
const choosenColor=document.getElementById('choosenColor');  
for(let i=0;i<choices.length;i++)
    choices[i].addEventListener('click',()=>choosenColor.style=choices[i].getAttribute("style"));
 