import SocialMedia from "./SocialMedias";

const SocialGroup = () => {
  return (
    <div className="flex align-center justify-center mt-3">
      <SocialMedia src="/images/fbIcon.svg" socialName="Facebook" url="https://www.facebook.com/OKassioRodrigues/"/>
      <SocialMedia src="/images/githubIcon.svg" socialName="GitHub" url="https://github.com/cassiogithub"/>
      <SocialMedia src="/images/linkedinIcon.svg" socialName="LinkedIn"url="https://www.linkedin.com/in/cassiorodrigues25/" />
      <SocialMedia src="/images/twitterIcon.svg" socialName="Twitter"url="https://twitter.com/GuriTche" />
    </div>
  );
};
export default SocialGroup