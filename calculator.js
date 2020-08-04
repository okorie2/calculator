
  const
  buttons = document.getElementsByTagName("button"),
  screen = document.getElementById('screen');
  

Array.from(buttons).forEach(button =>
  button.addEventListener("click", showNumber));

function showNumber(event) {
  const button = event.target;
  if(screen.innerHTML==0){
    screen.innerHTML=button.value;
  }
   else if (button.value != 5 ) { screen.innerHTML += button.value; }
  else  {screen.innerHTML +=5 ;}
}
function doMath(){
          screen.innerHTML=eval(screen.innerHTML)
        }
        function clearAll(){
          screen.innerHTML=;
        }
        

        /*
        buttons = document.getElementsByTagName("button"),
        screen = document.getElementById('screen');
        class calculator {
          constructor(previousContent, presentContent){
            this.previousContent= screen;
            this.presentContent=presentContent;
          }
          showNumber(){
            if (buttons.value!=6){
              screen.innerHTMl=buttons.value;
            }
          }
        }
        
        Array.from(buttons).forEach(button =>
          button.addEventListener("click",() =>{
            calculator.showNumber;

          }));*/
        