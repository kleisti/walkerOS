var e="dataLayer",s="https://www.googletagmanager.com/gtm.js?id=",r={config:{},init(n){let o=n.custom||{},t=o.dataLayer||e;return window[t]=window[t]||[],window[t].push({"gtm.start":new Date().getTime(),event:"gtm.js"}),n.loadScript&&o.containerId&&d(o.containerId,o.domain||s,t),!0},push(n){window.dataLayer.push({...n,walker:!0})}};function d(n,o,t){let i=t!=e?"&l="+t:"",a=document.createElement("script");a.src=o+n+i,document.head.appendChild(a)}var c=r;export{c as default,r as destinationGoogleGTM};
