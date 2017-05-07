const http = require ('http'),
      fs = require('fs'),
      url = require('url')

const server = http.createServer((request, response) => {

  const urlPath = url.parse(request.url).pathname
  let filePath = `./client/${urlPath}`

  fs.stat(filePath, (err, fileInfo) => {
    if (err) {
      response.statusCode = 404
      response.end(`Resource not found: "${urlPath}"`)
    } else {

      if (fileInfo.isDirectory())
        filePath += '/index.html'

      fs.readFile(filePath, (err, data) => {
        if (err) {
          response.statusCode = 500
          response.end(`Server error: "${err}"`)
        } else {
          response.end(data.toString('utf-8'))
        }
      })
    }
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
