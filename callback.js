'use strict';

(function () {

    // un get plus que classique
    function get(url, success, error) {
        const xhr = new XMLHttpRequest()

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // tout est ok - success!
                    success(JSON.parse(xhr.responseText))
                } else {
                    // petit probleme ... error!
                    error(xhr)
                }
            }
        }

        xhr.open('GET', url)
        xhr.send()
    }

    // cas basique
    get('/users.json', (data) => {
        console.log(data)
    }, (err) => {
        console.error(err)
    })

    // cas problèmatique - callback hell

})()