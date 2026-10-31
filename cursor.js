/* after 10 seconds without moving, the spear cursor spins until the mouse moves again */
(function(){
  if(matchMedia("(hover:none)").matches||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  var src=document.currentScript.src.replace("cursor.js","img/spear.png"),x=-1,y=-1,timer,spinning=false;
  var st=document.createElement("style");
  st.textContent="html.afk,html.afk *{cursor:none!important}#afkSpear{position:fixed;z-index:100001;width:32px;height:32px;margin:-16px 0 0 -16px;pointer-events:none;image-rendering:pixelated;display:none;animation:afkSpin 1.4s linear infinite}html.afk #afkSpear{display:block}@keyframes afkSpin{to{transform:rotate(360deg)}}";
  document.head.appendChild(st);
  var img=new Image();img.id="afkSpear";img.alt="";img.src=src;document.documentElement.appendChild(img);
  function start(){
    if(x<0||document.hidden)return arm();
    img.style.left=x+"px";img.style.top=y+"px";
    spinning=true;document.documentElement.classList.add("afk");
  }
  function arm(){clearTimeout(timer);timer=setTimeout(start,10000)}
  function wake(e){
    if(e.clientX!=null){x=e.clientX;y=e.clientY}
    if(spinning){spinning=false;document.documentElement.classList.remove("afk")}
    arm();
  }
  ["mousemove","mousedown","wheel","keydown"].forEach(function(t){addEventListener(t,wake,{passive:true})});
  document.addEventListener("mouseleave",function(){x=-1});
})();
