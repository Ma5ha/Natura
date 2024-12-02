import { button, typography } from "@/ui/variants";
import { Clock, Cross, Info, Mail, MapPin } from "lucide-react";
import { twMerge } from "tailwind-merge";

const info = [
  { title: "Email", Icon: Mail, children: "naturainfo@gmail.com" },
  { title: "Address", Icon: MapPin, children: "Pale, Pribanjska 55" },
  {
    title: "Ambulance",
    Icon: Cross,
    children: (
      <>
        <span>+387 57 223 945</span> <span>+387 65 213 666</span>
      </>
    ),
  },
  {
    title: "Info",
    Icon: Info,
    children: (
      <>
        <span>+387 57 223 945</span> <span>+387 65 213 666</span>
      </>
    ),
  },
  {
    title: "Work hours",
    Icon: Clock,
    children: (
      <>
        <span>Mon-sun</span> <span>08:00-17:00</span>
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="page snap-start flex flex-wrap gap-10 justify-center items-center relative lg:flex-row"
    >
      <div
        id="info"
        className="flex flex-wrap max-w-prose gap-2 xl:flex-col l:w-[30ch] lg:self-start"
      >
        {info.map(({ title, Icon, children }) => (
          <div
            key={title}
            className="card bg-white sm:w-[30ch] grow  last:mr-auto max-w-1/2"
          >
            <div className="flex gap-2 ">
              <Icon className="stroke-primary" />
              <h3
                className={twMerge(typography({ semantic: "title" }), "mb-3")}
              >
                {title}
              </h3>
            </div>
            <p className={twMerge("flex flex-col", typography())}>{children}</p>
          </div>
        ))}
      </div>

      <form className="card *:mb-8 w-full max-w-prose  bg-white self-start">
        <h2 className="title">Contact</h2>

        <div className="flex flex-wrap gap-8 w-full">
          <div className="input-control grow">
            <label>Enter email</label>
            <input placeholder="naturainfo@gmail.com" />
          </div>
          <div className="input-control grow">
            <label>Subject</label>
            <input placeholder="naturainfo@gmail.com" />
          </div>
        </div>

        <div className="flex flex-wrap gap-8 w-full">
          <div className="input-control grow">
            <label>First name</label>
            <input placeholder="John" />
          </div>
          <div className="input-control grow">
            <label>Last name</label>
            <input placeholder="Doe" />
          </div>
        </div>

        <div className="input-control grow">
          <label>Message</label>
          <textarea placeholder="hello..." />
        </div>

        <button className={twMerge(button(), "ml-auto")}>
          <Mail />
          Send
        </button>
      </form>
    </section>
  );
}
