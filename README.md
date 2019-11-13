# Proof of concept of bug

To reproduce:

1. Start the server with `npm run server`
2. Run the cypress test with `npm run cypress`

The problem seems to be that having an unescaped pipe character `|` will cause Cypress to swallow the request and return a 400 error. In `index.js`, you may change the `PARAM` variable to something different to test.

## Workaround, in case you have this bug

The best workaround I know of is to escape the pipe character (escaped pipe is `%7C`)