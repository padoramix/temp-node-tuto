const http = require('http')
const {readFileSync} = require('fs')

// Get all files
const homePage = readFileSync('./index.html')

const server = http.createServer( (req, res) => {
  // console.log(req.method)
  const url = req.url

  if( url === '/'){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(homePage)
    res.end()
  }
  // about page
  else if( url === '/about'){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>About Page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1>404 - Page not foud</h1>')
    res.end()
  }
})

server.listen(5000)