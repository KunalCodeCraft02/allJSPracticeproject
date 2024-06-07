const question = [
    {
        question: "Which is the biggest Animal on Earth",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elepthant",correct:false},
            {text:"Giraffe",correct:false}
        ]
    },
    

    {
        question: "Which is the biggest forest on Earth",
        answers:[
            {text:"Nile",correct:false},
            {text:"Kenia Forest",correct:false},
            {text:"Amazon Forest",correct:true},
            {text:"safari",correct:false}
        ]
    },


    {
        question: "Which commandos is ranked on top 2 in world", 
        answers:[
            {text:"Marcos",correct:true},
            {text:"Black Cat",correct:true},
            {text:"ParaSF",correct:false},
            {text:"NSG",correct:false}
        ]
    },


    {
        question: "Which is the biggest Animal on Earth",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elepthant",correct:false},
            {text:"Giraffe",correct:false}
        ]
    }

]


const questioElement = document.getElementById("question");
const answerButtons = document.querySelector(".answer-button");
const nextbtn = document.getElementById("next-btn")

let currectquestionIndex = 0;
let score = 0;


function startquiz(){
    currectquestionIndex = 0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question[currectquestionIndex];
    let questionNo = currectquestionIndex + 1;
    questioElement.innerHTML = questionNo + ". " + currentQuestion


    currentQuestion.answers.forEach(answers =>{
        const button = document.createElement("button")
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })
}

startquiz()