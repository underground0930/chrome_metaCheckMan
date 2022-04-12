export const defaultMetaKeys: { [key: string]: string } = {
  title: "1",
  lang: "1",
  charset: "1",
  keywords: "1",
  description: "1",
  shortcut: "1",
  icon: "1",
  "apple-touch-icon": "1",
  "og:site_name": "1",
  "og:title": "1",
  "og:description": "1",
  "og:url": "1",
  "og:type": "1",
  "og:image": "1",
  "twitter:card": "1",
  "twitter:url": "1",
  "twitter:site": "1",
  "twitter:description": "1",
  "twitter:image": "1",
};

export const metaList: {
  [key: string]: {
    selector: string;
    attribute: string;
    type?: string;
    group: "" | "og" | "twitter";
  };
} = {
  title: {
    selector: "title",
    attribute: "",
    group: "",
  },
  lang: {
    selector: "html",
    attribute: "lang",
    group: "",
  },
  charset: {
    selector: "meta[charset]",
    attribute: "charset",
    group: "",
  },
  keywords: {
    selector: "meta[name='keywords']",
    attribute: "content",
    group: "",
  },
  description: {
    selector: "meta[name='description']",
    attribute: "content",
    group: "",
  },
  shortcut: {
    selector: "link[rel*='shortcut']",
    attribute: "href",
    type: "link",
    group: "",
  },
  icon: {
    selector: "link[rel*='icon']",
    attribute: "href",
    type: "link",
    group: "",
  },
  "apple-touch-icon": {
    selector: "link[rel*='apple-touch-icon']",
    attribute: "href",
    type: "link",
    group: "",
  },
  "og:site_name": {
    selector: "meta[property='og:site_name']",
    attribute: "content",
    group: "",
  },
  "og:title": {
    selector: "meta[property='og:title']",
    attribute: "content",
    group: "og",
  },
  "og:description": {
    selector: "meta[property='og:description']",
    attribute: "content",
    group: "og",
  },
  "og:url": {
    selector: "meta[property='og:url']",
    attribute: "content",
    type: "link",
    group: "og",
  },
  "og:type": {
    selector: "meta[property='og:type']",
    attribute: "content",
    group: "og",
  },
  "og:image": {
    selector: "meta[property='og:image']",
    attribute: "content",
    type: "img",
    group: "og",
  },
  "twitter:card": {
    selector: "meta[name='twitter:card']",
    attribute: "content",
    group: "twitter",
  },
  "twitter:url": {
    selector: "meta[name='twitter:url']",
    attribute: "content",
    type: "link",
    group: "twitter",
  },
  "twitter:site": {
    selector: "meta[name='twitter:site']",
    attribute: "content",
    group: "twitter",
  },
  "twitter:description": {
    selector: "meta[name='twitter:description']",
    attribute: "content",
    group: "twitter",
  },
  "twitter:image": {
    selector: "meta[name='twitter:image']",
    attribute: "content",
    type: "img",
    group: "twitter",
  },
};
