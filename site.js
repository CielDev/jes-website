(function(){
  var root=document.documentElement,burger=document.getElementById("burger");
  function setMenu(o){root.classList.toggle("menu",o);burger.setAttribute("aria-expanded",o)}
  burger.addEventListener("click",function(){setMenu(true)});
  document.getElementById("drClose").addEventListener("click",function(){setMenu(false)});
  document.getElementById("scrim").addEventListener("click",function(){setMenu(false)});
  document.getElementById("drawer").addEventListener("click",function(e){if(e.target.closest("a"))setMenu(false)});
  addEventListener("keydown",function(e){if(e.key==="Escape")setMenu(false)});
  document.querySelectorAll("[data-copy]").forEach(function(b){
    var t=b.textContent;
    b.addEventListener("click",function(){
      navigator.clipboard.writeText(b.dataset.copy).then(function(){
        b.textContent="Copied!";
        setTimeout(function(){b.textContent=t},1800);
      }).catch(function(){});
    });
  });
})();
