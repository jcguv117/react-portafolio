
const ButtonFloat = ({label, classColor, pathImg='', widthImg, linkURL=''}) => {

  const openURL = (url) => {
      url && window.open(url, '_blank', 'noopener,noreferrer');
  }

    return (
      <button
        className={"group flex items-center justify-start w-11 h-11 rounded-full cursor-pointer relative overflow-hidden transition-all gap-x-5 duration-200 shadow-lg hover:w-48 active:translate-x-1 active:translate-y-1 bg-black " + classColor}
        onClick={() => openURL(linkURL)}
      >
        <div
          className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
            <img style={{width: widthImg}} src={pathImg} alt="" />
        </div>
        <div
          className="absolute left-10 ml-4 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          {label}
        </div>
      </button>
    );
}
  

export default ButtonFloat;
