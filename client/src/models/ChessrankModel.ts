import { Labels } from "./labels";
import { Pieces } from "./pieces";


/** The ChessrankModel class defines the logic behind each individual cell on the board
*/
export default class ChessrankModel {
    readonly xpos: number;
    readonly ypos: number;
    readonly label: Labels;
    contents: Pieces;
    key:string;

    constructor(xpos: number, ypos: number, label: Labels, contents:Pieces) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.label = label
        this.key = `${String(xpos)}${String(ypos)}`;     //merge the position numbers into a single string 
        this.contents = contents;       // Set the default piece for that cell
    }
}