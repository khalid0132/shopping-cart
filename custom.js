// plusButton works here
const plusButton = document.getElementById('plusButton');
plusButton.addEventListener('click', function(){
    const currentInput = document.getElementById('currentInput').value;
    const currentItem = parseFloat(currentInput);
    const addedItem = currentItem + 1;
    // console.log(addedItem);
    document.getElementById('currentInput').value = addedItem;

    // current price department here
   
    // const currentPrice = document.getElementById('currentPrice').innerText;
    // const presentPrice = parseFloat(currentPrice);
    // const addedCost = presentPrice + 1219;
    // document.getElementById('currentPrice').innerText = addedCost;
   
    // pricing = document.getElementById('currentPrice').innerText;

    // subtotal part 
    // const subtotal = document.getElementById('subtotal').innerText;
    // const subtotalPrice= parseFloat(subtotal);
    // const subtotalCost = subtotalPrice + 1219;
    // document.getElementById('subtotal').innerText = subtotalCost;

    //Tax part


    // Total part // Total part (( We have to use a function inside))
    // const total = document.getElementById('total').innerText;
    // const totalPrice= parseFloat(total);
    // const totalCost = totalPrice + 1219;
    // document.getElementById('total').innerText = totalCost;

    updatedSpanText('currentPrice');
    updatedSpanText('subtotal');
    updatedSpanText('total');

});

function updatedSpanText(id){
    const finalAdded = document.getElementById(id).innerText;
    const finalAddedPrice= parseFloat(finalAdded);
    const finalAddedCost = finalAddedPrice + 1219;
    document.getElementById(id).innerText = finalAddedCost;
}





// minusButton works here------------------------
const minusButton = document.getElementById('minusButton');
minusButton.addEventListener('click', function(){
    
    const currentInput = document.getElementById('currentInput').value;
    const currentItem = parseFloat(currentInput);
        const minusItem = currentItem - 1;
        document.getElementById('currentInput').value = minusItem;    
  
    // current price department here

    // const currentPrice = document.getElementById('currentPrice').innerText;
    // const presentPrice = parseFloat(currentPrice);
    // const minusPrice = presentPrice - 1219;
    // document.getElementById('currentPrice').innerText = minusPrice;

       // subtotal part

    //    const subtotal = document.getElementById('subtotal').innerText;
    //    const subtotalPrice= parseFloat(subtotal);
    //    const subtotalCost = subtotalPrice - 1219;
    //    document.getElementById('subtotal').innerText = subtotalCost;
   
       //Tax part
       
   
       // Total part (( We have to use a function inside))

    //    const total = document.getElementById('total').innerText;
    //    const totalPrice= parseFloat(total);
    //    const totalCost = totalPrice - 1219;
    //    document.getElementById('total').innerText = totalCost;
    updatedSpanText2('currentPrice');
    updatedSpanText2('subtotal');
   updatedSpanText2('total');
});

function updatedSpanText2(id){
    const finalDeducted = document.getElementById(id).innerText;
    const finalDeductedPrice= parseFloat(finalDeducted);
    const finalDeductedCost = finalDeductedPrice - 1219;
    document.getElementById(id).innerText = finalDeductedCost;
}

// Casing department--------------
// plusButton works here
const plusButtonCase = document.getElementById('plusButtonCase');
plusButtonCase.addEventListener('click', function(){
    const currentInputCase = document.getElementById('currentInputCase').value;
    const currentItemCase = parseFloat(currentInputCase);
    const addedItemCase = currentItemCase + 1;
    document.getElementById('currentInputCase').value = addedItemCase;

    // current price department here
    // const currentPriceCase = document.getElementById('currentPriceCase').innerText;
    // const presentPriceCase = parseFloat(currentPriceCase);
    // const addedPriceCase = presentPriceCase + 59;
    // document.getElementById('currentPriceCase').innerText = addedPriceCase;

        // // subtotal part 
        // const subtotal = document.getElementById('subtotal').innerText;
        // const subtotalPrice= parseFloat(subtotal);
        // const subtotalCost = subtotalPrice + 59;
        // document.getElementById('subtotal').innerText = subtotalCost;
    
        // //Tax part
    
    
        // // Total part // Total part (( We have to use a function inside))
        // const total = document.getElementById('total').innerText;
        // const totalPrice= parseFloat(total);
        // const totalCost = totalPrice + 59;
        // document.getElementById('total').innerText = totalCost;
        updatedSpanText3('currentPriceCase');
        updatedSpanText3('subtotal');
        updatedSpanText3('total');
});

    function updatedSpanText3(id){
        const currentPriceCase = document.getElementById(id).innerText;
        const presentPriceCase = parseFloat(currentPriceCase);
        const addedPriceCase = presentPriceCase + 59;
        document.getElementById(id).innerText = addedPriceCase;
    }
        // minusButtonCase department
        const minusButtonCase = document.getElementById('minusButtonCase');
        minusButtonCase.addEventListener('click', function(){
           
            const currentInputCase = document.getElementById('currentInputCase').value;
           const currentItemCase= parseFloat(currentInputCase);
           const minusItemCase = currentItemCase - 1;
           console.log(minusItemCase);
           document.getElementById('currentInputCase').value = minusItemCase;

        // currentPriceCase starts

            // const currentPriceCase = document.getElementById('currentPriceCase').innerText;
            // const presentPriceCase = parseFloat(currentPriceCase);
            // const minusPriceCase = presentPriceCase - 59;   
            // document.getElementById('currentPriceCase').innerText = minusPriceCase;
        
                // // subtotal part 

                // const subtotal = document.getElementById('subtotal').innerText;
                // const subtotalPrice= parseFloat(subtotal);
                // const subtotalCost = subtotalPrice - 59;
                // document.getElementById('subtotal').innerText = subtotalCost;
            
                // //Tax part
            
            
                // // Total part // Total part (( We have to use a function inside))
                // const total = document.getElementById('total').innerText;
                // const totalPrice= parseFloat(total);
                // const totalCost = totalPrice - 59;
                // document.getElementById('total').innerText = totalCost;
                updatedSpanText4('currentPriceCase');
                updatedSpanText4('subtotal');
                updatedSpanText4('total');
        
        });
        function updatedSpanText4(id){
               const currentCase = document.getElementById(id).innerText;
            const presentCase = parseFloat(currentCase);
            const minusCase = presentCase - 59;   
            document.getElementById(id).innerText = minusCase;
        }