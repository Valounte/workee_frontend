/* istanbul ignore file */
export const getRawTextFromHtml = (html?: string) =>
  (html &&
    new DOMParser().parseFromString(html, 'text/html').documentElement
      .textContent) ??
  '';
