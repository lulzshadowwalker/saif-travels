import { Faq } from "../types";
import { FaqApiResource } from "../types/api-responses";

export class FaqMapper {
  static fromApiResponse(data: FaqApiResource): Faq {
    return {
      question: data.attributes.question,
      answer: data.attributes.answer,
    };
  }

  static fromApiResponseArray(data: FaqApiResource[]): Faq[] {
    return data.map((item) => this.fromApiResponse(item));
  }
}
