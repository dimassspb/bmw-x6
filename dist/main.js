(()=>{"use strict";!function(){const e=document.querySelectorAll(".feature__link"),s=document.querySelectorAll(".feature-sub");e.forEach(((t,a)=>{t.addEventListener("click",(()=>{s[a].classList.contains("hidden")?(s.forEach((e=>{e.classList.add("hidden")})),e.forEach((e=>{e.classList.remove("feature__link_active")})),s[a].classList.remove("hidden"),t.classList.add("feature__link_active")):(s[a].classList.add("hidden"),e[a].classList.remove("feature__link_active"))}))}))}()})();