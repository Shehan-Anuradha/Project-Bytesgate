// Dynamic Quiz App with randomly chosen multiple choice questions
// Design and development by Micke Berg

const main = document.querySelector('main');
const theQuestion = document.querySelector('.the-question');
const optionsFieldContainer = document.querySelector('.options-field');
const optionField = document.querySelector('.options-field').children;
const answerTrackerContainer = document.querySelector('.answers-tracker');
const questionsOfTotal = document.querySelector('.question-of-total');
const totalQuestionSpan = document.querySelector('.total-question');
const totalQuestionSpan2 = document.querySelector('.total-question2');
const makeChoice = document.querySelector('.make-choice');
const correctAnswerSpan = document.querySelector('.correct-answers');
const percentage = document.querySelector('.percentage');
const gameOver = document.querySelector('.game-over');
const option = document.querySelector('.option');
const allQuestionsArr = [



  {
    q: 'What is not a step of the social engineering life cycle?',
    options:
    [
    'Investigation',
    'Hook',
    'repeat',
    "Exit"
    ],
    answer: 2
  },

  {
    q: 'What is Vishing?',
    options:
    [
    'A Phishing attack using emails',
    'Phishing attack using voice call',
    'Intercepting network traffic',
    "Steal personal documents"
    ],
    answer: 1
  },

  {
    q: 'What is the most common method of social engineering?',
    options:
    [
    'Phishing',
    'Pretexting',
    'Baiting',
    "Scareware"
    ],
    answer: 0
  },

 
    {
    
    q: "Which of the following statements is true",
    answer: 0,
    options: [
      "Emails that request sensitive information of any sort should be treated with skepticism.",
      "Emails from your boss and other co-workers can always be trusted.",
      "Emails with spammy content are harmless.",
      "Emails containing attachments are usually malicious."
    ]
  },
  
    {
    
    q: "Someone from the IT department calls you and states that he needs your username and password so the can run an update on your computer. How should you handle this situation?",
    answer: 0,
    options: [
      "Promptly end the phone call and report the incident to management.",
      "Tell him you'll email your username and password to the IT department because that's a safer form of communication.",
      "Give him your username and password since updates are a crucial part of security.",
      "Put him on hold and ask your co-worker if their computer has been updated."
    ]
  },
    {
    
    q: "Which of these is how to properly avoid becoming a victim of social engineering?",
    answer: 3,
    options: [
      "Research the facts",
      "Delete any request for financial information or passwords",
      "Reject requests for help",
      "All of the above"
    ]
  },
  {
    
    q: "Which of the following are examples of social engineering scams executed via phishing?",
    answer: 3,
    options: [
      "Banking Link Scams",
      "Fax Notice Scams",
      "Facebook Message Link Scams",
      "All of the above"
    ]
  },
  {
    
    q: "An email claiming that you have won the lottery, as long as you fill out the corresponding information, is an example of what type social engineering attack?",
    answer: 1,
    options: [
      "Baiting",
      "Phishing",
      "Piggybacking",
      "Email from a friend"
    ]
  },
  {
    
    q: "Spammers want you to:",
    answer: 2,
    options: [
      "Not open any links",
      "Think first and act later",
      "Act first and think later",
      "Update your software automatically"
    ]
  },
  {
    
    q: "When attempting to obtain someone's information, social engineering tactics are usually utilized less than simply hacking someone's software.",
    answer: 1,
    options: [
      "True",
      "False",
      "May be",
      "I don't know"
    ]
  },
  {
    
    q: "What is the goal of social engineering?",
    answer: 2,
    options: [
      "Sabotage a person's social media",
      "To catfish someone",
      "To gain vital personal information",
      "To build trust"
    ]
  },

  {
    
    q: "What is a common warning sign of social engineering?",
    answer: 3,
    options: [
      "Message Arrives Unexpectedly",
      "Sender Asks Something Out of the Ordinary",
      "Requested Action is Potentially Harmful",
      "All of above"
    ]
  },

  {
    
    q: "What does cyber calling mean?",
    answer: 1,
    options: [
      "Get a voice-over-internet call",
      "The attacker acts as a professional and tricks the victim into revealing their credentials",
      "Call through WhatsApp",
      "Zoom meeting is an example"
    ]
  },

  {
    
    q: "What is known as whaling?",
    answer: 0,
    options: [
      "Attack high-ranking individuals within an organization",
      "Any spear phishing attack can define as whaling",
      "Hunting whales",
      "Type of man-in-the-middle attack"
    ]
  },


  //new set

  {
    
    q: "Which is a type of social engineering?",
    answer: 1,
    options: [
      "User identification",
      "Shoulder surfing",
      "System monitoring ",
      "Face-to-face communication"
    ]
  },

  {
    
    q: "Which is the most cost-effective way to prevent social engineering attacks?",
    answer: 3,
    options: [
      "Install HIDS",
      "Ensure that all patches are up to date",
      "Monitor and control all email activity",
      "Implement user awareness training"
    ]
  },

  {
    
    q: "Dumpster diving can be considered which type of social engineering attack?",
    answer: 0,
    options: [
      "Human-based",
      "Computer-based",
      "Physical-based",
      "Paper-based"
    ]
  },

  {
    
    q: "What is the recommended password change interval?",
    answer: 1,
    options: [
      "20 days",
      "30 days",
      "7 days",
      "1 day"
    ]
  },

  {
    
    q: "Which social engineering attack relies on identity theft?",
    answer: 0,
    options: [
      "Impersonation",
      "Dumpster diving",
      "Watering hole attack",
      "Shoulder surfing"
    ]
  },

  {
    
    q: "What type of spam relies on text-based communication?",
    answer: 1,
    options: [
      "Vishing",
      "SPIM ",
      "Bluesnarfing",
      "SPIT"
    ]
  },

  {
    
    q: "Which of the following terms is commonly used to describe an unsolicited advertising message?",
    answer: 3,
    options: [
      "Spyware",
      "Adware",
      "Malware",
      "Spam"
    ]
  },

  {
    
    q: "Tailgating is also termed as ___________",
    answer: 0,
    options: [
      "Piggybacking",
      "Pretexting",
      "Phishing",
      "Baiting"
    ]
  },

  {
    
    q: "What is it called when a hacker pretends to be a valid user on the system?",
    answer: 3,
    options: [
      "Third-person authorization",
      "Help desk",
      "Valid user",
      "Impersonation"
    ]
  },

  {
    
    q: "What percentage of data breaches come from phishing?",
    answer: 2,
    options: [
      "43%",
      "59%",
      "91%",
      "87%"
    ]
  },

  {
    
    q: "What is the Cost of a Data Breach because of social engineering in 2022?",
    answer: 0,
    options: [
      "$4.10 million",
      "$0.10 million",
      "$5000",
      "$1.2 million"
    ]
  },

  {
    
    q: "Which of the following are examples of social engineering scams executed via phishing? ",
    answer: 3,
    options: [
      "Banking Link Scams",
      "Fax Notice Scams",
      "Facebook Message Link Scams",
      "All of the above"
    ]
  },

  {
    
    q: "Who tries to steal information from people?",
    answer: 0,
    options: [
      "Social Engineers",
      "Thieves",
      "Scientists",
      "Government"
    ]
  },

  {
    
    q: "How could you prevent shoulder surfing?",
    answer: 2,
    options: [
      "Using a stronger password",
      "Checking a website is secure",
      "Hiding what you are typing",
      "Changing your password frequently"
    ]
  },

  {
    
    q: "Which of the following is not an approach to trust? ",
    answer: 3,
    options: [
      "Trust all people all the time",
      "Trust some people some of the time",
      "Trust everyone all of the time",
      "Trust authorized individuals only"
    ]
  },

  {
    
    q: "Social engineering ______.",
    answer: 1,
    options: [
      "Is illegal in the U.S.",
      "Relies on tricking and deceiving someone to provide secure information",
      "Requires a computer and Internet connection",
      "Is rarely used today"
    ]
  },

  {
    
    q: "_____ is a technique that targets only specific users",
    answer: 0,
    options: [
      "Spear phishing",
      "Phishing",
      "Pharming",
      "Yahoo phishing"
    ]
  },

  {
    
    q: "Watching an individual enter a security code on a keypad without her permission is known as",
    answer: 0,
    options: [
      "Shoulder surfing",
      "Keyboard observation (KO)",
      "Keypad eavesdropping",
      "Finger scanning"
    ]
  },

  {
    
    q: "___________ is a special form of attack using which hackers’ exploit – human psychology.",
    answer: 2,
    options: [
      "Cross Site Scripting",
      "Insecure network",
      "Social Engineering",
      "Reverse Engineering"
    ]
  },

  {
    
    q: "Which of the following is the technique used to look for information in trash or around dustbin container?",
    answer: 3,
    options: [
      "Pretexting",
      "Baiting",
      "Quid Pro Quo",
      "Dumpster diving"
    ]
  },






  
];

let questionIndex = 0;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;

let allQuestions = [...allQuestionsArr];
let theRandomQuestions = [];

function selectQuestions() {
  if (allQuestions.length < 10) {
    allQuestions = [...allQuestionsArr];
  };
  
  theRandomQuestions = [];

  for (let i = 0; i < 10; i++) {
    let randomQuestion = Math.floor(Math.random() * allQuestions.length);

    theRandomQuestions.push(allQuestions[randomQuestion]);
    allQuestions.splice(randomQuestion, 1);
  };
};

function load() {
  questionsOfTotal.innerHTML = index+1;
  optionsFieldContainer.innerHTML = '';
  theQuestion.innerHTML = theRandomQuestions[questionIndex].q;

  for(let i = 0; i < theRandomQuestions[questionIndex].options.length; i++) {
    optionsFieldContainer.innerHTML += `<div class="option">${theRandomQuestions[questionIndex].options[i]}</div>`;
  };

  const parent = optionsFieldContainer;
  const children = Array.from(parent.children);

  children.map((option, index) => {
    option.addEventListener('click', () => {
      checkIfRightAnswer(index);
    });
  })
};

function next() {
  validate();
};

function checkIfRightAnswer(index) {
  if(index == theRandomQuestions[questionIndex].answer) {
    optionField[index].classList.add('correct');
    updateAnswerTracker('correct');
    score++;
  } else {
    optionField[index].classList.add('wrong');
    optionField[theRandomQuestions[questionIndex].answer].classList.add('correct');
    updateAnswerTracker('wrong');
  }
  disableOptions();
  
  makeChoice.innerHTML = '';
  makeChoice.style.backgroundColor = '';
};

function disableOptions() {
  for(let i = 0; i < optionField.length; i++) {
    optionField[i].classList.add('disabled');
  }
};

function enableOptions() {
  for(let i = 0; i < optionsFieldContainer.children.length; i++) {
    optionField[i].classList.remove('disabled', 'correct', 'wrong');
  }
};

function validate() {
  if(!optionField[0].classList.contains('disabled')) {
    makeChoice.innerHTML = 'Välj ett alternativ innan du kan gå vidare.';
    makeChoice.style.backgroundColor = 'rgba(255, 255, 255, 0.415)';
  }
  else {
    if (questionIndex === 9) {
      quizOver();
      questionIndex = 0;
    } else {
      enableOptions();
      questionIndex++;
      load();
    }
  }
};

function answerTracker() {
    for(let i = 0; i < theRandomQuestions.length; i++){ 
      const div = document.createElement('div');
        answerTrackerContainer.appendChild(div);
  }
}

function updateAnswerTracker(classNam) {
  let boxes = Array.from(answerTrackerContainer.children);
  boxes[index].classList.add(classNam);
  index++;
};

function tryAgain() {
  index = 0;
  answerTrackerContainer.innerHTML = '';
  document.querySelector('.quiz-over').classList.remove('show');
  score = 0;
  loadRound();
};

window.onload = function () {
  loadRound();
};

function loadRound() {
  selectQuestions();
  load();
  
  totalQuestionSpan.innerHTML = theRandomQuestions.length;

  answerTracker();
  index = 0;
};

const gameOverStatements = [
  { option: 'Uhh... Hello! Dont sleep in class!!'},
  { option: 'There is nothing going on for you huh?!! Time to do homework!!'},
  { option: 'Hmm... that is how it goes. Maybe study a little more!!'},
  { option: 'Quite ok, but you can probably do better!' },
  { option: 'You seem to have a pretty good grasp of this democracy thing!!' },
  { option: 'Ooooh, cruel you are. You are a democracy expert!!' },
  { option: 'Test your knowledge again' }
];

function quizOver() {
  document.querySelector('.quiz-over').classList.add('show');

  let finishScore = (score/theRandomQuestions.length)*100;
  
  correctAnswerSpan.innerHTML = score;
  totalQuestionSpan2.innerHTML = theRandomQuestions.length;
  percentage.innerHTML = (score/theRandomQuestions.length)*100 + '%';

  switch (finishScore) {
    case 0:
      gameOver.innerHTML = gameOverStatements[0].option;
      break;
    case 20:
      gameOver.innerHTML = gameOverStatements[1].option;
      break;
    case 40:
      gameOver.innerHTML = gameOverStatements[2].option;
      break;
    case 60:
      gameOver.innerHTML = gameOverStatements[3].option;
      break;
    case 80:
      gameOver.innerHTML = gameOverStatements[4].option;
      break;
    case 100:
      gameOver.innerHTML = gameOverStatements[5].option;
      break;
    default:
      gameOver.innerHTML = gameOverStatements[6].option;
  }
};

