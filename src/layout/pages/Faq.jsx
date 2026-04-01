import datas from "../../../db/datas.json";

const questions = datas;

export const Faq = () => {

  return (
    <>
      <p className="text-4xl py-12 text-primary-800 font-chewy">Bienvenue sur la page Faq</p>
      <p className="text-2xl py-6 text-secondary-400 font-chewy">Voici quelques questions, êtes-vous prêts???</p>
      <ul className="font-poppins text-md font-bold italic text-primary-800 py-2">
        {
          questions.map((question, id) => <li className="py-2" key={id}>{question.text}</li>)
        }
      </ul>
    </>
  )
}
