import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Box, Text } from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import BlogsSection from "../components/blog/BlogsSection";
import { usePosts } from "../hooks";

const Home: NextPage = () => {
  return (
    <div
    //className="gradient-bg-welcome"
    >
      <Navbar />
      <BlogsSection />
    </div>
  );
};

// export async function getStaticProps() {
//   try {
//     const { data, error, loading } = await usePosts();

//     return {
//       props: { data: data.postsConnection.edges },
//     };
//   } catch (error) {}
// }

export default Home;
