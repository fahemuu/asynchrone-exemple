'use strict';

(function() {

    function get(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // tout est ok - resolve!
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        // petit probleme ... reject!
                        reject(xhr)
                    }
                }
            }

            xhr.open('GET', url)
            xhr.send()
        })
    }

    // l'api Promise nous offre d'autres possibilités
    
    // nous y trouvons all() qui est utile si on veux faire plusieurs requêtes en parallèle

    Promise.all([/* promesse1, promesse2, promesse3 */]).then(/* ... */)

    // cas d'utilisation classique
    function promiseAll() {
        const promises = []

        for (let i = 0; i < 10; i++) {
            promises.push(get('/duplicates/users' + i + '.json'))
        }

        Promise.all(promises).then(() => {

        })

    }
    
})()