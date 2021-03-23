node-red-contrib-financialmodelingprep
================

Node-RED node for financialmodelingprep



## Install

To install the stable version use the `Menu - Manage palette - Install`
option and search for node-red-contrib-financialmodelingprep, or run the following
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-financialmodelingprep

## Wrapper financialmodelingprep.com API  
- https://financialmodelingprep.com/developer/docs/

## Sample parameters
```js
// msg.url = '/api/v3/profile/AAPL';
msg.url = '/api/v3/search-ticker';

msg.params = {};
msg.params.query = 'AA'
msg.params.limit = '10'
msg.params.exchange = 'NASDAQ'

return msg;
```

## Sample flows
```json
[{"id":"f04c9455.5cf598","type":"financialmodelingprep","z":"62a4b1c5.f7a7a","name":"","url":"","creds":"26047536.b1225a","x":500,"y":120,"wires":[["22f781e0.9a448e"]]},{"id":"7ff04a4c.3b06d4","type":"inject","z":"62a4b1c5.f7a7a","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":140,"y":120,"wires":[["b2d93325.b6135"]]},{"id":"b2d93325.b6135","type":"function","z":"62a4b1c5.f7a7a","name":"","func":"// msg.url = '/api/v3/profile/AAPL';\nmsg.url = '/api/v3/search-ticker';\n\nmsg.params = {};\nmsg.params.query = 'AA'\nmsg.params.limit = '10'\nmsg.params.exchange = 'NASDAQ'\n\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":300,"y":120,"wires":[["f04c9455.5cf598"]]},{"id":"22f781e0.9a448e","type":"debug","z":"62a4b1c5.f7a7a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":710,"y":120,"wires":[]},{"id":"26047536.b1225a","type":"fmpapikey","z":"","name":"test"}]
```
