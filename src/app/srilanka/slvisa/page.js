import General from "@/components/srilanka/apply-general-information/General";
import Mainsection from "@/components/srilanka/common/Mainsection";


const page = () => {
  return (
    <div>
      <Mainsection
      img="/assets/images/srilanka/home/bannertwo.png"
        title="Lorem Ipsum is simply  dummy text of the printing"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        button="Apply Now"
        stripeText="    Important Information: Fully Vaccinated tourist can stay at any type
of hotel and no on-arrival PCR test required. More details can found
in the...."
        linkPath="/srilanka/slvisa/tourist-eta/apply-individual"
      />

      <General />
    </div>
  );
};

export default page;
