import { motion } from "framer-motion";
import teamMemberData from "../data/teamMemberData.json";

function TeamMember() {
  return (
    <div className="container mb-20">
      <div className="row">
        {teamMemberData?.map((member, index) => (
          <div className="col-lg-3 col-md-3 col-sm-12" key={index}>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              transition={{
                duration: 1,
                ease: "easeIn",
                type: "spring",
                stiffness: 100,
                damping: 6,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              className="team-member-box rounded-md overflow-hidden flex flex-col gap-4 relative"
            >
              <div className="team-member-img relative overflow-hidden">
                <img
                  src={`${window.location.origin}/images/about/${member.image}`}
                  alt="team_member_image"
                  className="img-fluid rounded-md"
                />
              </div>
              <div className="team-member-info flex flex-col items-center gap-1">
                <h1 className="text-xl font-semibold">{member.name}</h1>
                <h6 className="text-lg font-medium text-blue-500">
                  {member.designation}
                </h6>
              </div>
              <ul className="member-social-links flex items-center gap-3 absolute top-[36%] left-[50%] translate-x-[-50%] z-10">
                <li className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                  <i className="fa-brands fa-facebook-f text-lg text-blue-400" />
                </li>
                <li className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                  <i className="fa-brands fa-twitter text-lg text-blue-500" />
                </li>
                <li className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                  <i className="fa-brands fa-linkedin text-lg text-blue-500" />
                </li>
              </ul>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
/**
 *
 * absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
 */
