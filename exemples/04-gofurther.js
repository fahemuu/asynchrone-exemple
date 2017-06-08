'use strict';

(() => {

    // retake our get promise function
    function get(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // good job - resolve!
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        // little problem ... reject!
                        reject(xhr)
                    }
                }
            }

            xhr.open('GET', url)
            xhr.send()
        })
    }

    // Promise API offers other possibilities
    // we can find all(Array) method, for resolve a pack of promises
    // and get the final result after all promises are resolved.

    Promise.all([/* promise1, promise2, promise3 */]).then(/* ... */).catch(/* ... */)

    // basic case

    promiseAll()

    function promiseAll() {
        const promises = []

        for (let i = 0; i < 10; i++) {
            promises.push(get('/duplicates/users.' + i + '.json'))
        }

        Promise.all(promises).then((datas) => {
            // data -> array where each occurence is the resolved promise
            // in the order they would be pushed
            console.log("promiseAll()", datas)
        }).catch((err) => {
            console.error("promiseAll()", err)
        })
    }

    // There is the race() method, will fire the then() function when one promise, and so the first, is resolved,
    // and the catch() function when one error, and so the first, is throwed

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

    // race and all are interesting
    // and async/await don't replace them
    // for this case, the code execution will be synchronous
    // and so suspended like generator functions
    
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