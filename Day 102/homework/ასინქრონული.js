function makeCoffee() {
    console.log("Boiling water...");
    setTimeout(() => {
        console.log("Coffee is ready!");
    }, 2000);
}
function makeToast() {
    console.log("Toasting bread...");
}

makeCoffee();
makeToast();
