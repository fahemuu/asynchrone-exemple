'use strict';

(() => {
    // ce petit bout de code sert juste
    // à loader fichier par fichier
    // sur un interval de 3 secondes
    const files = ['callback', 'promise', 'asyncAwait', 'allerplusloin']

    for (let i = 0, len = files.length; i < len; i++) {

        const script = document.createElement('script'),
            fileName = files[i],
            fileNumber = i + 1

        script.setAttribute('src', '/exemples/0' + fileNumber + '-' + fileName + '.js')

        setTimeout(((script) => () => {
            document.body.appendChild(script)
            // on met en vert le bon 'li'
            const li = document.getElementById(fileName)
            li.style.color = 'green'
            li.style.fontStyle = 'italic'
            li.innerText = '(included) ' + li.innerText
        })(script), 1500 * fileNumber)
    }
})()