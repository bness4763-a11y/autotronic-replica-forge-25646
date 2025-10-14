import logo from '@/assets/logo.png';

const Logo = () => (
  <div className="flex items-center space-x-3">
    <img src={logo} alt="MH AUTO Performance Logo" className="h-12 md:h-14 drop-shadow-lg" />
    <span className="font-black text-xl md:text-2xl text-white tracking-wider drop-shadow-lg">MH AUTO Performance</span>
  </div>
);
export default Logo;
