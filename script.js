const chat = document.querySelector('.chat');
const audios = document.getElementById('audios');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const saudacoes = [
  'ola',
  'oi',
  'oii',
  'oiii',
  'bom dia',
  'boa noite'
];

const audio = [
  'poderia me mandar em audio?',
  'audio',
  'fale',
  'mande um audio'
];

const respostas1 = [
  'estou gravida?',
  'to gravida?'
];

const respostas2 = [
  'bem',
  'tudo bem',
  'otimo',
  'bem, graças a deus'
];

const respostas3 = [
  'onde eu posso fazer o pré-natal?',
  'onde eu posso fazer o pre natal?',
  'onde faço o pre natal?',
  'faço o pre natal onde?'
];

const respostas4 = [
  'o que é plano de parto?',
  'oque é plano de parto?',
  'plano de parto?',
  'oq é plano de parto?'
];

const respostas5 = [
  'o que é gestação de alto risco?',
  'oque é gestação de alto risco?',
  'o que é gestação de alto risco',
  'oque é gestação de alto risco'
];

const respostas6 = [
  'posso ingerir bebidas alcoólicas na gestação?',
  'posso beber bebidas alcoólicas na gestação?',
  'posso beber?',
  'pode alcool?'
];

const respostas7 = [
  'tchau',
  'adeus',
  'tchauu'
];

userInput.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    enviarMensagem();

  }
});

sendButton.addEventListener('click', () => {
  enviarMensagem();
});

function enviarMensagem() {
  const userQuestion = userInput.value;

  // Exibir pergunta do usuário
  const userMessage = document.createElement('div');
  userMessage.classList.add('message', 'user-message');
  userMessage.innerHTML = `<p>${userQuestion}</p>`;
  chat.appendChild(userMessage);

  // Simulação de resposta do bot (resposta fictícia)
  let botAnswerText = '';

  // Verificar a pergunta do usuário e definir a resposta do bot correspondente
  if (respostas1.includes(userQuestion.toLowerCase())) {
    botAnswerText = 'Sim você está.';
  } else if (respostas2.includes(userQuestion.toLowerCase())) {
    botAnswerText = 'Ótimo:)';
  } else if (respostas3.includes(userQuestion.toLowerCase())) {
    botAnswerText = 'São distribuídas por toda cidade UBS que estão preparadas para atender, caso você tenha uma gravidez de risco tem que se dirigir para o hospital para que tenha acesso a exames mais especializados';
  } else if (respostas4.includes(userQuestion.toLowerCase())) {
    botAnswerText = 'Plano de parto é uma forma da gestante escolher de que forma ela quer conduzir o parto, para mais informação acesse o link';
  } else if (respostas5.includes(userQuestion.toLowerCase())) {
    botAnswerText = 'A gestação de alto risco envole várias questões delicadas, para ter uma informação completa entra no link: https://bvsms.saude.gov.br/bvs/publicacoes/gestacao_alto_risco.pdf';
  } else if (respostas6.includes(userQuestion.toLowerCase())) {
    botAnswerText = 'Não é recomendado pelo ministério da saúde. Para uma informação mais completa acesse o link:  https://www.ufrgs.br/laranjanacolher/2021/07/12/perigos-do-consumo-de-alcool-na-gestacao/';
  } else if (respostas7.includes(userQuestion.toLowerCase())) {
    botAnswerText = 'Tchauu';
  } else if (saudacoes.includes(userQuestion.toLowerCase())) {
    botAnswerText = 'Olá!';
  } else if (audio.includes(userQuestion.toLowerCase())) {
    audios.style.display = "block";
  } else {
    botAnswerText = 'Desculpe, não entendi a pergunta.';
  }

  // Exibir resposta do bot
  const botAnswer = document.createElement('div');
  botAnswer.classList.add('message', 'bot-message');
  botAnswer.innerHTML = `<p>${botAnswerText}</p>`;
  chat.appendChild(botAnswer);

  // Limpar campo de entrada
  userInput.value = '';

  // Rolagem automática para a última mensagem
  chat.scrollTop = chat.scrollHeight;
}