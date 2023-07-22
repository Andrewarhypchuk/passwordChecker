import { NO_PASSWORD ,BAD_PASSWORD,NORMAL_PASSWORD,GOOD_PASSWORD} from '../Consts/consts';

  const checkPasswordSecurity = (password:string) => {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[\W_]/.test(password); 
    if (!password) {
      return  NO_PASSWORD;
    }
     if (
      password.length < 8 ||
      (hasLetters  && !hasDigits && !hasSymbols) ||
      (!hasLetters && hasDigits  && !hasSymbols) ||
      (!hasLetters && !hasDigits && !hasSymbols)
      ) {
        return  BAD_PASSWORD
    }
    if (
      password.length < 8 ||
      (hasLetters  && hasDigits && !hasSymbols) ||
      (hasLetters && !hasDigits  && hasSymbols) ||
      (!hasLetters && hasDigits && hasSymbols)
      ) {
        return  NORMAL_PASSWORD
    }
    if (hasLetters && hasDigits && hasSymbols) {
        return GOOD_PASSWORD
     } 
  };

  export default checkPasswordSecurity;