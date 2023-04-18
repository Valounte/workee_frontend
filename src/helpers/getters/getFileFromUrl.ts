/* istanbul ignore file */
export const getFileFromUrl = (
  dataUri: string,
  fileName: string,
  options?: FilePropertyBag
) =>
  fetch(dataUri)
    .then(response => response.arrayBuffer())
    .then(buffer => new File([buffer], fileName, options));
