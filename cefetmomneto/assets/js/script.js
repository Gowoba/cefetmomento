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
            
            { question: "Como funciona o mecanismo de tratamento de exceção em Java",
            choices: ["O mecanismo de tratamento de exceção em Java usa as palavras-chave try, catch e finally para identificar, tratar e finalizar a execução de blocos de código com problemas.", "O tratamento de exceções em Java ocorre automaticamente, corrigindo os erros encontrados no código durante a execução, sem necessidade de intervenção do programador.", "Em Java, quando uma exceção ocorre, ela é capturada pela JVM e o programa é encerrado automaticamente, sem possibilidade de tratamento.", "Exceções em Java só podem ser tratadas se forem do tipo RuntimeException, pois as demais são ignoradas pelo mecanismo de tratamento."], 
            answer: "O mecanismo de tratamento de exceção em Java usa as palavras-chave try, catch e finally para identificar, tratar e finalizar a execução de blocos de código com problemas."},

            { question: "O que é polimorfismo no contexto da Programação Orientada a Objetos?",
            choices: ["Polimorfismo é a habilidade de um objeto ser tratado como uma instância de sua classe ou de qualquer uma de suas superclasses, permitindo que métodos definidos em uma classe base sejam sobrescritos e executados de forma diferente em classes derivadas.", "Polimorfismo é a capacidade de uma classe herdar atributos e métodos de outra classe e usá-los sem alterações.", "Polimorfismo refere-se à criação de várias classes independentes que compartilham os mesmos métodos e atributos, sem a necessidade de herança entre elas.", "Polimorfismo é o conceito que permite criar objetos genéricos, que podem se adaptar automaticamente ao comportamento de diferentes classes sem relação hierárquica."], 
            answer: "Polimorfismo é a habilidade de um objeto ser tratado como uma instância de sua classe ou de qualquer uma de suas superclasses, permitindo que métodos definidos em uma classe base sejam sobrescritos e executados de forma diferente em classes derivadas." },
            
            { question: "O que é sobrecarga e sobrescrita no contexto da Programação Orientada a Objetos?",
            choices: ["Sobrecarga é o conceito de usar métodos com o mesmo nome, mas com diferentes parâmetros, enquanto sobrescrita é a modificação do comportamento de um método herdado de uma superclasse na subclasse.", "Sobrecarga é a redefinição de um método em uma subclasse, enquanto sobrescrita é a criação de múltiplos métodos com o mesmo nome, mas diferentes assinaturas na mesma classe.", "Sobrecarga é a substituição de métodos de uma superclasse, enquanto sobrescrita é o processo de criação de novos métodos na subclasse com nomes diferentes.", "Sobrecarga ocorre quando você altera a assinatura de um método em uma subclasse, enquanto sobrescrita ocorre quando você cria métodos com o mesmo nome e mesma assinatura em diferentes classes."], 
            answer: "Sobrecarga é o conceito de usar métodos com o mesmo nome, mas com diferentes parâmetros, enquanto sobrescrita é a modificação do comportamento de um método herdado de uma superclasse na subclasse." },
            
            { question: "Para que serve um construtor na programação orientada a objetos?",
            choices: ["Construtores são usados para criar instâncias de uma classe e inicializar seus atributos com valores padrão ou passados como parâmetros.", "Construtores são usados para destruir objetos e liberar memória ao final de seu uso.", "Construtores são métodos especiais usados para manipular dados do banco de dados e realizar operações de entrada e saída.", "Construtores são responsáveis por definir o comportamento dos objetos, mas não influenciam na inicialização de seus atributos."], 
            answer: "Construtores são usados para criar instâncias de uma classe e inicializar seus atributos com valores padrão ou passados como parâmetros."},

            { question: "Quais as diferenças entre construtores e métodos em Java?",
            choices: ["Construtores têm o mesmo nome da classe e são usados para inicializar objetos, enquanto métodos têm nomes diferentes e podem ser usados para realizar operações ou retornar valores.", "Construtores podem ser chamados explicitamente a qualquer momento durante a execução do programa, enquanto métodos são sempre invocados automaticamente quando um objeto é criado.", "Construtores são usados para modificar atributos de uma classe, enquanto métodos são usados para criar novos objetos e destruir os existentes.", "Construtores têm parâmetros obrigatórios, enquanto métodos não podem ter parâmetros e sempre retornam valores."], 
            answer: "Construtores têm o mesmo nome da classe e são usados para inicializar objetos, enquanto métodos têm nomes diferentes e podem ser usados para realizar operações ou retornar valores." },
            
            { question: "Quais são as características de uma classe abstrata em Java?",
            choices: ["Uma classe abstrata não pode ser instanciada diretamente e pode ter métodos abstratos e concretos (implementados).", "Uma classe abstrata pode ser instanciada diretamente e não pode ter métodos abstratos.", "Uma classe abstrata pode conter métodos abstratos, mas não pode ter atributos.", "Uma classe abstrata é sempre pública e não pode ser herdada por outras classes."], 
            answer: "Uma classe abstrata não pode ser instanciada diretamente e pode ter métodos abstratos e concretos (implementados)." },

            { question: "Qual a diferença entre os paradigmas de Programação Orientada a Objetos e Programação Estruturada?",
            choices: ["Na Programação Orientada a Objetos, o código é organizado em objetos que possuem atributos e comportamentos, enquanto na Programação Estruturada, o código é organizado em funções e procedimentos.", "Na Programação Orientada a Objetos, o foco está em processos e funções, enquanto na Programação Estruturada o foco está em objetos e classes.", "Na Programação Orientada a Objetos, os dados são tratados separadamente das funções, enquanto na Programação Estruturada os dados e funções estão combinados em estruturas chamadas objetos.", "Na Programação Orientada a Objetos, a modularização é baseada em sub-rotinas, enquanto na Programação Estruturada, a modularização é feita por objetos."], 
            answer: "Na Programação Orientada a Objetos, o código é organizado em objetos que possuem atributos e comportamentos, enquanto na Programação Estruturada, o código é organizado em funções e procedimentos." },

            { question: "Por que usar programação orientada a objetos?",
            choices: ["Porque a POO facilita a reutilização de código, a modularização e o design mais organizado, tornando o desenvolvimento e a manutenção do software mais eficientes.", "Porque a Programação Orientada a Objetos (POO) permite que o código seja escrito de forma linear e sequencial, facilitando a compreensão e a manutenção.", " Porque a POO promove o uso de funções que manipulam diretamente a memória e os recursos do sistema, tornando o código mais eficiente.", "Porque a POO elimina a necessidade de manipular dados diretamente, fazendo com que o código seja executado de forma mais rápida."], 
            answer: "Porque a POO facilita a reutilização de código, a modularização e o design mais organizado, tornando o desenvolvimento e a manutenção do software mais eficientes." },

            { question: "Diferencie classe e objeto no contexto de Programação Orientada a Objetos.",
            choices: ["Uma classe é um modelo ou plano para criar objetos, enquanto um objeto é uma instância concreta de uma classe com valores específicos para seus atributos.", "Uma classe é uma instância de um objeto, enquanto um objeto é uma estrutura de dados que define o comportamento de uma classe.", "Uma classe é um conjunto de métodos que manipula dados, enquanto um objeto é uma coleção de classes que não pode ser instanciada.", "Uma classe é um tipo de dado primitivo, enquanto um objeto é uma função que realiza operações com esses dados."], 
            answer: "Uma classe é um modelo ou plano para criar objetos, enquanto um objeto é uma instância concreta de uma classe com valores específicos para seus atributos." },

            { question: "Conceitue encapsulamento no contexto de Programação Orientada a Objetos.",
            choices: ["Encapsulamento é o processo de esconder os detalhes internos de uma classe e permitir o acesso e modificação de seus atributos apenas por meio de métodos específicos, como getters e setters.", "Encapsulamento é o ato de dividir o código em várias classes independentes, permitindo que cada classe execute suas próprias tarefas de forma isolada.", "Encapsulamento é a técnica de garantir que todos os objetos em um programa sejam do mesmo tipo e possam ser manipulados da mesma forma, sem diferenças entre eles.", "Encapsulamento é a forma de declarar classes e objetos públicos, de modo que qualquer parte do programa possa acessar diretamente seus atributos e métodos."], 
            answer: "Encapsulamento é o processo de esconder os detalhes internos de uma classe e permitir o acesso e modificação de seus atributos apenas por meio de métodos específicos, como getters e setters." },

            { question: "Em relação ao encapsulamento, identifique os modificadores de acesso e seus respectivos escopos de uso.",
            choices: ["private: O membro é acessível apenas dentro da própria classe; protected: O membro é acessível dentro da classe e nas subclasses; public: O membro é acessível de qualquer parte do código; default: O membro é acessível apenas dentro do pacote.", "private: O membro é acessível dentro do pacote; protected: O membro é acessível apenas nas subclasses; public: O membro é acessível apenas dentro da própria classe; default: O membro é acessível de qualquer parte do código.", " private: O membro é acessível dentro de qualquer classe; protected: O membro é acessível apenas dentro da classe; public: O membro é acessível apenas nas subclasses; default: O membro é acessível apenas dentro da classe.", "private: O membro é acessível de qualquer parte do código; protected: O membro é acessível apenas dentro da própria classe; public: O membro é acessível apenas dentro do pacote; default: O membro é acessível apenas dentro da classe."], 
            answer: "private: O membro é acessível apenas dentro da própria classe; protected: O membro é acessível dentro da classe e nas subclasses; public: O membro é acessível de qualquer parte do código; default: O membro é acessível apenas dentro do pacote." },

            { question: "Quais são os manipuladores em Programação Orientada a Objetos e como funcionam em Java?",
            choices: ["Manipuladores são métodos que permitem a manipulação direta de atributos privados da classe, sendo chamados de 'getters' e 'setters', com acesso restrito a apenas a classe que os define.", "Manipuladores são os métodos que alteram diretamente o estado de um objeto, sendo chamados de 'getters' e 'setters', e podem ser públicos para permitir a modificação dos atributos diretamente.", "Manipuladores são métodos usados para realizar operações matemáticas e lógicas com os atributos da classe, sem envolver a leitura ou alteração direta desses atributos.", "Manipuladores são métodos públicos que definem e alteram o comportamento de classes e objetos, sem interação direta com os atributos privados."], 
            answer: "Manipuladores são métodos que permitem a manipulação direta de atributos privados da classe, sendo chamados de 'getters' e 'setters', com acesso restrito a apenas a classe que os define." },

            { question: "Quais as diferenças entre classe abstrata e interface em Java?",
            choices: ["Uma classe abstrata pode ter métodos abstratos e concretos, e pode ser estendida por outras classes; uma interface só pode ter métodos abstratos e não pode ser instanciada.", "Uma classe abstrata pode ter métodos implementados e atributos, enquanto uma interface só pode ter métodos abstratos e não pode ter atributos.", "Uma classe abstrata pode ser instanciada, enquanto uma interface não pode ter métodos abstratos.", "Uma classe abstrata pode ser implementada por várias classes, enquanto uma interface pode ser estendida por apenas uma classe."], 
            answer: "Uma classe abstrata pode ter métodos abstratos e concretos, e pode ser estendida por outras classes; uma interface só pode ter métodos abstratos e não pode ser instanciada." },

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
let answeredQuestions = []; // Lista de perguntas já respondidas
let correctAnswers = 0; // Contador de respostas corretas

function updateContent() {
    const professor = document.getElementById("professor-select").value;
    const quizDiv = document.getElementById("quiz-content");

    // Limpa o conteúdo atual
    quizDiv.innerHTML = "";

    const allQuestions = professor === "all" 
        ? getAllPOOQuestions() 
        : quizzes.poo[professor] || [];

    // Verifica se todas as perguntas foram respondidas
    if (answeredQuestions.length === allQuestions.length) {
        quizDiv.innerHTML = `
            <p>Você respondeu todas as perguntas!</p>
            <p>Total de acertos: ${correctAnswers} de ${allQuestions.length}</p>
            <button onclick="resetQuiz()">Refazer Quiz</button>
        `;
        return;
    }

    // Seleciona uma nova pergunta que ainda não foi respondida
    currentQuestion = getRandomUnansweredQuestion(allQuestions);

    if (!currentQuestion) {
        quizDiv.innerHTML = "<p>Não há mais perguntas disponíveis.</p>";
        return;
    }

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
    submitButton.onclick = () => checkAnswer(allQuestions);
    quizDiv.appendChild(submitButton);
}

function getAllPOOQuestions() {
    return [
        ...quizzes.poo.professor1,
        ...quizzes.poo.professor2,
        ...quizzes.poo.professor3
    ];
}

function getRandomUnansweredQuestion(questions) {
    const unanswered = questions.filter(q => !answeredQuestions.includes(q));
    if (unanswered.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * unanswered.length);
    return unanswered[randomIndex];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // troca os elementos
    }
    return array;
}

function checkAnswer(allQuestions) {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const resultDiv = document.getElementById("result");

    if (!selectedAnswer) {
        resultDiv.innerHTML = "<p>Por favor, selecione uma resposta.</p>";
        return;
    }

    const correct = selectedAnswer.value === currentQuestion.answer;

    // Incrementa o contador de acertos se a resposta estiver correta
    if (correct) {
        correctAnswers++;
    }

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

    // Adiciona a pergunta atual à lista de respondidas
    answeredQuestions.push(currentQuestion);

    setTimeout(() => {
        updateContent();
        resultDiv.innerHTML = "";
    }, 2000);
}

function resetQuiz() {
    answeredQuestions = []; // Limpa a lista de respondidas
    correctAnswers = 0; // Reinicia o contador de acertos
    updateContent(); // Reinicia o quiz
}
