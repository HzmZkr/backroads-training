import { socialLinks } from "./data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        const { id, href, icon } = link;
        return (
          <SocialLink key={id} href={href} icon={icon} itemClass={itemClass} />
        );
      })}
    </ul>
  );
};

export default SocialLinks;
