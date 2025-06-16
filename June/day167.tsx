function deepFreeze<T>(obj: T): Readonly<T> {
  Object.getOwnPropertyNames(obj).forEach((key) => {
    const value = (obj as any)[key];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj);
}

const config = {
  api: {
    url: "https://example.com",
    timeout: 5000
  },
  theme: {
    dark: true
  }
};

const frozenConfig = deepFreeze(config);

(frozenConfig as any).api.url = "https://malicious.com";
console.log(frozenConfig.api.url);