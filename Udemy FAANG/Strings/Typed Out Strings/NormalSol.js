const string1 = "ab#z";
const string2 = "az#z";

const buildString = (string1) => {
    const builtString = [];
    for(let p = 0; p< string1.length; p++) {
        if(string1[p] !== '#') {
            builtString.push(string1[p]);
        } else {
            builtString.pop();
        }
    }

    return builtString;
}

const backspaceCompare = (S, T) => {
    const finalS = buildString(S);
    const finalT = buildString(T);
    console.log(finalS, finalT);

    if(finalS.length !== finalT.length) {
        return false;
    } else {
        for (let p=0; p< finalS.length; p++) {
            if(finalS[p] !== finalT[p]) {
                return false;
            }
        }
        return true
    }
}

console.log(backspaceCompare(string1, string2));