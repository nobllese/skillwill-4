const newString = (str, valueToReplace, valueToReplaceWith) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === valueToReplace) {
        result += valueToReplaceWith;
      } else {
        result += str[i];
      }
    }
    return result;
  };
  
  console.log(newString('Tako', 'T', 'M')); 
  