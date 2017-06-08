'use strict';

(() => {

    // méthode es5

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

        xhr.open('GET', "https://rawgit.com/Jonathancollinet/asynchrone-exemple/master" + url)
        xhr.send()
    }

    // cas basique
    // utilisation des callbacks
    // ici on envoi en premier paramètre le callback de succès
    // en second paramètre le callback d'erreur

    get('/users.json', (data) => {
        console.log("basic case", data)
    }, (err) => {
        console.error("basic case", err)
    })

    // cas problèmatique - callback hell
    get('/users.json', (data) => {
        get('/users.json', (data) => {
            get('/users.json', (data) => {
                get('/users.json', (data) => {
                    get('/users.json', (data) => {
                        get('/users.json', (data) => {
                            get('/users.json', (data) => {
                                get('/users.json', (data) => {
                                    get('/users.json', (data) => {
                                        get('/users.json', (data) => {
                                            get('/users.json', (data) => {
                                                get('/users.json', (data) => {
                                                    get('/users.json', (data) => {
                                                        get('/users.json', (data) => {
                                                            get('/users.json', (data) => {
                                                                get('/users.json', (data) => {
                                                                    get('/users.json', (data) => {
                                                                        get('/users.json', (data) => {
                                                                            get('/users.json', (data) => {
                                                                                console.log("problematic case", data)
                                                                            }, (err) => {
                                                                                console.error("problematic case", err)
                                                                            })
                                                                        }, (err) => {
                                                                            console.error("problematic case", err)
                                                                        })
                                                                    }, (err) => {
                                                                        console.error("problematic case", err)
                                                                    })
                                                                }, (err) => {
                                                                    console.error("problematic case", err)
                                                                })
                                                            }, (err) => {
                                                                console.error("problematic case", err)
                                                            })
                                                        }, (err) => {
                                                            console.error("problematic case", err)
                                                        })
                                                    }, (err) => {
                                                        console.error("problematic case", err)
                                                    })
                                                }, (err) => {
                                                    console.error("problematic case", err)
                                                })
                                            }, (err) => {
                                                console.error("problematic case", err)
                                            })
                                        }, (err) => {
                                            console.error("problematic case", err)
                                        })
                                    }, (err) => {
                                        console.error("problematic case", err)
                                    })
                                }, (err) => {
                                    console.error("problematic case", err)
                                })
                            }, (err) => {
                                console.error("problematic case", err)
                            })
                        }, (err) => {
                            console.error("problematic case", err)
                        })
                    }, (err) => {
                        console.error("problematic case", err)
                    })
                }, (err) => {
                    console.error("problematic case", err)
                })
            }, (err) => {
                console.error("problematic case", err)
            })
        }, (err) => {
            console.error("problematic case", err)
        })
    }, (err) => {
        console.error("problematic case", err)
    })

})()