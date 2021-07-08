# Close aware views from a given window.

## Implementation Files

- `js/left-menu.js` ***Lines: 39-44***
  - **Detail**: view object that contains the `view-unload` preloadScript.  
- `js/platform-window.js` ***Lines: 6-25***
  - **Details**: After we call init on the layout we listen for a click on the icon button, at this point the view's `customData` exists in the `defaultWindow's` context already has the example data used (`document.cookie`) and is sent to the example endpoint.
- `view-unload.js` ***This is where we set customData in the view from access with access to the document contents***
  - **Details**: the `preloadScript` that sets the `customData` to be sent for when a view is closing.

## How to use

### Install and run

```bash
cd view-unload
npm install
npm start
```

When the application loads up you can click the hamburger icon and press the view-unload-test button in the left menu. This should launch github. You can also replace this url with any example that will use `document.cookie` to successfully send the post request. In the console you will see the array of cookies upon closing a view. 