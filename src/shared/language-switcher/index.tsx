"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("LanguageSwitcher");

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        aria-label="Change language"
      >
        <Globe size={20} className="text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {locale === "en" ? "EN" : "AR"}
        </span>
      </button>

      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          <button
            onClick={() => handleLanguageChange("en")}
            disabled={isPending || locale === "en"}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between ${
              locale === "en"
                ? "text-accent font-medium bg-gray-50"
                : "text-gray-700"
            } ${isPending ? "opacity-50 cursor-wait" : ""}`}
          >
            <span>English</span>
            {locale === "en" && <span className="text-accent">✓</span>}
          </button>
          <button
            onClick={() => handleLanguageChange("ar")}
            disabled={isPending || locale === "ar"}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 flex items-center justify-between ${
              locale === "ar"
                ? "text-accent font-medium bg-gray-50"
                : "text-gray-700"
            } ${isPending ? "opacity-50 cursor-wait" : ""}`}
          >
            <span>العربية</span>
            {locale === "ar" && <span className="text-accent">✓</span>}
          </button>
        </div>
      </div>

      {/* Loading overlay */}
      {isPending && (
        <div className="fixed inset-0 bg-black/20 z-[100] flex items-center justify-center">
          <div className="bg-white rounded-lg px-4 py-3 shadow-lg flex items-center gap-3">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-200 border-t-accent"></div>
            <span className="text-sm text-gray-700">
              {t("changingLanguage")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
