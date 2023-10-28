import { useState, useEffect } from 'react'
import Chessboard from './Chessboard'
import ChessboardModel from '../../models/ChessboardModel'

export default function Chess() {
    const [board, setBoard] = useState<ChessboardModel>(new ChessboardModel())

    function generateBoard(){
        const newboard = new ChessboardModel();
        setBoard(newboard)
    }
    // When the component  mounts, generate a brand new board
    useEffect(() => {
        generateBoard()
    },[])

    return (
        <div>
            <Chessboard board={board} setBoard={setBoard} />
        </div>
    )
}