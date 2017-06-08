'use strict';

// ce petit bout de code sert juste
// à loader fichier par fichier
// sur un interval de 3 secondes
// et gérer un petit compteur
const files = ["callback.js", "promise.js", "async.js", "allerplusloin.js"],
    cnt = document.getElementById('counter')

let nb = 3

for (let i = 0, len = files.length; i < len; i++) {

    const script = document.createElement("script")
    script.setAttribute('src', files[i])

    setTimeout(((script) => () => {
        document.body.appendChild(script)
    })(script), 3000 * (i + 1))

    setTimeout(counter, 1000 * i)
}

function counter() {
    if (nb) {
        cnt.innerText = nb--
    } else {
        cnt.style.display = 'none'
    }
}
