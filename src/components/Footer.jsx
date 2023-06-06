const Footer = () => {
  return (
    <footer className="w-full bg-slate-200 text-black flex justify-center bottom-0 fixed">
      <div className="w-1/3 m-auto p-5">
        <h1 className="text-2xl text-center">Made by Alejandro Rodríguez González</h1>
        <a href="https://github.com/atralex" target="blanc"><h1 className="text-2xl text-center hover:text-yellow-400">Mi GitHub</h1></a>
      </div>
      <div className="w-1/3 m-auto p-10">
        <h2 className="text-xl text-center">CFGS Desarrollo Apliciones Web 2023</h2>
        <h3 className="text-xl text-center">IES Azarquiel</h3>
      </div>
      <div className="w-1/3 m-auto p-5">
        <a href="https://github.com/atralex/postr-rails"><h2 className="text-xl text-center hover:text-yellow-400">Repositorio Backend Ruby On Rails</h2></a>
        <a href="https://github.com/atralex/Postr-Python-Flask"><h2 className="text-xl text-center hover:text-yellow-400">Repositorio Backend Flask</h2></a>
        <a href="https://github.com/atralex/Postr-Express"><h2 className="text-xl text-center hover:text-yellow-400">Repositorio Backend Express</h2></a>
      </div>
    </footer>
  )
}

export default Footer
