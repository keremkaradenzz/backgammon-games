type DragStoneType = {
    id: number;
    lineId: number;
    stoneType: string;
}

export const droppedControl = (data: any, item: DragStoneType, dragItem: DragStoneType, droppedId: number, totalMove: number) => {
    let enemyColor = dragItem.stoneType === 'B' ? 'S' : 'B'
    let filteredData = data?.[droppedId]?.haveStone?.filter((i: any) => i === enemyColor);
    if (filteredData?.length > 1) return false;

    if(totalMove === 0) return false;
    if (dragItem.stoneType === 'B' && totalMove < dragItem.lineId - droppedId) { return false }
    if (dragItem.stoneType === 'S' && totalMove < droppedId - dragItem.lineId) { return false }

    if (droppedId <= dragItem.lineId && dragItem.stoneType === 'B') {
        if (item.lineId === droppedId) return true;
        else return false;
    }
    if (droppedId >= dragItem.lineId && dragItem.stoneType === 'S') {
        if (item.lineId === droppedId) return true;
        else return false;
    }
    return false;
}
