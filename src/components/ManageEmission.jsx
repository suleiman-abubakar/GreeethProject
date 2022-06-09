import React from 'react';
import { Calculator, Chart, Cloud, Monitor, Speedometer } from '../../assets';

function ManageEmission() {
  return (
    <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl font-semibold leading-none text-center">Manage your emission</h1>
        <p>Take step to mesure and manage your carbon emision for yourself, household, and within your organization in an effort to mitigate the potential impact of these emission on climate system.</p>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:px-10">
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-xl h-68">
          <div className="py-8 sm:px-8 md:px-12">
            <p className="flex relative py-1 text-lg  font-bold text-left items-center">
              <object type="image/svg+xml" data={Calculator} className="max-w-12 mr-4 text-left" alt="Calculator Icon" />
              <p className="text-left">Calculate your carbon footprint</p>

            </p>
          </div>
          <div className="">
            <p className="text-sm text-left ml-4 leading-relaxed px-8 pb-6">The calculator allows you convert your emissions of carbon-dioxide (CO2) to the equivalent amount  of carbon-dioxide emissions gererated by your actions and activities</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-xl h-68">
          <div className="py-8 sm:px-8 md:px-12">
            <p className="flex relative py-1 text-lg  font-bold text-left items-center">
              <object type="image/svg+xml" data={Speedometer} className="max-w-12 mr-4 text-left" alt="Speedometer Icon" />
              <p className="text-left">Reduce emission</p>

            </p>
          </div>
          <div className="">
            <p className="text-sm text-left ml-4 leading-relaxed px-8 pb-6">One of the most immediate action you can take it to limit climate change is to reduce your emission</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-xl h-68">
          <div className="py-8 sm:px-8 md:px-12">
            <p className="flex relative py-1 text-lg  font-bold text-left items-center">
              <object type="image/svg+xml" data={Cloud} className="max-w-12 mr-4 text-left" alt="Cloud Icon" />
              <p className="text-left">Offset emission</p>

            </p>
          </div>
          <div className="">
            <p className="text-sm text-left ml-4 leading-relaxed px-8 pb-6">To compensate for your footprint, you can purchase carbon offset credit equivalent to the amount of emission you were responsible for. This will be inform of any carbon reduction project</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-xl h-68">
          <div className="py-8 sm:px-8 md:px-12">
            <p className="flex relative py-1 text-lg  font-bold text-left items-center">
              <object type="image/svg+xml" data={Monitor} className="max-w-12 mr-4 text-left" alt="Monitor Icon" />
              <p className="text-left">Monitor emission</p>

            </p>
          </div>
          <div className="">
            <p className="text-sm text-left ml-4 leading-relaxed px-8 pb-6">Tracking how much carbon-dioxide is produced by a particutal actiities at a particular time. With our database we can gather and present the best available estimate of CO2 emission</p>
          </div>
        </div>
        <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg rounded-xl h-68">
          <div className="py-8 sm:px-8 md:px-12">
            <p className="flex relative py-1 text-lg  font-bold text-left items-center">
              <object type="image/svg+xml" data={Chart} className="max-w-12 mr-4 text-left" alt="Chart Icon" />
              <p className="text-left">Analyse</p>

            </p>
          </div>
          <div className="">
            <p className="text-sm text-left ml-4 leading-relaxed px-8 pb-6">Get your overall carbon footprint, offset and reduction in one place and examine it. Check your contribution to climate system.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageEmission;
