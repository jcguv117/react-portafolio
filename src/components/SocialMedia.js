import React from "react";
import ButtonFloat from "../shared/components/buttons/buttonFloat";

export default function SocialMedia() {
  return (
    //   <div className="absolute right-5 container mx-auto px-2 w-full z-[100]">
      <div className="fixed left-5 bottom-5 z-[100] flex flex-row">
        <div className={'gap-5 flex flex-col-reverse'}>
            <ButtonFloat 
              label={'jcguv117'}
              classColor={'bg-gradient-to-r from-cyan-500 to-blue-500'}
              pathImg="./icon/github.svg"
              widthImg={'30px'}
              linkURL={"https://github.com/jcguv117/"} />
            <ButtonFloat 
              label={'Carlos Guevara'}
              classColor={'bg-gradient-to-r from-cyan-500 to-blue-500'}
              pathImg="./icon/linkedin.svg"
              widthImg={'30px'}
              linkURL={"https://www.linkedin.com/in/jcarlos-guevara-42044320b/"} />
        </div>
        {/* <div className="grid grid-cols-2">
          <div className="grid sm:grid-cols-1 justify-self-end fixed bottom-[1rem] xl:ml-8 gap-y-2">
            <ButtonFloat 
              label={'jcguv117'}
              classColor={'bg-gradient-to-r from-cyan-500 to-blue-500'}
              pathImg="./icon/github.svg"
              widthImg={'30px'} />
            <ButtonFloat 
              label={'Carlos Guevara'}
              classColor={'bg-gradient-to-r from-cyan-500 to-blue-500'}
              pathImg="./icon/linkedin.svg"
              widthImg={'30px'} />
          </div>
        </div> */}
      </div>
  );
}