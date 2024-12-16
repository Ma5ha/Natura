import Input from "@/app/components/input";

const DataAboutApplication = () => {
  return (
    <div className="max-w-lg w-full card bg-white h-fit">
      <Input
        label="Na čiji zahtjev je lice smješteno?"
        placeholder="Ime i prezime"
      />
      <Input
        label="Razlozi za podnošenje zahtjeva za smještaj"
        placeholder="Razlozi"
      />
      <Input
        label="Ko snosi troškove smještaja"
        placeholder="Ime, prezime i kontakt telefon"
      />
      <Input
        label="Posebne okolnosti koje treba da se uzmu u obzir prilikom smještaja"
        placeholder="Navike i sl."
      />
      <Input
        label="Kontakt osoba u slučaju bolesti, smrt"
        placeholder="Ime, prezime i kontakt telefon"
      />
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <label>
          Smještaj uz postojanje saglasnosti lica/staratelja/odluke suda
        </label>
      </div>
    </div>
  );
};

export default DataAboutApplication;
