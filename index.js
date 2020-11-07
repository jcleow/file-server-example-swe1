import { createServer } from 'http';
import { readFile } from 'fs';
import path from 'path'

const PORT = process.argv[2];

const whenIncomingRequest = (request, response) => {
  console.log('request url', request.url);

  var filePath = '.' + request.url;

  const extName = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
    '.mp3': 'audio/mpeg',
  };
    const contentType = mimeTypes[extName];

  readFile(filePath, (error, content) => {
    if (error){
      console.log(error,'error');
    }else{
    response.writeHead(200, { 'Content-Type': contentType });
    response.end(content, 'utf-8');
    }
})
};

createServer(whenIncomingRequest).listen(PORT);
