import { FaqRepo } from "../contract/faq-repo";
import { Faq } from "../types";

export class LaravelFaqRepo implements FaqRepo {
  async list(): Promise<Faq[]> {
    const response = await fetch(
      process.env.NEXT_PUBLIC_LARAVEL_BASE_URL + "/faqs?per_page=9999",
      { headers: { Accept: "application/json" } },
    );

    const faqs = (await response.json()).data;

    return faqs.map((faq: any) => ({
      question: faq.attributes.question,
      answer: faq.attributes.answer,
    }));
  }
}
