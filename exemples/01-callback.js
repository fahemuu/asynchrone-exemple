'use strict';

(() => {

    // es5

    // classic get method
    function get(url, success, error) {
        const xhr = new XMLHttpRequest()

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // good job - success!
                    success(JSON.parse(xhr.responseText))
                } else {
                    // little problem ... error!
                    error(xhr)
                }
            }
        }

        xhr.open('GET', "https://rawgit.com/Jonathancollinet/asynchrone-exemple/master" + url)
        xhr.send()
    }

    // basic case
    // Callback usage
    // We send success callback and error callback
    // in first and second parameters of the get function

    get('/users.json', (data) => {
        console.log("basic case", data)
    }, (err) => {
        console.error("basic case", err)
    })

    // problematic case - callback hell
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