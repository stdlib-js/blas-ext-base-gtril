"use strict";var h=function(t,a){return function(){try{return a||t((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var j=h(function(L,R){
var C=require('@stdlib/ndarray-base-assert-is-row-major/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),H=require('@stdlib/math-base-special-fast-min/dist');function I(t,a,v,q,s,i,x,r,l,c,g){var f,m,e,n,u,o,b,w;if(f=q.data,m=r.data,e=q.accessors[0],n=r.accessors[1],u=x,o=g,C([s,i])){for(w=0;w<t;w++){for(b=0;b<=H(w+v,a-1);b++)n(m,o+b*c,e(f,u+b*i));u+=s,o+=l}return r}for(w=0;w<a;w++){for(b=G(0,w-v);b<t;b++)n(m,o+b*l,e(f,u+b*s));u+=i,o+=c}return r}R.exports=I
});var p=h(function(D,V){
var J=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/array-base-arraylike2object/dist'),K=require('@stdlib/math-base-special-fast-max/dist'),Q=require('@stdlib/math-base-special-fast-min/dist'),U=j();function W(t,a,v,q,s,i,x,r,l,c,g){var f,m,e,n,u,o;if(f=E(q),m=E(r),f.accessorProtocol||m.accessorProtocol)return U(t,a,v,f,s,i,x,m,l,c,g),r;if(e=x,n=g,J([s,i])){for(o=0;o<t;o++){for(u=0;u<=Q(o+v,a-1);u++)r[n+u*c]=q[e+u*i];e+=s,n+=l}return r}for(o=0;o<a;o++){for(u=K(0,o-v);u<t;u++)r[n+u*l]=q[e+u*s];e+=i,n+=c}return r}V.exports=W
});var O=h(function(A,F){
var X=require('@stdlib/blas-base-layout-resolve-str/dist'),Y=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=p();function _(t,a,v,q,s,i,x,r){var l,c,g,f,m,e,n;if(n=X(t),n===null)throw new TypeError(y('36hFx',t));if(l=Y(n),l?e=v:e=a,i<P(1,e))throw new RangeError(y('36hJL',e,i));if(r<P(1,e))throw new RangeError(y('36hGM',e,r));return l?(c=i,g=1,f=r,m=1):(c=1,g=i,f=1,m=r),Z(a,v,q,s,c,g,0,x,f,m,0)}F.exports=_
});var T=h(function(B,S){
var $=p();function M(t,a,v,q,s,i,x,r,l,c,g){return $(t,a,v,q,s,i,x,r,l,c,g)}S.exports=M
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=O(),d=T();k(z,"ndarray",d);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
