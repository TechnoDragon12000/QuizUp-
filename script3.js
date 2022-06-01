// Array of questions and answers
let data = [
    {
        'qs' : 'Q1. What is 2 + 29?',
        'options': [' 30', ' 36', ' 31'],
        'answer': 2
    },

    {
        'qs' : 'Q2. What is 7 x 3?',
        'options': [' 25', ' 21', ' 26'],
        'answer': 1
    },

    {
        'qs' : 'Q3. What is 12 x 5?',
        'options': [' 60', ' 65', ' 55'],
        'answer': 0
    },

    {
        'qs' : 'Q4. What is 38.8 + 26.3 - 27.8?',
        'options': [' 37.3', ' 37.5', ' 36.1'],
        'answer': 0
    },

    {
        'qs' : 'Q5. What is 5 x 6 - 2?',
        'options': [' 25', ' 28', ' 23'],
        'answer': 1
    },

    {
        'qs' : 'Q6. What is -3 + 10 - 7?',
        'options': [' -7', ' 0', ' 7'],
        'answer': 1
    },

    {
        'qs' : 'Q7. What is 2 + 27?',
        'options': [ ' 29', ' 30', ' 28'],
        'answer': 0
    },

    {
        'qs' : 'Q8. What is 24 ÷ 4',
        'options': [' 7', ' 4', ' 6'],
        'answer': 2
    },

    {
        'qs' : 'Q9. What is 3 + 3 - 1 + 300?',
        'options': [' 302', ' 305', ' 300'],
        'answer': 1
    },
    
    {
        'qs' : 'Q10. What is 4 x 3 + 1 + 4 - 3?',
        'options': [' 16', ' 27', ' 14'],
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