let userScore=0;  //count userScore
let compScore=0;   //count ComputerScore


const choices=document.querySelectorAll(".choice");
const msgPara=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score")





choices.forEach((choice)=>
{    console.log(choice);
    choice.addEventListener("click",()=>
    {
        //const choiceId=choice.getAttribute("id");
       // console.log("choice was clicked..!",choiceId);
      const userChoice=choice.getAttribute("id");
      playGame(userChoice);     

    })
})

const playGame = (userChoice) => {
    console.log("User Choice:",userChoice);
   //Genate Computer choice
    const computerChoice= genComputerChoice();
    console.log("Computer Choice:",computerChoice);

    if(userChoice === computerChoice)
    {
        //Draw Game
        drawGame();
    }
    else
    {
         let userWin=true;
         if(userChoice=="rock")//if computer choice is "rock" then Game is Drawn ALraedy
         {
            //As Computer choice either paper or scissor
            userWin = computerChoice === "paper" ? false :true;//if computer choice is:"paper" and user choice is rock then user is LOOSER and computer Winer
                                                              //if computer choice is :"Scissor" and user choice is Rock then computer is LOOSER and User is Winner
         }
         else if(userChoice == "paper")//if computer choice is "paper" then Game is Drawn ALraedy
         {
              //As Computer choice either rock or scissor
              userWin=computerChoice === "scissor" ?false :true;
         }
         else
         {     //As Computer choice either paper or rock

                userWin=computerChoice === "rock" ?false :true;
         }
         showWinner(userWin,userChoice,computerChoice);
    }

    
};

    



const genComputerChoice = () =>{
    //rock,paper,scissor
   const options = ["rock ","paper","scissor"];

   const randomIndex=Math.floor(Math.random()*3);//Genarate Integer Random No ranges 0 to 2( (From) 0 - (to) < 3)
   return options[randomIndex];    
};


const drawGame = () =>
{
    console.log("Game was Draw..");
    msgPara.innerText=" Game Draw..Play Again..! ";
    msgPara.style.backgroundColor="#081b31";
}

const showWinner =(userWin,userChoice,computerChoice) =>
{
    if(userWin ==true)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win..!");
        msgPara.innerText=`You Win !  Your ${userChoice} beats ${computerChoice}`;
        msgPara.style.backgroundColor="green";
    }
    else
    {

        compScore++;
         compScorePara.innerText = compScore;
        console.log("You Loose..!");
        msgPara.innerText=`You Loose !  ${computerChoice} beats Your ${userChoice}`;
        msgPara.style.backgroundColor="red";

    }
}