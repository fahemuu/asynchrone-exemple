'use strict';

(() => {
    const files = ['callback', 'promise', 'asyncAwait', 'gofurther']

    for (let i = 0, len = files.length; i < len; i++) {

        const script = document.createElement('script'),
            fileName = files[i],
            fileNumber = i + 1

        script.setAttribute('src', 'https://rawgit.com/Jonathancollinet/asynchrone-exemple/master/exemples/0' + fileNumber + '-' + fileName + '.js')

        setTimeout(((script) => () => {
            document.body.appendChild(script)
            document.getElementById(fileName).classList.add('included')
        })(script), 1500 * fileNumber)
    }
})()