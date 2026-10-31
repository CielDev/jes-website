(function(){
  var box=document.getElementById("ipBox"),txt=document.getElementById("ipText"),num=document.getElementById("onlineNow");
  if(!box)return;
  box.addEventListener("click",function(){
    navigator.clipboard.writeText("jes.earth").then(function(){
      txt.textContent="Copied!";
      setTimeout(function(){txt.textContent="jes.earth"},1800);
    }).catch(function(){});
  });
  function online(){
    fetch("https://legacymap.jes.earth/up/world/Earth/0",{cache:"no-store"}).then(function(r){return r.json()}).then(function(j){num.textContent=j.currentcount}).catch(function(){});
  }
  online();setInterval(online,10000);
})();
