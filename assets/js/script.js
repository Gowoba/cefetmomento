const quizzes = {
    poo: {
        professor1: [
            { question: "Com relação aos conceitos de Programação Orientada à Objetos é correto afirmar que (Unespar, 2023): <br>[_] Um construtor é implicitamente chamado no momento da instanciação do objeto.<br>[_] Construtor não é um método, seu único propósito é inicializar as variáveis de instância.<br>[_] Construtores não possuem especificadores de acesso, sendo públicos por default.<br>[_] Um Construtor pode ser chamado a qualquer instante utilizando a palavra-chave this. <br>[_] O Construtor da subclasse pode acessar o construtor da superclasse com uso da palavra-chave super. <br>[_] O polimorfismo paramétrico é utilizado para definir mais de um construtor para a classe. <br>[_] Uma classe que não possua um construtor declarado não poderá instanciar objetos. <br>[_] Uma classe que possua vários construtores poderá executar apenas um dester ao instancia um objeto.",
            choices: ["F F F F V F F V", "V V F F V F F F", "F V F F V F F F", "V V F F F V F V"], 
            answer: "V V F F V F F F" },


            { question: "O que é uma classe?", choices: ["Um molde para criar objetos", "Uma instância de um objeto", "Um tipo de variável", "Uma função que retorna um valor"], answer: "Um molde para criar objetos" }
        ],
    },
    calculo: {
        // Adicionar questões para a página de Cálculo aqui, por exemplo:
        professor1: [
            { question: "Qual a derivada de x^2?", choices: ["2x", "x^2", "x", "1"], answer: "2x" }
        ]
    }
};

let currentQuestion = null;

function updateContent() {
    const professor = document.getElementById("professor-select").value;
    const quizDiv = document.getElementById("quiz-content");

    // Limpa o conteúdo atual
    quizDiv.innerHTML = "";

    if (professor === "all") {
        // Exibe as questões de todos os professores de POO
        currentQuestion = getRandomQuestionFromAllPOO();

        const questionElem = document.createElement("div");
        questionElem.classList.add("question");

        // Embaralha as alternativas antes de exibir
        const shuffledChoices = shuffleArray(currentQuestion.choices);

        questionElem.innerHTML = `
            <p>${currentQuestion.question}</p>
            ${shuffledChoices.map((choice, index) => `
                <div>
                    <input type="radio" name="answer" id="answer-${index}" value="${choice}">
                    <label for="answer-${index}">${choice}</label>
                </div>
            `).join('')}
        `;

        quizDiv.appendChild(questionElem);

        const submitButton = document.createElement("button");
        submitButton.textContent = "Enviar Resposta";
        submitButton.onclick = () => checkAnswer("poo");
        quizDiv.appendChild(submitButton);
    } else if (quizzes.poo[professor]) {
        // Exibe o quiz do professor selecionado de POO
        currentQuestion = getRandomQuestion(quizzes.poo[professor]);

        const questionElem = document.createElement("div");
        questionElem.classList.add("question");

        const shuffledChoices = shuffleArray(currentQuestion.choices);

        questionElem.innerHTML = `
            <p>${currentQuestion.question}</p>
            ${shuffledChoices.map((choice, index) => `
                <div>
                    <input type="radio" name="answer" id="answer-${index}" value="${choice}">
                    <label for="answer-${index}">${choice}</label>
                </div>
            `).join('')}
        `;

        quizDiv.appendChild(questionElem);

        const submitButton = document.createElement("button");
        submitButton.textContent = "Enviar Resposta";
        submitButton.onclick = () => checkAnswer("poo");
        quizDiv.appendChild(submitButton);
    } else {
        quizDiv.innerHTML = "<p>Selecione um professor para ver o quiz.</p>";
    }
}

function getRandomQuestionFromAllPOO() {
    // Junta todas as perguntas de POO em uma lista
    const allPOOQuestions = [
        ...quizzes.poo.professor1,
        ...quizzes.poo.professor2,
        ...quizzes.poo.professor3
    ];

    return getRandomQuestion(allPOOQuestions);
}

function getRandomQuestion(quiz) {
    const randomIndex = Math.floor(Math.random() * quiz.length);
    return quiz[randomIndex];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // troca os elementos
    }
    return array;
}

function checkAnswer(subject) {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const resultDiv = document.getElementById("result");

    if (!selectedAnswer) {
        resultDiv.innerHTML = "<p>Por favor, selecione uma resposta.</p>";
        return;
    }

    const correct = selectedAnswer.value === currentQuestion.answer;
    const allChoices = document.querySelectorAll('input[name="answer"]');
    
    allChoices.forEach((choice) => {
        const label = choice.nextElementSibling;
        if (choice.value === currentQuestion.answer) {
            label.style.color = "green";
        } else {
            label.style.color = "red";
        }
    });

    resultDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p>${correct ? "Resposta correta!" : "Resposta incorreta!"}</p>
    `;
    
    setTimeout(() => {
        updateContent();
        resultDiv.innerHTML = "";
    }, 2000);
}
