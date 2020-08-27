 var chatSettings = {
        URI: '<Server URI>',
        channelId: '<Channel ID>',
        userId: '<User ID>'
    };
    function initSdk(name) {
        // Default name is Bots
        if (!name) {
            name = 'Bots';
        }
        setTimeout(() => {
            const Bots = new WebSDK(chatSettings); // Initiate library with configuration
            Bots.connect()                         // Connect to server
                .then(() => {
                    console.log("Connection Successful");
                })
                .catch((reason) => {
                    console.log("Connection failed");
                    console.log(reason);
                });
            window[name] = Bots;
        });
    }
