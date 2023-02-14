document.getElementById('kitBuy').addEventListener('click',function(){
   const buy =  buyInputFiled('kitFiled');
   const price = productPriceGet('kitPrice');
   const previousTotal = productPriceGet ("kitTotal")
   const totalAmount = productPriceGet ("totalBalance")
   const totalPrice = price * buy ;
   const finalTotal = totalAmount + totalPrice ;
   const currentTotal = previousTotal + totalPrice;
   setTheValueOfBuyItem ('kitTotal', currentTotal)
   setTheValueOfBuyItem ("totalBalance", finalTotal)

})

document.getElementById('rossBuy').addEventListener('click',function(){
   const buy =  buyInputFiled('rossFiled');
   const price = productPriceGet('rossPrice');
   const previousTotal = productPriceGet ("totalRoss")
   const totalAmount = productPriceGet ("totalBalance")
   const totalPrice = price * buy ;
   const finalTotal = totalAmount + totalPrice ;
   const currentTotal = previousTotal + totalPrice 
   setTheValueOfBuyItem ("totalRoss", currentTotal)
   setTheValueOfBuyItem ("totalBalance" , currentTotal)
   setTheValueOfBuyItem ("totalBalance", finalTotal)
})
document.getElementById('noteBuy').addEventListener('click',function(){
   const buy =  buyInputFiled('noteFiled');
   const price = productPriceGet('notePrice');
   const previousTotal = productPriceGet ("totalNote");
   const totalAmount = productPriceGet ("totalBalance");
   const totalPrice = price * buy ;
   const finalTotal = totalAmount + totalPrice ;
   const currentTotal = previousTotal + totalPrice 
   setTheValueOfBuyItem ("totalNote", currentTotal )
   setTheValueOfBuyItem ("totalBalance" , currentTotal)
   setTheValueOfBuyItem ("totalBalance", finalTotal)
})

document.getElementById("applyBtn").addEventListener('click',function(){
    const discountValue = buyInputFiled("discountFiled");
    const totalBalance = productPriceGet ("totalBalance");
    if(discountValue === 101){
      const values = (totalBalance / 100 )* 10
      const allCost =  totalBalance - values
      setTheValueOfBuyItem ("allCost", allCost )
    }else{
      alert('Invalid Promo Code')
    }
})


