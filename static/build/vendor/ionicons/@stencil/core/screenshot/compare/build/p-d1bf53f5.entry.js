import{r as t,h as i,g as s}from"./p-fbbae598.js";import{A as h}from"./p-e2efe0df.js";import{m as a,q as e}from"./p-9b6a9315.js";class r{constructor(i){t(this,i),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=a(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){var i,s;if(!e(t)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push((s=this.root,"/"==(i=this.url).charAt(0)&&"/"==s.charAt(s.length-1)?s.slice(0,s.length-1)+i:s+i))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),i(this.custom,Object.assign({},t),i("slot",null))}get el(){return s(this)}static get watchers(){return{location:["computeMatch"]}}}h.injectProps(r,["history","location","root"]);export{r as stencil_route_link}
