

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 h-20 mx-auto justify-center bg-gradient-to-r from-[#FCF6FC] from-10% via-[#e1f7f8] via-50% to-[#f7fbfb] to-100%">
                <div className="navbar-start w-[134px]">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg text-black font-semibold">
                            <li><a>Solutions</a></li>
                            <li>
                                <a>Features</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Logoipsum</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg text-black font-semibold gap-2 h-16">
                        <li><a>Solutions</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Features</summary>
                                <ul className="p-2">
                                    <li><a>Features</a></li>
                                    <li><a>About</a></li>
                                </ul>
                            </details>
                        </li>
                        <div className="w-20"></div>
                        <li><a>About</a></li>
                        <div className="w-28"></div>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <a className="font-bold text-blue-500 border-[1.5px] border-blue-600 rounded-[10px] py-3 px-5 w-[100px]  text-center">Login</a>
                    <a className="font-bold bg-blue-500 text-white rounded-[10px] py-3 px-5 w-[100px]  text-center">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;