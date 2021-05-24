
window.onload = function() {
    show ( question_count);
}


let questions = [{
    id: 1,
    question:"Q1. It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?",

  answer:"Friday",
    options:["Sunday",
            "Saturday",
            "Friday",
            "Wednesday"]},
{
    id: 2,
    question:"Q2.What was the day of the week on 28th May, 2006? ",


  answer:"Sunday",
    options:["Saturday",
            "Sunday",
            "Thursday",
            "Friday"]},
{
    id: 3,
    question:"Q3. Today is Monday. After 61 days, it will be:",


  answer:"Saturday",
    options:["Wednesday",
            "Saturday",
            "Tuesday",
            "Thursday"]},
{
    id: 4,
    question:"Q4. If 6th March, 2005 is Monday, what was the day of the week on 6th March, 2004? ",


  answer:"Tuesday",
    options:["Sunday",
            "Saturday",
            "Tuesday",
            "Wednesday"]},
{
    id:5 ,
    question:"Q5.On what dates of April, 2001 did Wednesday fall? ",


  answer:"4th, 11th, 18th, 25th",
    options:["1st, 8th, 15th, 22nd, 29th",
            "2nd, 9th, 16th, 23rd, 30th",
            "3rd, 10th, 17th, 24th",
            "4th, 11th, 18th, 25th"]},
{
    id:6 ,
    question:"Q6.How many days are there in x weeks x days?",



  answer:"8x",
    options:["7x2",
            "8x",
            "14x",
            "7 "]},
{
    id:7 ,
    question:"Q7. The last day of a century cannot be",


  answer:"Tuesday",
    options:["Monday	",
            "Tuesday",
            "Friday",
            "Wednesday"]},
{
    id:8 ,
    question:"Q8. On 8th Feb, 2005 it was Tuesday. What was the day of the week on 8th Feb, 2004?",


  answer:"Sunday",
    options:["Tuesday",
            "Monday",
            "Sunday",
            "Wednesday"]},
{
    id: 9,
    question:"Q9. Which of the following is not a leap year?",


  answer:"700",
    options:["700",
            "800",
            "1200",
            "2000 "]},
{
    id:10 ,
    question:"Q10. anuary 1, 2007 was Monday. What day of the week lies on Jan. 1, 2008? ",


  answer:"Tuesday",
    options:["Monday",
            "Tuesday",
            "Wednesday",
            "Sunday"]},

    
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
    document.getElementById("showanswer").innerHTML=" "
    
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


