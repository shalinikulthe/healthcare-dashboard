import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const AnatomySection = () => {
  return (
    <div className="bg-blue-50 p-5 relative flex items-center justify-center rounded-xl">
      <img src="Human_anatomy.png" alt="Human anatomy" className="h-72" />
      <FontAwesomeIcon
        icon={faSearch}
        className=" absolute top-3 right-3 text-gray-400 "
      />
    </div>
  );
};

export default AnatomySection;
