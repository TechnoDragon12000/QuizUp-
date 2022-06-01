// Array of questions and answers
let data = [
    {
        'qs' : 'Q1. What is the capital of India?',
        'options': [' Chennai', ' New Delhi', ' Mumbai'],
        'answer': 1
    },

    {
        'qs' : 'Q2. What is the capital of England?',
        'options': [' London', ' York', ' Oxford'],
        'answer': 0
    },

    {
        'qs' : 'Q3. What is the capital of Ukraine?',
        'options': [' Moscow', ' Izyum', ' Kyiv'],
        'answer': 2
    },

    {
        'qs' : 'Q4. What is the capital of USA?',
        'options': [' Chicago', ' Wahsington DC', ' New York'],
        'answer': 1
    },

    {
        'qs' : 'Q5. What is the capital of Pakistan?',
        'options': [' Islamabad', ' Dehra Dun', ' Lahore'],
        'answer': 0
    },

    {
        'qs' : 'Q6. What is the capital of Iraq?',
        'options': [' Karbala', ' Baghdad', ' Najaf'],
        'answer': 1
    },

    {
        'qs' : 'Q7. What is the capital of Canada?',
        'options': [' Montreal', ' Ottawa', ' Toronto'],
        'answer': 1
    },

    {
        'qs' : 'Q8. What is the capital of Japan?',
        'options': [' Kanto', ' Hiroshima', ' Tokyo'],
        'answer': 2
    },

    {
        'qs' : 'Q9. What is the capital of Germany?',
        'options': [' Berlin', ' Cologne', ' Munic'],
        'answer': 0
    },
    
    {
        'qs' : 'Q10. What is the capital of DRC?',
        'options': [' Goma', ' Likasi', ' Kinshasa'],
        'answer': 2
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