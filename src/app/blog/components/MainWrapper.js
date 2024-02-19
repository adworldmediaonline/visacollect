export default function MainWrapper({ children }) {
  return (
    <main className="flex-1  [&_strong]:text-tertiary [&_p]:font-normal [&_p]:text-[#343a40] [&_li]:text-[#343a40]">
      <div className="container">
        <div className="max-w-full space-y-4 prose">{children}</div>
      </div>
    </main>
  );
}
