"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[36100],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64331:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"eventually",title:"Eventually",slug:"eventually.html"},s=void 0,u={unversionedId:"framework/concurrency/eventually",id:"version-5.2/framework/concurrency/eventually",title:"Eventually",description:"Starting with Kotest 4.6, a new experimental module has been added which contains improved",source:"@site/versioned_docs/version-5.2/framework/concurrency/eventually.md",sourceDirName:"framework/concurrency",slug:"/framework/concurrency/eventually.html",permalink:"/docs/5.2/framework/concurrency/eventually.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/framework/concurrency/eventually.md",tags:[],version:"5.2",frontMatter:{id:"eventually",title:"Eventually",slug:"eventually.html"},sidebar:"framework",previous:{title:"Nested Data Tests",permalink:"/docs/5.2/framework/datatesting/nested-tests.html"},next:{title:"Continually",permalink:"/docs/5.2/assertions/continually.html"}},c={},p=[{value:"API",id:"api",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Durations and Intervals",id:"durations-and-intervals",level:3},{value:"Initial Delay",id:"initial-delay",level:3},{value:"Retries",id:"retries",level:3},{value:"Specifying the exceptions to trap",id:"specifying-the-exceptions-to-trap",level:3},{value:"Predicates",id:"predicates",level:3},{value:"Listeners",id:"listeners",level:3},{value:"Sharing configuration",id:"sharing-configuration",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"New improved module",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Starting with Kotest 4.6, a new experimental module has been added which contains improved\nutilities for testing concurrent, asynchronous, or non-deterministic code. This module\nis ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest-framework-concurrency")," and is intended as a long term replacement for the previous module. The previous\nutilities are still available as part of the core framework.")),(0,o.kt)("p",null,"Testing non-deterministic code can be hard. You might need to juggle threads, timeouts, race conditions, and the\nunpredictability of when events are happening."),(0,o.kt)("p",null,"For example, if you were testing that an asynchronous file write was completed successfully, you need to wait until the\nwrite operation has completed and flushed to disk."),(0,o.kt)("p",null,"Some common approaches to these problems are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Using callbacks which are invoked once the operation has completed. The callback can be then used to assert that the\nstate of the system is as we expect. But not all operations provide callback functionality.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Block the thread using ",(0,o.kt)("inlineCode",{parentName:"p"},"Thread.sleep")," or suspend a function using ",(0,o.kt)("inlineCode",{parentName:"p"},"delay"),", waiting for the operation to complete.\nThe sleep threshold needs to be set high enough to be sure the operations will have completed on a fast or slow machine, and\neven when complete, the thread will stay blocked until the timeout has expired.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use a loop with a sleep and retry and a sleep and retry, but then you need to write boilerplate to track number of\niterations, handle certain exceptions and fail on others, ensure the total time taken has not exceeded the max and so\non.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use countdown latches and block threads until the latches are released by the non-determistic operation. This can\nwork well if you are able to inject the latches in the appropriate places, but just like callbacks, it isn't always\npossible to have the code to be tested integrate with a latch."))),(0,o.kt)("p",null,"As an alternative to the above solutions, kotest provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"eventually")," utility which solves the common use case of\n",(0,o.kt)("em",{parentName:"p"},'"',(0,o.kt)("strong",{parentName:"em"},"I expect this code to pass after a short period of time"),'"'),"."),(0,o.kt)("p",null,"Eventually does this by periodically invoking a given lambda until the timeout is eventually reached or too many iterations have passed. This is\nflexible and is perfect for testing nondeterministic code. Eventually can be customized in regardless to the types of\nexceptions to handle, how the lambda is considered a success or failure, with a listener, and so on."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"There are two ways to use eventually. The first is simply providing a duration in either milliseconds\n(or using the Kotlin ",(0,o.kt)("inlineCode",{parentName:"p"},"Duration")," type) followed by the code that should eventually pass without an exception being raised."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'eventually(5000) { // duration in millis\n  userRepository.getById(1).name shouldBe "bob"\n}\n')),(0,o.kt)("p",null,"The second is by providing a configuration block before the test code. This method should be used when you need to\nset more options than just the duration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'eventually({\n  duration = 5000\n  interval = 1000.fixed()\n}) {\n  userRepository.getById(1).name shouldBe "bob"\n}\n')),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"durations-and-intervals"},"Durations and Intervals"),(0,o.kt)("p",null,"The duration is the total amount of time to keep trying to pass the test. The ",(0,o.kt)("inlineCode",{parentName:"p"},"interval")," however allows us to\nspecify how often the test should be attempted. So if we set duration to 5 seconds, and interval to 250 millis,\nthen the test would be attempted at most ",(0,o.kt)("inlineCode",{parentName:"p"},"5000 / 250 = 20")," times."),(0,o.kt)("h3",{id:"initial-delay"},"Initial Delay"),(0,o.kt)("p",null,"Usually ",(0,o.kt)("inlineCode",{parentName:"p"},"eventually")," starts executing the test block immediately, but we can add an initial delay before the first\niteration using ",(0,o.kt)("inlineCode",{parentName:"p"},"initialDelay"),", such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'eventually({\n  duration = 5000\n  initialDelay = 1000\n}) {\n  userRepository.getById(1).name shouldBe "bob"\n}\n')),(0,o.kt)("h3",{id:"retries"},"Retries"),(0,o.kt)("p",null,"In addition to bounding the number of invocations by time, we can do so by iteration count. In the following example\nwe retry the operation 10 times, or until 8 seconds has expired."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'eventually({\n  duration = 8000\n  retries = 10\n  suppressExceptions = setOf(UserNotFoundException::class)\n}) {\n  userRepository.getById(1).name shouldNotBe "bob"\n}\n')),(0,o.kt)("h3",{id:"specifying-the-exceptions-to-trap"},"Specifying the exceptions to trap"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"eventually")," will ignore any ",(0,o.kt)("inlineCode",{parentName:"p"},"AssertionError")," that is thrown inside the function (note, that means it won't\ncatch ",(0,o.kt)("inlineCode",{parentName:"p"},"Error"),"). If you want to be more specific, you can tell ",(0,o.kt)("inlineCode",{parentName:"p"},"eventually")," to ignore specific exceptions and any others\nwill immediately fail the test."),(0,o.kt)("p",null,"For example, when testing that a user should exist in the database, a ",(0,o.kt)("inlineCode",{parentName:"p"},"UserNotFoundException")," might be thrown\nif the user does not exist. We know that eventually that user will exist. But if an ",(0,o.kt)("inlineCode",{parentName:"p"},"IOException")," is thrown, we don't\nwant to keep retrying as this indicates a larger issue than simply timing."),(0,o.kt)("p",null,"We can do this by specifying that ",(0,o.kt)("inlineCode",{parentName:"p"},"UserNotFoundException")," is an exception to suppress."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'eventually({\n  duration = 8000\n  suppressExceptions = setOf(UserNotFoundException::class)\n}) {\n  userRepository.getById(1).name shouldNotBe "bob"\n}\n')),(0,o.kt)("p",null,"As an alternative to passing in a set of exceptions, we can provide a function which is invoked, passing in the throw\nexception. This function should return true if the exception should be handled, or false if the exception should bubble out."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'eventually({\n  duration = 8000\n  suppressExceptionIf = { it is UserNotFoundException && it.username == "bob" }\n}) {\n  userRepository.getById(1).name shouldNotBe "bob"\n}\n')),(0,o.kt)("h3",{id:"predicates"},"Predicates"),(0,o.kt)("p",null,"In addition to verifying a test case eventually runs without throwing an exception, we can also verify that the\nreturn value of the test is as expected - and if not, consider that iteration a failure and try again."),(0,o.kt)("p",null,'For example, here we continue to append "x" to a string until the result of the previous iteration is equal to "xxx".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'var string = "x"\n\neventually({\n  duration = 5.seconds()\n  predicate = { it.result == "xxx" }\n}) {\n  string += "x"\n  string\n}\n')),(0,o.kt)("h3",{id:"listeners"},"Listeners"),(0,o.kt)("p",null,"We can attach a listener, which will be invoked on each iteration, with the state of that iteration. The state object\ncontains the last exception, last value, iteration count and so on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'eventually({\n  duration = 5.seconds()\n  listener = { println("iteration ${it.times} returned ${it.result}") }\n}) {\n  string += "x"\n  string\n}\n')),(0,o.kt)("h3",{id:"sharing-configuration"},"Sharing configuration"),(0,o.kt)("p",null,"Sharing the configuration for eventually is a breeze with the ",(0,o.kt)("inlineCode",{parentName:"p"},"EventuallyConfig"),' data class. Suppose you have classified the\noperations in your system to "slow" and "fast" operations. Instead of remembering which timing values were for slow and\nfast we can set up some objects to share between tests and customize them per suite. This is also a perfect time to show\noff the listener capabilities of ',(0,o.kt)("inlineCode",{parentName:"p"},"eventually")," which give you insight into the current value of the result of your\nproducer and the state of iterations!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val slow = EventuallyConfig<ServerResponse>(\n  duration = 5.minutes,\n  interval = 25.milliseconds.fibonacci(),\n  suppressExceptions = setOf(ServerException::class)\n)\n\nclass FooTests : StringSpec({\n  val logger = logger("FooTests")\n  val fSlow = slow.copy(listener = { i, t -> logger.info("Current $i after {${t.times} attempts") })\n\n  "server eventually provides a result for /foo" {\n    eventually(fSlow) {\n      fooApi()\n    }\n  }\n})\n\nclass BarTests : StringSpec({\n  val logger = logger("BarTests")\n  val bFast = fast.copy(listener = { i, t -> logger.info("Current $i after {${t.times} attempts") })\n\n  "server eventually provides a result for /bar" {\n    eventually(bFast) {\n      barApi()\n    }\n  }\n})\n\n')),(0,o.kt)("p",null,"Here we can see sharing of configuration can be useful to reduce duplicate code while allowing flexibility for things\nlike custom logging per test suite for clear test logs."))}h.isMDXComponent=!0}}]);