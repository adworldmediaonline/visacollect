import { AiFillLike, AiFillDislike } from 'react-icons/ai';

import CustomButton from '@/components/common/CustomButton';

export default function PageReview({ applyLink }) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mb-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <CustomButton btnText="Apply Now" link={applyLink} />
        </div>
      </div>
    </div>
  );
}
