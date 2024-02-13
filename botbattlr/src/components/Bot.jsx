
function Bot({ bot, enlistBot, releaseBot, dischargeBot }) {
    return (
        <div className="botCard">
            <img src={bot.avatar_url} alt={`${bot.name}`} />
            <h2>{bot.name}</h2>
            <button onClick={() => enlistBot(bot)}>Add to Bots</button>
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button className="delete-button" onClick={() => dischargeBot(bot.id)}>
                DELETE
            </button>
        </div>
    );
}

export default Bot;