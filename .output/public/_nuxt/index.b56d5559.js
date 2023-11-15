import{d as l,o as a,b as n,r as d,e as s,t as c,_ as h,c as p,a as t,f as m,F as g,g as u,h as x}from"./entry.68cd9405.js";const y=""+globalThis.__publicAssetsURL("img/dev.svg"),v=""+globalThis.__publicAssetsURL("img/nodejs.png"),f=""+globalThis.__publicAssetsURL("img/arduino.png"),b=""+globalThis.__publicAssetsURL("img/vue.png");var i=l({name:"VueWriter",props:{array:{type:Array,required:!0},eraseSpeed:{type:Number,default:100},typeSpeed:{type:Number,default:200},delay:{type:Number,default:2e3},intervals:{type:Number,default:500},start:{type:Number,default:0},caret:{type:String,default:"cursor"},iterations:{type:Number,default:0}},data:function(){return{typeValue:"",count:0,typeStatus:!1,arrayIndex:0,charIndex:0}},methods:{typewriter:function(){var r=0;if(this.charIndex<this.array[this.arrayIndex].length)this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.array[this.arrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typewriter,this.typeSpeed);else{if(this.count+=1,this.count===this.array.length&&(r+=1,r===this.iterations))return this.typeStatus=!1;this.typeStatus=!1,setTimeout(this.eraser,this.delay)}},eraser:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.array[this.arrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraser,this.eraseSpeed)):(this.typeStatus=!1,this.arrayIndex+=1,this.arrayIndex>=this.array.length&&(this.arrayIndex=0),setTimeout(this.typewriter,this.typeSpeed+this.intervals))}},created:function(){setTimeout(this.typewriter,this.start)}}),w={class:"is-typed"},_={class:"typed"};function k(e,r,o,P,$,W){return a(),n("div",w,[d(e.$slots,"default"),s("span",_,c(e.typeValue),1),s("span",{class:e.caret+" "+{typing:e.typeStatus}}," ",2)])}i.render=k;var S=function(){var e=i;return e.install=function(r){r.component("VueWriter",e)},e}();const I=S,A={class:"md:container md:mx-auto"},T={class:"flex flex-col items-center mt-10 justify-center gap-2 sm:flex-row sm:mt-10"},j={class:"w-full text-left md:w-1/3"},V=t("h1",{class:"text-3xl text-center md:text-3xl xl:text-4xl sm:text-left text-ternary-dark dark:text-primary-light"},[u(" Hello there, I am "),t("strong",null," Charles Kariuki Wahome")],-1),N=t("div",{class:"float-right w-full text-right md:w-1/3"},[t("img",{src:y,alt:"Developer"})],-1),C=x('<section class="md:py-5 md:my-5"><div class="container"><div><div class="text-center"><p class="mb-2 text-2xl font-semibold font-general-semibold sm:text-5xl text-ternary-dark"> Projects Portfolio</p></div><div class="text-center"><p class="mb-2 text-xl">Below are some of the projects I have worked on:</p></div><div class="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10"><a href="https://github.com/realcapobambino/freegames-express" class="mb-10 duration-500 shadow-lg cursor-pointer rounded-xl hover:grayscale-0 grayscale hover:shadow-2xl sm:mb-0 bg-secondary-light" aria-label="Single Project"><div><img src="'+v+'" alt="Gamers&#39; Haven" class="border-none rounded-t-xl"></div><div class="px-4 py-6 text-center"><p class="mb-2 text-xl font-semibold font-general-semibold text-ternary-dark"> Gamers&#39; Haven</p><span class="text-lg font-general-medium text-ternary-dark">Web Application - NodeJs, ExpressJs, Tailwind </span></div></a><a href="https://github.com/realcapobambino/access-control-arduino" class="mb-10 duration-500 shadow-lg cursor-pointer rounded-xl hover:grayscale-0 grayscale hover:shadow-2xl sm:mb-0 bg-secondary-light" aria-label="Single Project"><div><img src="'+f+'" alt="Arduino Access Control" class="border-none rounded-t-xl"></div><div class="px-4 py-6 text-center"><p class="mb-2 text-xl font-semibold font-general-semibold text-ternary-dark"> RFID Access Control</p><span class="text-lg font-general-medium text-ternary-dark">Hardware(IoT) - Arduino, C++</span></div></a><a href="https://github.com/realcapobambino/ip-tracker-vue3" class="mb-10 duration-500 shadow-lg cursor-pointer rounded-xl hover:grayscale-0 grayscale hover:shadow-2xl sm:mb-0 bg-secondary-light" aria-label="Single Project"><div><img src="'+b+'" alt="Project Management UI" class="border-none rounded-t-xl"></div><div class="px-4 py-6 text-center"><p class="mb-2 text-xl font-semibold font-general-semibold text-ternary-dark"> IP Tracker</p><span class="text-lg font-general-medium text-ternary-dark">Web Application - VueJs, Tailwind</span></div></a></div></div></div></section><section><div class="container mx-auto"><div class="pt-20 pb-8 mt-20 border-t-2 sm:pt-30 border-primary-light"><div class="flex flex-col items-center justify-center mb-12 sm:mb-20"><p class="mb-5 text-3xl font-semibold font-general-semibold sm:text-4xl text-primary-dark"> Follow me </p><ul class="flex gap-4 sm:gap-8"><a href="https://www.charleswahome.me/" target="__blank" class="p-4 text-gray-400 duration-500 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 bg-gray-50 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 feather feather-globe sm:w-8 sm:h-8"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></a><a href="https://github.com/realcapobambino" target="__blank" class="p-4 text-gray-400 duration-500 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 bg-gray-50 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 feather feather-github sm:w-8 sm:h-8"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a><a href="https://twitter.com/realcapobambino" target="__blank" class="p-4 text-gray-400 duration-500 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 bg-gray-50 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 feather feather-twitter sm:w-8 sm:h-8"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a><a href="https://www.linkedin.com/in/charleswahome" target="__blank" class="p-4 text-gray-400 duration-500 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 bg-gray-50 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 feather feather-linkedin sm:w-8 sm:h-8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></ul></div></div></div></section>',2),B={__name:"index",setup(e){return(r,o)=>(a(),p(g,null,[t("div",A,[t("section",T,[t("div",j,[V,s(m(I),{class:"mt-2 text-lg leading-none text-center text-gray-400 font-general-medium sm:text-xl xl:text-2xl sm:text-left",array:["Full-Stack Developer","Linux Enthusiast","Gaming Enthusiast"],eraseSpeed:50,typeSpeed:100})]),N])]),C],64))}},L=h(B,[["__file","/home/karl/carl/git/portfolio/pages/index.vue"]]);export{L as default};
//# sourceMappingURL=index.b56d5559.js.map
