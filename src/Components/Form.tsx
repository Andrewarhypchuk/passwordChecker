import { selectPassword, updatePassword } from "../Redux/form-slice";
import checkPasswordSecurity from "../Utiles/passwordSecurityChecker";
import { useAppDispatch } from "../Utiles/Hooks/useDispatch-hook";
import { useAppSelector } from "../Utiles/Hooks/useSelector-hook";

export const FormComponent: React.FC = () => {

    const password = useAppSelector(selectPassword);

    const dispatch = useAppDispatch();
    const passwordInputHandler = (password:string)=>{
           const passwordSecurity = checkPasswordSecurity(password);
           dispatch(updatePassword({password,securityLevel:passwordSecurity}));
    }

    return (
            <form>
              <label >Enter your Password
              <input type='password' value={password}   onChange={(e)=>passwordInputHandler(e.target.value)}/>
              </label>
            </form>
    );
};