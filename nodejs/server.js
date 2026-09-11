import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
});


server.listen(PORT, () => {
    console.log ("sever is started")
}