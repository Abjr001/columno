import CustomImage from "@/app/landing/components/enterprise-image";
import Bton from "@/public/assets/enterprise/bton.jpg";
import Charity from "@/public/assets/enterprise/charity.jpg";
import Meta from "@/public/assets/enterprise/meta.jpg";

function EnterprisesImage() {
  return (
    <div className="flex items-center">
      <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white z-10">
        <CustomImage className="object-cover" alt="bton" src={Bton} />
      </div>
      <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white z-20 -ml-3">
        <CustomImage className="object-cover" alt="charity" src={Charity} />
      </div>
      <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-white z-30 -ml-3">
        <CustomImage className="object-cover" alt="meta" src={Meta} />
      </div>
    </div>
  );
}

export default EnterprisesImage;
