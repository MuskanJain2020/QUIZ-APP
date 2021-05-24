window.onload = function() {
    show ( question_count);
}


let questions =[{
     id: 1,
     question:"Q 1. The position of how many digits in the number 2319763518945 shall remain the same if the digits are arranged in ascending order? ",
     answer:" One ",
     options:[" Three ",
             "  Six",
             " One",
             "Five"]},

    {
     id: 2,
     question:"Q 2. In a state-level dance competition, a total of 75 people took part. Stuti’s position was 13th from the top and Barkha stood 25th from the bottom. A total of how many participants stood between Stuti andBarkha ",
     answer:"37",
     options:["  30",
             "42 ",
             "37",
             " 45"]},
{
     id: 3,
     question:"Q 3. In the number 2190453783, if the first number is interchanged with the last number, the second number is interchanged with the second last number, and so on, the position of how many numbers shall remain the same? ",
     answer:" None",
     options:["Three",
             " One ",
             "Five",
             " None"]},
{
     id:4,
     question:" 4. On sports day in a school, 8 students took part in a race. They were all made to stand in a straightline. Sumit was standing 5th from the right end and there are 3 students standing in between Sumit and Ritesh. Based on this arrangement, what is the position of Ritesh from the left end of the line?",
     answer:"8th",
     options:[" 6th",
             " 8th",
             "  2nd",
             " None of the above"]},
{
     id: 5,
     question:" Q 5. A certain number of people are standing in a straight line and all of them are facing north. Arunima is 19th from the right end of the line and Arun is at the 15th position from the left end of the line. Both,Arunima and Arun interchange their positions, after which Kritika who was 24th from the left end is now at the 5th position to the left of Arun’s new position. How many people are there in the line in total?",
     answer:"47",
     options:["29",
             " 47 ",
             " 66",
             "30"]},
{
     id: 6,
     question:"Q 6. In a school assembly, students are made to stand in a straight line one after the other, based on their height. There are 10 people who are standing behind Prateek and 15 people who are standing in front of him. In the same line, 17 students are standing behind Tarun and 8 are standing in from of him.How many students in total are standing between Tarun and Prateek? ",
     answer:" 7",
     options:[" 3",
             " 7 ",
             "5",
             "9"]},
{
     id: 7,
     question:"Q 7. In a class, there are 150 students and the number of boys is twice as much as the number of girls.One of the boys, Karan, ranked 25th from the top and only 10 girls are ahead of Karan. How many boys are there after him?",
     answer:"None of the above ",
     options:["90",
             "  75",
             "105",
             "None of the above"]},
{
     id: 8,
     question:"Q 8. 68 people are sitting in a straight line and all of them are facing towards north. Sakshi is 17th fromthe right end of the line and Samiksha is 22nd from the left end of the line. Siddhi sits exactly in between Sakshi and Samiksha, so what will be the position of Siddhi, when counted from the left end? ",
     answer:" 37",
     options:[" 37 ",
             " 39",
             "42",
             " 32 "]},
{
     id: 9,
     question:"Q 9. In a row of 42 students facing the North, Nitin is 4th to the left of Pinky. If Pinky is 20th from the left end of the row, how far is Nitin from the right end of the row? ",
     answer:"26",
     options: [" 25",
             " 23 ",
             "24",
             " 26"] },
{
     id : 10,
     question :"Q 14. There are 10 girls and 20 boys in a class, Arpita’s rank is 4th among the girls and 18th in the class in total. What is Arpita’s rank among the boys in the class?",
     answer : " 15th ",
     options : ["  14th",
               " 12th ",
             "13th",
             " 15th "]  
            }
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
