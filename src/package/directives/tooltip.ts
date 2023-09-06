import { DirectiveBinding } from "vue";

export type TooltipOptions = {
    text: string;
    position: 'top' | 'bottom' | 'left' | 'right';
  }

export function TooltipDirective(el:HTMLElement, binding:DirectiveBinding<TooltipOptions|string>) {
  el.setAttribute("data-pine-tooltip", typeof binding.value ==='string' ? binding.value: binding.value.text );
    el.classList.add('with-pine-tooltip');

    const position = typeof binding.value ==='string'? getPositionClass(binding.modifiers): binding.value.position;
   ['top','bottom','left','right'].forEach(dir=>{
     el.classList.remove(`pine-tooltip--${dir}`);
   })

  el.classList.add(`pine-tooltip--${position}`);
}

function getPositionClass(modifiers:{top?:boolean,bottom?:boolean,left?:boolean,right?:boolean}) {
  if (modifiers.top) {
      return 'top';
  } else if (modifiers.bottom) {
      return 'bottom';
  } else if (modifiers.left) {
      return 'left';
  } else if (modifiers.right) {
      return 'right';
  } 
      
  return 'top';
}