# Jogo da Forca

Este é o clássico jogo de adivinhar uma palavra.

## Manipulação DOM

No HTML existe uma tag <div class = "game-container"> que contém duas outras <div>, a primeira com a classe 'picture' contém o desenho do forca, que no início do jogo é invisível, quando o jogador esteja errado, um pedaço da forca aparece na tela. Isso é feito manipulando os estilos de borda de vários <div> com javascript.

A outra <div class = "word"> é onde os espaços para as letras da palavra a ser adivinhada serão criados. Esta palavra é selecionada aleatoriamente,Apos de conseguir a palavra, manipulando o DOM o número de espaços para a palavra são adicionados.

O DOM continua a ser manipulado quando o jogador erra, a Forca é desenhada, como já explicado, e quando ele esta certo, é escrito nos espaços correspondentes. AddEventListener é usado para ouvir o evento de pressionar uma tecla, para fazer isso. O Dom também é manipulado para diminuir o número de chances de o jogador adivinhar a palavra, quando esta em 1 fica en vermelho.

### Sons

O jogo emite dois sons, um para quando o jogador erra a letra, ou seja, aquela letra não faz parte da palavra e e outro que é usado para indicar que é uma letra válida ou que ele já escolheu aquela letra. Ou seja, se o jogador pressiona o "x" e isso não faz parte da palavra, emite um som de erro e perde uma oportunidade, se o jogador pressiona o "x" novamente, o jogo não subtrai outra oportunidade, mas cria outra som, esse mesmo som é produzido se ele estiver correto. Se você pressionar uma letra que não seja uma letra de A-Z, não emitirá nenhum som.

## API

O jogo usa uma API gratuita para obter as palavras aleatoriamente, o jogo mostra a palavra "esperar" se a API não respondeu, quando responde o jogo diz "Pode começar a jogar", se a API não responder ele dará um mensagem de erro.

Essa API está em português, mas notei que tem erros de ortografia, mas não posso reclamar por ser gratuita, também tentei uma API em espanhol mas também tinha erros.
