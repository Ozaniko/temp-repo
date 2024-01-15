const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('You are not welcome to our home page');
    } else if (req.url === '/about') {
        res.end('You are in the about section of our website');
    } else {
        res.writeHead(404, { contentType: 'text/html' }); // Set Content-Type header and status code 404
        res.end('<h1>Oops!</h1>' +
            '<p>We can\'t seem to find the page you are looking for</p>' +
            '<a href="/">Back Home</a>');
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
