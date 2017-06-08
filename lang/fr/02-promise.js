'use strict';

(() => {

    // méthode es6 avec les Promise

    // la fonction retourne maintenant une promesse
    // ne prend plus de callback en paramètre
    // mais maintenant nous utilison resolve et reject
    // qui sont tout deux des paramètres
    // du constructeur de la classe Promise
    // et les callbacks success/error sont respectivement renommé resolve/reject
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

    // cas basique
    // la fonction get nous renvoi une promesse
    // donc maintenant nous avons accès à deux méthodes
    // then & catch
    // then -> depuis resolve
    // catch -> depuis reject
    get('/users.json')
        .then((data) => {
            console.log("promise basic case", data)
        }).catch((err) => {
            console.error("promise problematic case", err)
        })

    // cas problèmatique résolu - plus de callback hell
    get('/users.json')
        .then((data) => {
            console.log("promise problematic case", data)
            return get('/users.json')
        }).then((data) => {
            console.log("promise problematic case", data)
            return get('/users.json')
        }).then((data) => {
            console.log("promise problematic case", data)
            // il est tout a fait possible de retourner des valeurs primitives et non primitive
            // dans le contexte des callbacks des promesses, la fonction
            // retourne toujours une promise, et accessoirement accompagné d'une valeur possible
            return 20
        }).then((data) => {
            console.log("promise problematic case", data) // affiche 20
            return get('/users.json')
        }).then((data) => {
            console.log("promise problematic case", data)
            // s'il y a une erreur dans le moindre .then
            // cette erreur sera "attrapée" par la methode .catch() plus bas
            // ici il va y avoir un probleme a cause du mauvais nom de fichier
            return get('/gyughufez.json')
        }).then((data) => {
            console.log("promise problematic case", data)
            return get('/users.json')
        }).then((data) => {
            console.log("promise problematic case", data)
            return get('/users.json')
        }).then((data) => {
            console.log("promise problematic case", data)
            return get('/users.json')
        }).catch((err) => {
            console.error("promise problematic case", err)
        })

})()