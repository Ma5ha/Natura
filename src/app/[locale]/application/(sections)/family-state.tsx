import React from "react";
import Input from "@/app/components/input";
import Select from "@/app/components/select";

const FamilyState: React.FC = () => {
  const maritalStatusOptions = [
    { value: "married", label: "Married" },
    { value: "single", label: "Single" },
    { value: "widowed", label: "Widowed" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="max-w-lg w-full card bg-white h-fit">
      <Select label="Bračno stanje" placeholder="Odaberite bračno stanje">
        {maritalStatusOptions.map(({ value, label }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
      <Input
        label="Ime i prezime supružnika"
        placeholder="Unesite ime i prezime supružnika"
      />
      <div className="children-info">
        <h4>Podaci o djeci</h4>

        <div className="child-info">
          <Input label="Prezime i ime" placeholder="Unesite prezime i ime" />
          <Input label="Adresa" placeholder="Unesite adresu" />
          <Input
            label="Kontakt telefon"
            placeholder="Unesite kontakt telefon"
          />
        </div>
      </div>
      <div className="relatives-info">
        <h4>Drugi bliži srodnici važni za korisnika</h4>

        <div className="relative-info">
          <Input label="Prezime" placeholder="Unesite prezime" />
          <Input label="Ime" placeholder="Unesite ime" />
          <Input
            label="Srodnički odnos"
            placeholder="Unesite srodnički odnos"
          />
          <Input
            label="Kontakt telefon"
            placeholder="Unesite kontakt telefon"
          />
        </div>
      </div>
      <Input
        label="Međusobni odnosi srodnika i korisnika"
        placeholder="Unesite opis odnosa"
      />
    </div>
  );
};

export default FamilyState;
