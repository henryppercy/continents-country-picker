function App() {

  return (
      <section >
          <h1 className="font-sans text-4xl font-bold px-4 pt-4">Countries by Continent</h1>
          <hr className="my-8 h-px bg-gray-200 border-0 m-8" />
          <div className="flex flex-row px-8">
              <ul className="flex flex-col gap-6 font-sans basis-64">
                  <li>Africa</li>
                  <li>Antarctica</li>
                  <li>Asia</li>
                  <li>Europe</li>
                  <li>North America</li>
                  <li>Oceania</li>
                  <li>South America</li>
              </ul>
              <div className="border-gray-300 border-4 w-60 h-100 grow rounded-lg">

              </div>
          </div>
      </section>
  );
}

export default App
