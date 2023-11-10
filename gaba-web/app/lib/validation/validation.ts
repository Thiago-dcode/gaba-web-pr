export const validateString = (str: string) => {
  if (!str) return `The field  cannot be empty`;
  return "";
};
export const validateLenght = (str: string, min = 3, max = 20) => {
  if (str.length < min || str.length > max)
    return `The field must includes between ${min} and ${max} characters`;
  return "";
};

export const validateEmail = (email: string) => {
  let result = validateString(email);
  if (result) return result;
  result = validateLenght(email, 3, 64);
  if (result) return result;
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const isEmail = regex.test(email);
  if (!isEmail) return `This field must be a email.`;
  return "";
};

export const validatePassword = (password: string) => {
  let result = validateString(password);
  if (result) return result;

  const hasNumber = () : boolean =>{
        let hasNumber = false;
        for (let i = 0; i < password.length; i++) {
            const char = password[i];
            if(!isNaN(parseInt(char))) {
                hasNumber = true;
                break;
            }
          
        }
        return hasNumber;

  }
if(!(password.length > 8 && hasNumber() && password.split("").some((char)=>["@","$","!","%","*","?","&","."].includes(char)))){

    return "The password field must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one digit, and one of the following symbols: @$!%*?&.";
}
 

  
   
  

  return "";
};
