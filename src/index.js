module.exports = function toReadable (number) {

  let stringNumber = number.toString();
  let i = stringNumber.length-1;
  let result = '';

    if (number===0) {
        result = `zero`
        return result;
      }
    
	if (number>=10 && number<=19) {
      switch (stringNumber[i]) {
        case '1':
          result = `${result}eleven`;
          break;
        case '2':
          result = `${result}twelve`;
          break;
        case '3':
            result = `${result}thirteen`;
            break;
        case '4':
            result = `${result}fourteen`;
            break;
        case '5':
            result = `${result}fifteen`;
            break;
        case '6':
            result = `${result}sixteen`;
            break;
        case '7':
            result = `${result}seventeen`;
            break;
        case '8':
            result = `${result}eighteen`;
            break;
        case '9':
            result = `${result}nineteen`;
            break;
        case '0':
            result = `${result}ten`;
            break;
        default: 
          return null;
       } 
		return result;
	} 

	outer: while ( i >= 0 ) {
	 if (i===stringNumber.length-1) {
     switch (stringNumber[i]) {
        case '1':
          result = `${result}one`;
          break;
        case '2':
          result = `${result}two`;
          break;
        case '3':
            result = `${result}three`;
            break;
        case '4':
            result = `${result}four`;
            break;
        case '5':
            result = `${result}five`;
            break;
        case '6':
            result = `${result}six`;
            break;
        case '7':
            result = `${result}seven`;
            break;
        case '8':
            result = `${result}eight`;
            break;
        case '9':
            result = `${result}nine`;
            break;
        case '0':
            result = `${result}`;
            break;
        default: 
          return null;
       } 
		 i = --i;
		 console.log (i);
		 continue outer;
    } else if (i===stringNumber.length-2) {
		 switch (stringNumber[i]) {
        case '1':
            switch (stringNumber[i+1]) {
                 case '1':
                   result = `eleven`;
                   break;
                 case '2':
                   result = `twelve`;
                   break;
                 case '3':
                     result = `thirteen`;
                     break;
                 case '4':
                     result = `fourteen`;
                     break;
                 case '5':
                     result = `fifteen`;
                     break;
                 case '6':
                     result = `sixteen`;
                     break;
                 case '7':
                     result = `seventeen`;
                     break;
                 case '8':
                     result = `eighteen`;
                     break;
                 case '9':
                     result = `nineteen`;
                     break;
                 case '0':
                     result = `ten`;
                     break;
                 default: 
                   return null;
                } 
                 i = --i;
                 continue outer;
        case '2':
          result = `twenty ${result}`;
          break;
        case '3':
            result = `thirty ${result}`;
            break;
        case '4':
            result = `forty ${result}`;
            break;
        case '5':
            result = `fifty ${result}`;
            break;
        case '6':
            result = `sixty ${result}`;
            break;
        case '7':
            result = `seventy ${result}`;
            break;
        case '8':
            result = `eighty ${result}`;
            break;
        case '9':
            result = `ninety ${result}`;
            break;
        case '0':
            result = `${result}`;
            break;
        default: 
          return null;
       } 
		 i = --i;
		 console.log (i);
		 continue outer;
	}  else if (i===stringNumber.length-3) {
		 switch (stringNumber[i]) {
		case '1':
          result = `one hundred ${result}`;
          break;
        case '2':
          result = `two hundred ${result}`;
          break;
        case '3':
            result = `three hundred ${result}`;
            break;
        case '4':
            result = `four hundred ${result}`;
            break;
        case '5':
            result = `five hundred ${result}`;
            break;
        case '6':
            result = `six hundred ${result}`;
            break;
        case '7':
            result = `seven hundred ${result}`;
            break;
        case '8':
            result = `eight hundred ${result}`;
            break;
        case '9':
            result = `nine hundred ${result}`;
            break;
        case '0':
            result = `${result}`;
            break;
        default: 
          return null;
       } 
		 i = --i;
		 continue outer;
	}
   }
	 return result.trim ();
}

    