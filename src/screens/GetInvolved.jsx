import React from "react";
import {
  PlantersHome,
  Solution,
  HowItWorks,
  PlantByHuman,
  PlantWithDrone,
  ManageEmission,
  Footer,
  GetInvolvedHome,
} from "../components";
import GetInvolvedSection from "../components/GetInvolvedSection";

function GetInvolved() {
  return (
    <div>
      <GetInvolvedHome />
      <GetInvolvedSection />
      {/* <Solution />
      <HowItWorks />
      <PlantByHuman />
      <PlantWithDrone />
      <ManageEmission /> */}
      <Footer />
    </div>
  );
}

export default GetInvolved;
