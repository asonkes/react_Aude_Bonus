import { useId } from "react";
import authService from "../../../services/auth.service";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const id = useId();
  const navigate = useNavigate();

  // On peut ici utiliser directement une fonction asynchrone
  // donc on peut récupérer les données sans useEffect
  const handleRegisterSubmit = async (formData) => {
    console.log("FormData:", formData);

    // Conversion des données vers un objet JS
    // Attention rien n'est vérifié
    const data = Object.fromEntries(formData.entries());
    console.log("Data", data);

    //Utiliser le service qui permet de contacter la webAPI
    await authService.register(data);

    navigate("/");
  };

  return (
    // action permet de reste le formulaire
    // action permet de pas refresh
    <form action={handleRegisterSubmit}>
      <div>
        <label htmlFor={id + "email"}>E-mail de l'utilisateur: </label>
        <input id={id + "email"} name="email" type="email" className="border" />
      </div>

      <div>
        <label htmlFor={id + "firstname"}>Prénom: </label>
        <input
          id={id + "firstname"}
          name="firstname"
          type="text"
          className="border"
        />
      </div>

      <div>
        <label htmlFor={id + "lastname"}>Nom: </label>
        <input
          id={id + "lastname"}
          name="lastname"
          type="text"
          className="border"
        />
      </div>

      <div>
        <label htmlFor={id + "password"}>Mot de passe: </label>
        <input
          id={id + "password"}
          name="password"
          type="password"
          className="border"
        />
      </div>

      <div>
        <button type="submit" className="btn">
          M'enregistrer
        </button>
      </div>
    </form>
  );
};
