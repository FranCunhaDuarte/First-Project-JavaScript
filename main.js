let wallet = 0;
let cart=0;
const nintendo=200;
const appleWatch=150;
const iphone11ProMax=1000;
const macbookAir=1500;
let option=0;
mainMenu();

function mainMenu(){
    console.log("Amount in your wallet: "+wallet);
    console.log("Amount in your cart: "+cart);
    option=parseInt(prompt("WELCOME TO ''MYSTORE''\n\n\nMENU \n 1. Add products to cart. \n 2. Deposit money in your wallet. \n 3. Payment process"));
    if(option==1){
        buyProducts();
    } else{
        if(option==2){
            addAmount();
        } else{
            if(option==3){
                paymentProcess();
            } else{
                alert("Invalid number");
                mainMenu();
            }
        }
    }
}

function buyProducts(){
    if(option==1){
        let product=parseInt(prompt("Enter a number for add a product: \n1. Nintendo ( $200 ) \n2. Apple Watch ( $150 ) \n3. iPhone 11 Pro Max ( $1000 )\n4. MacBook Air ( $1500 )\n\nEnter 5 for go back."));
        switch(product){
            case 1:
                let amountNintendo=parseInt(prompt("Enter a amount of this product"));
                cart=cart+(amountNintendo*nintendo);
                console.log("Total: "+cart);
                buyProducts();
                break;
            case 2:
                let amountAppleWatch=parseInt(prompt("Enter a amount of this product"));
                cart=cart+(amountAppleWatch*appleWatch);
                console.log("Total: "+cart);
                buyProducts();
                break;
            case 3:
                let amountIphone11ProMax=parseInt(prompt("Enter a amount of this product"));
                cart=cart+(amountIphone11ProMax*iphone11ProMax);
                console.log("Total: "+cart);
                buyProducts();
                break;
            case 4:
                let amountMacBookAir=parseInt(prompt("Enter a amount of this product"));
                cart=cart+(amountMacBookAir*macbookAir);
                console.log("Total: "+cart);
                buyProducts();
                break;
            case 5:
                option=0;
                mainMenu();
                break;
            default:
                
        }
    }
}

function addAmount(){
    let amount=parseInt(prompt("Enter how much do you want to put in your wallet"));
    wallet=wallet+amount;
    mainMenu();
}

function paymentProcess(){
    if(cart==0){
        alert("You have not added any products to your cart.");
        mainMenu();
    } else{
        if(cart>0)
        confirm();
    }
}

function confirm(){
    if(wallet>=cart){
        verify();
    } else{
        if(wallet<cart&&wallet>=1){
            alert("You need to deposit more money in your wallet");
            addAmount();
        } else{
            alert("You have not deposited money in your wallet");
        mainMenu();
        }
    }
}

function verify(){
    let confirm=parseInt(prompt("The total is: "+cart+"\n\nAre you sure you want to make this purchase?\n1.Yes   2. Back"));
        switch(confirm){
            case 1:
                alert("Thank you for trusting ''MYSTORE''. \nWithin 5 days your products will arrive at your doorstep.");
                mainMenu();
                break;
            case 2:
                mainMenu();
                break;
            default:
                alert("Invalid number");
                paymentProcess();
        }
}