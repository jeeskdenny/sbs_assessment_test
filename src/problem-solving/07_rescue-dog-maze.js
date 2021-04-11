/**
 * Please find a path to rescue the dog (d) from the maze
 * The maze is a 2 dimensional array which path is ' ' (space) and blocks are '#'
 * you can move left, right, top, up
 *
 * return path should be the array of position numbers order from start to reach dog.
 * 
 * what is the position number?
 * It is the number we assign for each cell in the matrix from left to right and top to bottom in an incremented value.
 * which start from 0 to (size of the matrix - 1)
 *
 * example for calculating position
 * matrix size 8 x 6 (row x column)
 * a[0][1] = 1
 * a[1][1] = 7
 * a[7][5] = 47
 *
 * If you cannot find the path please return undefined.
 *
 * See the test if you have questions.
 */

export function rescuePrincessPath(a) {
    let { maze, columns, startPosition, rows } = a;
    let colIndex = 0;
    let totalPosition = [];
    let rowColMap = [];
    maze.map((mainElement, mainIndex) => {
        mainElement.map((subElement, subIndex) => {
            totalPosition[colIndex] = { row: mainIndex, column: subIndex };
            rowColMap[mainIndex + ":" + subIndex] = colIndex;
            colIndex = colIndex + 1;
        })
    });
    let col = totalPosition[startPosition].column;
    let row = totalPosition[startPosition].row;

    let fullPath = [];
    let flag = true;
    async function path(c, r) {
        if (maze[r][c] == 'd') {
            fullPath.push(rowColMap[r + ":" + c]);
            flag = false;
        } else if (maze[r][c] == ' ') {
            if (flag) {
                fullPath.push(rowColMap[r + ":" + c]);
                maze[r][c] = 'f';

                //checking right side of the node
                if (c < (columns - 1)) {
                    path(c + 1, r);
                }

                //checking the bottom side of the node
                if (r < (rows - 1)) {
                    path(c, r + 1);
                }

                //checking the top side of the node
                if (r > 0) {
                    path(c, r - 1);
                }

                //checking left side of the node.
                if (c > 0) {
                    path(c - 1, r);
                }
            }
        }
    };

    path(col, row);
    return (!flag) ? fullPath : undefined;
}