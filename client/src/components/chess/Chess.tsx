import { useState, useEffect } from 'react'
import { DndContext, useDroppable, useDraggable } from '@dnd-kit/core';

import Chessboard from './Chessboard'
import ChessboardModel from '../../models/ChessboardModel'

export default function Chess() {
    const [board, setBoard] = useState<ChessboardModel>(new ChessboardModel())

    function generateBoard() {
        const newboard = new ChessboardModel();
        setBoard(newboard)
    }
    // When the component  mounts, generate a brand new board
    useEffect(() => {
        generateBoard()
    }, [])

    return (
        <div>
            <Chessboard board={board} setBoard={setBoard} />
            <DND />
        </div>
    )
}

export function DND() {
    const containers = ['A', 'B', 'C'];
  const [parent, setParent] = useState(null);
  const draggableMarkup = (
    <Draggable id="draggable">Drag me</Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? draggableMarkup : null}

      {containers.map((id) => (
        // We updated the Droppable component so it would accept an `id`
        // prop and pass it to `useDroppable`
        <Droppable key={id} id={id}>
          {parent === id ? draggableMarkup : 'Drop here'}
        </Droppable>
      ))}
    </DndContext>
  );

  function handleDragEnd(event: any) {
    const {over} = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}

export function Draggable(props: any) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined

    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </button>
    )
}

export function Droppable(props: any) {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    })

    const style = {
        color: isOver ? 'green' : 'yellow'
    }

    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    )
}