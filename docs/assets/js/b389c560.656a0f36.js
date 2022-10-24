"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[74568],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),f=s,h=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=n(87462),s=n(63366),o=(n(67294),n(3905)),a=["components"],i={id:"inspectors",title:"Inspectors",slug:"inspectors.html"},l=void 0,c={unversionedId:"assertions/inspectors",id:"version-5.3/assertions/inspectors",title:"Inspectors",description:"Inspectors allow us to test elements in a collection. They are extension functions for collections and arrays that test",source:"@site/versioned_docs/version-5.3/assertions/inspectors.md",sourceDirName:"assertions",slug:"/assertions/inspectors.html",permalink:"/docs/5.3/assertions/inspectors.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/assertions/inspectors.md",tags:[],version:"5.3",frontMatter:{id:"inspectors",title:"Inspectors",slug:"inspectors.html"},sidebar:"assertions",previous:{title:"Retry",permalink:"/docs/5.3/assertions/retry.html"},next:{title:"Assertion Mode",permalink:"/docs/5.3/assertions/assertion-mode.html"}},p={},m=[],u={toc:m};function f(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Inspectors allow us to test elements in a collection. They are extension functions for collections and arrays that test\nthat all, none or some of the elements pass the given assertions. For example, to test that a list of names contains\nat least two elements which have a length of 7 or more, we can do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val xs = listOf("sam", "gareth", "timothy", "muhammad")\nxs.forAtLeast(2) {\n    it.shouldHaveMinLength(7)\n}\n')),(0,o.kt)("p",null,"Similarly, if we wanted to asset that ",(0,o.kt)("em",{parentName:"p"},"no")," elements in a collection passed the assertions, we could do something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'xs.forNone {\n  it.shouldContain("x")\n  it.shouldStartWith("bb")\n}\n')),(0,o.kt)("p",null,"The full list of inspectors are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forAll")," which asserts every element passes the assertions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forNone")," which asserts no element passes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forOne")," which asserts only a single element passed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forAtMostOne")," which asserts that either 0 or 1 elements pass"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forAtLeastOne")," which asserts that 1 or more elements passed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forAtLeast(k)")," which is a generalization that k or more elements passed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forAtMost(k)")," which is a generalization that k or fewer elements passed"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forAny")," which is an alias for ",(0,o.kt)("inlineCode",{parentName:"li"},"forAtLeastOne")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forSome")," which asserts that between 1 and n-1 elements passed. Ie, if NONE pass or ALL pass then we consider that a failure."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forExactly(k)")," which is a generalization that exactly k elements passed. This is the basis for the implementation of the other methods")))}f.isMDXComponent=!0}}]);