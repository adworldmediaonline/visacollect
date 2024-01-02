'use client';
import Script from 'next/script';
import apiEndpoint from '@/services/apiEndpoint';
import { useFormContext } from '@/context/formContext';
import usePost from '@/hooks/usePost';
import Heading from '@/components/turkey/common/Heading';
import SubHeading from '@/components/turkey/common/SubHeading';
import useQueryGet from '@/hooks/useQuery';
// import { ImSpinner2 } from 'react-icons';
export default function Payment() {
  const { state } = useFormContext();
  const getQuery = useQueryGet(
    apiEndpoint.TURKEY_VISA_APPLICATION,
    state.formId,
    'turkeyVisaApplication'
  );
  const postMutation = usePost(
    apiEndpoint.TURKEY_VISA_APPLICATION_PAYMENT,
    1,
    false,
    false,
    'turkeyVisaApplication'
  );

  const handlePayment = () => {
    postMutation.mutate({
      amount: 1,
      name: 'sunil',
      description: 'first payment',
    });
  };

  if (postMutation.isSuccess) {
    const {
      data: {
        key_id,
        amount,
        name,
        description,
        contact,
        email,
        product_name,
        order_id,
      },
    } = postMutation.data;

    const options = {
      key: key_id,
      amount: amount,
      currency: 'INR',
      name: product_name,
      description: description,
      // image: '',
      order_id: order_id,
      handler: function (response) {
        alert('Payment Succeeded');
        console.log(response);
      },
      prefill: {
        contact: contact,
        name: name,
        email: email,
      },
      notes: {
        description: description,
      },
      theme: {
        color: '#2300a3',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on('payment.failed', function (response) {
      alert('Payment failed. Please try again. Contact support for help');
    });
  }

  if (getQuery.isPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        {/* <ImSpinner2 className="w-4 h-4 text-black animate-spin" /> */}
        loading
      </div>
    );
  }

  if (getQuery.error) {
    return router.push('/application');
  }

  if (getQuery.isSuccess) {
    const { data: applicationData } = getQuery.data;
    return (
      <>
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />

        <div className="container  md:py-8 py-20 md;px-0 px-3 ">
          <Heading formHead="Online Application for Turkey" />

          <SubHeading subHead="CUSTOMER INFORMATION" />
          <div className="space-y-2 divide-y-[1px] pt-5">
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                ORDER ID
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                ID
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                FULL NAME
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {applicationData?.contactDetailsFullName}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                EMAIL
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {applicationData?.contactDetailsEmail}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                MOBILE / CELL NUMBER
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {applicationData?.contactDetailsContactNumber}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                ADDRESS
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {applicationData?.contactDetailsAddress}
              </p>
            </div>
          </div>

          <SubHeading subHead="PAYMENT" />
          <div className="space-y-2 divide-y-[1px] pt-5">
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                NUMBER OF APPLICATION
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                {applicationData?.passportDetails?.length}
              </p>
            </div>
            <div className="grid pt-5 md:items-center md:justify-between md:grid-cols-2 md:space-x-20 md:pt-0 ">
              <h2 className="py-1 text-sm font-semibold text-secondary">
                TOTAL AMOUNT
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify ">
                ID
              </p>
            </div>
          </div>

          <SubHeading subHead="SELECT PAYMENT METHOD" />
          <div className="space-y-2 divide-y-[1px] pt-5"></div>

          <div>
            <button onClick={handlePayment}>Buy</button>
          </div>
        </div>
      </>
    );
  }
}
