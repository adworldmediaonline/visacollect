import { roboto } from '@/constant/fonts';

export default function SectionList({ list }) {
  return (
    <>
      <div className="mt-4 mb-2">
        {/* <strong className="py-4 text-left">{list?.title}</strong> */}
        <div dangerouslySetInnerHTML={{ __html: `${list?.title ?? ''}` }}></div>
      </div>
      <ul className="flex flex-col items-start justify-start gap-3 list-disc ">
        {list?.listItems?.map((item, index) => (
          <>
            <li className="py-1 text-left" key={index}>
              <div
                className={roboto.className}
                dangerouslySetInnerHTML={{ __html: `${item ?? ''}` }}
              />
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
