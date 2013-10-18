json-rest-api
=============

A lightweight REST API that receives and responds to JSON HTTP requests,
supports all verbs. Expects JSON requests and responds in JSON via an added
method to the http.ServerResponse object called `json` (see below).

## Installation

    npm install json-rest-api


## Example

### server

    'use strict';
    var JsonRestApi = require('../index').RestApi;
    var inspect = require('util').inspect;
    var debug = require('debug')('json-rest-api:example:server');

    var RestApi = new JsonRestApi({port: 8000}, function(err) {
      if (err) {
        debug('/ping error: '+inspect(err));
        return;
      }
      console.log('Listening on port 8000.');

      // add a route
      RestApi.addRoute('get', '/ping', function(req, res) {
        res.json({success: true, pong: 'pong'});
      });
    });

### client

    'use strict';
    var request = require('request');
    var inspect = require('util').inspect;
    var debug = require('debug')('json-rest-api:example:client');
    var assert = require('assert');

    request({json:true, uri: 'http://localhost:8000/ping'}, function(err, res, json) {
      if (err) {
        debug('Error: '+inspect(err));
        return;
      }

      assert.ok(json.success === true);
      assert.ok(json.pong === 'pong');
      console.log('Success!');
    });

## API

### RestApi([config], [cb])
RestApi constructor. Creates the HTTP server objects and starts listening on
the socket.

#### Params:
* **Object** *[config]* An optional configuration object to configure the
* **Function** *[cb]* An optional callback. If there is a callback, the process
  will be begin listening on the socket for HTTP requests. Without a callback,
  you must call listen explicitly.

### listen([cb])
Start listening on the socket for HTTP requests.

#### Params:
* **Function** *[cb]* An optional callback called when the server is ready.

### stop([cb])
Stops the server from acccepting new connections and listening on the port.

#### Params:
* **Function** *[cb]* The callback function. Optional.

### addRoute(verb, path, func)
Add a route along with a function to run.

#### Params:
* **String** *verb* HTTP verb for route. e.g.: 'get', 'post'.
* **String** *path* A valid URI path.
* **Function** *func* A function to run when the path executes.

#### Return:
* **Boolean|Error** True, if no errors on the parameters, Error
* **Error|Boolean** true on success and Error on failure.

### json(Optional., Optional.)
A method for the JsonServerResponse prototype to send json by passing an
object.

#### Params:
* **Number|Object** *Optional.* First argument may be either the status
* **Object** *Optional.* If the first object is the status code, then the

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

