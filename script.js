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
        question: "Someone from the IT department calls you and states that he needs your username and password so the can run an update on your computer. How should you handle this situation?",
        a: "Promptly end the phone call and report the incident to management.",
        b: "Tell him you'll email your username and password to the IT department because that's a safer form of communication.",
        c: "Give him your username and password since updates are a crucial part of security.",
        d: "Put him on hold and ask your co-worker if their computer has been updated.",
        correct: "a",
    },
    {
        question: "You receive a generic email notification about an issue with the delivery of a recent order. You’re instructed to click on a link included in the email for further information about the order. When you click, it opens a webpage which asks for your account username and password before you can view the information. Which of the following is the biggest red flag in this scenario?",
        a: "There is an issue while delivering your order.",
        b: "The email you received was a generic notification.",
        c: "The information about the delivery problems is not contained in the email.",
        d: "Your username and password are required to view the information.",
        correct: "d",
    },
    {
        question: "A person wearing a uniform and a badge, indicating they’re with a printer repair company, is sitting unsupervised at a coworker’s desk. They seem to be looking through the files and documents that are visible on that machine. It seems suspicious, so you ask if they need some assistance. They tell you that the printer is having problems, so they were looking for a file they could print, to diagnose the problem better. Which of the following is the biggest red flag in this scenario?",
        a: "They are trying to diagnose a problem with a printer.",
        b: "There is a repair person wearing a uniform.",
        c: "They are looking through the files on the system.",
        d: "They are sitting unescorted at a coworker's desk.",
        correct: "c",
    },
    {
        question: "Which of the following statements is true",
        a: "Emails that request sensitive information of any sort should be treated with skepticism.",
        b: "Emails from your boss and other co-workers can always be trusted.",
        c: "Emails with spammy content are harmless.",
        d: "Emails containing attachments are usually malicious.",
        correct: "a",
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