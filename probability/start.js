
window.onload = function() {
    show ( question_count);
}


let questions = [
{
    id:1,
    question:"Q1.Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",


  answer:"9/20",
    options:["1/2",
            "2/5",
            "8/15",
            "9/20"]},
{
    id:2,
    question:"Q2.A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",


  answer:"10/21",
    options:["10/21",
            "12/21",
            "2/7",
            "5/7"]},
{
    id:3,
    question:"Q3.In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",


  answer:"1/3",
    options:["1/3",
            "7/19",
            "7/3",
            "12/19"]},
{
    id:4,
    question:"Q4.In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:",


  answer:"21/46",
    options:["1/16",
            "21/46",
            "3/25",
            "1/50"]},
{
    id:5,
    question:"Q5.In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?",


  answer:"2/7",
    options:["2/7",
            "1/10",
            "5/7",
            "2/5"]},
{
    id:6,
    question:"Q6.From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?",


  answer:"1/221",
    options:["1/15",
            "1/221",
            "5/27",
            "5/221"]},
{
    id:7,
    question:"Q7. A bag contains 4 white, 5 red and 6 blue balls. Three balls are drawn at random from the bag. The probability that all of them are red, is:",


  answer:"2/91",
    options:["2/91",
            "2/7",
            "1/22",
            "3/22"]},
{
    id:8,
    question:"Q8.A bag contains 6 black and 8 white balls. One ball is drawn at random. What is the probability that the ball drawn is white?",


  answer:"4/7",
    options:["3/4",
            "4/7",
            "1/8",
            "3/7"]},
{
    id:9,
    question:"Q9.One card is drawn at random from a pack of 52 cards. What is the probability that the card drawn is a face card (Jack, Queen and King only)?",


  answer:"3/13",
    options:["3/13",
            "1/13",
            "1/4",
            "9/52"]},
{
    id:10,
    question:"Q10. In a multiple choice question there are four alternative answer, of which one or more are correct. A candidate will get marks in the question only if he ticks all the correct answer. The candidate decides to tick answer the question, the probability that he will get marks in the questions, is",


  answer:"1/5",
    options:["1/2",
            "1/5",
            "1/3",
            "None of these"]},

   
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
    document.getElementById("showanswer").innerHTML= " "
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


