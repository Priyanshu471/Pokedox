import React, { useEffect, useState } from "react";
import PokemonCard from "./Components/PokemonCard";
import "./Components/Card.css";
import ball from "./ball.png";
const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
    // console.log(allPokemons);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        // await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    // setAllPokemons((currentList) => [...new Set(currentList)]);
    createPokemonObject(data.results);
    console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-slate-500 ">
      <div className="w-full h-[120px] bg-black flex justify-center mb-10 border border-white rounded-xl overflow-hidden">
        <div className="flex justify-center items-center gap-3 ">
          <img src={ball} alt="" className=" pt-2 w-11" />
          <h1 className=" font-semibold text-4xl text-slate-200 tracking-widest">
            Pokedox
          </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-1">
          {allPokemons.map((pokemonStats, index) => (
            <PokemonCard
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              height={pokemonStats.height}
              weight={pokemonStats.weight}
              ability={pokemonStats.abilities[0].ability.name}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />
          ))}
        </div>
        <button
          className=" bg-slate-700 w-auto px-3 rounded-xl min-w-[50%] py-2 text-slate-200 text-xl my-8"
          onClick={() => getAllPokemons()}
        >
          Load more Pokemons
        </button>
        <div className=" flex justify-center gap-2 flex-col items-center bg-black w-[100vw] text-slate-200 pt-2">
          Credit Goes to Priyanshu Mishra
          <a
            href="https://github.com/Priyanshu471"
            className="  bg-[#030961]  text-slate-200 rounded-lg px-2 py-1 mb-10"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
