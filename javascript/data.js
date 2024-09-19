var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
class DataApi {
    constructor() {
    }
}
_a = DataApi;
DataApi.url = "https://nbaserver-q21u.onrender.com/api/filter";
DataApi.getPlayers = (player) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(_a.url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(player)
        });
        const PlayersArr = yield res.json();
        if (!res.ok) {
            throw new Error(`Response status: ${res.status}`);
        }
        return PlayersArr;
    }
    catch (error) {
        console.log(error);
    }
});
export default DataApi;
