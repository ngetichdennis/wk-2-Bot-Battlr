import Bot from  "./Bot";
function YourBotArmy({enlistedBots, releaseBot,dischargeBot}){
   


    //my jsx to enlist or maps my yourBotArmy
    return(
        <div className="your-bot-army">
      {enlistedBots.map((bot) => (
        <Bot key={bot.id} bot={bot}enlistBot={() => {}} releaseBot={releaseBot} dischargeBot={dischargeBot} />
))}
</div>
);
      }
export default YourBotArmy;
