
window.onload = function() {
    show ( question_count);
}


let questions = [{
     id :1 ,
     question :"Q1. QAR, RAS, SAT, TAU, _____",
     answer : " UAV",
     options : [" TAT ",
               "  UAT ",
             " TAS ",
             "  UAV"]  
            },

{
     id : 2,
     question :"Q2. CMM, EOO, GQQ, _____, KUU",
     answer : "  ISS",
     options : ["GRR ",
               "  GSS ",
             "ISS",
             " ITT "]  
            },
{
     id : 3,
     question :"Q3.ELFA, GLHA, ILJA, _____, MLNA",
     answer : "  KLLA ",
     options : ["OLPA ",
               " LLMA ",
             "KLMA",
             " KLLA "]  
            },
{
     id : 4 ,
     question :"Q4. FAG, GAF, HAI, IAH, ____",
     answer : "  JAK ",
     options : ["JAI ",
               " JAK ",
             " HAK",
             "  HAL"]  
            },
{
     id :5 ,
     question :" Q5. The number in the question below is to be codified in the following code.Digit: 5 3 7 1 4 9 6 2 8.Letter: C J O X N Q T Z F .Find the code for 163542 ",
     answer : " XTJCNZ ",
     options : [" TXJCNZ ",
               " XTCJNZ ",
             "XTJCNZ",
             " XTJCZN"]  
            },
{
     id : 6,
     question :"Q6. If JOSEPH is coded as FKOALD, then GEORGE will be coded as:",
     answer : " CAKNCA ",
     options : ["CAKNCA ",
               " CALNCA ",
             "CBKNCA",
             "HAKNCA "]  
            },

{
     id : 7 ,
     question :"Q8. In a code, CORNER is written as GSVRIV. How can CENTRAL be written in that code?",
     answer : " GIRXVEP",
     options : ["  DFOUSBM",
               "  GNFJKER ",
             "GJRYVEP",
             " GIRXVEP "]  
            },
{
     id :8 ,
     question :"Q8. In a certain language, if Violet is called as Green, Green is called as Red, Red is called as Brown, Brown is called as Orange, Orange is called as Yellow, Yellow is called as Blue and Blue is called as Indigo, then what is the colour of human blood in that language?",
     answer : " Brown  ",
     options : ["Blue ",
               "  Brown ",
             "Violet",
             "Red "]  
            },
{
     id :9 ,
     question :"Q9. If 'P' means 'divison', 'T' means 'addition', 'M' means 'subtraction', and 'D' means 'multiplication', then what will be the value of the following expression? 12 M 12 D 28 P 7 T 15 = ?",
     answer : "  ",
     options : ["-30 ",
               "  -21",
             " 15",
             "  45"]  
            },
{
     id :10 ,
     question :"Q10.  If LOSE is coded as 1357 and GAIN is coded as 2468, what do the figures 84615 stand for?",
     answer : "  NAILS ",
     options : ["LANES ",
               " SNAIL  ",
             "NAILS",
             " SLAIN"]  
            },

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


