export default function AsideWrapper({ children }) {
  return (
    <aside className="basis-[300px] py-5 md:py-12 space-y-4">
      <div className="container">
        <ul className="flex flex-col gap-3">
          <li>{children}</li>
        </ul>
      </div>
    </aside>
  );
}
