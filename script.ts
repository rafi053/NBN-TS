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




const searchPlayer = async (e)=>{
    e.preventDefault();

    const newSearch = {
        position:SELECT.value,
        twoPercent: RANGE_POINT.value
        threePercent: Number;
        points: Number;
    } 

}


SEARCH_PLAYER.addEventListener('submit', searchPlayer);
