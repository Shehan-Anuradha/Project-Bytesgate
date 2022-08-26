const quizData = [
    {
        question: "What is the goal of social engineering?",
        a: "Sabotage a person's social media",
        b: "To catfish someone",
        c: "To gain vital personal information",
        d: "To build trust",
        correct: "c",
    },
    {
        question: "When attempting to obtain someone's information, social engineering tactics are usually utilized less than simply hacking someone's software.",
        a: "True",
        b: "False",
        c: "May be",
        d: "I don't know",
        correct: "b",
    },
    {
        question: "Spammers want you to:",
        a: "Not open any links",
        b: "Think first and act later",
        c: "Act first and think later",
        d: "Update your software automatically",
        correct: "c",
    },
    {
        question: "An email claiming that you have won the lottery, as long as you fill out the corresponding information, is an example of what type social engineering attack?",
        a: "Baiting",
        b: "Phishing",
        c: "Piggybacking",
        d: "Email from a friend",
        correct: "b",
    },
    {
        question: "Which of the following are examples of social engineering scams executed via phishing? ",
        a: "Banking Link Scams",
        b: "Fax Notice Scams",
        c: "Facebook Message Link Scams",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of these is how to properly avoid becoming a victim of social engineering?",
        a: "Research the facts",
        b: "Delete any request for financial information or passwords",
        c: "Reject requests for help",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "An email claiming that you have won the lottery, as long as you fill out the corresponding information, is an example of what type social engineering attack?",
        a: "Baiting",
        b: "Phishing",
        c: "Piggybacking",
        d: "Email from a friend",
        correct: "b",
    },
    {
        question: "An email claiming that you have won the lottery, as long as you fill out the corresponding information, is an example of what type social engineering attack?",
        a: "Baiting",
        b: "Phishing",
        c: "Piggybacking",
        d: "Email from a friend",
        correct: "b",
    },
    {
        question: "An email claiming that you have won the lottery, as long as you fill out the corresponding information, is an example of what type social engineering attack?",
        a: "Baiting",
        b: "Phishing",
        c: "Piggybacking",
        d: "Email from a friend",
        correct: "b",
    },
    {
        question: "An email claiming that you have won the lottery, as long as you fill out the corresponding information, is an example of what type social engineering attack?",
        a: "Baiting",
        b: "Phishing",
        c: "Piggybacking",
        d: "Email from a friend",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})