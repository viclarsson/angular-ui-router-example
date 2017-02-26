# AngularJs UI-Router Example for D2642

This is an example application for routing and showing partials for the AngularJs lecture of DH2642.

#### Note
You will need a HTTP server running the application in order to prevent [CORS][e5225c35] error messages when AngularJs tries to fetch HTML templates. This README explains how to use the npm package [http-server][fd8d4fca], but you can use [express][33ac7ffd] too, but it requires configuration.

  [e5225c35]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing "CORS"
  [33ac7ffd]: https://www.npmjs.com/package/express "Express"

## Get started
You will need [Node.js][1c52267b] and [Node Package Manager (npm)][7e4ab2ea].

  [1c52267b]: https://www.nodejs.com/ "Node.js"
  [7e4ab2ea]: https://www.npmjs.com/ "Node Package Manager"

When those are installed, install the [http-server][fd8d4fca] package:  
`npm install http-server -g`

  [fd8d4fca]: https://github.com/indexzero/http-server "http-server"

To start the HTTP server and use the application, go to the directory where the application code is and run:  
`http-server -c-1`  
_-c-1 means disable cache._

You should now see a message about a server started. Go to one of the addresses shown or:  
`http://localhost:8080`

Viola!
