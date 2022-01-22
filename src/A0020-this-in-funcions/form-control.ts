
import isEmail from "validator/lib/isEmail";
const ERROR_MESSAGES = 'error-message';
const SHOW_ERROR_MESSAGES = 'show-error-message';

// selecionar o formulário e os campos através do nome da classe
// necessário informar qual o tipo do campo que será obtido do formulário
const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username')  as HTMLInputElement;
const email = document.querySelector('.email')  as HTMLInputElement;
const password = document.querySelector('.password')  as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

// substitindo o this para usar arrow function:

const SubmitEventFn = (event: Event) =>
    {
        // evitar que a página html seja atualizada, após o clique do botão.
        event.preventDefault();

        // sempre que utilizamos um evento temos target, e
        // nesta função o target é o elemento que está recebendo o evento.

        // o target de um submit é o próprio formulário que está sendo enviado.
        const target = event.target as HTMLFormElement;

        // função para ocultar as mensagens de erro
        hideErrorMessages(target);

        // checar se os campos estão vazios
        checkForEmptyFields(username, email, password, password2);

        // checar se o e-mail é valido
        checkEmail(email);

        // checar se as senhas são iguais
        checkEqualPassords(password, password2);

        // checar se devo enviar os dados do formulário
        // if (checkSendForm(this)) form.submit();
        if (checkSendForm(target)) console.log("Formulário está ok. Pode ser enviado!");
        ;
    }

// capturar o evento do botão submit
form.addEventListener('submit', SubmitEventFn)

// checar se os password são iguais
function checkEqualPassords(password:HTMLInputElement, password2:HTMLInputElement) {
    if (password.value !== password2.value){
        showErrorMessage(password2, 'senhas são diferentes');
    }
}

// checar se o e-mail é valido
function checkEmail(input:HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

// função para ocultar as mensagens de erro e que não retorna nada "void"
function hideErrorMessages(form:HTMLFormElement): void {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}
// funão para exibir mensagens de erro
function showErrorMessage(input:HTMLInputElement, msg: string) {
 const formFields = input.parentElement as HTMLDivElement;
 const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
errorMessage.innerText = msg;
formFields.classList.add(SHOW_ERROR_MESSAGES);

}

// chegar se os campos estão vazios
function checkForEmptyFields(...inputs:HTMLInputElement[]): void {
    inputs.forEach(input => {
        if (!input.value) showErrorMessage(input, 'Campo não pode fica vazio');
    })
}

// checar se devo enviar os dados do formulário.
function checkSendForm(form:HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(()=> (send = false));
    return send;
}

/* showErrorMessage(username, ERROR_MESSAGES);
hideErrorMessages(form); */
