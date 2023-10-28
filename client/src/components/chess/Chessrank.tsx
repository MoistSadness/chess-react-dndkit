import { Labels } from "../../models/labels"

type ChessrankType = {
    label: Labels,
    xpos: number,
    ypos: number
}

export default function Chessrank({label, xpos, ypos}:ChessrankType){
    return(
        <div className={`w-16 h-16 flex justify-center items-center gap-2 ${label === "light" ? "bg-grey": "bg-pink-dark"}`}>
            <div>{xpos}</div>
            <div>{ypos}</div>
        </div>
    )
}