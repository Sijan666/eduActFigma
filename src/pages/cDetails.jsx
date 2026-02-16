import React from "react";
import Container from '@/components/Container';
import { PlayCircle, Folder, Lightbulb } from 'lucide-react'; 




const cDetails = () => {
  return (
    <div className="py-10 ml-20 px-2 w-[868px]">
      <Container>
        <div className="mb-14">
          <h4 className="text-primaryTwo text-2xl font-Urbanist font-bold pb-4">
            Starting Beginners Level Course
          </h4>
          <p className="text-[#697585] text-base font-Urbanist font-semibold pb-10 leading-relaxed">
            Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. 
            Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum.
          </p>

          {/* List Items */}
          <div className="flex flex-col border-t border-[#E8EDF2]">
            {/* Item 1: Introduction */}
            <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
              <div className="flex items-center gap-4">
                <PlayCircle className="text-[#F15A24]" size={24} />
                <span className="text-primaryTwo text-lg font-bold font-Urbanist">Introduction of Editing</span>
                <span className="bg-[#F2F5F7] text-[#697585] text-xs px-3 py-1 rounded-full">Preview</span>
              </div>
              <span className="text-[#697585] font-semibold font-Urbanist">10 Minutes</span>
            </div>

            {/* Item 2: Overview */}
            <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
              <div className="flex items-center gap-4">
                <PlayCircle className="text-[#F15A24]" size={24} />
                <span className="text-primaryTwo text-lg font-bold font-Urbanist">Overview of Editing</span>
                <span className="bg-[#F2F5F7] text-[#697585] text-xs px-3 py-1 rounded-full">Preview</span>
              </div>
              <span className="text-[#697585] font-semibold font-Urbanist">10 Minutes</span>
            </div>

            {/* Item 3: Folder */}
            <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
              <div className="flex items-center gap-4">
                <Folder className="text-[#F15A24]" size={24} />
                <span className="text-primaryTwo text-lg font-bold font-Urbanist">Basic Editing Technology</span>
              </div>
            </div>

            {/* Item 4: Quiz */}
            <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
              <div className="flex items-center gap-4">
                <Lightbulb className="text-[#F15A24]" size={24} />
                <span className="text-primaryTwo text-lg font-bold font-Urbanist">Quiz</span>
              </div>
              <span className="text-[#697585] font-semibold font-Urbanist">6 Questions</span>
            </div>
          </div>
        </div>

        {/* --- Section 2: Intermediate Level --- */}
        <div className="mt-10">
          <h4 className="text-primaryTwo text-2xl font-Urbanist font-bold pb-4">
            Intermediate Level Course
          </h4>
          <p className="text-[#697585] text-base font-Urbanist font-semibold pb-10 leading-relaxed">
            Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. 
            Nullam sed mi non odio feugiat volutpat sit amet nec elit.
          </p>

          <div className="flex flex-col border-t border-[#E8EDF2]">
             {/* Item: Introduction */}
             <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
              <div className="flex items-center gap-4">
                <PlayCircle className="text-[#F15A24]" size={24} />
                <span className="text-primaryTwo text-lg font-bold font-Urbanist">Introduction of Editing</span>
                <span className="bg-[#F2F5F7] text-[#697585] text-xs px-3 py-1 rounded-full">Preview</span>
              </div>
              <span className="text-[#697585] font-semibold font-Urbanist">10 Minutes</span>
            </div>
            {/* Item : Folder */}
            <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
              <div className="flex items-center gap-4">
                <Folder className="text-[#F15A24]" size={24} />
                <span className="text-primaryTwo text-lg font-bold font-Urbanist">Basic Editing Technology</span>
              </div>
            </div>
            {/* Item : Quiz */}
            <div className="flex items-center justify-between py-5 border-b border-[#E8EDF2]">
              <div className="flex items-center gap-4">
                <Lightbulb className="text-[#F15A24]" size={24} />
                <span className="text-primaryTwo text-lg font-bold font-Urbanist">Quiz</span>
              </div>
              <span className="text-[#697585] font-semibold font-Urbanist">6 Questions</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default cDetails;