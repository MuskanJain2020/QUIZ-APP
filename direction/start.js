
window.onload = function() {
    show ( question_count);
}


let questions = [{
    id:1 ,
    question:"Q1.One morning Udai and Vishal were talking to each other face to face at a crossing. If Vishal's shadow was exactly to the left of Udai, which direction was Udai facing?",


  answer:"North",
    options:["East",
            "West",
            "North",
            "South "]},
{
    id:2 ,
    question:"Q2.Y is in the East of X which is in the North of Z. If P is in the South of Z, then in which direction of Y, is P?",


  answer:"None of these",
    options:["North",
            "South",
            "South-East",
            "None of these"]},

{
    id:3,
    question:"Q3. If South-East becomes North, North-East becomes West and so on. What will West become?",


  answer:"South-East",
    options:["North-East",
            "North-West",
            "South-East",
            "South-West"]},
{
    id:4,
    question:"Q4. A man walks 5 km toward south and then turns to the right. After walking 3 km he turns to the left and walks 5 km. Now in which direction is he from the starting place?",


  answer:"South-West",
    options:["West",
            "South",
            "North-East",
            "South-West"]},
{
    id:5 ,
    question:"Q5. Rahul put his timepiece on the table in such a way that at 6 P.M. hour hand points to North. In which direction the minute hand will point at 9.15 P.M. ?",


  answer:"West",
    options:["South-East",
            "South",
            "North",
            "West"]},
{
    id:1 ,
    question:"Q1. ",


  answer:"",
    options:["",
            "",
            "",
            ""]},
{
    id:6 ,
    question:"Q6. Two cars start from the opposite places of a main road, 150 km apart. First car runs for 25 km and takes a right turn and then runs 15 km. It then turns left and then runs for another 25 km and then takes the direction back to reach the main road. In the mean time, due to minor break down the other car has run only 35 km along the main road. What would be the distance between two cars at this point?",


  answer:"65 km",
    options:["65 km",
            "75 km",
            "80 km",
            "85 km"]},
{
    id:7 ,
    question:"Q7.One evening before sunset Rekha and Hema were talking to each other face to face. If Hema's shadow was exactly to the right of Hema, which direction was Rekha facing?",


  answer:"South",
    options:["North",
            "South",
            "East",
            "Data is inadequate"]},
{
    id:8 ,
    question:"Q8. A boy rode his bicycle Northward, then turned left and rode 1 km and again turned left and rode 2 km. He found himself 1 km west of his starting point. How far did he ride northward initially?",


  answer:"2 km",
    options:["1 km",
            "2 km",
            "3 km",
            "5 km"]},
{
    id:9 ,
    question:"Directions to Solve Q9 & Q10-8-trees → mango, guava, papaya, pomegranate, lemon, banana, raspberry and apple are in two rows 4 in each facing North and South.Lemon is between mango and apple but just opposite to guava.Banana is at one end of a line and is just next in the right of guava or either banana tree is just after guava tree.Raspberry tree which at one end of a line, is just diagonally opposite to mango tree. Q9. Which tree is just opposite to raspberry tree?",

  answer:"Papaya or Pomegranate",
    options:["Papaya or Pomegranate",
            "Papaya",
            "Pomegranate",
            "Data is inadequate"]},
{
    id:10 ,
    question:"Q10. Which tree is just opposite to banana tree?",


  answer:"Mango" ,
    options:["Mango",
            "Pomegranate",
            "Papaya",
            "Data is inadequate"]}

   
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


