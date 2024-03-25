//interface
import { IMetatags } from "@/interface/interface";

import Head from "next/head";

const Metatag = ({ heading, subheading, description, og_image }: IMetatags) => {
  return (
    <Head>
      <meta charSet="UTF-8"></meta>
      <title>{`${heading} - ${subheading}`}</title>
      <meta property="og:image" content={og_image} />

      <meta name="description" content="Best Hospital" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1e1e1e"></meta>
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
    </Head>
  );
};

export default Metatag;
