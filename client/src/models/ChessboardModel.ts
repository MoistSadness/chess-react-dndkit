import ChessrankModel from "./ChessrankModel";
import { Labels } from "./labels";
import { Pieces } from "./pieces";

export default class ChessboardModel {
    ranks: ChessrankModel[][] = []      // The ranks are an array of arrauys and is initialized as an empty array 
    readonly ranksinrow = 8;

    generateRanks(){
        // creating a row 
        for (let x = 0; x < this.ranksinrow; x++){
            const row: ChessrankModel[] = []

            for (let y = 0; y < this.ranksinrow; y++){ 
                row.push(new ChessrankModel(x, y, (x+y)%2 ? Labels.dark: Labels.light, Pieces.empty))
            }

            this.ranks.push(row)
        }
    }

    constructor(){
        this.generateRanks()
    }
}