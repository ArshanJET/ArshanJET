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
        .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1248627708100088001/1259528286523097202/Thanos.gif?ex=669888e0&is=66973760&hm=e505712a1d071ab9d5537cc288e1b6da7c98ababbb89489206d996a6844ebc21&") // Replace with your large image key
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
