if(window) {
    window.onbeforeunload = (e) => {
        e.preventDefault();
        fin.InterApplicationBus.publish('beforeunload', 'beforeunload is happening')
        e.returnValue = console.log(e);
    }
}