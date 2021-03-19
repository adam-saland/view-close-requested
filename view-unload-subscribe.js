if(window && window.fin) {
    window.addEventListener('load', () => {
        fin.InterApplicationBus.subscribe(fin.me.identity, 'beforeunload', (msg) => { console.log(msg) })
    })
}