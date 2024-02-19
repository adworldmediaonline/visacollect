export default function PageWrapper({ children }) {
  return (
    <div className="flex flex-col mb-10 mt-28 md:flex-row">{children}</div>
  );
}
