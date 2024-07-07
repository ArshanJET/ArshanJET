const discord = require("discord.js-selfbot-v13");

function reloadPresence(client) {
    // Ensure global.startTime is set
    if (!global.startTime) {
        global.startTime = Date.now();
    }

    // Create the RichPresence object
    const activity = new discord.RichPresence()
        .setApplicationId("1256607227444330606") // Replace with your own bot application id
        .setType("WATCHING") // Adjust based on the activity type you want
        .setName("Original Gangster Community")
        .setDetails("Grinding OGC")
        .setState("...") // Set the activity state
        .setStartTimestamp(global.startTime) // Make sure global.startTime is defined correctly
        .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1248627708100088001/1259528286523097202/Thanos.gif?ex=668c02a0&is=668ab120&hm=0be2791ec8b5a651857624b2b94a8dbcae8c9179c03dc0ec22a31f9cf7a3c164&") // Replace with your large image key
        .setAssetsLargeText("Join below")
        .addButton('Join OGC', "https://app.ogcom.xyz/invite/FywvD4zZwISY-qNi")
        .addButton('Zealy', "https://zealy.io/cw/web3epicchallenge/invite/Le-o0OQfKd2dGs4Nia-Bt");

    // Set the activity and status
    client.user.setPresence({
        status: "online", // Set bot status: online, idle, dnd, invisible
        activities: [activity.toJSON()]
    });
}

module.exports = reloadPresence;
