function formatBodyHtml(html: string) {
  const result = html
    .split("<strong")
    .join("<br/><strong")
    .split("</strong>")
    .join("</strong><br/>");
  return result;
}

export { formatBodyHtml };
