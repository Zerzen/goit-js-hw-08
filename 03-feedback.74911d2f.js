!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,i,a,u,f,c,l=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function j(e){return l=e,f=setTimeout(h,t),s?S(e):u}function T(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=g();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?m(n,a-(e-l)):n}(e))}function w(e){return f=void 0,p&&r?S(e):(r=i=void 0,u)}function x(){var e=g(),n=T(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(d)return f=setTimeout(h,t),S(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},x.flush=function(){return void 0===f?u:w(g())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const S=document.querySelector(".feedback-form"),j=document.querySelector('[type="email"]'),T=document.querySelector('textarea[name="message"]'),h="feedback-form-email",w="feedback-form-textarea";!function(){const e=localStorage.getItem(h),t=localStorage.getItem(w);e&&(j.value=e);t&&(T.value=t)}(),S.addEventListener("submit",(function(e){e.preventDefault(),console.log(j.value),console.log(T.value),e.currentTarget.reset(),localStorage.removeItem(h),localStorage.removeItem(w)})),j.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem(h,t)}),500)),T.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem(w,t)}),500))}();
//# sourceMappingURL=03-feedback.74911d2f.js.map
