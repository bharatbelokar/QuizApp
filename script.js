const quizDB = [
{
    question:"Inside which HTML element do we put the JavaScript?",
    a:"<typescript>",
    b:"<javascript>",
    c:"<script>",
    d:"<js>",
    ans:"ans3"

},
{
    question:"Where is the correct place to insert a JavaScript?",
    a:"the body section",
    b:"both head and body section",
    c:"head section",
    d:"not applied",
    ans:"ans2"

},
{
    question:"What is your name?",
    a:"Bharat",
    b:"Arun",
    c:"Ramesh",
    d:"Sopan",
    ans:"ans1"

},
{
    question:"Where do you live?",
    a:"Shegaon",
    b:"Khamgaon",
    c:"Nandura",
    d:"Sujatpur",
    ans:"ans4"

}
]


const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer")
const showScore=document.querySelector("#showScore");

let questionCount=0;
let score=0;

const loadQuestion = () =>{
    const questionList=quizDB[questionCount];

    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();

const getCheckAnswer = ()=>{
let answer;
answers.forEach((curAnsElem)=>{
if(curAnsElem.checked){
answer = curAnsElem.id;
}
});
return answer;
};

const deSelectAll=()=>{
answers.forEach((curAnsElem)=>{
    curAnsElem.checked=false;
});

};

submit.addEventListener("click",()=>{

    const checkedAnswer=getCheckAnswer();

if(checkedAnswer === quizDB[questionCount].ans){
score++;  
};



questionCount++;
deSelectAll();

if(questionCount < quizDB.length){
    loadQuestion();
}else{

   showScore.innerHTML= `
   <h3> You scored ${score}/${quizDB.length} </h3>
   <button class="btn" onClick="location.reload()">Play Again</button>
   
   `; 
showScore.classList.remove("scoreArea");
}

});