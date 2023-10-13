import img from '../../../../public/images/img.png'

const Banner = () => {

    return (
        <div className="bg-gradient-to-r from-[#FCF6FC] from-10% via-[#e1f7f8] via-50% to-[#f7fbfb] to-100% px-16 py-10 lg:flex gap-8 justify-between">
            <div>
                <h2 className="font-bold text-[65px] leading-tight pt-52 mb-2">Find <span className="bg-gradient-to-r from-[#0076CE] to-[#9400D3] text-transparent bg-clip-text">Partners</span>(CAs) <br />available online </h2>
                <p className="text-xl text-[#616161]"><span className="uppercase font-bold">connect</span> with us where your services are listed and visible to a myriad <br />of business seeking CA&apos;s for compliance support.</p>
                <div className="mt-16 lg:w-[670px]">
                    <input className="w-[484px] text-xl border-2 font-bold py-5 px-8 rounded-l-xl " type="text" name="" id="" placeholder="Search by name" />
                    <button className="bg-blue-500 font-bold text-white py-6 px-16 rounded-xl">Search</button>
                </div>
            </div>
            <div className='pt-40'>
                <img className='w-[671px] rounded-xl' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;