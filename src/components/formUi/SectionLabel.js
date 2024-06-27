import { BsQuestionCircleFill } from 'react-icons/bs';

export default function SectionLabel({
  labelName = 'Your Label',
  tooltipContent = 'Your tooltip content',
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <label className="text-sm">{labelName}</label>

        <div className="mark-section group">
          <BsQuestionCircleFill className="side-icon" size={14} />
          <div className="tooltip-content">{tooltipContent}</div>
        </div>
      </div>
    </>
  );
}
