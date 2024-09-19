class Player{
    
    position: string;
    twoPercent: Number;
    threePercent: Number;
    points: Number;
    playerName?: String;
    constructor(position: string, twoPercent: Number,
        threePercent: Number, points: Number,playerName?: String
    ){
           this.playerName = playerName,
           this.position = position,
           this.twoPercent = twoPercent,
           this.threePercent = threePercent,
           this.points = points
        }
}

export default Player