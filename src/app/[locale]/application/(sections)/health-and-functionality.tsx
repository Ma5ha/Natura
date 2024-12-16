import Select from "@/app/components/select";
import Input from "@/app/components/input";

const HealthAndFunctionality: React.FC = () => {
  const mobilityOptions = [
    { value: "mobile", label: "Mobile" },
    { value: "semi-mobile", label: "Semi-Mobile" },
    { value: "immobile", label: "Immobile" },
  ];

  const selfCareOptions = [
    { value: "independent", label: "Independent" },
    { value: "needs-assistance", label: "Needs Assistance" },
  ];

  const communicationOptions = [
    { value: "normal", label: "Normal" },
    { value: "impaired", label: "Impaired" },
    { value: "non-verbal", label: "Non-Verbal" },
  ];

  return (
    <div className="max-w-lg w-full card bg-white h-fit">
      <Select label="Pokretljivost" placeholder="Select mobility">
        {mobilityOptions.map(({ value, label }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
      <Select
        label="Sposobnost samoposluživanja"
        placeholder="Select self-care ability"
      >
        {selfCareOptions.map(({ value, label }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
      <Select
        label="Sposobnost komunikacije"
        placeholder="Select communication ability"
      >
        {communicationOptions.map(({ value, label }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
      <Input label="Hronične bolesti" placeholder="Enter chronic conditions" />
      <Input
        label="Korištenje specijalnih pomagala"
        placeholder="Enter use of special aids"
      />
      <Input label="Ostalo" placeholder="Enter other information" />
    </div>
  );
};

export default HealthAndFunctionality;
