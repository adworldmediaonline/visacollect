export default function SectionParagraph({ text }) {
  return (
    <p
      className="pt-4 text-left"
      dangerouslySetInnerHTML={{ __html: `${text ?? ''}` }}
    ></p>
  );
}
