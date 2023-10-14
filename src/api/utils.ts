import { parseStringPromise } from "xml2js";

export function parseXMLString(xml: string): Promise<any> {
  return parseStringPromise(xml, {
    explicitArray: false,
    attrValueProcessors: [transformValues],
  });
}

function transformValues(value: string, name: string) {
  // check boolean
  if (value === "false" || value === "true") {
    return value === "true";
  }

  // check numbers
  if (!isNaN(+value)) {
    return +value;
  }

  return value;
}
