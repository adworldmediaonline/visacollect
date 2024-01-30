export default function SectionHeading({ heading, index }) {
  return (
    <div className="flex justify-start pt-10 [&_h1]:text-primary [&_h2]:text-primary [&_h3]:text-primary [&_h4]:text-primary [&_h5]:text-primary [&_h6]:text-primary">
      {index === 0 ? <h2 className="text-2xl md:text-3xl">{heading}</h2> : null}
      {index === 1 || index === 2 ? (
        <h2 className="text-2xl text-black md:text-3xl">{heading}</h2>
      ) : null}
      {index === 3 ? (
        <h3 className="text-2xl text-black md:text-3xl">{heading}</h3>
      ) : null}
      {index === 4 ? (
        <h4 className="text-2xl text-black md:text-3xl">{heading}</h4>
      ) : null}

      {index > 4 ? (
        <h5 className="text-2xl text-black md:text-3xl">{heading}</h5>
      ) : null}
    </div>
  );
}
