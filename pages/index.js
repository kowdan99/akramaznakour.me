import Page from "@components/page";
import Link from "@components/link";
import { GitHub, Linkedin, Mail, Twitter, File } from "@components/icons";

const About = () => {
  return (
    <Page description="Aspiring full-stack software engineer, interested in exploring new technologies.">
      <article>
        <h1>Youssof Kowdan</h1>
        <p>
          {" "}
          Currently, in my final year studying Informatics at{" "}
          <Link underline href="https://ischool.uw.edu/" external>
            Information School at UW
          </Link>
          .
        </p>
        <p>I’m passionate about dev particularly web and mobile.</p>
      </article>
    </Page>
  );
};

export default About;
