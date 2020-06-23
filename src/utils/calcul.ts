export const generateCalcul = () => {
    const nbCalcul = 10;
    const range = 20;
    
    const res = [];
    
    for (let i = 0; i < nbCalcul; i++) {
        const nbNumber = getRandomInt(10) > 5 ? 2 : 3;
        const tempRes = [getRandomInt(range), getRandomInt(range)];
        if (nbNumber === 3) tempRes.push(getRandomInt(range));
        res.push(tempRes);
    }
    return res;
}

export const checkIfValidRes = (calc: number[], res: number) => {
    const reducer = (accu: number, val: number) => accu * val;
    return calc.reduce(reducer) === res;
}


function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }