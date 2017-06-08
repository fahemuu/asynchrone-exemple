'use strict';

(function () {

    // arrivé dans es8

    // la fonction retourne maintenant une promesse
    // ne prend plus de callback en paramètre
    // et les callbacks success/error sont respectivement renommé resolve/reject
    function get(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.onreadystatechange = function () {
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

    // cas basique
    // il faut se trouver dans une fonction type 'async'
    // sinon le mot clef 'await' ne fonctionnera pas
    async function fetchData() {
        const result = await get('/users.json')
        // mais maintenant, on peut faire de l'asynchrone dans le synchrone
        console.log(result)
    }

    // n'oubliez pas d'appeler la fonction quand même...
    fetchData()

    // cas problèmatique -> la gestion d'erreur
    // dans ce cas précis il va quand même falloir placer un .catch()
    // mais peut être très facilement déjoué en réutilisant une fonction par son pointeur.
    async function fetchMoreData() {
        // maintenant, on peut faire de l'asynchrone dans le synchrone
        const result = await get('/users.json').catch(fail),
            result2 = await get('/users.json').catch(fail),
            result3 = await get('/users.json').catch(fail),
            // disons que le result4 va provoquer une erreur
            // si la fonction catch n'est pas utilisé
            // dans tout les cas result4 vaudra undefined
            result4 = await get('/hduiehidduheziuf.json').catch(fail),
            result5 = await get('/users.json').catch(fail),
            result6= await get('/users.json').catch(fail)

        console.log(result, result2, result3, result4, result5, result6)
    }

    // le tour est joué
    function fail(err) {
        console.error(err)
    }
    
    // n'oubliez pas d'appeler la fonction quand même...
    fetchMoreData()

})()