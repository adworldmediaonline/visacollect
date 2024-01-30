import { AiFillLike, AiFillDislike } from 'react-icons/ai';

import CustomButton from '@/components/common/CustomButton';

export default function PageReview({ applyLink }) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mb-8 gap-7">
      <CustomButton btnText="Apply Now" link={applyLink} />
      <h6 className="text-3xl text-gray-500">Was this page helpful?</h6>
      <div className="flex items-center gap-3 ">
        <AiFillLike className="text-5xl text-gray-400" />
        <AiFillDislike className="text-5xl text-gray-400" />
      </div>
    </div>
  );
}
