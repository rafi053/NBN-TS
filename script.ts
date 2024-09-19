import DataApi from "./data.js";


const PLAYERS = document.querySelector("#players") as HTMLDivElement;
const PG = document.querySelector("#pg") as HTMLDivElement;
const SG = document.querySelector('#sg') as HTMLDivElement;
const SF = document.querySelector('#sf') as HTMLDivElement;
const PF = document.querySelector("#pf") as HTMLDivElement;
const C = document.querySelector('#c') as HTMLDivElement;
const SELECT = document.querySelector("#select") as HTMLSelectElement;
const RANGE_POINT = document.querySelector('#range-point') as HTMLElement;
const RANGE_IN = document.querySelector('#range-in') as HTMLElement;
const RANGE_AOT = document.querySelector('#range-aot') as HTMLElement;
const SEARCH_PLAYER = document.querySelector('#search-player') as HTMLFormElement;
const TABLE_BODY = document.querySelector('#table-Body') as HTMLTableSectionElement;





const searchPlayer = async (e:any):Promise<object | void>=>{
    e.preventDefault();

    const playersArray: any= await DataApi.getPlayers({
        position:SELECT.value,
        twoPercent: RANGE_POINT,
        threePercent : RANGE_IN,
        points: RANGE_AOT
    })
    
    if (playersArray) {
        playersArray.forEach((player:any) => {
            const row = document.createElement('tr') as HTMLTableRowElement;
            for (const element in player) {
                const td = document.createElement('td') as HTMLTableCellElement;
                td.textContent = player[element];
                row.appendChild(td)
            }
            const actionsCell = document.createElement('td') as HTMLTableCellElement;
            const removeButton = document.createElement('button') as HTMLButtonElement;
            removeButton.textContent = 'Remove';
            const eddPlayer = document.createElement('button');
            eddPlayer.textContent = 'Edit';
            eddPlayer.addEventListener('click', () => eddPlayerToGame(player.playerName));
            actionsCell.appendChild(eddPlayer);
            row.appendChild(actionsCell);
            TABLE_BODY.appendChild(row);    
               
        });
    
    }
    

    }
    
   


SEARCH_PLAYER.addEventListener('submit', searchPlayer);


 function eddPlayerToGame(name:string) {
    
    
 }