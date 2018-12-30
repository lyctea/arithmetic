const flying = o => {
  let isFlying = false;
  
  return Object.assign({}, o, {
    fly () {
      isFlying = true;
      return this;
    },
    isFlying: () => isFlying,
    
    land () {
      isFlying = false,
      return this;
    }
  });
};
