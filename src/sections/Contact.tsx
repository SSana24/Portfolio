import ArrowUpRightIcon from "../assets/icons/arrow-up-right.svg";
import grainImaage from "../assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 flex justify-center items-center">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-400 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0" >
          <div className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImaage})`
            }}>

          </div>
          <div className="flex flex-col md:flex-row gap-8  md:gap-16 items-center">
            <div>
            <h3 className="font-serif text-2xl md:text-3xl"> Let's something amazing together </h3>
            <p className="text-sm mt-2 md:text-base "> I am available for new opportunities. Let's connect and discuss. </p>
            </div>
            <div> 
            <button className="text-white bg-gray-900 inline-flex items-center gap-2 px-6 h-12 rounded-3xl text-center w-max border border-gray-900">
              <span className="font-semibold">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
