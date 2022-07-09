import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import CharacterList from "../components/CharacterList";
import Character from "../components/Character";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Front end assessment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Character />
    </div>
  );
};

export default Home;
