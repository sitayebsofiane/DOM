//Insert the main title
var mainTitle = document.getElementById("mainTitle");
mainTitle.textContent="bruno";

//Insert the subtitle
var subTitle = document.getElementById("subTitle");
subTitle.textContent="bruno";


//Get all the contents elements and set a bleu background
var contents = document.querySelectorAll(".content");
contents.forEach(element => element.style.backgroundColor="blue");

//Function to delete article on click or display
var bruno = 0;
 function deleteContent(){
    if(bruno%2===0)
        document.querySelector('article').style.display='none';
    else
        document.querySelector('article').style.display='block';
    bruno++;
 }
