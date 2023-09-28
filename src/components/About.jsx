import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-slate-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* <p className="text-xl mt-6">
          Desenvolvedor de Software com experiência de estudo e trabalho em
          algumas linguagens como, C#, JavaScript, Visual Basic, Oracle, em
          bibliotecas JavaScript como React e React Native. Possuo boa
          experiência trabalhando com ERP completo focado em supermercados onde
          realizei manutenção em banco de dados Oracle, Visual Basic e C#.
        </p>
        <p className="text-xl">
          Busco uma oportunidade para crescer no mercado, buscando aprendizado e
          conhecimento nessa área de desenvolvimento de softwares. Me considero
          proativo, otimista e esforçado, também estou sempre disposto a
          aprender uma nova tecnologia se solicitado.
        </p>
        <br /> */}
        <p className="text-xl mt-3">
          Backend Software Developer with experience in .Net, C#, Sql, Visual Basic and PL/SQL, i also have some experience with JavaScript, React and React Native.
          Good experience working with complete ERP focused on supermarkets where I performed maintenance on Oracle, Visual Basic and C# databases.
        </p>
        <p className="text-xl">
          I seek an opportunity to grow, seeking learning and
          Knowledge in software development. I consider myself Proactive,
          optimistic and dedicated, I am always ready to learn a new technology
          if requested.
        </p>
      </div>
    </div>
  );
};

export default About;
