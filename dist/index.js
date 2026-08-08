"use strict";var h=function(o,a){return function(){try{return a||o((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var j=h(function(L,R){
var C=require('@stdlib/ndarray-base-assert-is-row-major/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),H=require('@stdlib/math-base-special-fast-min/dist');function I(o,a,v,m,n,i,x,r,s,c,q){var f,l,e,b,u,t,g,w;if(f=m.data,l=r.data,e=m.accessors[0],b=r.accessors[1],u=x,t=q,C([n,i])){for(w=0;w<o;w++){for(g=0;g<=H(w+v,a-1);g++)b(l,t+g*c,e(f,u+g*i));u+=n,t+=s}return r}for(w=0;w<a;w++){for(g=G(0,w-v);g<o;g++)b(l,t+g*s,e(f,u+g*n));u+=i,t+=c}return r}R.exports=I
});var p=h(function(D,V){
var J=require('@stdlib/ndarray-base-assert-is-row-major/dist'),E=require('@stdlib/array-base-arraylike2object/dist'),K=require('@stdlib/math-base-special-fast-max/dist'),Q=require('@stdlib/math-base-special-fast-min/dist'),U=j();function W(o,a,v,m,n,i,x,r,s,c,q){var f,l,e,b,u,t;if(f=E(m),l=E(r),f.accessorProtocol||l.accessorProtocol)return U(o,a,v,f,n,i,x,l,s,c,q),r;if(e=x,b=q,J([n,i])){for(t=0;t<o;t++){for(u=0;u<=Q(t+v,a-1);u++)r[b+u*c]=m[e+u*i];e+=n,b+=s}return r}for(t=0;t<a;t++){for(u=K(0,t-v);u<o;u++)r[b+u*s]=m[e+u*n];e+=i,b+=c}return r}V.exports=W
});var O=h(function(A,F){
var X=require('@stdlib/blas-base-assert-is-layout/dist'),Y=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),P=require('@stdlib/math-base-special-fast-max/dist'),y=require('@stdlib/error-tools-fmtprodmsg/dist'),Z=p();function _(o,a,v,m,n,i,x,r){var s,c,q,f,l,e;if(!X(o))throw new TypeError(y('nullFx',o));if(s=Y(o),s?e=v:e=a,i<P(1,e))throw new RangeError(y('nullJL',e,i));if(r<P(1,e))throw new RangeError(y('nullGM',e,r));return s?(c=i,q=1,f=r,l=1):(c=1,q=i,f=1,l=r),Z(a,v,m,n,c,q,0,x,f,l,0)}F.exports=_
});var T=h(function(B,S){
var $=p();function M(o,a,v,m,n,i,x,r,s,c,q){return $(o,a,v,m,n,i,x,r,s,c,q)}S.exports=M
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=O(),d=T();k(z,"ndarray",d);module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
