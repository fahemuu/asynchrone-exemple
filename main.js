'use strict';

(() => {
    // ce petit bout de code sert juste
    // à loader fichier par fichier
    // sur un interval de 1,5 secondes
    const files = ['callback', 'promise', 'asyncAwait', 'allerplusloin']

    for (let i = 0, len = files.length; i < len; i++) {

        const script = document.createElement('script'),
            fileName = files[i],
            fileNumber = i + 1

        script.setAttribute('src', '/exemples/0' + fileNumber + '-' + fileName + '.js')

        setTimeout(((script) => () => {
            document.body.appendChild(script)
            // on met en vert le bon 'li'
            document.getElementById(fileName).classList.add('included')
        })(script), 1500 * fileNumber)
    }
})()