const axios = require("axios")
module.exports = function (RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this, n);
        if (RED.nodes.getNode(n.creds)){
            this.apikey = RED.nodes.getNode(n.creds).credentials.apikey;
        } else {
            this.apikey = "";
        }
        var node = this;
        this.name = n.name;

        for (var key in n) {
            node[key] = n[key] || "";
        }
        this.on('input', function (msg) {
            for (var i in msg) {
                if (i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid') {
                    node[i] =  msg[i] || node[i];
                }
            }
            if(node.params){
                node.options = {};
                node.options.params = node.params;
            }
            if(node.options){
                if(node.options.params){
                    node.options.params.apikey = node.apikey;
                }else{
                    node.options.params.apikey = node.apikey;
                }
            }else{
                node.options = {};
                node.options.params = {};
                node.options.params.apikey = node.apikey;
            }

            axios.get('https://financialmodelingprep.com' + node.url, node.options)
                .then(function (response){
                    msg.payload = response.data;
                    node.send(msg);
                }).catch(function (err){
                    msg.payload = err;
                    node.send(msg);
                });
        });
    }

    RED.nodes.registerType("financialmodelingprep", FunctionNode, {
        credentials: {
            apikey: {type:"text"}
        }
    });

    function fmpapikey(n){
        RED.nodes.createNode(this, n);
        this.apikey = n.apikey;
    }

    RED.nodes.registerType("fmpapikey", fmpapikey,{
        credentials: {
            apikey: {type:"text"}
        }
    });
};
