import Link from 'next/Link';
const Logo = () => {
  return (
    <>
      <Link href="/#" passHref>
        <div id="logo" className="flex flex-col select-none cursor-pointer">
          <span className="font-semibold text-xl tracking-tight text-gray-600">
            Cássio Rodrigues
          </span>
          <span className="text-sm ml-4 text-gray-500">
            Desenvolvedor Front-end
          </span>
        </div>
      </Link>
    </>
  );
};

export default Logo;
