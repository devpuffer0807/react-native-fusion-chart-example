export default{"initial.dataset.pie3d":function(){return{"group.appearing":a=>'plots'===a.attr.name?[{initialAttr:{opacity:'0'},finalAttr:{opacity:'1'},slot:'plot'}]:[{initialAttr:{opacity:'1'},finalAttr:{opacity:'1'},slot:'final'}],"slice.appearing":[{initialAttr:{opacity:'1'},slot:'plot'}],"label.updating":[{initialAttr:{opacity:'1'},finalAttr:{opacity:'1'},slot:'final'}],"label.appearing":[{initialAttr:{opacity:'0'},finalAttr:{opacity:'1'},slot:'final'}],"connector.updating":a=>[{initialAttr:{path:a.el.attr('path')||a.attr.path,opacity:a.el.attr('opacity')},finalAttr:{path:a.attr.path},slot:'final'}],"connector.appearing":a=>{let b;return b='string'==typeof a.el?{opacity:'0'}:{path:a.attr.path,opacity:'0'},[{initialAttr:b,slot:'final'}]},"connector-sliced.updating":a=>[{initialAttr:{path:a.el.attr('path')},finalAttr:{path:a.attr.path},slot:'plot'}],"label-sliced.updating":a=>[{initialAttr:{x:a.el.attr('x'),y:a.el.attr('y')},slot:'plot'}],"*":null}}};