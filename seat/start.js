window.onload = function() {
    show ( question_count);
}


let questions = [ {
    id: 1,
    question:"Directions for Questions 1 to 5: Read the given information carefully and answer the questions that follow Eleven friends M, N, O, P, Q, R, S, T, U, V and W are sitting in the first row of the stadium watching a cricket match.T is to the immediate left of P and third to the right of U.V is the immediate neighbour of M and N and third to the left of S.M is the second to the right of Q, who is at one of the ends.R is sitting next to the right of P and P is second to the right of O.  Q.1. Who is sitting in the center of the row? ",
    answer:"U",
    options:["N",
            "O",
            "S",
            "U"]},
{
    id: 2,
    question:" Q.2. Which of the following people are sitting to the right of S?",
    answer:"OTPR",
    options:["OTPQ ",
            " OTPR",
            " UNVM",
            "UOTPR"]},
{
    id:3,
    question:"Q.3. Which of the following statements is true with respect to the above arrangement?",
    answer:"N is sitting between V and U",
    options:["There are three persons sitting between P and S",
            "W is between M and V",
            "N is sitting between V and U",
            "S and O are neighbours sitting to the immediate right of T"]},
{
    id: 4,
    question:" Q.4. Who are the immediate neighbours of T?",
    answer:"O, P",
    options:["O, P",
            "O, R",
            " N, U",
            " V, U"]},
{
    id: 5,
    question:" Q.5. If Q and P, O and N, M and T, and W and R interchange their positions then which of the following pairs of friends is sitting at the ends?",
    answer:"P and W",
    options:[" P and Q",
            " Q and R",
            "P and W",
            "W and R"]},
{
    id: 6,
    question:"Directions for Questions 6 to 10: Read the following information given below and answer the questions that followP, Q, R, S, T, U and V are seven friends and are sitting in a circle facing the center of the circle.V is second to the left of S and is the neighbour of T and U.S is not a neighbour of R or T.P is neighbour of Q and R.   Q.6. Which of the following is correct? ",
    answer:"Q is between P and S",
    options:["Q is between P and S",
            "S is between U and P",
            "T is to the immediate right of V",
            " U is to the immediate left of V"]},
{
    id: 7,
    question:"Q.7. Which of the following has the pair with the second person sitting to the immediate right of the first person?",
    answer:"VU",
    options:[" QU",
            " VU",
            " TR",
            "PT "]},
{
    id: 8,
    question:"Q8. Which of the following will be S’s position after T and S interchange their places",
    answer:"Neighbour of V and R",
    options:[" Neighbour of V and R",
            " To the immediate left of R",
            "To the immediate right of U",
            "Neighbour of R and P"]},
{
    id: 9,
    question:"Q9. What is the position of R?",
    answer:"None of these",
    options:["Second to the left of Q",
            "Third to the right of U",
            "To the immediate left of P",
            "None of these"]},
{
    id: 10,
    question:"Q. 10 Which of the following has the second person sitting between the first and third persons?",
    answer:" VUS",
    options:[" SPQ",
            " VRT",
            " QRP",
            " VUS"]},
    
]

   
    



function submitform(e){
    
    e.preventDefault();
    let name = document.forms["welcomeform"]["name"].value;
    sessionStorage.setItem("name",name);
    location.href="question.html";
    


}

let question_count = 0;
let points = 0;
 
function next ()   {
    document.getElementById("showanswer").innerHTML= "  "
    
    let user_answer = document.querySelector("li.option.active").innerHTML;
    if(question_count== questions.length-1){

        sessionStorage.setItem("time",`${minutes} minutes and ${seconds}seconds`)
        clearInterval(mytime)
        location.href = "end.html"
        return;
    }
    
    if(user_answer == questions[question_count].answer ){
        points= points+10 
        sessionStorage.setItem("points",points)}
        
      
    question_count++;
    show(question_count);

}
function showans(){
  



  let ans_wer =document.getElementById("showanswer").innerHTML= `<p>${ questions[question_count].answer}</p>`
  
  
}

function show (count) {
    let questionn = document.getElementById("questions")
    //questionn.innerHTML =  " <h2>" + questions[count].question + "</h2>"//
    questionn.innerHTML =   
    `<h3>${ questions[count].question}</h3>
    <ul class="option_group">
                   <li class="option">${ questions[count].options[0]}</li>
                    <li class="option">${ questions[count].options[1]}</li>
                    <li class="option">${ questions[count].options[2]}</li>
                    <li class="option">${ questions[count].options[3]}</li>

    </ul>
    `
    toggleactive()

}


function toggleactive(){
    let option = document.querySelectorAll("li.option")
    for(let i=0; i<option.length; i++)
        option[i].onclick=function(){
            for(let j=0; j<option.length; j++)
               if(option[j].classList.contains("active")){
                   option[j].classList.remove("active")
               }

            option[i].classList.add("active");

        }
}
