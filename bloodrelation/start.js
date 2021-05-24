
window.onload = function() {
    show ( question_count);
}


let questions = [

    {
     id: 1,
     question:" Q1. If A is the brother of B; B is the sister of C; and C is the father of D, how D is related to A?",
     answer:"Cannot be determined",
     options:["Brother",
             "Sister",
             "Nephew",
             "Cannot be determined"]},
    {id: 2 ,
     question: "Q2. Pointing to a girl in the photograph, Ajay said, Her mother s brother is the only son of my mother s father. How is the girl's mother related to Ajay?" ,
     answer: "Aunt",
     options:["Mother",
             "Sister",
             "Aunt",
             "Daughter"]},
    {id: 3 ,
     question: "Q3. Pointing to a photograph, Vipul said, She is the daughter of my grandfather's only son. How is Vipul related to the girl in the photograph?" ,
     answer: "Brother",
     options:["Father",
             " Brother",
             " Cousin",
             " Uncle"]},
    {id:4  ,
     question: "Q4. Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?",
     answer: " His Son",
     options:[" His own",
             "His Fatherwrong",
             "His Grandfather",
             "His Son"]},
    {id:5  ,
     question:"Q5.  A is B's sister. C is B's mother. D is C's father. E is D's mother. Then, how is A related to D?" ,
     answer: "Granddaughter",
     options:[" Grandfather",
             "Grandmother",
             " Daughter",
             "Granddaughter"]},
    {id:6  ,
     question:"Q6. There are six children playing. Football namely A, B, C, D, E, and E. A and E are a brother.F is the sister of E, C is the only son of A's. Uncle B and D are the daughters of the brother of C's father. How is D  related to A?",
     answer: "Cousin",
     options:["Uncle",
             "Sister",
             " Niece",
             " Cousin"]},
    {id:7  ,
     question:"Q7. If A + B means A is the brother of B; A - B means A is the sister of B and A x B means A is the father of B. Which of the following means that C is the son of M?" ,
     answer: "M x N - C + F",
     options:["M - N x C + F",
             " F - C + N x M",
             "N + M - F x C",
             "M x N - C + F"]},
    {id: 8 ,
     question:  "Q8. Introducing a girl, a boy said, She is the daughter of the mother of the daughter of my aunt.How is the girl related to the boy?"
    ,
     answer: " Cousin",
     options:[" Niece",
             " Cousin",
             "Daughter",
             "Aunt"]},
    {id:9  ,
     question:" Q9. There are eight people in a family viz. M, K, A, C, D, E, G and H consists of 3 generations. Four of them are female. D and A are the daughter and son of K respectively and both are married. E is the sister of H whose father is C. M and G are of 3rd generation and M is the son-in-law of E. K is the brother-in-law of H.Who among the following is sister-in-law of D? ",
     answer: "G",
     options:["A",
             "H",
             "G",
             "K"]},
    {id: 10 ,
     question: "Q10. E is the son of C. D is the husband of C. B and G is the only brother and daughter of D  respectively. F is the maternal aunt of E and G.How is B related to E?"
       ,
     answer: "Uncle",
     options:[" Nephew",
             "Uncle",
             "Niece",
             "Aunt"]},
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


