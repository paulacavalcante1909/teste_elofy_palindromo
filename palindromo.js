function testElofy() {

        let palavra = 'Arara';

        let palavra_splited = palavra.toLowerCase().split('');

        let count = palavra_splited.length - 1;

        let isPalindromo = true;

        palavra_splited.every(letra => {

            if (palavra_splited[count] !== letra) {
                isPalindromo = false;
                return;
            }
            count--;
        });
        console.log(isPalindromo);
    }