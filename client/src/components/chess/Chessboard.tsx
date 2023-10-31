import { useState, useEffect } from "react";
import Chessrank from "./Chessrank";
import { Labels } from "../../models/labels";
import { DndContext, useDroppable } from '@dnd-kit/core';
import ChessboardModel from "../../models/ChessboardModel";
import ChessrankModel from "../../models/ChessrankModel";

type ChessboardType = {
    board: ChessboardModel,
    setBoard: (board: ChessboardModel) => void,
}

export default function Chessboard({ board, setBoard }: ChessboardType) {

    function handleDragEnd(event){

    }
    
    return (
        <DndContext onDragEnd={handleDragEnd}>

            <div className="flex flex-cols">
                {board.ranks.map((row: ChessrankModel[]) => (
                    <div>
                        {row.map((rank: ChessrankModel) => (
                            <Chessrank xpos={rank.xpos} ypos={rank.ypos} label={rank.label} />
                        ))}
                    </div>
                ))}
            </div>
        </DndContext>

    )
}