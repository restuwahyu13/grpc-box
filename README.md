## GRPC Message

[![Build Status](https://travis-ci.org/restuwahyu13/grpc-message.svg?branch=main)](https://travis-ci.org/restuwahyu13/grpc-message)

**grpc-message** is a utility to display a json response or a format string to a client, if you use `express.js` and `grpc` with `typescript`, because there is a little problem when you want to display the json response or format string to the client when you use `typescript`, because **res.json** and **res.send** cannot be executed inside the **protocol buffer** method, because the **res.json** and **res.send** methods of `express.js` do not continue the void type but continue the response type from `express.js`.

### Noted

**Work in progress**
