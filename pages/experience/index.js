import JobsList from "../../components/experience/JobsList";
import { getExperience } from "../../mocks/experience";

function Experience() {
  const experienceData = getExperience();

  return (
    <div>
      <JobsList items={experienceData} />
    </div>
  );
}

export default Experience;
