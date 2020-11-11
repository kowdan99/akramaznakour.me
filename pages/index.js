import Page from "@components/page";
import Link from "@components/link";
import { GitHub, Linkedin, Mail, Twitter, File } from "@components/icons";

const About = () => {
  return (
    <Page description="I’m from Essaouira and a graduate of ESTE. Currently, in my final year studying computer science engineering at ENSAJ. I’m passionate about dev particularly web and mobile. These days I’m trying to learn about data-driven art mainly because it sounds cool. Here you can find my resume in english and in french.">
      <article>
        <h1>Akram Aznakour</h1>
        <p>
          I’m from{" "}
          <Link
            underline
            href="https://www.google.com/search?q=Essaouira"
            external
          >
            Essaouira
          </Link>{" "}
          and a graduate of{" "}
          <Link
            underline
            href="https://www.google.com/search?q=EST+Essaouira"
            external
          >
            ESTE
          </Link>.
        </p>
        <p>
          {" "}
          Currently, in my final year studying computer science engineering at{" "}
          <Link
            underline
            href="https://www.google.com/search?q=ENSA+El+Jadida"
            external
          >
            ENSAJ
          </Link>.
        </p>
        <p>I’m passionate about dev particularly web and mobile.</p>
        <p>
          These days I’m trying to learn about data-driven art mainly because it
          sounds cool.
        </p>
        <p>
          Here is my resume in{" "}
          <Link
            underline
            href="https://drive.google.com/file/d/17cuTCzwr-FPimqrqPw7Qtaj5fMK4iEiT/view?usp=sharing"
            external
          >
            english
          </Link>{" "}
          and in{" "}
          <Link
            underline
            href="https://drive.google.com/file/d/1Fa02m4TNYJL2y7eQT4ymqVnkBNDeWQXM/view?usp=sharing"
            external
          >
            french
          </Link>.
        </p>
      </article>
    </Page>
  );
};

export default About;
