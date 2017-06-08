'use strict';

(() => {

    // méthode es8 avec async/await

    // On continue d'utiliser les promesses
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

    // cas basique
    // il faut se trouver dans une fonction type 'async'
    // sinon le mot clef 'await' ne fonctionnera pas

    fetchData()

    async function fetchData() {
        const result = await get('/users.json')
        // mais maintenant, on peut faire de l'asynchrone dans le synchrone
        console.log("async basic case", result)
    }

    // cas problèmatique -> la gestion d'erreur
    // dans ce cas précis il va quand même falloir placer un .catch() sur chaque get
    // mais comme tout problème, peut être très facilement déjoué en réutilisant une fonction par son pointeur.
    
    fetchMoreData()

    async function fetchMoreData() {
        // maintenant, on peut faire de l'asynchrone dans le synchrone
        const result = await get('/users.json').catch(fail),
            result2 = await get('/users.json').catch(fail),
            result3 = await get('/users.json').catch(fail),
            // disons que le result4 va provoquer une erreur
            // dans tout les cas result4 vaudra undefined si une erreur est rejeté
            result4 = await get('/hduiehidduheziuf.json').catch(fail),
            result5 = await get('/users.json').catch(fail),
            result6 = await get('/users.json').catch(fail)

        console.log("async problematic case", result, result2, result3, result4, result5, result6)
    }

    // le tour est joué
    function fail(err) {
        console.error("async problematic case", err)
    }

})()