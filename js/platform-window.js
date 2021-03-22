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
    fin.Platform.Layout.init({containerId: CONTAINER_ID});
});
