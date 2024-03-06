export default function SectionHeading({ heading }) {
  return (
    <div
      className="flex justify-start pt-10 [&_h1]:text-primary [&_h1]:text-2xl font-medium [&_h1]:md:text-3xl [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h3]:text-primary [&_h3]:text-2xl [&_h3]:md:text-3xl [&_h4]:text-primary [&_h4]:text-2xl [&_h4]:md:text-3xl [&_h5]:text-primary [&_h5]:text-2xl [&_h5]:md:text-3xl [&_h6]:text-primary [&_h6]:text-2xl [&_h6]:md:text-3xl"
      dangerouslySetInnerHTML={{ __html: `${heading ?? ''}` }}
    />
  );
}
