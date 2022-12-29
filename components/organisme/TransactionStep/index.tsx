import StepItems from "../../molekul/StepItems/index";

export default function TransactionStep() {
  return (
    <section id="feature" className="feature pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
          3 Step
          <br /> To Be A Winner
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
          <StepItems
            icon="step1"
            title="1. Choose"
            desc1="Select our service"
            desc2=""
          />
          <StepItems
            icon="step2"
            title="2. Contact"
            desc1="Contact our team for your payment"
            desc2=""
          />
          <StepItems
            icon="step3"
            title="3. Be a Winner"
            desc1="Ready to improve your game"
            desc2=""
          />
        </div>
      </div>
    </section>
  );
}
