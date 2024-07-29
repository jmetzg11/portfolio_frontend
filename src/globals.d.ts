declare const particlesJS: {
  load: (tagId: string, pathConfigJson: string, callback: () => void) => void;
  fn: {
    vendors: {
      destroypJS: () => void;
    };
  };
};
