const page = () => {
  return (
    <div>
      <div className="container px-4 pt-4 pb-12 bg-white lg:px-0 md:pb-0">
        <div className="mx-auto ">
          <h1 className="mb-3 text-4xl font-semibold lg:py-6">Cancellation:</h1>
          <p className="my-2 text-base font-medium leading-relaxed text-justify">
            Our organisation understands the need for flexibility. If a
            cancellation is necessary, clients are asked to notify us
            immediately. However, we maintains the right to keep a portion of
            the advance payment for administrative purposes.
          </p>
        </div>

        <div className="mx-auto mt-7">
          <h3 className="mt-2 text-lg font-bold">Refund Policy:</h3>
          <p className="my-2 mb-5 text-base font-medium leading-relaxed text-justify">
            Our company is committed to providing high-quality services and does
            not offer refunds. Clients are eligible for a refund based on the
            amount of the supplied service in the unusual event of
            dissatisfaction with our service
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
