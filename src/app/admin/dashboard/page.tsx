import { typography } from "@/ui/variants";
import { twMerge } from "tailwind-merge";

function Dashboard() {
  // const files = use(getAllGalleryFolders());

  const files = new Array(10).fill(1).map((_, i) => ({ name: `Folder ${i}` }));

  return (
    <div className="py-10">
      <ul className="grid grid-cols-2 gap-5">
        {files.map(({ name }) => (
          <li key={name} className="flex gap-3 cursor-pointer">
            <span className="folder"></span>
            <span className={twMerge(typography(), "h-fit w-fit")}>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
