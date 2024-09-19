import DataApi from "./data.js";
import Player from "./player.js";


// const PLAYERS = document.querySelector("#players") as HTMLDivElement;
const PG = document.querySelector("#pg") as HTMLDivElement;
const SG = document.querySelector('#sg') as HTMLDivElement;
const SF = document.querySelector('#sf') as HTMLDivElement;
const PF = document.querySelector("#pf") as HTMLDivElement;
const C = document.querySelector('#c') as HTMLDivElement;
const SELECT = document.querySelector("#select") as HTMLSelectElement;
const RANGE_POINT = document.querySelector('#range-point') as HTMLInputElement;
const RANGE_IN = document.querySelector('#range-in') as HTMLInputElement;
const RANGE_AOT = document.querySelector('#range-aot') as HTMLInputElement;
const SEARCH_PLAYER = document.querySelector('#search-player') as HTMLFormElement;
const TABLE_BODY = document.querySelector('#table-Body') as HTMLTableSectionElement;





const searchPlayer = async (e:any):Promise<void>=>{
    e.preventDefault();

    const playersArray: Player[] | void = await DataApi.getPlayers({
        position:SELECT.value,
        twoPercent:Number(RANGE_POINT.value),
        threePercent :Number (RANGE_IN.value),
        points:Number(RANGE_AOT.value) 
    })
    if (playersArray) {
        TABLE_BODY.innerHTML ="";
        playersArray.forEach((player:any) => {
            const row = document.createElement('tr') as HTMLTableRowElement;
            const playerTd = document.createElement('td') as HTMLTableCellElement;
            playerTd.textContent = player.playerName;
            const position = document.createElement('td') as HTMLTableCellElement;
            position.textContent = player.position;
            const point = document.createElement('td') as HTMLTableCellElement;
            point.textContent = player.points;
            const fg = document.createElement('td') as HTMLTableCellElement;
            fg.textContent = player.twoPercent;
            const p = document.createElement('td') as HTMLTableCellElement;
            p.textContent = player.threePercent;
            const actions = document.createElement('td') as HTMLTableCellElement;
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
    

    }

    


SEARCH_PLAYER.addEventListener('submit', searchPlayer);


 function addPlayerToGame(player:any) {
    if (player.position === "PG") {
        const div = document.createElement('div') as HTMLDivElement;
        PG.innerHTML='Point Guard';
        const name = document.createElement('p') as HTMLParagraphElement;
        name.textContent = player.playerName
        const threeP = document.createElement('p') as HTMLParagraphElement;
        threeP.textContent = `Three Percent: ${player.threePercent}%`;
        const twoP = document.createElement('p')as HTMLParagraphElement;
        twoP.textContent = `Two Percent: ${player.twoPercent}%`;
        const point = document.createElement('p') as HTMLParagraphElement;
        point.textContent = `Points: ${player.points}`;
        div.appendChild(name);
        div.appendChild(threeP);
        div.appendChild(twoP);
        div.appendChild(point);
        PG.appendChild(div);
    } else if (player.position === "SG") {
        const div = document.createElement('div') as HTMLDivElement;
        SG.innerHTML='Shooting Guard';
        const name = document.createElement('p') as HTMLParagraphElement;
        name.textContent = player.playerName
        const threeP = document.createElement('p') as HTMLParagraphElement;
        threeP.textContent = `Three Percent: ${player.threePercent}%`;
        const twoP = document.createElement('p')as HTMLParagraphElement;
        twoP.textContent = `Two Percent: ${player.twoPercent}%`;
        const point = document.createElement('p') as HTMLParagraphElement;
        point.textContent = `Points: ${player.points}`;
        div.appendChild(name);
        div.appendChild(threeP);
        div.appendChild(twoP);
        div.appendChild(point);
        SG.appendChild(div);
    } else if (player.position === "SF") {
        const div = document.createElement('div') as HTMLDivElement;
        SF.innerHTML='Small Forward';
        const name = document.createElement('p') as HTMLParagraphElement;
        name.textContent = player.playerName
        const threeP = document.createElement('p') as HTMLParagraphElement;
        threeP.textContent = `Three Percent: ${player.threePercent}%`;
        const twoP = document.createElement('p')as HTMLParagraphElement;
        twoP.textContent = `Two Percent: ${player.twoPercent}%`;
        const point = document.createElement('p') as HTMLParagraphElement;
        point.textContent = `Points: ${player.points}`;
        div.appendChild(name);
        div.appendChild(threeP);
        div.appendChild(twoP);
        div.appendChild(point);
        SF.appendChild(div);
    } else if (player.position === "PF") {
        const div = document.createElement('div') as HTMLDivElement;
        PF.innerHTML='Power Forward';
        const name = document.createElement('p') as HTMLParagraphElement;
        name.textContent = player.playerName
        const threeP = document.createElement('p') as HTMLParagraphElement;
        threeP.textContent = `Three Percent: ${player.threePercent}%`;
        const twoP = document.createElement('p')as HTMLParagraphElement;
        twoP.textContent = `Two Percent: ${player.twoPercent}%`;
        const point = document.createElement('p') as HTMLParagraphElement;
        point.textContent = `Points: ${player.points}`;
        div.appendChild(name);
        div.appendChild(threeP);
        div.appendChild(twoP);
        div.appendChild(point);
        PF.appendChild(div);
    } else if (player.position === "C") {
        const div = document.createElement('div') as HTMLDivElement;
        C.innerHTML='Center';
        const name = document.createElement('p') as HTMLParagraphElement;
        name.textContent = player.playerName
        const threeP = document.createElement('p') as HTMLParagraphElement;
        threeP.textContent = `Three Percent: ${player.threePercent}%`;
        const twoP = document.createElement('p')as HTMLParagraphElement;
        twoP.textContent = `Two Percent: ${player.twoPercent}%`;
        const point = document.createElement('p') as HTMLParagraphElement;
        point.textContent = `Points: ${player.points}`;
        div.appendChild(name);
        div.appendChild(threeP);
        div.appendChild(twoP);
        div.appendChild(point);
        C.appendChild(div);

    }
      
 }

 