import { selectsecurityLevel } from "../Redux/form-slice";
import { useAppSelector } from "../Utiles/Hooks/useSelector-hook";

export const PasswordStrengthBar: React.FC = () => {

    const securityLevel = useAppSelector(selectsecurityLevel);
    const colorOne = securityLevel[0];
    const colorTwo = securityLevel[1];
    const colorThree = securityLevel[2];

    return (
          <div className={'bar-section-container'}>
               <div  style={{backgroundColor:colorOne}} className={'bar-section'}></div>
               <div  style={{backgroundColor:colorTwo}} className={'bar-section'}></div>
               <div  style={{backgroundColor:colorThree}} className={'bar-section'}></div>
        </div>
          
    );
};