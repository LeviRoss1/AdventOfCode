const fs = require('fs')

const data = fs.readFileSync('microInput.txt', 'utf8');
const rows = data.split('\r\n');
var allData = [];

for (i = 0; i < rows.length; i++) {
    allData.push(rows[i].split(''));
}

var runTot = 0;

////////// Part 1

// // Generate matrix of where all symbols are located
// for (var i = 0; i < allData.length; i++) {
//     for (var j = 0; j < allData[0].length; j++) {
//         if (parseInt(allData[i][j]) > -1) {
//             // do nothing
//         }
//         else if (allData[i][j] === '.') {
//             // do nothing
//         }
//         else {
//             console.log(i,j);
//             runTot += symbCheck(allData, i, j);
//         }
//     }
// }

// function symbCheck(allData, r, c) {
//     newVal = 0;
//     // Top Left
//     if (parseInt(allData[r - 1][c - 1]) > -1) {
//         newVal += findNum(allData, r, c, -1, -1);
//     }
//     // Top Mid
//     if (parseInt(allData[r - 1][c]) > -1) {
//         newVal += findNum(allData, r, c, -1, 0);
//     }
//     // Top Right
//     if (parseInt(allData[r - 1][c + 1]) > -1) {
//         newVal += findNum(allData, r, c, -1, 1);
//     }
//     // Left
//     if (parseInt(allData[r][c - 1]) > -1) {
//         newVal += findNum(allData, r, c, 0, -1);
//     }
//     // Right
//     if (parseInt(allData[r][c + 1]) > -1) {
//         newVal += findNum(allData, r, c, 0, 1);
//     }
//     // Bot Left
//     if (parseInt(allData[r + 1][c - 1]) > -1) {
//         newVal += findNum(allData, r, c, 1, -1);
//     }
//     // Bot Mid
//     if (parseInt(allData[r + 1][c]) > -1) {
//         newVal += findNum(allData, r, c, 1, 0);
//     }
//     // Bot Right
//     if (parseInt(allData[r + 1][c + 1]) > -1) {
//        newVal += findNum(allData, r, c, 1, 1);
//     }

//     return newVal
// }

// // r - symbol row
// // c - symbol column
// // rOff - row offset for checking numeric value
// // cOff - column offset for checking numeric value
// function findNum(allData, r, c, rOff, cOff) {

//     // Check left
//     var backVar = 0;
//     for (var i = 0; i < 3; i++) {
//         if (parseInt(allData[r + rOff][c + cOff - i]) > -1) {
//             backVar = -i;
//         }
//         else {
//             break;
//         }
//     }

//     // Check right
//     var forVar = 0;
//     for (var i = 0; i < 3; i++) {
//         if (parseInt(allData[r + rOff][c + cOff + i]) > -1) {
//             forVar = i;
//         }
//         else {
//             break;
//         }
//     }

//     const newVar = allData[r + rOff].join('').substring(c + cOff + backVar, c + cOff + forVar + 1);

//     for (var i = 0; i < Math.abs(backVar)+1; i++) {
//         allData[r + rOff].splice(c + cOff - Math.abs(i), 1, '.');
//     }

//     for (var i = 0; i < forVar+1; i++) {
//         allData[r + rOff].splice(c + cOff + i, 1, '.');
//     }

//     return parseInt(newVar)

// }

// console.log(runTot);

////////// Part 2

// Generate matrix of where all symbols are located
for (var i = 0; i < allData.length; i++) {
    for (var j = 0; j < allData[0].length; j++) {
        if (allData[i][j] === '*') {
            runTot += gearCheck(allData, i, j);
        }
    }
}

function gearCheck(allData, r, c) {
    newVal = [];
    newArr = allData;

    // Top Left
    if (parseInt(newArr[r - 1][c - 1]) > -1) {
        newVal.push(findNum(newArr, r, c, -1, -1));
    }
    // Top Mid
    if (parseInt(newArr[r - 1][c]) > -1) {
        newVal.push(findNum(newArr, r, c, -1, 0));
    }
    // Top Right
    if (parseInt(newArr[r - 1][c + 1]) > -1) {
        newVal.push(findNum(newArr, r, c, -1, 1));
    }
    // Left
    if (parseInt(newArr[r][c - 1]) > -1) {
        newVal.push(findNum(newArr, r, c, 0, -1));
    }
    // Right
    if (parseInt(newArr[r][c + 1]) > -1) {
        newVal.push(findNum(newArr, r, c, 0, 1));
    }
    // Bot Left
    if (parseInt(newArr[r + 1][c - 1]) > -1) {
        newVal.push(findNum(newArr, r, c, 1, -1));
    }
    // Bot Mid
    if (parseInt(newArr[r + 1][c]) > -1) {
        newVal.push(findNum(newArr, r, c, 1, 0));
    }
    // Bot Right
    if (parseInt(newArr[r + 1][c + 1]) > -1) {
        newVal.push(findNum(newArr, r, c, 1, 1));
    }

    console.log(newVal);
    if(newVal.length === 2){
        // blank the first number
        for (var i = 0; i < Math.abs(newVal[0][3])+1; i++) {
            allData[r + newVal[0][1]].splice(c + newVal[0][2] - Math.abs(i), 1, '.');
        }
    
        for (var i = 0; i < newVal[0][4]+1; i++) {
            allData[r + newVal[0][1]].splice(c + newVal[0][2] + i, 1, '.');
        }

        // blank the second number
        for (var i = 0; i < Math.abs(newVal[1][3])+1; i++) {
            allData[r + newVal[1][1]].splice(c + newVal[1][2] - Math.abs(i), 1, '.');
        }
    
        for (var i = 0; i < newVal[0][4]+1; i++) {
            allData[r + newVal[1][1]].splice(c + newVal[1][2] + i, 1, '.');
        }

        return newVal[0][0] * newVal[1][0]
    }
    else{
        return 0
    }
}

// r - symbol row
// c - symbol column
// rOff - row offset for checking numeric value
// cOff - column offset for checking numeric value
function findNum(newArr, r, c, rOff, cOff) {

    // Check left
    var backVar = 0;
    for (var i = 0; i < 3; i++) {
        if (parseInt(newArr[r + rOff][c + cOff - i]) > -1) {
            backVar = -i;
        }
        else {
            break;
        }
    }

    // Check right
    var forVar = 0;
    for (var i = 0; i < 3; i++) {
        if (parseInt(newArr[r + rOff][c + cOff + i]) > -1) {
            forVar = i;
        }
        else {
            break;
        }
    }

    const newVar = newArr[r + rOff].join('').substring(c + cOff + backVar, c + cOff + forVar + 1);

    // blank the number
    for (var i = 0; i < Math.abs(backVar)+1; i++) {
        allData[r + rOff].splice(c + cOff - Math.abs(i), 1, '.');
    }

    for (var i = 0; i < forVar+1; i++) {
        allData[r + rOff].splice(c + cOff + i, 1, '.');
    }

    return [parseInt(newVar), rOff, cOff, backVar, forVar];

}

console.log(runTot);

output = [];
for(i = 0; i<allData.length; i++){
    newRow = allData[i].join('');
    output.push(newRow.concat('\r\n'));
}

fs.writeFileSync("testOutput.txt", output.join(''));