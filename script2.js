// Array of questions and answers
let data = [
    {
        'qs' : 'Q1. What is the process of making food in plants?',
        'options': [' Chlorophyll', ' Cooking', ' Photosynthesis'],
        'answer': 2
    },

    {
        'qs' : 'Q2. What is the longest bone in the human body?',
        'options': [' Femur', ' Fibula', ' Ribs'],
        'answer': 0
    },

    {
        'qs' : 'Q3. The lack of which vitamin causes Scurvy?',
        'options': [' Vitamin E', ' Vitamin D', ' Vitamin C'],
        'answer': 2
    },

    {
        'qs' : 'Q4. Which of these causes a temp change when mixed with water?',
        'options': [' Sodium Chloride', ' Calcium Oxide', ' Oil'],
        'answer': 1
    },

    {
        'qs' : 'Q5. What is symbol for Gold?',
        'options': [' Ch', ' Au', ' Na'],
        'answer': 1
    },

    {
        'qs' : 'Q6. The holes on leaves of plants are called:',
        'options': [' Stomata', ' Chloroplast', ' Pollen'],
        'answer': 0
    },

    {
        'qs' : 'Q7. The movement of animals is:',
        'options': [' Nutrition', ' Excretion', ' Locomotion'],
        'answer': 2
    },

    {
        'qs' : 'Q8. How many Gas Planets are there is our Solar System?',
        'options': [' 5', ' 7', ' 4'],
        'answer': 2
    },

    {
        'qs' : 'Q9. How many days does a leap year have?',
        'options': [' 365', ' 366', ' 3660'],
        'answer': 1
    },
    
    {
        'qs' : "Q10. What is the farthest layer of Earth's atmosphere?",
        'options': [' Exosphere', ' Thermosphere', ' Troposphere'],
        'answer': 0
    }
];

// Defining the variables
let qnum = 0;
let score = 0;
let question = document.getElementById('question-title');
let option_list = document.getElementById('options-list');
let score_area = document.getElementById('score-area');
let btn_submit = document.getElementById('submit-btn');
let start = document.getElementById('start');
let play_again = document.getElementById('play_again-btn');
let title = document.getElementById('title');
let h1 = document.getElementById('h1')
let img = document.getElementsByClassName('img')
let nav = document.getElementById('nav');
let logo = document.getElementById('nav-title')

// Starting animation effect
window.addEventListener('load', function(){
    $(nav).slideDown(1500);
    $(logo).slideDown(1500);
    $(h1).slideDown(1500);
    $(img).slideDown(1500);

    $(box).slideDown(1500);

});


// Hiding the elements
hideItems(question);
hideItems(option_list);
hideItems(btn_submit);
hideItems(play_again);
hideItems(score_area);


// Starting the quiz
start.addEventListener('click', function(){
    $(question).fadeIn(300)
    $(option_list).fadeIn(750)
    $(btn_submit).fadeIn(1000)
    hideItems(start)
    loadQuestions();
});

// To load questions
function loadQuestions() {
    if (qnum < data.length) {
        let q = data[qnum].qs;
        let optionsArray = data[qnum].options;

        question.innerText = q;
        option_list.innerText = ''

        for(let i = 0; i < optionsArray.length; i++){
            option_list.innerHTML = option_list.innerHTML +
            `
            <input type="radio" name="${question}" id="${i}">${optionsArray[i]}</input><br>
            `;
        };

    // If there are no more questions -> Game ends
    }else{
        $(score_area).fadeIn(1500)
        hideItems(question);
        hideItems(option_list)
        score_area.innerText = 'Your score is: ' + score + ' out of 10. Thanks for playing!';
        
        hideItems(btn_submit);
        $(play_again).fadeIn(1500)
    }
};

// Play again -> Reload the page
play_again.addEventListener('click', function(){
    location.reload()
})

// Finding out which option was chosen
btn_submit.addEventListener('click', function(){
    let id = getCheckedId();

    try {
        if (id==data[qnum].answer){
            score++
        }
    } catch(error){

    }
    qnum++
    loadQuestions()
});

// To choose an option:
function getCheckedId(){
    for (let i = 0; i<3; i++) {
        if (document.getElementById(i).checked){
            return i
        }
    }
}

// Function for hiding and showing elements for quick access
function hideItems(element) {
    element.style.display = 'none';
}
function showItems(element) {
    element.style.display = 'block';
}