export default function HomePageTitle({ pageTitle }) {
  return (
    <h1
      className="text-xl font-light md:text-4xl"
      dangerouslySetInnerHTML={{ __html: `${pageTitle}` }}
    ></h1>
  );
}
