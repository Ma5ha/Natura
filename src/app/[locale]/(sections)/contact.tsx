"use client";
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { button, typography } from "@/ui/variants";
import { Clock, Cross, Info, Mail, MapPin } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { sendEmail } from "../actions";
import Input from "@/app/components/input";
import {
  ADDRESS,
  AMBULANCE_PHONE,
  AMBULANCE_PHONE_ALT,
  EMAIL,
  INFO_PHONE,
  INFO_PHONE_ALT,
  WORK_HOURS,
} from "@/constants/info";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactForm, formSchema } from "../schema";
import Show from "@/app/components/show";

type T = (t: string) => string;

const translateCards = (t: T) => {
  return [
    { title: t("email"), Icon: Mail, children: EMAIL },
    { title: t("address"), Icon: MapPin, children: ADDRESS },
    {
      title: t("ambulance"),
      Icon: Cross,
      children: (
        <>
          <span>{AMBULANCE_PHONE}</span> <span>{AMBULANCE_PHONE_ALT}</span>
        </>
      ),
    },
    {
      title: t("info"),
      Icon: Info,
      children: (
        <>
          <span>{INFO_PHONE}</span> <span>{INFO_PHONE_ALT}</span>
        </>
      ),
    },
    {
      title: t("hours"),
      Icon: Clock,
      children: (
        <>
          <span>{t("monSun")}</span> <span>{WORK_HOURS}</span>
        </>
      ),
    },
  ];
};

export default function Contact() {
  const t = useTranslations("contact");
  const info = translateCards(t);

  const form = useForm<ContactForm>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const [isSent, setIsSent] = useState(false);

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
            className="card bg-white w-[30ch] lg:!max-w-full grow  last:mr-auto md:max-w-1/2 "
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

      <Show when={!isSent}>
        <form
          className="card *:mb-8 w-full max-w-prose  bg-white self-start"
          onSubmit={form.handleSubmit(async (data) => {
            const { sent } = await sendEmail(data);
            setIsSent(sent);
          })}
        >
          <h2 className="title">{t("title")}</h2>

          <div className="flex flex-wrap gap-8 w-full">
            <Input
              label={t("form.email")}
              placeholder={t("form.placeholders.email")}
              type="email"
              {...form.register("email")}
              errorMessage={
                form.formState.errors.email?.message &&
                t(form.formState.errors.email?.message)
              }
            />
            <Input
              label={t("form.subject")}
              placeholder={t("form.placeholders.subject")}
              {...form.register("subject")}
              errorMessage={
                form.formState.errors.subject?.message &&
                t(form.formState.errors.subject?.message)
              }
            />
          </div>

          <div className="flex flex-wrap gap-8 w-full">
            <Input
              label={t("form.firstName")}
              placeholder={t("form.placeholders.firstName")}
              {...form.register("name")}
              errorMessage={
                form.formState.errors.name?.message &&
                t(form.formState.errors.name?.message)
              }
            />
            <Input
              label={t("form.lastName")}
              placeholder={t("form.placeholders.lastName")}
              {...form.register("lastName")}
              errorMessage={
                form.formState.errors.lastName?.message &&
                t(form.formState.errors.lastName?.message)
              }
            />
          </div>

          <div className="input-control grow">
            <label>{t("form.message")}</label>
            <textarea
              data-error={Boolean(form.formState.errors.message)}
              className="data-[error=true]:border-red-700 data-[error=true]:border data-[error=true]:outline-red-700 "
              placeholder={t("form.placeholders.message")}
              {...form.register("message")}
            />
            <p
              data-error={Boolean(form.formState.errors.message)}
              className={twMerge(
                typography(),
                "text-red-700 hidden data-[error=true]:block"
              )}
            >
              {form.formState.errors.message?.message &&
                t(form.formState.errors.message?.message)}
            </p>
          </div>

          <button
            disabled={!form.formState.isValid}
            className={twMerge(button(), "ml-auto disabled:bg-gray-200")}
          >
            <Mail />
            {t("form.button")}
          </button>
        </form>
      </Show>

      <Show when={isSent}>
        <div className="card w-full max-w-prose bg-white self-start min-h-[300px]">
          <h2 className="title">{t("form.thanks")}</h2>
          <p className={typography()}>{t("form.sentMessage")}</p>
        </div>
      </Show>
    </section>
  );
}
