import { h } from 'snabbdom';

const createElement = (type, props = {}, ...children) => {
  return h(type, { props }, children);
};

const Mod = {
  createElement
};

export default Mod;
