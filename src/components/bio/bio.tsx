import styles from "@/styles/bio.module.css";
import { FaBriefcase, FaHandsHelping, FaUniversity } from "react-icons/fa";
import SectionTitle from "../core/sectionTitle";
import Title from "../core/title";
import BioItem from "./bioItem";
import data from "@/config/data.json";

export default function Resume() {
  const workExperience = data.bio.work_experience;
  const education = data.bio.education;
  const volunteerExperience = data.bio.volunteer_experience;
  return (
    <div style={{ padding: "30px" }}>
      <Title title="Biography" />
      <div>
        {workExperience && (
          <SectionTitle icon={FaBriefcase} title="Work Experience" />
        )}
        <div className={styles.bioWrapper}>
          {workExperience &&
            workExperience.map((item) => (
              <BioItem
                key={item.company}
                organization={item.company}
                hyperlink={item.companyURL}
                roleAndYearArray={item.roles}
              />
            ))}
        </div>
      </div>
      <div>
        {education && <SectionTitle icon={FaUniversity} title="Education" />}
        <div className={styles.bioWrapper}>
          {education &&
            education.map((item) => (
              <BioItem
                key={item.institution}
                organization={item.institution}
                hyperlink={item.institutionURL}
                roleAndYearArray={item.degrees}
              />
            ))}
        </div>
      </div>
      <div>
        {volunteerExperience && (
          <SectionTitle icon={FaHandsHelping} title="Volunteer Experience" />
        )}
        <div className={styles.bioWrapper}>
          {volunteerExperience &&
            volunteerExperience.map((item) => (
              <BioItem
                key={item.organization}
                organization={item.organization}
                hyperlink={item.organizationURL}
                roleAndYearArray={item.roles}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
