function snakeToCamel(str) {
    newStr = ''
    for (i=0; i < str.length; i++) {
      if (str[i] === '_') {
        newStr += str[i+1].toUpperCase()
        i++
      } else {
        newStr += str[i]
      }
    }
    console.log(newStr)
    return newStr
  }