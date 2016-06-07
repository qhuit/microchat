var config = require('config');

var app = {
    root : __dirname,
    config : config
};

app.server = require('./drivers/server')(app);
app.routes = require('./drivers/routes')(app);
app.socket = require('./drivers/socket')(app);
app.messenger = require('./services/messenger')(app);

app.server.create();

console.log(app.config);


// ORIGINAL CODE //

/*

    //User disconnection
    socket.on('disconnect', function () {
        console.log('User disconnected');
    });
});

*/

