'use strict';

(() => {

    // es2017 async & await

    // We continue to use promises
    function get(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest()

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // good job - resolve!
                        resolve(JSON.parse(xhr.responseText))
                    } else {
                        // little problem... reject!
                        reject(xhr)
                    }
                }
            }

            xhr.open('GET', "https://rawgit.com/Jonathancollinet/asynchrone-exemple/master" + url)
            xhr.send()
        })
    }

    // basic case
    // We need to declare functions with the 'async' keyword
    // otherwise the 'await' keyword wouln't works.

    fetchData()

    async function fetchData() {
        const result = await get('/users.json')
        // now, we can asynchronous synchronously
        console.log("async basic case", result)
    }

    // problematic case -> error rejection
    // In this case we must attach for each get a catch function call
    // But this problem isn't since we can nicely pass a function reference
    
    fetchMoreData()

    async function fetchMoreData() {
        // now, we can asynchronous synchronously
        const result = await get('/users.json').catch(fail),
            result2 = await get('/users.json').catch(fail),
            result3 = await get('/users.json').catch(fail),
            // the next get call will throw an exception so the catch function will be called
            // and typeof result4 === 'undefined'
            result4 = await get('/hduiehidduheziuf.json').catch(fail),
            result5 = await get('/users.json').catch(fail),
            result6 = await get('/users.json').catch(fail)

        console.log("async problematic case", result, result2, result3, result4, result5, result6)
    }

    function fail(err) {
        console.error("async problematic case", err)
    }

})()