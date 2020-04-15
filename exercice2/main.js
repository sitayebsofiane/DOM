const  choices = document.getElementsByClassName('choice');  

for(let i=0;i<choices.length;i++){
    choices[i].addEventListener('click', function() {
        document.getElementById('choosenColor').style=choices[i].getAttribute("style");
  });
}

