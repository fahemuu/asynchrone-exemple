'use strict';

(() => {

    // es6 Promises

    // Now the get function return a new Promise
    // The function doesn't take callbacks parameters
    // but now we call two specials methods
    // resolve and reject
    // both in the Promise constructor function parameters
    // so success/error callbacks are respectivly renamed resolve/reject
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

            xhr.open('GET', "https://rawgit.com/Jonathancollinet/asynchrone-exemple/master" + url)
            xhr.send()
        })
    }

    // basic case
    // Then yes, we can do then.
    // Since the get function return a Promise
    // we can acces to then and catch methods
    // then -> from resolve
    // catch -> from reject
    get('/users.json')
        .then((data) => {
            console.log("promise basic case", data)
        }).catch((err) => {
            console.error("promise problematic case", err)
        })

    // Problematic case resolved, no more callback hell
    get('/users.json')
        .then((data) => {
            console.log("promise problematic case", data)
            return get('/users.json')
        }).then((data) => {
            console.log("promise problematic case", data)
            return get('/users.json')
        }).then((data) => {
            console.log("promise problematic case", data)
            // We can also return primitive and non promitive values
            // in the promise context
            // each function return a promise, with a value or not
            return 20
        }).then((data) => {
            console.log("promise problematic case", data) // display 20
            return get('/users.json')
        }).then((data) => {
            console.log("promise problematic case", data)
            // If an error occurs, it will be cought by the catch() function
            // here this get should fail
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