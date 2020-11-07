import { createServer } from 'http';
import { readFile } from 'fs';

const PORT = process.argv[2];

const whenIncomingRequest = (request, response) => {
  console.log('request url', request.url);

  var filePath = '.' + request.url;

  readFile(filePath, (error, content) => {
    if (error){
      console.log(error,'error');
    }else{
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(content, 'utf-8');
    }
});

createServer(whenIncomingRequest).listen(PORT)
