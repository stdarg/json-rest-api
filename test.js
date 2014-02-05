'use strict';
var JsonRestApi = require('./index').RestApi;
var RestApi;
var request = require('request');
var inspect = require('util').inspect;
var debug = require('debug')('json-rest-api:test');
var assert = require('assert');

describe('Tests', function() {
  before(function(cb) {
    RestApi = new JsonRestApi({port: 8000}, function(err) {
      debug('IN CB');
      if (err) {
        debug('/ping error: '+inspect(err));
        return cb(err);
      }
      // add a route
      // A simple health check, common to all derived classes.
      RestApi.addRoute('get', '/ping', function(req, res) {
        res.json({success: true, pong: 'pong'});
      });
      cb();
    });
  });

  after(function(cb){
    RestApi.stop(function(err) {
      if (err)  return cb(err);
      debug('RestApi stopped successfully');
      cb();
    });
  });

  it('Should fetch test.html', function(cb) {
    console.log('test1');
    request({json:true, uri: 'http://localhost:8000/ping'}, function(err, res, json) {
      if (err) {
        debug('Error: '+inspect(err));
        return cb(err);
      }
      debug('typeof json: '+typeof json);
      debug('json: '+inspect(json));
      assert.ok(json.success === true);
      assert.ok(json.pong === 'pong');
      cb();
    });
  });
});

