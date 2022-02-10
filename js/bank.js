//call the diposit button 

document.getElementById('diposit').addEventListener('click', function(e) {
   // get the diposit field datd
    const dipositValueText =document.getElementById('input').value;
    const dipositValue = parseFloat(dipositValueText);

    // adding the finalvalue to the diposite field 

    const dipositAmountText =document.getElementById('dipositamount').innerText;
    const dipositAmount = parseFloat(dipositAmountText);
    const finalValue = dipositValue + dipositAmount;
    document.getElementById('dipositamount').innerText = finalValue;
    // adding the value to the balance field  
    const balanceText = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceText);
    const finalBalance = balance + dipositValue;
    document.getElementById('balance').innerText =finalBalance;

})

// diposit section done 

 //call the withdraw button 

 document.getElementById('withdraw').addEventListener('click', function(){
     // get the withdraw field datd
    const withdrawValueText =document.getElementById('withdrawfield').value;
    const withdrawValue = parseFloat(withdrawValueText);
    
    // adding the value to the withdraw field
    const withdrawAmountText = document.getElementById('withdrawamount').innerText;
    const withdrawAmount = parseFloat(withdrawAmountText);
    const finalwithdrawAmount =withdrawValue+ withdrawAmount;
    document.getElementById('withdrawamount').innerText = finalwithdrawAmount;

    // minus withdraw value from main balance 

    const balanceText = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceText);
    const finalBalance = balance - withdrawValue;
    document.getElementById('balance').innerText =finalBalance;


 })