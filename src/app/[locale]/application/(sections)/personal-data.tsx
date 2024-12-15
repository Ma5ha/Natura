import Input from "@/app/components/input";
import Select from "@/app/components/select";
import React from "react";

const PersonalData: React.FC = () => {
  return (
    <div className="">
      <h2 className="text-lg font-bold">Personal Data</h2>
      {/* <Input label="" /> */}
      <Select />
    </div>
  );
};

export default PersonalData;
