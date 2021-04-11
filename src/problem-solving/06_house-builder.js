/**
 * Your function should print a house according to the following specification
 *
 * Param 1: height
 * Param 2: width
 * If width is not provided width = height
 *
 * Doors:
 * A door is always 3 fields wide and min 2 and max 3 field high.
 * It is always on the bottom center of the house and always has at least 1 free row above.
 * If it does not fit into the house, there is no door.
 *
 * Windows:
 * There is either (a) no window (not enough space in the house) or (b) two windows in the house.
 * Each window has a size of 3x3.
 * They always have the same distance from each other as from the left and right wall of the house.
 * If the math does not work out the adjustment is done in the center between both windows.
 * Vertically they are always in the center between the top of the door and the bottom of the roof.
 *
 * We rather have a door in the house, then windows.
 *
 * Please implement it generic, not just to fulfill the test.
 * See the test to find the charakters to use and to answer your questions.
 */

function house(h, w) {
    let height = (h) ? h : 3;
    let width = (w) ? w : height;

    let smallBlock = ``;
    let houseTopSmallBlock = '^';
    let houseTopLeftSideBlock = '/';
    let houseTopRightSideBlock = `\\\\`;
    let widthOddOrEven = (width % 2 == 0) ? true : false;
    let topCenterPoint = (widthOddOrEven) ? (width / 2) + 1 : Math.ceil(width / 2);
    smallBlock = (widthOddOrEven) ? ' '.repeat(topCenterPoint) : ' '.repeat(topCenterPoint) + houseTopSmallBlock;

    let allBlock = [];
    let m = 1;
    for (let i = topCenterPoint; i > 0; i--) {
        let topBlock = '\n';
        topBlock = topBlock + ' '.repeat(i - 1) + houseTopLeftSideBlock;
        topBlock = (widthOddOrEven) ? topBlock + ' '.repeat((m * 2) - 2) + houseTopRightSideBlock : topBlock + ' '.repeat((m * 2) - 1) + houseTopRightSideBlock;
        m = m + 1;
        allBlock.push(topBlock);
    }
    smallBlock = smallBlock + allBlock.join("");


    let mainBlock = [];
    let houseMainSideBlock = '|';
    for (let j = 0; j < height - 1; j++) {
        let mainMajorBlock = '\n';
        mainMajorBlock = mainMajorBlock + houseMainSideBlock;
        mainMajorBlock = mainMajorBlock + ' '.repeat(width) + houseMainSideBlock;
        mainBlock.push(mainMajorBlock);
    }

    let lastBlock = '\n';
    lastBlock = lastBlock + houseMainSideBlock;
    lastBlock = lastBlock + '_'.repeat(width) + houseMainSideBlock;
    mainBlock.push(lastBlock);

    //fix the door
    if (width >= 3 && height >= 2) {
        //getting last one and handling the door action
        let heightLengthBase = mainBlock.length - 1;
        let heightLengthSecond = mainBlock.length - 2;
        let heightLengthstart = mainBlock.length - 3;
        let doorCenter = Math.ceil((mainBlock[heightLengthBase].length) / 2);
        mainBlock[heightLengthBase] = mainBlock[heightLengthBase].substring(0, doorCenter - 1) + "| |" + mainBlock[heightLengthBase].substring(doorCenter + 2, mainBlock[heightLengthBase].length);
        if (height > 2) {
            mainBlock[heightLengthSecond] = mainBlock[heightLengthSecond].substring(0, doorCenter - 1) + "| |" + mainBlock[heightLengthSecond].substring(doorCenter + 2, mainBlock[heightLengthSecond].length);
            mainBlock[heightLengthstart] = mainBlock[heightLengthstart].substring(0, doorCenter) + "_" + mainBlock[heightLengthstart].substring(doorCenter + 1, mainBlock[heightLengthstart].length);
        }
        if (height === 2) {
            mainBlock[heightLengthSecond] = mainBlock[heightLengthSecond].substring(0, doorCenter) + "_" + mainBlock[heightLengthSecond].substring(doorCenter + 1, mainBlock[heightLengthSecond].length);
        }
    }

    //fix the window
    if (width > 9 && height >= 5) {
        let windowBase = mainBlock.length - 4;
        let windowUpper = mainBlock.length - 5;
        let windowCenter = Math.ceil((mainBlock[windowBase].length) / 2);
        //left window
        mainBlock[windowBase] = mainBlock[windowBase].substring(0, windowCenter - 4) + "|_|" + mainBlock[windowBase].substring(windowCenter - 1, mainBlock[windowBase].length);
        mainBlock[windowUpper] = mainBlock[windowUpper].substring(0, windowCenter - 3) + "_" + mainBlock[windowUpper].substring(windowCenter - 2, mainBlock[windowUpper].length);

        //right window
        mainBlock[windowBase] = mainBlock[windowBase].substring(0, windowCenter + 1) + "|_|" + mainBlock[windowBase].substring(windowCenter + 4, mainBlock[windowBase].length);
        mainBlock[windowUpper] = mainBlock[windowUpper].substring(0, windowCenter + 2) + "_" + mainBlock[windowUpper].substring(windowCenter + 3, mainBlock[windowUpper].length);
    }

    smallBlock = smallBlock + mainBlock.join("");
    console.log("height :" + height + " width :" + width);
    console.log(smallBlock);
    return smallBlock;
}

export default house;