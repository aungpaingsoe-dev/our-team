export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-10 hidden lg:block bg-white/30 backdrop-blur-sm ">
      <div className=" w-[75%] mx-auto py-4 flex justify-between items-center ">
        <div className=" text-xl font-bold ">
          Our Team
        </div>
        <ul className="flex items-center gap-3">
          <li>Our Teams</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Articles</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
