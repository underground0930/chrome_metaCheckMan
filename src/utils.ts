import { metaList } from "./variables";

// タグの内側のテキストを取得
const getTagInnerText = (selector: string): string | null => {
  const target = document.querySelector(selector);
  if (!target) return null;
  return target.textContent ?? "";
};

// タグの属性のテキストを取得
const getTagAttrText = (selector: string, attr: string): string | null => {
  const target = document.querySelector(selector);
  if (!target) return null;
  return target.getAttribute(attr) ?? "";
};

// 取得したいセレクター群の連想配列をセットしてdomからメタのデータを取得する
export const getMetaValues = (metakeys: {
  [key: string]: string;
}): { [key: string]: string } => {
  const result: any = {};
  for (let key in metakeys) {
    if (!parseInt(metakeys[key], 10)) {
      continue;
    }
    const { selector, attribute } = metaList[key];
    result[key] =
      selector === "title"
        ? getTagInnerText(selector)
        : getTagAttrText(selector, attribute);
  }

  return result;
};
