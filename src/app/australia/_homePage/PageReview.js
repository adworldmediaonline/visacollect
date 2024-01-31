import { AiFillLike, AiFillDislike } from 'react-icons/ai';

import CustomButton from '@/components/common/CustomButton';

export default function PageReview({ applyLink }) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mb-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          {' '}
          <CustomButton btnText="Apply Now" link={applyLink} />
          <h6 className="text-2xl text-center text-gray-500 md:text-3xl">
            Was this page helpful?
          </h6>
        </div>
        <div className="flex items-center justify-center gap-3 mt-4">
          <AiFillLike className="text-5xl text-gray-400" />
          <AiFillDislike className="text-5xl text-gray-400" />
        </div>
      </div>
    </div>
  );
}
