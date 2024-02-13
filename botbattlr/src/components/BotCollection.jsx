import Bot from "./Bot"
function BotCollection({bots,enlistBot,releaseBot,dischargeBot}){
    //my jsx that maps all the Bot Collection
    return(
        <div className="bot-collection">
            {bots.map((bot)=>(
                <Bot key={bot.id} bot={bot} enlistBot={()=>enlistBot(bot)} releaseBot={()=>releaseBot(bot)} dischargeBot={()=>dischargeBot(bot.id)}/>
            ))

            }
        </div>
   
    )
}
export default BotCollection;