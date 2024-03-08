const rupiah = (num: number, currencySign = true) => {
    if (isNaN(num)) {
      return "NaN";
    } else {
      const formattedNum = num.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
      });
  
      return currencySign ? formattedNum : formattedNum.slice(0, -3);
    }
  };
  
  export default rupiah;
  