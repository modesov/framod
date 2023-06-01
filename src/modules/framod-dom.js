import * as snabbdom from 'snabbdom';
import { propsModule } from 'snabbdom';

const reconcile = snabbdom.init([propsModule]);

let rootVNode;
const render = (el, rootDomElement) => {
  if (rootVNode == null) {
    rootVNode = rootDomElement;
  }

  rootVNode = reconcile(rootVNode, el);
}

const ModDom =  { 
  render
};

export default ModDom;
