const express = require('express')
const app = express()
const port = 4000

const PARAM = "1|2"
// const PARAM = "12"
const PAGE = `
<html>
    <head>
        <title>Page</title>
    </head>
    <body>
        <h1>Test page</h1>

        <p>
            Expected Response:&nbsp;
            <strong>1|2</strong>
        </p>
        <p>
            Actual Response:&nbsp;
            <strong>
                <span id="result"/>
            </strong>
        </p>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>   
        <script>
            window.addEventListener(
                'load', 
                async function() {
                    let resultDiv = document.getElementById('result');
                    resultDiv.innerText = '(none)';

                    axios.get('/api?param=${PARAM}').then(resp => {
                        resultDiv.innerText = resp.data.parameters.param;
                    }).catch(e => {
                        console.error(e);
                        resultDiv.innerText = 'error';
                    })
                }
            );
        </script>
    </body>
</html>`

app.get('/', (request, response) => {
  response.send(PAGE)
})

app.get('/api', (request, response) => {
    response.json({
        parameters: request.query
    })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})