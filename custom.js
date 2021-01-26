// addButton works here
const plusButton = document.getElementById('plusButton');
plusButton.addEventListener('click', function(){
    const currentInput = document.getElementById('currentInput').value;
    const currentItem = parseFloat(currentInput);
    const addedItem = currentItem + 1;
    // console.log(addedItem);
    document.getElementById('currentInput').value = addedItem;

    // current price department here
    const currentPrice = document.getElementById('currentPrice').innerText;
    const presentPrice = parseFloat(currentPrice);
    const addedPrice = presentPrice + 1219;
    document.getElementById('currentPrice').innerText = addedPrice;
});