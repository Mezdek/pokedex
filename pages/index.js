import styles from "../styles/Main.module.css";

import pokemons from "../data/pokedex.json";

import Nav from "../components/Nav";
import Welcome from "../components/Welcome";
import Card from "../components/Card";
import Head from "next/head";

export default function Main() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Pokédex</title>
        <link rel="icon" href="/pokeball.svg" />
      </Head>
      <Nav />
      <div className={styles.wrapper}>
        <Welcome />
        <div className={styles.cards_deck}>
          {pokemons.map((pokemon, index) => {
            return <Card key={index} {...pokemon} index={index++} />;
          })}
        </div>
      </div>
    </div>
  );
}
