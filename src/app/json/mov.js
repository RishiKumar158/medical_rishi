// function submit()
// {
// var speed = 10, // the box will move by 10 pixels on every step
//     direction = 1; // 1 moves in the positive direction; -1 vice versa

//     var boxElement = document.getElementById('theIdOfTheBox');


//         // Calculate and store some of the box coordinates:
//         var boxLeftPos = boxElement.offsetLeft,
//             boxRightPos = boxLeftPos + boxElement.offsetWidth;
//         // When right side of the box goes too far - change direction:
//         if (boxRightPos > document.body.offsetWidth) {
//             direction = -1;
//         }
//         // When left side of the box goes too far - change direction:
//         if (boxLeftPos < 0) {
//             direction = 1;
//         }
//         // Recalculate position:
//         boxElement.style.left = (boxLeftPos + speed * direction) + 'px';
//     }

var topPos = 0;
var leftPos = 0;
var id;

function moveRight() {  
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (leftPos == 350) {
      clearInterval(id);
     // gameOver();
    } else {
      leftPos++; 
      document.getElementById("theIdOfTheBox").style.left = leftPos + 'px'; 
    }
  }
}

function moveLeft() {  
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (leftPos == 0) {
      clearInterval(id);
      //gameOver();
    } else {
      leftPos--; 
      document.getElementById("theIdOfTheBox").style.left = leftPos + 'px'; 
    }
  }
}

function moveDown() {  
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (topPos == 350) {
        clearInterval(id);
       // gameOver();
      } else {
        topPos++; 
        document.getElementById("theIdOfTheBox").style.top = topPos + 'px'; 
      }
    }
  }

  function moveUp() {  
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
      if (topPos == 0) {
        clearInterval(id);
        //gameOver();
      } else {
        topPos--; 
        document.getElementById("theIdOfTheBox").style.top = topPos + 'px'; 
      }
    }
  }

  function gameOver(){
      leftPos = 165;
      topPos = 165;
     
      document.getElementById("theIdOfTheBox").style.top = '165px'; 
      document.getElementById("theIdOfTheBox").style.left = '165px'; 
  }