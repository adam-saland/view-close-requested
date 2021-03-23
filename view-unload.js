if(window && window.document) {
    document.addEventListener('DOMContentLoaded', () => {
        if(fin.me.isView) {
            fin.me.updateOptions({customData: document.cookie.split(' ')})
        }
    })
}       