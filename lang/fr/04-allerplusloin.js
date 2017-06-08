'use strict';

(() => {

    // on reprend le classico...

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

            xhr.open('GET', "https://rawgit.com/Jonathancollinet/asynchrone-exemple/master" + url)
            xhr.send()
        })
    }

    // l'api Promise nous offre d'autres possibilités
    // nous y trouvons all(Array) qui est utile si on veux attendre le résultat de chacune des promesses

    Promise.all([/* promesse1, promesse2, promesse3 */]).then(/* ... */).catch(/* ... */)

    // cas d'utilisation classique

    promiseAll()

    function promiseAll() {
        const promises = []

        for (let i = 0; i < 10; i++) {
            promises.push(get('/duplicates/users.' + i + '.json'))
        }

        Promise.all(promises).then((datas) => {
            // data -> tableau où chaque entitée est le résultat des promesse
            // dans l'ordre où elles ont été push dans le tableau promises
            console.log("promiseAll()", datas)
        }).catch((err) => {
            console.error("promiseAll()", err)
        })
    }

    // il y a aussi race(Array) qui va nous permettre de résoudre la première requete terminée
    // la première requete qui se termine déclenche le .then ou la premiere erreur déclenche le .catch

    Promise.race([/* promesse1, promesse2, promesse3 */]).then(/* ... */).catch(/* ... */)

    promiseRace()

    function promiseRace() {
        const promises = []

        for (let i = 0; i < 10; i++) {
            promises.push(get('/duplicates/users.' + i + '.json'))
        }

        Promise.race(promises).then((firstData) => {
            console.log("promiseRace()", firstData)
        }).catch((firstErr) => {
            console.error("promiseRace()", firstErr)
        })
    }

    // voici le promiseAll traduit avec async/await

    asyncAwait()

    async function asyncAwait() {

        const results = []

        for (let i = 0; i < 10; i++) {
            results.push(await get('/duplicates/users.' + i + '.json'))
        }

        console.log("asyncAwait()", results)

        function fail(err) {
            console.error("asyncAwait()", err)
        }
    }

    // juste pour terminer l'animation
    document.getElementById('title').style.display = 'block'

})()