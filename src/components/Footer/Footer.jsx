import SocialIcon from "./socialIcon";
const Footer = () => {
  return (
    <footer>
      <div className="flex inset-x-0 bottom-0 h-16 sm:flex-row xs:flex-col justify-around items-center bg-gray-900 text-white py-4 select-none">
        <div>
          <p>
            <span
              dangerouslySetInnerHTML={{ __html: "&copy;" }}
              className="mr-2"
            />
            Copyright 2021 - Cássio Rodrigues
          </p>
        </div>
        <div className="flex xs:mt-2">
          <SocialIcon name="FaFacebookF" url="https://www.facebook.com/OKassioRodrigues/"/>
          <SocialIcon name="FaGithub" url="https://github.com/cassiogithub"/>
          <SocialIcon name="FaLinkedinIn"  url="https://www.linkedin.com/in/cassiorodrigues25/"/>
          <SocialIcon name="FaTwitter" url="https://twitter.com/GuriTche" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
