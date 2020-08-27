'use strict';

// Set client auth mode - true to enable client auth, false to disable it
const isClientAuthEnabled = false;

/**
 * Initializes the SDK and sets a global field with passed name for which
 * it can be referred to later.
 *
 * @param {string} name Name by which the chat widget should be referred
 */
const initSdk = (name) => {
    if (!name) {
        name = 'Bots';          // Set default reference name to 'Bots'
    }
    let Bots;

    setTimeout(() => {
        /**
            * SDK configuration settings
            * Other than URI, all fields are optional with two exceptions for auth modes
            * In client auth disabled mode, 'channelId' must be passed, 'userId' is optional
            * In client auth enabled mode, 'clientAuthEnabled: true' must be passed
            */
        let chatWidgetSettings = {
            URI: 'cxcatda-sehubemeaprod.botmxp.ocp.oraclecloud.com',
            clientAuthEnabled: isClientAuthEnabled,
            channelId: '669eed86-6fb0-4e02-92b6-5eced0430111' 
        };

        // Initialize SDK
        if (isClientAuthEnabled) {
            Bots = new WebSDK(chatWidgetSettings, generateToken);
        } else {
            Bots = new WebSDK(chatWidgetSettings);
        }

        // Connect to the ODA
        Bots.connect();

        // Create global object to refer Bots
        window[name] = Bots;
    }, 0);
};
