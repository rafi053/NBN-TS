
class DataApi {
    static url: string = "https://nbaserver-q21u.onrender.com";

    static async getPlayers(scooter: JSON): Promise<JSON | void> {

        try {
            const res = await fetch(this.url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(scooter)
            });
            const resJSON: JSON = await res.json();
            if (!res.ok) {
                throw new Error(`Response status: ${res.status}`);
            }
            console.log(resJSON);
            
            return resJSON;
        } catch (error) {
            console.log(error);
        }
    }
   
}
export default DataApi;










