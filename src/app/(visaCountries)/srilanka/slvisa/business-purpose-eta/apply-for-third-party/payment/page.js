// 'use client';
// import Script from 'next/script';
// import usePost from '@component/hooks/usePost';
// import apiEndpoint from '@component/services/apiEndpoint';
// import Razorpay from 'razorpay';
// import { ImSpinner2 } from 'react-icons/im';

// export default function Page() {
//   const postMutation = usePost(
//     apiEndpoint.SL_VISA_BUSINESS_THIRD_PARTY_PAYMENT,
//     'payment completed successfully',
//     // '/slvisa/business-purpose-eta/apply-for-third-party/step-two',
//     false, //
//     false,
//     'businessThirdParty'
//   );

//   const handlePayment = () => {
//     postMutation.mutate({ amount: 100 });
//   };

//   if (postMutation.isSuccess) {
//     const { data } = postMutation.data;
//     console.log(data);

//     var options = {
//       key: '' + data?.key_id + '',
//       amount: '' + data?.amount + '',
//       currency: 'INR',
//       name: '' + data?.product_name + '',
//       description: '' + data?.description + '',
//       image: 'https://dummyimage.com/600x400/000/fff',
//       order_id: '' + data?.order_id + '',
//       handler: function (response) {
//         alert('Payment Succeeded');
//       },
//       prefill: {
//         contact: '' + data?.contact + '',
//         name: '' + data?.name + '',
//         email: '' + data?.email + '',
//       },
//       notes: {
//         description: '' + data?.description + '',
//       },
//       theme: {
//         color: '#2300a3',
//       },
//     };
//     var razorpayObject = new Razorpay(options);
//     razorpayObject.on('payment.failed', function (response) {
//       alert('Payment Failed');
//     });
//     return razorpayObject.open();
//   }
//   return (
//     <>
//       <div>
//         {postMutation.isError ? (
//           <div className="text-red-500">
//             An error occurred: {postMutation.error.message}
//           </div>
//         ) : null}
//         <button onClick={handlePayment} type="button">
//           Process To Pay
//           {postMutation.isPending ? (
//             <>
//               <ImSpinner2 className="animate-spin" /> Loading
//             </>
//           ) : (
//             'Process To Pay'
//           )}
//         </button>
//       </div>
//     </>
//   );
// }

import React from 'react';

export default function page() {
  return <div>page</div>;
}
