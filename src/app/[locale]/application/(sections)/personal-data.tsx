import Input from "@/app/components/input";
import Select from "@/app/components/select";
import React from "react";

// Prezime i ime korisnika (Text)
// Djevojačko prezime (Text)
// Broj lične karte (Text)
// Mjesto izdavanja (Text)
// JMBG (Number)
// Spol (Dropdown: Male/Female/Other)
// Državljanstvo (Text)
// Etnička i vjerska pripadnost (Text)
// Ime oca (Text)
// Ime majke (Text)
// Djevojačko prezime majke (Text)
// Dan, mjesec i godina rođenja (Date)
// Mjesto i adresa boravka prije dolaska u ustanovu (Text)
// Bračno stanje (Dropdown: Married/Single/Widowed/Other)
// Školska sprema (Text)
// Zanimanje u aktivnom periodu života (Text)
// Redovna lična primanja (vrsta i mjesečni iznos) (Text/Number)
// Da li je zdravstveno osiguran i po kom osnovu (Text)
// Podaci o imovini koju posjeduje (Text)
// Podaci o korištenju slobodnog vremena (Text)
// Datum (Date)
// Ime i prezime osobe koja je dala podatke (Text)

const sexOptions = [
  { value: "muski", label: "Muski" },
  { value: "zenski", label: "Zenski" },
];

const maritalStatusOptions = [
  { value: "married", label: "Married" },
  { value: "single", label: "Single" },
  { value: "widowed", label: "Widowed" },
  { value: "other", label: "Other" },
];

const PersonalData: React.FC = () => {
  return (
    <form className=" ">
      <div className="max-w-lg card bg-white">
        {/* Personal Information */}
        <div className="flex gap-2 flex-wrap ">
          <Input label="Ime" placeholder="Unesite vaše ime" />
          <Input label="Prezime" placeholder="Unesite vaš prezime" />
          <Input
            label="Djevojačko prezime"
            placeholder="Unesite vaš djevojačko prezime"
          />
        </div>

        <hr className="my-4" />

        {/* Identification */}
        <div className="flex gap-2 w-full flex-wrap">
          <Input
            label="Broj lične karte"
            placeholder="Unesite vaš broj lične karte"
          />
          <Input
            label="Mjesto izdavanja"
            placeholder="Unesite vaš mjesto izdavanja"
          />
          <Input label="JMBG" placeholder="Unesite vaš JMBG" />
        </div>

        <hr className="my-4" />

        {/* Gender and Marital Status */}
        <div className="flex gap-2">
          <Select label="Pol" placeholder="Unesite vaš pol">
            {sexOptions.map(({ value, label }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
          </Select>
          <Select label="Bračno stanje" placeholder="Unesite vaš bračno stanje">
            {maritalStatusOptions.map(({ value, label }) => (
              <Select.Option key={value} value={value}>
                {label}
              </Select.Option>
            ))}
          </Select>
        </div>

        <hr className="my-4" />

        {/* Additional Information */}
        <div className="flex flex-col gap-2">
          <Input
            label="Državljanstvo"
            placeholder="Unesite vaš državljanstvo"
          />
          <Input
            label="Etnička i vjerska pripadnost"
            placeholder="Unesite vašu etničku i vjersku pripadnost"
          />
          <Input label="Ime oca" placeholder="Unesite vaš ime oca" />
          <Input label="Ime majke" placeholder="Unesite vaš ime majke" />
          <Input
            label="Djevojačko prezime majke"
            placeholder="Unesite vaš djevojačko prezime majke"
          />
          <Input
            label="Dan, mjesec i godina rođenja"
            placeholder="Unesite vaš dan, mjesec i godina rođenja"
          />
        </div>

        <hr className="my-4" />

        {/* Residence and Education */}
        <div className="flex flex-col gap-2">
          <Input
            label="Mjesto i adresa boravka prije dolaska u ustanovu"
            placeholder="Unesite vaš mjesto i adresa boravka prije dolaska u ustanovu"
          />
          <Input
            label="Školska sprema"
            placeholder="Unesite vašu školsku sprema"
          />
          <Input
            label="Zanimanje u aktivnom periodu života"
            placeholder="Unesite vašu zanimanje u aktivnom periodu života"
          />
        </div>

        <hr className="my-4" />

        {/* Financial and Health Information */}
        <div className="flex flex-col gap-2">
          <Input
            label="Redovna lična primanja"
            placeholder="Unesite vašu redovnu ličnu primanju"
          />
          <Input
            label="Da li je zdravstveno osiguran i po kom osnovu"
            placeholder="Unesite vašu da li je zdravstveno osiguran i po kom osnovu"
          />
          <Input
            label="Podaci o imovini koju posjeduje"
            placeholder="Unesite vaše podatke o imovini koju posjeduje"
          />
        </div>

        <hr className="my-4" />

        {/* Leisure and Additional Information */}
        <div className="flex flex-col gap-2">
          <Input
            label="Podaci o korištenju slobodnog vremena"
            placeholder="Unesite vaše podatke o korištenju slobodnog vremena"
          />
          <Input label="Datum" placeholder="Unesite vaš datum" />
          <Input
            label="Ime i prezime osobe koja je dala podatke"
            placeholder="Unesite vaše ime i prezime osobe koja je dala podatke"
          />
        </div>
      </div>
    </form>
  );
};

export default PersonalData;
