module.exports = {
    updatePlayerCount: (client, seconds) => {
        const interval = setInterval(function setstatus() {
            //> Would say the player(s) online eg. 20 player(s)
            let status = `${GetNumPlayerIndices()} player(s)`
            client.user.setActivity(status, {type: "WATCHING"})
            return setStatus
        }(), seconds * 1000)
    }
}