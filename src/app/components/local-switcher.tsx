import { Link, usePathname } from "@/i18n/routing";
import { typography } from "@/ui/variants";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useLocale, useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

const englandFlag = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect>
    <path
      fill="#be2a2a"
      d="M31 14L18 14 18 4 14 4 14 14 1 14 1 18 14 18 14 28 18 28 18 18 31 18 31 14z"
    ></path>
    <path
      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
      opacity=".15"
    ></path>
    <path
      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
      fill="#fff"
      opacity=".2"
    ></path>
  </svg>
);

const serbFlag = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
  >
    <path fill="#1a3d73" d="M1 11H31V21H1z"></path>
    <path
      d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
      fill="#b8403f"
    ></path>
    <path
      d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
      transform="rotate(180 16 24)"
      fill="#fff"
    ></path>
    <path
      d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
      opacity=".15"
    ></path>
    <path
      d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
      fill="#fff"
      opacity=".2"
    ></path>
    <path
      d="M13.669,9.423c.207-.03,.134-.355-.066-.293,.083-.137-.099-.295-.223-.194,.027-.145-.171-.234-.262-.122,.025-.143-.17-.232-.261-.121-.006-.128-.181-.185-.262-.087-.018-.133-.24-.222-.35-.151-.005-.129-.181-.188-.262-.089-.006-.132-.189-.186-.267-.082-.028-.124-.214-.149-.274-.037-.034-.129-.23-.142-.281-.019-.037-.09-.17-.117-.239-.047,.036-.198-.104-.402-.302-.439,.011-.101-.048-.17,.099-.15,.047,.19,.343-.106,.152-.152-.009-.086-.142-.086-.152,0-.131,.013-.095-.017-.099-.121,.146-.04,.006-.202-.076-.218-.082,.016-.222,.178-.076,.218-.003,.106,.031,.133-.099,.121-.01-.086-.143-.085-.151,0-.147,.039-.007,.202,.076,.218,.089-.014,.049-.089,.175-.066,.051,.261-.366,.174-.302,.589-.069-.07-.202-.043-.239,.047-.05-.123-.247-.11-.281,.019-.06-.112-.246-.087-.274,.037-.078-.105-.261-.05-.267,.082-.081-.099-.258-.04-.262,.089-.11-.071-.332,.018-.35,.151-.081-.098-.256-.04-.262,.087-.092-.11-.287-.022-.261,.121-.092-.112-.289-.023-.262,.122-.123-.101-.306,.057-.223,.194-.201-.062-.273,.264-.066,.293-.135,.06-.095,.28,.055,.285-.078,.097,.006,.254,.131,.24-.058,.084-.011,.161-.002,.254,.037,.088,.124,.04,.181,.06,.101,.354,.349,.588,.522,.918-.103,.031-.061,.143,.032,.125,.002-.003,.009,.039,.009,.04-.063,.095-.163,.347,.014,.397,.084,.152,.11,.048,.03,.186,.604,.244,1.466,.103,2.152,.161,.686-.058,1.549,.082,2.152-.161-.085-.143-.047-.035,.031-.186,.172-.045,.079-.304,.014-.397,0-.013,.004-.051,.025-.039,.086,.006,.111-.099,.017-.125,.173-.33,.421-.564,.522-.918,.056-.02,.146,.028,.181-.06,.011-.094,.055-.17-.002-.254,.125,.013,.209-.143,.131-.24,.15-.006,.19-.226,.055-.285Z"
      fill="#e6bd4c"
    ></path>
    <path
      d="M14.231,12.033v6.004c0,.983-.437,1.945-1.093,2.644s-1.573,1.18-2.595,1.18-1.939-.481-2.595-1.18-1.093-1.661-1.093-2.644v-6.004h7.375Z"
      fill="#b8403f"
    ></path>
    <path
      d="M10.543,21.888c-.967,0-1.896-.422-2.615-1.188-.699-.746-1.1-1.716-1.1-2.662v-6.031h7.43v6.031c0,.946-.401,1.917-1.1,2.662-.719,.767-1.647,1.188-2.615,1.188Zm-3.66-9.827v5.977c0,.932,.396,1.889,1.085,2.625,.708,.755,1.623,1.171,2.575,1.171s1.867-.416,2.575-1.171c.689-.735,1.085-1.692,1.085-2.625v-5.977H6.883Z"
      fill="#fff"
    ></path>
    <path
      d="M14.062,14.242c-.054-.845-.562-2.119-1.289-1.837,.458,1.041,.017,1.234-.784,2.183-.043-.024-.365-.015-.148-.114-.298-.151-.748-.725-.397-1.095,.178-.054,.416,.167,.513-.069,.253-.011,.44-.125,.445-.316-.183,.208-.391,.215-.613,.131-.176-.047-.228-.026-.081-.136,.202,.051,.141-.115,.283-.111,.127,0,.094,.301,.233,.135,.53-.48,.123-.628-.236-.725-.243-.169-1.021,.284-1.263,.257-.054,.142-.008,.274,.128,.259-.172,.284-.262,.573-.309,1.001,.049-.432-.395-.889-.195-1.037,.145-.357-.19-.162-.539-.381-.625-.34-1.741,.069-.861,.677,.173-.381,.165-.057,.432-.076,.255,.2-.578,.248-.7,.017,.021,.249,.408,.299,.585,.41,.441-.191,.609,.252,.448,.578-.162,.277-.342,.372-.468,.497,.22,.042-.124,.097-.147,.097-.463-.514-1.332-1.373-.869-1.89,.367-.961-1.206,.159-1.149,1.168-.317,1.488,.376,3.682,.131,5.243,.384-.004,.376-.526,.546-.022,.164-.098,.252-.307,.295-.549,.078,.262,.175-.027,.234-.147,.204-.055,.297-.522,.301-.785,.131,.294,.289-.257,.259-.477,.212,.507-.263,1.204-.545,1.501,.126,.089,.401,.013,.501-.108-.069,.223-.088,.532,.188,.271,.012,.322,.203,.203,.308-.088,.237,.412,.143-.137,.34-.407,.493,.48,.05,.778,.023,1.244,.155,.21-.384,.504-.265,.763,.299,.227-.592,.816-.119,1.002,.091,.022,.226,.094,.26-.046-.032,.183,.33,.263,.393,.112,.023,.156,.37,.192,.41,.031,.017,.163,.385,.164,.403,0,.039,.161,.387,.125,.41-.032,.062,.151,.425,.072,.394-.111,.035,.139,.171,.067,.262,.044,.38-.182-.177-.632-.213-.945,.313-.154-.167-.535-.234-.765,.218-.187-.135-.515-.187-.756,.168-.658,.393-.517,.465,.047,.19-.322,.208,.073,.38,.119,.107-.419,.422,.223,.262-.485,.1,.121,.375,.197,.501,.108-.282-.298-.756-.993-.545-1.501-.029,.22,.128,.772,.259,.477,.004,.264,.097,.731,.301,.785,.058,.118,.155,.41,.234,.147,.043,.242,.131,.45,.295,.549,.169-.509,.163,.022,.546,.022-.228-1.384,.357-3.571,.186-4.867Z"
      fill="#fff"
    ></path>
  </svg>
);
export default function LocalSwitcher() {
  const local = useLocale();
  const t = useTranslations();
  const path = usePathname();

  return (
    <div className="relative">
      <Menu>
        <MenuButton className="flex items-center [&_svg]:size-[18px] gap-1 bg-gray-100 px-2 py-1 rounded-lg focus:ring-2 focus:ring-primary">
          <span
            className={typography({
              color: "primary",
              weight: "thin",
              size: "small",
            })}
          >
            {local.toUpperCase()}
          </span>
        </MenuButton>

        <MenuItems
          unmount
          transition={false}
          anchor="bottom end"
          className="w-[20ch] [&_svg]:size-[18px] *:flex *:gap-1 *:items-center z-50  rounded-xl border border-white/5 bg-gray-50 p-2 focus:outline-none  hover:*:bg-gray-700"
        >
          <MenuItem>
            <Link
              locale="sr"
              href={path}
              className={twMerge(typography({ weight: "semi" }), "block p-2")}
            >
              <span>{serbFlag}</span> <span>{t("lang.sr")}</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              locale="en"
              href={path}
              className={twMerge(typography({ weight: "semi" }), "block p-2")}
            >
              <span>{englandFlag}</span> <span>{t("lang.en")} </span>
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
