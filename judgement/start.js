
window.onload = function() {
    show ( question_count);
}


let questions = [

{
    id:1,
    question:"Q1.Eileen is planning a special birthday dinner for her husband's 35th birthday. She wants the evening to be memorable, but her husband is a simple man who would rather be in jeans at a baseball game than in a suit at a fancy restaurant. Which restaurant below should Eileen choose?",


  answer:"Marty's serves delicious, hearty meals in a charming setting reminiscent of a baseball clubhouse in honor of the owner,Marty Lester, a former major league baseball all-star.",
    options:["Alfredo's offers fine Italian cuisine and an elegant Tuscan decor. Patrons will feel as though they've spent the evening in a luxurious Italian villa.",
            "Pancho's Mexican Buffet is an all-you-can-eat family style smorgasbord with the best tacos in town.",
            "The Parisian Bistro is a four-star French restaurant where guests are treated like royalty. Chef Dilbert Olay is famous for his beef bourguignon.",
            "Marty's serves delicious, hearty meals in a charming setting reminiscent of a baseball clubhouse in honor of the owner,Marty Lester, a former major league baseball all-star."]},
{
    id:2,
    question:"Q2.The school principal has received complaints from parents about bullying in the school yard during recess. He wants to investigate and end this situation as soon as possible, so he has asked the recess aides to watch closely. Which situation should the recess aides report to the principal?",


  answer:"Four girls are surrounding another girl and seem to have possession of her backpack.",
    options:["A girl is sitting glumly on a bench reading a book and not interacting with her peers.",
            "Four girls are surrounding another girl and seem to have possession of her backpack.",
            "Two boys are playing a one-on-one game of basketball and are arguing over the last basket scored.",
            "Three boys are huddled over a handheld video game, which isn't supposed to be on school grounds."]},
{
    id:3,
    question:"Q3. Mark is working with a realtor to find a location for the toy store he plans to open in his town. He is looking for a place that is either in, or not too far from, the center of town and one that would attract the right kind of foot traffic. Which of the following locations should Mark's realtor call to his attention?",


  answer:"a little shop three blocks away from the town's main street, located across the street from an elementary school and next door to an ice cream store",
    options:["a storefront in a new high-rise building near the train station in the center of town whose occupants are mainly young, childless professionals who use the train to commute to their offices each day.",
            "a little shop three blocks away from the town's main street, located across the street from an elementary school and next door to an ice cream store",
            "a stand-alone storefront on a quiet residential street ten blocks away from the town's center",
            "	a storefront in a small strip mall located on the outskirts of town that is also occupied by a pharmacy and a dry cleaner"]},
{
    id:4,
    question:"Q4.Rita, an accomplished pastry chef who is well known for her artistic and exquisite wedding cakes, opened a bakery one year ago and is surprised that business has been so slow. A consultant she hired to conduct market research has reported that the local population doesn't think of her shop as one they would visit on a daily basis but rather a place they'd visit if they were celebrating a special occasion. Which of the following strategies should Rita employ to increase her daily business?",


  answer:"placing a series of ads in the local newspaper that advertise the wide array of breads",
    options:["	making coupons available that entitle the coupon holder to receive a 25% discount on wedding, anniversary, or birthday cakes",
            "exhibiting at the next Bridal Expo and having pieces of one of her wedding cakes available for tasting",
            "placing a series of ads in the local newspaper that advertise the wide array of breads",
            "	moving the bakery to the other side of town"]},
{
    id:5,
    question:"Q5.Dr. Miller has a busy pediatric dentistry practice and she needs a skilled, reliable hygienist to keep things running smoothly. The last two people she hired were recommended by top dentists in the area, but they each lasted less than one month. She is now in desperate need of a hygienist who can competently handle the specific challenges of her practice. Which one of the following candidates should Dr. Miller consider most seriously?",


  answer:"Lindy recently graduated at the top of her class from one of the best dental hygiene programs in the state. Prior to becoming a dental hygienist, Lindy spent two years working in a day care center.",
    options:["Marilyn has been a hygienist for fifteen years, and her current employer, who is about to retire, says she is the best in the business. The clientele she has worked with consists of some of the wealthiest and most powerful citizens in the county.",
            "Lindy recently graduated at the top of her class from one of the best dental hygiene programs in the state. Prior to becoming a dental hygienist, Lindy spent two years working in a day care center.",
            "James has worked as a dental hygienist for three years in a public health clinic. He is very interested in securing a position in a private dental office.",
            "Kathy is an experienced and highly recommended dental hygienist who is also finishing up a degree in early childhood education, which she hopes will get her a job as a preschool teacher. She is eager to find a job in a pediatric practice, since she has always wanted to work with children."]},
{
    id:6,
    question:"Q6. Mrs. Jansen recently moved to Arizona. She wants to fill her new backyard with flowering plants. Although she is an experienced gardener, she isn't very well-versed in what plants will do well in the Arizona climate. Also, there is a big tree in her backyard making for shady conditions and she isn't sure what plants will thrive without much direct sunlight. Her favorite gardening catalog offers several backyard seed packages. Which one should Mrs. Jansen choose?",


  answer:"	The Treehouse Collection will provide lush green plants with delicate colorful flowers that thrive in shady and partially shady locations.",
    options:["The Greenhouse Collection will blossom year after year if planted in brightly lit locations and watered regularly.",
            "The Treehouse Collection will provide lush green plants with delicate colorful flowers that thrive in shady and partially shady locations.",
            "The Rainbow Collection is ideal for North-east gardens. It includes a variety of colorful perennials that thrive in cool, moist conditions.",
            "The Oasis Collection includes a variety of perennials that thrive in dry climates and bright sunlight."]},

   
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


