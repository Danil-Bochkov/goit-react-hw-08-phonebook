(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{3e3:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var a=t(9434),r=t(9869),s=t(4627),i="UserMenu_headerField__2tOJt",c="UserMenu_greating__w1whN",o="UserMenu_mailField__-ID10",l="UserMenu_avatar__7hYNP",u="UserMenu_mail__7INQQ",d=t(184);function m(){var e=(0,a.v9)(r.zD),n=(0,a.v9)(r.cQ);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:i,children:[(0,d.jsxs)("p",{className:c,children:["Hello, ",(0,d.jsxs)("b",{children:[e,"!"]})]}),(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("img",{className:l,src:s.M,alt:"Icon"}),(0,d.jsx)("p",{className:u,children:n})]})]})})}},4627:function(e,n,t){"use strict";t.d(n,{M:function(){return r}});var a=t(128),r=(new a.AvatarGenerator).generateRandomAvatar()},5064:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var a=t(181);var r=t(9434),s=t(2791),i=function(e){return e.contacts.items},c=function(e){return e.contacts.isLoading},o=function(e){return e.contacts.error},l=function(e){return e.filters},u=t(3634),d=t(4808),m=t(184);function f(e){var n=e.addContact;return(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target;n({name:t.elements.name.value,number:t.elements.number.value}),t.reset()},className:"formField",children:[(0,m.jsxs)("label",{className:"formField__label",children:["Name",(0,m.jsx)("input",{className:"formField__input",type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{className:"formField__label",children:["Number",(0,m.jsx)("input",{className:"formField__input",type:"tel",name:"number",placeholder:"111-11-11",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsx)("button",{type:"submit",className:"formField__btn",children:"Add Contact"})]})}var h=function(e){var n=e.message;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("p",{className:"message",children:n})})},v=function(e){var n=e.id,t=e.name,a=e.number,s=(0,r.I0)();return(0,m.jsxs)("div",{className:"contactsList__item",children:[(0,m.jsxs)("span",{className:"contactsList__info",children:[(0,m.jsxs)("b",{children:[t,":"]})," ",a]}),(0,m.jsx)("button",{className:"contactsList__btn",onClick:function(){return s((0,u.GK)(n))},children:"Delete"})]})},p=function(e){var n=e.contacts;return(0,m.jsx)("div",{className:"contactsField",children:(null===n||void 0===n?void 0:n.length)<0?(0,m.jsx)(h,{message:"You don't have any contact \ud83d\ude13"}):(0,m.jsx)("ul",{className:"contactsList",children:n.map((function(e){var n=e.id,t=e.name,a=e.number;return(0,m.jsx)("li",{children:(0,m.jsx)(v,{id:n,name:t,number:a})},n)}))})})},x=function(e){var n=e.handleChange,t=e.filter;return(0,m.jsx)("form",{className:"filterField",children:(0,m.jsxs)("label",{className:"filterField__label",children:["Find contacts by name",(0,m.jsx)("input",{className:"filterField__input",type:"text",name:"filter",placeholder:"Enter name",value:t,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})})},_=t(7214),j=t(3e3),b=t(8174);var N=function(){var e=(0,r.I0)(),n=(0,r.v9)(l),t=(0,r.v9)(i),h=(0,r.v9)(c),v=(0,r.v9)(o),N=function(e){var n,r=function(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,a.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){o=!0,i=e},f:function(){try{c||null==t.return||t.return()}finally{if(o)throw i}}}}(t);try{for(r.s();!(n=r.n()).done;){var s=n.value.name;if(s===e.name)return s}}catch(i){r.e(i)}finally{r.f()}return!1};return(0,s.useEffect)((function(){e((0,u.yF)())}),[e]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(j.Z,{}),(0,m.jsxs)("div",{className:"PhoneBook",children:[(0,m.jsxs)("div",{className:"container wrapperPhonebook",children:[(0,m.jsx)("h2",{className:"PhoneBook__title",children:"Phonebook"}),(0,m.jsx)(f,{addContact:function(n){N(n)?b.Am.error("".concat(n.name.split(" ").map((function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))})).join(" "),"'s contact already exists. Please, next time be more attentive to what you are trying to add")):e((0,u.uK)(n))}})]}),(0,m.jsxs)("div",{className:"container wrapperContacts",children:[(0,m.jsx)("h2",{className:"PhoneBook__title",children:"Contacts"}),(0,m.jsx)(x,{handleChange:function(n){e((0,d.a)(n.currentTarget.value))},filter:n}),h&&!v&&(0,m.jsx)(_.Z,{}),(0,m.jsx)(p,{contacts:function(e){return null===e||void 0===e?void 0:e.filter((function(e){var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(n.toLowerCase())}))}(t)})]})]})]})}},5042:function(){}}]);
//# sourceMappingURL=275.35175828.chunk.js.map