(this["webpackJsonpreact-test-work"]=this["webpackJsonpreact-test-work"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),i=c(9),s=c.n(i),r=(c(15),c(10)),d=c(4),l=c(5),o=c(0);function m(e){return Object(o.jsxs)("header",{className:"header_nav",children:[Object(o.jsx)("div",{children:Object(o.jsx)(l.b,{to:"/",children:Object(o.jsx)("h1",{className:"nav_link",children:"Shop"})})}),Object(o.jsxs)("div",{className:"cart_block",children:[Object(o.jsx)(l.b,{to:"/cart",children:Object(o.jsx)("img",{className:"header_cart",src:"https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-miscellaneous-kiranshastry-lineal-kiranshastry.png",alt:"Cart"})}),Object(o.jsx)(l.b,{className:"link_badge",to:"/cart",children:e.countCartItems?Object(o.jsx)("button",{className:"badge",children:e.countCartItems}):""})]})]})}function j(e){var t=e.product,c=e.onAdd;return Object(o.jsxs)("div",{className:"product_item",children:[Object(o.jsx)("img",{className:"product_img",src:t.image,alt:t.name}),Object(o.jsx)("h3",{className:"product_name",children:t.name}),Object(o.jsxs)("div",{className:"product_block",children:[Object(o.jsxs)("div",{className:"product_price",children:[t.price," $"]}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"product_cart_img",onClick:function(){return c(t.id)},src:"https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-shopping-cart-miscellaneous-kiranshastry-lineal-kiranshastry.png",alt:"Add To Cart"})})]})]})}function b(e){var t=e.products,c=e.onAdd,a=t.map((function(e){return Object(o.jsx)(j,{product:e,onAdd:c},e.id)}));return Object(o.jsxs)("main",{className:"main_section",children:[Object(o.jsx)("h2",{className:"section_name",children:"Product"}),Object(o.jsx)("div",{className:"product_list",children:a})]})}function u(e){var t=e.cartItems,c=e.onAdd,a=e.onRemove,n=t.reduce((function(e,t){return e+t.price}),0);return Object(o.jsxs)("div",{className:"section_cart",children:[Object(o.jsx)("h2",{className:"section_name",children:"Cart Items"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"cart_empty",children:0===t.length&&Object(o.jsxs)("div",{className:"text_empty",children:["Cart Is Empty",Object(o.jsx)("img",{className:"img_empty",src:"https://img.icons8.com/emoji/48/000000/pleading-face.png",alt:"emoji"})]})}),t.map((function(e){return Object(o.jsxs)("div",{className:"cart_product",children:[Object(o.jsxs)("div",{className:"item_name",children:[e.name,":"]}),Object(o.jsxs)("div",{className:"btn_control",children:[Object(o.jsx)("button",{onClick:function(){return a(e.id)},className:"btn_minus",children:"-"}),Object(o.jsx)("button",{onClick:function(){return c(e.id)},className:"btn_plus",children:"+"})]}),Object(o.jsxs)("div",{className:"item_qty",children:[e.qty," kg: ",e.price," $"]})]},e.id)})),0!==t.length&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"item_price",children:[Object(o.jsx)("div",{className:"item_total",children:Object(o.jsx)("strong",{children:"Total Price:"})}),Object(o.jsx)("div",{children:Object(o.jsxs)("strong",{children:[n.toFixed(2)," $"]})})]})]})]})]})}var h={products:[{id:"1",name:"Banana",price:10,image:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"},{id:"2",name:"Apple",price:8,image:"https://images.unsplash.com/photo-1630700499299-9ba22882142d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"},{id:"3",name:"Papaya",price:10,image:"https://images.unsplash.com/photo-1623492229905-ebc1202e8904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}]},x=c(2);var p=function(){var e=h.products,t=Object(a.useState)([]),c=Object(d.a)(t,2),n=c[0],i=c[1],s=function(e,t){return"Papaya"===e.name&&t%3===0?e.price-5:e.price},l=function(t){var c=n.find((function(e){return e.id===t})),a=e.find((function(e){return e.id===t}));if(c){var d=n.map((function(e){var n=c.qty+1,i={name:c.name,image:c.name,id:c.id,qty:n,price:c.price+s(a,n)};return e.id===t?i:e}));i(d)}else{var l={name:a.name,price:a.price,image:a.image,id:a.id,qty:1};i([].concat(Object(r.a)(n),[l]))}};return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(m,{countCartItems:n.length}),Object(o.jsx)("div",{className:"",children:Object(o.jsxs)(x.c,{children:[Object(o.jsx)(x.a,{exact:!0,path:"/",element:Object(o.jsx)(b,{products:e,onAdd:l})}),Object(o.jsx)(x.a,{exact:!0,path:"/cart",element:Object(o.jsx)(u,{cartItems:n,onAdd:l,onRemove:function(t){var c=n.find((function(e){return e.id===t})),a=e.find((function(e){return e.id===t}));1===c.qty?i(n.filter((function(e){return e.id!==t}))):i(n.map((function(e){var n=c.qty,i={name:c.name,image:c.name,id:c.id,qty:n-1,price:c.price-s(a,n)};return e.id===t?i:e})))}})})]})})]})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(l.a,{children:Object(o.jsx)(p,{})})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d9408573.chunk.js.map