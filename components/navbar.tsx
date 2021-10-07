import Link from 'next/Link';
import Image from 'next/image';

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <Image src="/logo.png" width={64} height={65}/>
        </div>
        <Link href={'/'}>Home</Link>
        <Link href={'about'}>About</Link>
        <Link href={''}>Ohh aa</Link>
      </nav>
  );
  }

  export default Navbar;