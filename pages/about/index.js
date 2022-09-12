import TopSection from "../../components/about/top-section";

function About() {
  return (
    <div>
      <TopSection />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const { default: lngDict = {} } = await import(
    `../../locales/${locale}.json`
  );

  return { props: { lngDict } };
}

export default About;
