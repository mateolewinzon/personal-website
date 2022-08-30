import JobsList from "../../components/experience/jobs-list";
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
