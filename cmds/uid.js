module.exports = {
    description: "Show the UID of the user",
    role: "user",
    cooldown: 15,
    execute(api, event, args, commands) {
        const userID = event.senderID;
      
        api.sendMessage(`${userID}`, event.threadID, event.messageID);
    }
};