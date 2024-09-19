var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DataApi from "./data.js";
// const PLAYERS = document.querySelector("#players") as HTMLDivElement;
const PG = document.querySelector("#pg");
const SG = document.querySelector('#sg');
const SF = document.querySelector('#sf');
const PF = document.querySelector("#pf");
const C = document.querySelector('#c');
const SELECT = document.querySelector("#select");
const RANGE_POINT = document.querySelector('#range-point');
const RANGE_IN = document.querySelector('#range-in');
const RANGE_AOT = document.querySelector('#range-aot');
const SEARCH_PLAYER = document.querySelector('#search-player');
const TABLE_BODY = document.querySelector('#table-Body');
const searchPlayer = (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const playersArray = yield DataApi.getPlayers({
        position: SELECT.value,
        twoPercent: Number(RANGE_POINT.value),
        threePercent: Number(RANGE_IN.value),
        points: Number(RANGE_AOT.value)
    });
    if (playersArray) {
        TABLE_BODY.innerHTML = "";
        playersArray.forEach((player) => {
            const row = document.createElement('tr');
            const playerTd = document.createElement('td');
            playerTd.textContent = player.playerName;
            const position = document.createElement('td');
            position.textContent = player.position;
            const point = document.createElement('td');
            point.textContent = player.points;
            const fg = document.createElement('td');
            fg.textContent = player.twoPercent;
            const p = document.createElement('td');
            p.textContent = player.threePercent;
            const actions = document.createElement('td');
            const addPlayer = document.createElement('button');
            const playerName = player.playerName;
            addPlayer.textContent = `Add ${playerName} to Current Team`;
            addPlayer.addEventListener('click', () => addPlayerToGame(player));
            actions.appendChild(addPlayer);
            row.appendChild(playerTd);
            row.appendChild(position);
            row.appendChild(point);
            row.appendChild(fg);
            row.appendChild(p);
            row.appendChild(actions);
            TABLE_BODY.appendChild(row);
        });
    }
});
SEARCH_PLAYER.addEventListener('submit', searchPlayer);
function addPlayerToGame(player) {
    if (player.position === "PG") {
        const div = document.createElement('div');
        div.innerHTML = 'Point Guard';
        const name = document.createElement('p');
        name.textContent = player.playerName;
        const threeP = document.createElement('p');
        threeP.textContent = `Three Percent: ${player.threePercent}%`;
        const twoP = document.createElement('p');
        twoP.textContent = `Two Percent: ${player.twoPercent}%`;
        const point = document.createElement('p');
        point.textContent = `Points: ${player.points}`;
        div.appendChild(name);
        div.appendChild(threeP);
        div.appendChild(twoP);
        div.appendChild(point);
        PG.appendChild(div);
    }
    else if (player.position === "SG") {
        const div = document.createElement('div');
        const name = document.createElement('p');
        name.textContent = player.playerName;
        const threeP = document.createElement('p');
        threeP.textContent = `Three Percent: ${player.threePercent}%`;
        const twoP = document.createElement('p');
        twoP.textContent = `Two Percent: ${player.twoPercent}%`;
        const point = document.createElement('p');
        point.textContent = `Points: ${player.points}`;
        div.appendChild(name);
        div.appendChild(threeP);
        div.appendChild(twoP);
        div.appendChild(point);
        SG.appendChild(div);
    }
    else if (player.position === "SF") {
        const div = document.createElement('div');
        const name = document.createElement('p');
        name.textContent = player.playerName;
        const threeP = document.createElement('p');
        threeP.textContent = `Three Percent: ${player.threePercent}%`;
        const twoP = document.createElement('p');
        twoP.textContent = `Two Percent: ${player.twoPercent}%`;
        const point = document.createElement('p');
        point.textContent = `Points: ${player.points}`;
        div.appendChild(name);
        div.appendChild(threeP);
        div.appendChild(twoP);
        div.appendChild(point);
        SF.appendChild(div);
    }
    else if (player.position === "PF") {
        const div = document.createElement('div');
        const name = document.createElement('p');
        name.textContent = player.playerName;
        const threeP = document.createElement('p');
        threeP.textContent = `Three Percent: ${player.threePercent}%`;
        const twoP = document.createElement('p');
        twoP.textContent = `Two Percent: ${player.twoPercent}%`;
        const point = document.createElement('p');
        point.textContent = `Points: ${player.points}`;
        div.appendChild(name);
        div.appendChild(threeP);
        div.appendChild(twoP);
        div.appendChild(point);
        PF.appendChild(div);
    }
    else if (player.position === "C") {
        const div = document.createElement('div');
        const name = document.createElement('p');
        name.textContent = player.playerName;
        const threeP = document.createElement('p');
        threeP.textContent = `Three Percent: ${player.threePercent}%`;
        const twoP = document.createElement('p');
        twoP.textContent = `Two Percent: ${player.twoPercent}%`;
        const point = document.createElement('p');
        point.textContent = `Points: ${player.points}`;
        div.appendChild(name);
        div.appendChild(threeP);
        div.appendChild(twoP);
        div.appendChild(point);
        C.appendChild(div);
    }
}
