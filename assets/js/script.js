const quizzes = {
    poo: {
        professor1: [
            { question: "Em relação à linguagem Java, marque as afirmativas abaixo com (V) para verdadeira e (F) para falsa: <br>[_] Um construtor é implicitamente chamado no momento da instanciação do objeto.<br>[_] Construtor não é um método, seu único propósito é inicializar as variáveis de instância.<br>[_] Construtores não possuem especificadores de acesso, sendo públicos por default.<br>[_] Um Construtor pode ser chamado a qualquer instante utilizando a palavra-chave this. <br>[_] O Construtor da subclasse pode acessar o construtor da superclasse com uso da palavra-chave super. <br>[_] O polimorfismo paramétrico é utilizado para definir mais de um construtor para a classe. <br>[_] Uma classe que não possua um construtor declarado não poderá instanciar objetos. <br>[_] Uma classe que possua vários construtores poderá executar apenas um dester ao instancia um objeto.",
            choices: ["F F F F V F F V", "V V F F V F F F", "F V F F V F F F", "V V F F F V F V"], 
            answer: "V V F F V F F F" },

            { question: "Com relação aos conceitos de Programação Orientada à Objetos é correto afirmar que (Unespar, 2023): <br>[_] Para uma classe ser considerada abstrata, todos os seus métodos devem ser abstrados. Em Java, para se definir uma classe abstrata deve-se utilizar a palavra-chave abstract no inicio de sua declaração; <br>[_] Poliformismo é o princípio pelo qual duas ou mais classes derivadas de uma mesma superclasse podem invocar métodos que têm a mesma assinatura mas comportamentos distintos, especializados para cada classe derivada, usando para tanto uma referência a um objeto do tipo da superclasse; <br>[_] O encapsulamento é alcançado por meio da definição da visibilidade pública aos atributos e métodos; <br>[_] Interface pode ser considerada como a forma com que um objeto se apresenta para outros, no que diz respeito aos seus atributos e métodos. Em Java, uma classe não pode implementar mais de uma interface; <br>[_] A herança é um mecanismo que permite que uma classe herde todo o comportamento e os atributos de outra classe. Em Java, pode-se implementar tanto a herança única quanto a herança múltipla. <br>",
            choices: ["F V F F F", "F F V F V", "V V V F F", "F V F V F"], 
            answer: "F V F F F" },

            { question: "O que são atributos e métodos estáticos em Java?",
            choices: ["Atributos e métodos estáticos pertencem a cada instância da classe e só podem ser acessados através de um objeto.", "Atributos e métodos estáticos pertencem à classe em si, podem ser acessados sem criar uma instância e não variam de acordo com o objeto.", "Atributos e métodos estáticos pertencem a interfaces e são usados exclusivamente para polimorfismo.", "Atributos estáticos pertencem à classe, enquanto métodos estáticos pertencem aos objetos criados."], 
            answer: "Atributos e métodos estáticos pertencem à classe em si, podem ser acessados sem criar uma instância e não variam de acordo com o objeto." },

            { question: "Quais são as restrições de métodos estáticos em Java?",
            choices: ["Métodos estáticos não podem acessar diretamente atributos ou métodos não estáticos da classe e não podem usar as palavras-chave this ou super.", " Métodos estáticos podem acessar diretamente atributos e métodos não estáticos de uma classe.", " Métodos estáticos podem ser sobrescritos pelas subclasses para comportamentos específicos.", "Métodos estáticos precisam de uma instância da classe para serem chamados."], 
            answer: "Métodos estáticos não podem acessar diretamente atributos ou métodos não estáticos da classe e não podem usar as palavras-chave this ou super." },

            { question: "Qual a diferença entre erro e exceção em Java?",
            choices: ["Exceções são situações que podem ser tratadas ou evitadas pelo programador, enquanto erros são condições mais graves, geralmente relacionadas a falhas de hardware ou problemas no ambiente de execução.", "Erros são condições anormais que podem ser corrigidas pelo programador, enquanto exceções são situações que não podem ser tratadas.", "Erros são eventos que ocorrem durante a execução do programa, e exceções são eventos que ocorrem durante a compilação do programa.", "Exceções e erros são ambos eventos que podem ser tratados de forma igual em Java, com a mesma abordagem."], 
            answer: "Exceções são situações que podem ser tratadas ou evitadas pelo programador, enquanto erros são condições mais graves, geralmente relacionadas a falhas de hardware ou problemas no ambiente de execução." },
            
            { question: "(apenas pra eu copiar e colar mais rapido)",
            choices: ["1", " 2", " 3", "4"], 
            answer: "1" },


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
