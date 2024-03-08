const strToUang=(str: string | undefined) => {
    if(str !='' && str != undefined && typeof str=='string'){
      if(str.substring(0, 3) === 'Rp.'){
        str = str.substring(3)
      }

      return parseFloat(Number(str.replace(/[^0-9\.-]+/g,"")).toFixed(2))
    }
    return null
}

export default strToUang
