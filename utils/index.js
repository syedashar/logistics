// split text based on a separator text

const splitText = (text = "", separator = "") => {
  const separatorIndex = text.indexOf(separator);
  if (separatorIndex === -1) {
    return [text];
  }
  return [
    text.slice(0, separatorIndex),
    text.slice(separatorIndex + separator.length),
  ];
};

const handleExitComplete = () => {
  if (typeof window !== "undefined") {
    // Get the hash from the url
    const hashId = window.location.hash;

    if (hashId) {
      // Use the hash to find the first element with that id
      setTimeout(() => {
        const element = document.querySelector(hashId);

        if (element) {
          // Smooth scroll to that elment

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 500);
    }
  }
};

function convertToPlain(rtf) {
  rtf = rtf.replace(/\\par[d]?/g, "");
  return rtf
    .replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, "")
    .trim();
}

const hasChildren = (item) => {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
};

export { splitText, handleExitComplete, convertToPlain, hasChildren };
