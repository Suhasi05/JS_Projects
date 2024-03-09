const questions = [
    {
        'que': 'Which of the following is a markup language ?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'Which year was JavaScript launched ?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct': 'b'
    },
    {
        'que': 'What does CSS stands for ?',
        'a': 'Hypertext Markup Langauge',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',
        'd': 'Helicopters Terminals Motorboats Lamborginis',
        'correct': 'b'
    }
]

let idx = 0;
let total = questions.length;
let right = 0, wrong = 0;
const queBox = document.getElementById("queBox");
const optionInput = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(idx == total) {
        return endQuiz()
    }
    else {
    reset();
    const data = questions[idx]
    console.log(data)
    queBox.innerText = `${idx+1}. ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
    }
}

const submitQuiz = () => {
    const data = questions[idx]
    const ans = getAnswer()
    if(ans == data.correct) {
        right++;     
    } else {
        wrong++;
    }
    idx++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let ans;
    optionInput.forEach(
        (input) => {
            if(input.checked) {
                ans = input.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = 
    `
    <div style="text-align : center", "justify-content: center">
    <h3> Thank you for playing the Quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}

loadQuestion();