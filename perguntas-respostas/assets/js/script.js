
const elementos = document.querySelectorAll('[type=radio]');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('change', (e) => {
        let marcado = e.target.value;

        if (marcado == "correta") {

            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = 'green';

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');
            const radios = document.querySelectorAll('input[type=radio]');

            radios.forEach((radio) => {
                radio.addEventListener('change', (e) => {
                    const marcado = e.target.value;
                    const respostaSelecionada = e.target.parentNode;
                    const containerPergunta = respostaSelecionada.parentNode;
                    const todosRadios = containerPergunta.querySelectorAll('input[type=radio]');

                    // Desativar todos os botões da pergunta
                    todosRadios.forEach((r) => {
                        r.disabled = true;
                    });

                    if (marcado === "correta") {
                        respostaSelecionada.style.backgroundColor = 'green';
                    } else if (marcado === "incorreta") {
                        respostaSelecionada.style.backgroundColor = 'red';

                        // Mostrar a resposta correta da pergunta
                        const respostaCorreta = containerPergunta.querySelector('input[value=correta]');
                        if (respostaCorreta) {
                            respostaCorreta.parentNode.style.backgroundColor = 'green';
                        }
                    }
                });
            });

            for (let n = 0; n < els.length; n++) {
                els[n].disabled = true;
            }
        } else if (marcado == "incorreta") {
            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = 'red';

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for (let n = 0; n < els.length; n++) {
                els[n].disabled = true;
            }

            let correta = parentNode.parentNode.querySelector('[value=correta]');
            correta.parentNode.style.backgroundColor = "green";

        }
    })
}