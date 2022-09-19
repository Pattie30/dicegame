


//================ Task 1 ==============================
const playerBtn = document.querySelector('#play-game') ;
const reset = document.getElementById('reset');
const winnerDiv = document.getElementById('winner');
let runningScore = document.getElementById('running-score');
let playerTwoBtn = document.getElementById('computerBtn') ;


//& reset.addEventListener('click', reset())


  
//& let plays = 0;



//^ Create a function (rollDice)
        const rollDice = () => {
 //^ Roll Two "dice" one for the player and one for the computer
          const player = (Math.ceil(Math.random() * 6))
          
          console.log(player)
 //^ Use one variables for the (player) and one for the (computer)
          const computer = (Math.floor(Math.random() * 6 ))
         console.log(computer)
          
//^ (use a random number from 1-6 to represent a dice)
        
 //^ If the player's dice roll is higher than the computer
//^ console.log("PLAYER WINS")
       
            //console.log(player > computer ? 'PLAYER WINS': 'COMPUTER WINS')
        let winner = ''
            if (player > computer) {
             winner = 'Player Wins'
            
            }else if (player === computer){
              winner = 'Tied'
            }else {
              winner = 'Computer Wins'
            }
          return [player, computer, winner]
          }
         
      
      //rollDice()
      //console.log(`${player}, ${computer}, ${winner}`)
      
        
        
        /*-----------------------------------------------------------------------------------------------------------------*/
         //^ Create a function (displayScore)
         function displayScore() {
  const results = rollDice();
  const div = document.createElement('div');
  div.textContent = `
              Computer Score: ${results[1]},
               Player Score: ${results[0]} ,
               Winner: ${results[2]} `;

  winnerDiv.appendChild(div)
  //^ Create a new a div displaying:
  //^ Computer Score: , Player Score:  & the Winner:
  //const runningScore = createElement('div').firstChild.textContent(`Player:      Computer:      Winner:    `);
  //runningScore.appendChild('div');

         

        //  const playGame = () => {
        //   rollDice()
        //   displayScore()
          
        //  }
         }

         const resetGame = () => {
          document.getElementById('winner').firstElementChild.remove()
         }

       
       playerBtn.addEventListener('click', displayScore)
       playerTwoBtn.addEventListener('click', displayScore)
       reset.addEventListener('click', resetGame)
        
        
      // ============ Task 2 ==============================
      //^ Let's update our UI (User Interface)
      
      
      //^ so there is a running record of game data.
      //^ Append the new div to the parent div on the HTML.
   

      //^ Create a Reset Function (resetGame)
      //^ REMOVE the div with the game score, leaving just the parent div
      //^ creating a clean slate for a new set of games :)
       

    
 /*   const winnerDiv = document.querySelector('#winner')
      const displayScore = () => {
    const results = rollDice()
    
    const div = document.createElement('div')
    div.innerHTML = '<p>   Computer Score: ${results[1]},</p> <p> Player Score: ${results[0]} ,</p> <p> Winner: ${results[2]} </p> '
    winnerDiv.appendChild(div)
    console.log(div)
   

   
      
const resetGame = ()= => {
 
 document.querySelector('#winner').firstElementChild.remove()
}
     
   resetBtn.addEventListener('click', resetGame)
   playGameBtn.addEventListener('click', displayScore)
 */


