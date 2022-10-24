"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[40786],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var o=n(87462),r=n(63366),s=(n(67294),n(3905)),i=["components"],a={id:"koin",title:"Koin",sidebar_label:"Koin",slug:"koin.html"},l=void 0,c={unversionedId:"extensions/koin",id:"extensions/koin",title:"Koin",description:"Koin",source:"@site/docs/extensions/koin.md",sourceDirName:"extensions",slug:"/extensions/koin.html",permalink:"/docs/next/extensions/koin.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/koin.md",tags:[],version:"current",frontMatter:{id:"koin",title:"Koin",sidebar_label:"Koin",slug:"koin.html"},sidebar:"extensions",previous:{title:"Current Instant Listeners",permalink:"/docs/next/extensions/instant.html"},next:{title:"WireMock",permalink:"/docs/next/extensions/wiremock.html"}},u={},p=[{value:"Koin",id:"koin",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"koin"},"Koin"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://insert-koin.io/"},"Koin DI Framework")," can be used with Kotest through the ",(0,s.kt)("inlineCode",{parentName:"p"},"KoinExtension")," extension."),(0,s.kt)("p",null,"To use the extension in your project, add the dependency to your project:"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.kotest.extensions/kotest-extensions-koin"},(0,s.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-extensions-koin.svg?label=latest%20release"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-extensions-koin/"},(0,s.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-extensions-koin.svg?label=latest%20snapshot"}))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},"io.kotest.extensions:kotest-extensions-koin:${version}\n")),(0,s.kt)("p",null,"With the dependency added, we can easily use Koin in our tests!"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class KotestAndKoin : FunSpec(), KoinTest {\n\n    override fun extensions() = listOf(KoinExtension(myKoinModule))\n\n    val userService by inject<UserService>()\n\n    init {\n        test("use userService") {\n            userService.getUser().username shouldBe "LeoColman"\n        }\n    }\n}\n')),(0,s.kt)("p",null,"By default, the extension will start/stop the Koin context between leaf tests.\nIf you are using a nested spec style (like DescribeSpec) and instead want the Koin context\nto persist over all leafs of a root tests (for example to share mocked declarations between tests),\nyou can specify the lifecycle mode as ",(0,s.kt)("inlineCode",{parentName:"p"},"KoinLifecycleMode.Root")," in the KoinExtension constructor."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-kotlin"},'class KotestAndKoin : DescribeSpec(), KoinTest {\n\n    override fun extensions() = listOf(KoinExtension(module = myKoinModule, mode = KoinLifecycleMode.Root))\n\n    val userService by inject<UserService>()\n\n    init {\n        describe("use userService") {\n            it("inside a leaf test") {\n                userService.getUser().username shouldBe "LeoColman"\n            }\n            it("this shares the same context") {\n                userService.getUser().username shouldBe "LeoColman"\n            }\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);