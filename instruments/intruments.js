var buttons = document.getElementsByTagName('button');
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        let buttonNum = this.innerHTML;
        switch (buttonNum) {
          case "1":
            let sound1 = new Audio("1.mp3");
            sound1.play();
            break;
          case "2":
            let sound2 = new Audio("2.mp3");
            sound2.play();
            break;
          case "3":
            let sound3 = new Audio("3.mp3");
            sound3.play();
            break;
          case "4":
            let sound4 = new Audio("4.mp3");
            sound4.play();
            break;
    
          case "5":
            let sound5 = new Audio("5.mp3");
            sound5.play();
            break;
    
          case "6":
            let sound6 = new Audio("6.mp3");
            sound6.play();
            break;
    
          case "7":
            let sound7 = new Audio("7.mp3");
            sound7.play();
            break;
    
          case "8":
            let sound8 = new Audio("8.mp3");
            sound8.play();
            break;

          case "9":
            let sound9 = new Audio("9.mp3");
            sound9.play();
            break;

          case "10":
            let sound10= new Audio("10.mp3");
            sound10.play();
            break;
            
          case "11":
            let sound11= new Audio("11.mp3");
            sound11.play();
            break;

          case "12":
            let sound12= new Audio("12.mp3");
            sound12.play();
            break;

          case "13":
            let sound13= new Audio("13.mp3");
            sound13.play();
            break;

          case "14":
            let sound14= new Audio("14.mp3");
            sound14.play();
            break;

          case "15":
              let sound15= new Audio("15.mp3");
              sound15.play();
              break;

       }
    });
}

