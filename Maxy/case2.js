function calculateChange(totalPurchase, amountPaid) {
    if (amountPaid < totalPurchase) {
        return false;
    }

    const denominations = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let change = amountPaid - totalPurchase;
    
    let changeResult = {};

    for (let i = 0; i < denominations.length; i++) {
        let count = Math.floor(change / denominations[i]);
        if (count > 0) {
            changeResult[denominations[i]] = count;
            change %= denominations[i];
        }
    }
    return changeResult;
}

let totalPurchase = 275000;
let amountPaid = 500000;

let change = calculateChange(totalPurchase, amountPaid);
if (change === false) {
    console.log("The amount paid is less than the total purchase.");
} else {
    console.log(`Change to be given:`);
    for (let denomination in change) {
        console.log(`${denomination}: ${change[denomination]} piece(s)`);
    }
}
