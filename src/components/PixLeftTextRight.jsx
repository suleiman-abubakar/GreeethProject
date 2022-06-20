import React from 'react';

function PixLeftTextRight({ BG, Pix, TextList }) {
  return (
    <div className="py-16 bg-white BG1 py-42" style={{ backgroundImage: `url(${BG})` }}>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={Pix} alt="Location pins illustration" loading="lazy" className="mx-auto" />
          </div>
          <div className="text-left md:7/12 lg:w-6/12 ml-12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Detect planting location</h2>
            <ul className="mt-6 text-gray-600 list-disc leading-loose">
              {TextList}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PixLeftTextRight;