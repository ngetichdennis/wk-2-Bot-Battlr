import { useEffect, useState } from "react";
import BotCollectionfri from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


function App(){
    //state for all the bots
    const [Bots,setBots]=useState([])
    //state for enlisting the bots
    const [enlistedBots,setEnlistedBots]=useState([])
    //fetching data from db.json
    useEffect(()=>{
        fetch("http://localhost:3000/bots")
        .then((response) =>  response.json())
        .then(data => setBots(data))  
    },[])
    //enlisting a bot
    function enlistBot(bot){
        if(!enlistedBots.some((b)=>b.name===bot.id)){
            setEnlistedBots([...enlistedBots,bot]);
    }
}
    //Releasing a bot from the enlisted list
    function  releaseBot(bot){
        setEnlistedBots(enlistedBots.filter((b)=> b.id !== bot.id))
    }
     // Discharge a bot (delete from backend and enlistedBots)
     const dischargeBot = async (botId) => {
        try {
            // Adjust the API endpoint
            await fetch(`http://localhost:3000/bots/${botId}`, {
                method: "DELETE",
                // You can add headers or other options here if needed
            });

            // Update the enlistedBots state
            setEnlistedBots(enlistedBots.filter((b) => b.id !== botId));
        } catch (error) {
            console.error('Error discharging bot:', error);
        }
    };
    return(
        <div className="container">
            <h2>Your Bot Army: </h2>
            <YourBotArmy  enlistedBots ={enlistedBots} releaseBot= {releaseBot} dischargeBot={dischargeBot}  />
            <h1>Bot Army</h1>
            <BotCollectionfri bots={Bots} enlistBot={enlistBot}/>
            
        </div>
        
    )
    }
export default App;
