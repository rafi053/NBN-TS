import Player from "./player";

class DataApi {
    static url: string = "https://nbaserver-q21u.onrender.com/api/filter";
    constructor() {
    }
 
    static getPlayers = async (player: Player): Promise<Player[] | void> => {
        try {
            const res = await fetch(this.url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(player)
            });
            const PlayersArr: Player[] = await res.json() ;
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
            return PlayersArr;
        } catch (error) {
            console.log(error);
    
        }
    }
}

export default DataApi;










