import { convert } from 'html-to-text';

export default class DataFormatter {
  constructor() {}

  clearLinks(bodyHtml: string) {
    const spanPattern = /https:\/\/[^<]+<\/span>/gi;

    return bodyHtml.replaceAll(spanPattern, function () {
      return `</span>`;
    });
  }

  htmlToText(html: string) {
    const options = {
      wordwrap: 1000,
    };
    return convert(this.clearLinks(html), options);
  }

  tagGenerator(html: string) {
    const text = this.htmlToText(this.clearLinks(html));
    const matches = text.match(/(([A-Z]\w*\s*){2,})|(\w{6,})/g);
    return matches.filter(function (m, index: number) {
      return m.match(/\w{6,}/) && index < 5;
    });
  }
}
