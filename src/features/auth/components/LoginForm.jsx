import { useAtom } from 'jotai';
import { useId } from "react";
import authService from "../../../services/auth.service";
import { useNavigate } from "react-router";


export const LoginForm = () => {

    const [connect, setConnect] = useAtom(connectAtom);

    const id = useId();
    const navigate = useNavigate();

    const handleLoginSubmit = async(formData) => {

        console.log(formData);

        const data = Object.fromEntries(formData.entries());
        console.log("Data", data);

        const token = await authService.login(data);
        console.log('Token', token);
        
        navigate("/");
    }

  return (
    <form action={handleLoginSubmit} className="flex flex-col justify-center">
        
        <div className="font-chewy text-2xl text-center text-primary-800">
            <label htmlFor={`${id}-email`}>E-mail:</label>
            <input id={`${id}-email`} className="border-2 rounded-3xl ml-4 p-2" type="email" name="email" />
        </div>

        <div className="font-chewy text-2xl text-center text-primary-800">
            <label htmlFor={`${id}-password`}>Mot de passe:</label>
            <input id={`${id}-password`}className="border-2 rounded-3xl ml-4 mt-4 p-2" type="password" name="password"/>
        </div>

        <div className="mt-8 mx-auto">
            <button className="btn" type="submit">Me connecter</button>
        </div>
    </form>
  )
}
