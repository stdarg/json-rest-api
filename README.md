json-rest-api
=============

A lightweight REST API that receives and responds to JSON HTTP requests,
supports all verbs. It's about as simple as it gets.

## Installation

    npm install json-rest-api


## API
### RestApi([config], [cb])
The constructor. Creates the HTTP server object and starts listening on
the socket.

#### Params: 

* **Object** *[config]* An optional configuration object to configure the
  server.  The configuration object is option and supports only two properties:
  * port - The number of the listening port. If there is no port, the environment
    variable PORT is used. If there is no PORT environment variable, the server
    listens on port 44401.
  * bindTo - The string address the socket should be bound to. If not specified,
    the default is INADDR_ANY, meaning the socket is bound to all interfaces.
* **Function** *[cb]* An optional callback.

### addRoute(verb, path, function)
Add a route/verb along with a function to run.

#### Params: 

* **String** *verb* HTTP verb for route.
* **String** *path* A valid URI path.
* **Function** *function* A function to run when teh path executes.

## LICENSE

The MIT License (MIT)

Copyright (c) 2013 Edmond Meinfelder

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

