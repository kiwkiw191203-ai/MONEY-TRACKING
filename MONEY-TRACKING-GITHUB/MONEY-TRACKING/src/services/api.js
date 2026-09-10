const API_URL=(import.meta.env.VITE_API_URL||'').trim();
export async function getTransactions(){
 if(!API_URL) return {success:true,data:[],total:0,demo:true};
 const url=new URL(API_URL); url.searchParams.set('action','get'); url.searchParams.set('sheet','Transactions');
 const r=await fetch(url.toString(),{headers:{Accept:'application/json'}});
 if(!r.ok) throw new Error(`API HTTP ${r.status}`);
 const j=await r.json(); if(!j.success) throw new Error(j.error||'API gagal'); return j;
}
