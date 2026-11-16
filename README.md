# Sales-lead-management
Internal CRM and Sales Management System 
[sales-performance.html](https://github.com/user-attachments/files/34900939/sales-performance.html)
[sales-performance.html](https://github.com/user-attachments/files/34901072/sales-performance.html)
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Digiplus | Sales Performance</title>
<style>
:root{--navy:#111827;--teal:#20aaa2;--bg:#f4f6fa;--ink:#172033;--muted:#778399;--line:#e7ebf1}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font-family:Inter,Arial,sans-serif}
.sidebar{position:fixed;inset:0 auto 0 0;width:235px;background:var(--navy);color:#fff;padding:25px 18px}.brand{font-size:23px;font-weight:800}.brand span{color:#36c5bd}.sub{font-size:10px;color:#9ca3af;letter-spacing:1px;margin:7px 0 34px}
.nav{display:block;color:#cbd5e1;text-decoration:none;padding:12px;border-radius:8px;margin:6px 0;font-size:14px}.nav.active,.nav:hover{background:#26364c;color:#fff}
main{margin-left:235px;padding:28px;max-width:1600px}header{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:24px}h1{font-size:25px;margin:0 0 7px}.muted{font-size:13px;color:var(--muted)}.profile{background:white;border:1px solid var(--line);padding:10px 14px;border-radius:9px;font-size:13px}
.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:20px 0}.stat,.panel{background:#fff;border:1px solid var(--line);border-radius:12px;padding:17px}.stat small{color:var(--muted)}.stat strong{display:block;font-size:24px;margin-top:9px}
.toolbar{display:flex;gap:10px;flex-wrap:wrap;margin:18px 0}input,select{font:inherit;border:1px solid #dce2eb;border-radius:8px;padding:11px 12px;background:white;color:var(--ink);width:100%;outline:none}.search{flex:1;min-width:210px}
button{border:0;border-radius:8px;padding:11px 15px;background:var(--teal);color:white;font-weight:650;cursor:pointer}button.secondary{background:#e9edf3;color:#344054}button.danger{background:#fff0ee;color:#b54736}
.grid{display:grid;grid-template-columns:1.15fr .85fr;gap:14px;margin:18px 0}.panel h2{font-size:16px;margin:0 0 15px}.barrow{display:grid;grid-template-columns:110px 1fr 95px;gap:10px;align-items:center;margin:13px 0;font-size:12px}.track{height:10px;border-radius:20px;background:#edf0f4;overflow:hidden}.fill{height:100%;background:var(--teal);border-radius:20px}.barvalue{text-align:right;font-weight:650}
.tablebox{background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden}.tablehead{padding:18px;border-bottom:1px solid var(--line);display:flex;justify-content:space-between;gap:12px;align-items:center}.tablewrap{overflow:auto}
table{border-collapse:collapse;width:100%;min-width:950px}th,td{text-align:left;padding:13px 14px;border-bottom:1px solid #edf0f4;font-size:12px}th{color:var(--muted);background:#fafbfc;font-weight:650}
.pill{display:inline-block;padding:5px 9px;border-radius:20px;font-size:11px;background:#edf2f7;color:#475467}.green{background:#e7f6ef;color:#16794f}.orange{background:#fff4e5;color:#a15c00}
.actions{display:flex;gap:6px}.actions button{padding:7px 9px;font-size:11px}.empty{text-align:center;padding:30px;color:var(--muted)}.notice{font-size:12px;color:#667085;margin:14px 0 0}
.modal{display:none;position:fixed;inset:0;background:#10182880;align-items:center;justify-content:center;padding:18px;z-index:5}.modal.open{display:flex}.dialog{background:white;border-radius:14px;width:min(620px,100%);max-height:90vh;overflow:auto;padding:22px}
.formgrid{display:grid;grid-template-columns:1fr 1fr;gap:13px}.field{display:flex;flex-direction:column;gap:6px}.field label{font-size:12px;font-weight:650;color:#475467}.field.full{grid-column:1/-1}.modalhead{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.modalhead h2{margin:0;font-size:19px}.modalfoot{display:flex;justify-content:flex-end;gap:8px;margin-top:18px}
@media(max-width:950px){.sidebar{width:190px}main{margin-left:190px;padding:19px}.stats{grid-template-columns:repeat(2,1fr)}.grid{grid-template-columns:1fr}}
@media(max-width:650px){.sidebar{position:static;width:100%;height:auto}.sub{margin-bottom:15px}.nav{display:inline-block;margin:2px;padding:9px}main{margin:0;padding:15px}header{align-items:flex-start}.stats{gap:8px}.stat{padding:13px}.stat strong{font-size:20px}.formgrid{grid-template-columns:1fr}.field.full{grid-column:auto}}
</style></head>
<body>
<aside class="sidebar"><div class="brand">DIGI<span>PLUS</span></div><div class="sub">LEAD MANAGEMENT SYSTEM</div>
<a class="nav" href="index.html">▦ &nbsp; Dashboard</a><a class="nav" href="leads.html">♙ &nbsp; Lead Database</a><a class="nav" href="follow-up.html">◷ &nbsp; Follow-up</a><a class="nav" href="lost-sales.html">↘ &nbsp; Lost Sales</a><a class="nav active" href="sales-performance.html">▥ &nbsp; Sales Performance</a></aside>
<main>
<header><div><h1>Sales Performance</h1><div class="muted">Pantau pencapaian target, revenue, conversion, dan performa tim sales</div></div><div class="profile">Demo Workspace · Admin</div></header>
<section class="stats">
<div class="stat"><small>Total Revenue</small><strong id="revenue">Rp0</strong></div><div class="stat"><small>Total Target</small><strong id="target">Rp0</strong></div><div class="stat"><small>Target Achievement</small><strong id="achievement">0%</strong></div><div class="stat"><small>Lead Conversion</small><strong id="conversion">0%</strong></div>
</section>
<div class="toolbar"><input id="search" class="search" placeholder="Cari nama sales atau periode..."><select id="periodFilter" style="max-width:190px"><option value="">Semua periode</option></select><button onclick="openForm()">+ Tambah Data Sales</button></div>
<div class="grid">
<section class="panel"><h2>Target Achievement per Sales</h2><div id="bars"><div class="empty">Belum ada data performa sales.</div></div></section>
<section class="panel"><h2>Team Overview</h2><div class="muted">Ringkasan berdasarkan data yang dicatat</div><div style="display:flex;justify-content:space-between;margin-top:20px"><span class="muted">Sales tercatat</span><strong id="salesCount">0</strong></div><div style="display:flex;justify-content:space-between;margin-top:15px"><span class="muted">Total leads</span><strong id="leadsCount">0</strong></div><div style="display:flex;justify-content:space-between;margin-top:15px"><span class="muted">Deal tercatat</span><strong id="dealsCount">0</strong></div><div style="display:flex;justify-content:space-between;margin-top:15px"><span class="muted">Rata-rata achievement</span><strong id="avgAchievement">0%</strong></div></section>
</div>
<section class="tablebox"><div class="tablehead"><div><strong>Sales Performance Records</strong><div class="muted" style="margin-top:4px">Input target dan hasil per sales per periode</div></div><button class="secondary" onclick="exportCSV()">Export CSV</button></div>
<div class="tablewrap"><table><thead><tr><th>Sales</th><th>Periode</th><th>Target</th><th>Revenue</th><th>Achievement</th><th>Leads</th><th>Deals</th><th>Conversion</th><th>Aksi</th></tr></thead><tbody id="rows"></tbody></table><div id="empty" class="empty" style="display:none">Belum ada data performa. Klik “Tambah Data Sales” untuk memulai.</div></div></section>
<p class="notice">Prototype portofolio: angka target, revenue, leads, dan deals dimasukkan sebagai data demo. Data belum ditarik otomatis dari Lead Database, Lost Sales, atau Follow-up. Gunakan data fiktif sampai integrasi database dan role access selesai.</p>
</main>
<div class="modal" id="modal"><div class="dialog"><div class="modalhead"><h2 id="formTitle">Tambah Data Sales</h2><button class="secondary" onclick="closeForm()">✕</button></div>
<form id="form"><input type="hidden" id="recordId"><div class="formgrid">
<div class="field"><label>Nama sales *</label><input id="salesName" required placeholder="Contoh: Sales Demo A"></div><div class="field"><label>Periode *</label><input id="period" type="month" required></div>
<div class="field"><label>Target revenue (Rp) *</label><input id="targetValue" type="number" min="0" required placeholder="100000000"></div><div class="field"><label>Actual revenue (Rp) *</label><input id="actualValue" type="number" min="0" required placeholder="75000000"></div>
<div class="field"><label>Jumlah leads *</label><input id="leadCount" type="number" min="0" required value="0"></div><div class="field"><label>Jumlah deals *</label><input id="dealCount" type="number" min="0" required value="0"></div>
</div><div class="modalfoot"><button type="button" class="secondary" onclick="closeForm()">Batal</button><button type="submit">Simpan Data</button></div></form></div></div>
<script>
const KEY='digiplus_demo_sales_performance_v1';let records=JSON.parse(localStorage.getItem(KEY)||'[]');
const rupiah=n=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n||0);
const pct=(a,b)=>b>0?(a/b*100):0;const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function save(){localStorage.setItem(KEY,JSON.stringify(records));render()}
function render(){
 const q=search.value.toLowerCase(),f=periodFilter.value;const filtered=records.filter(x=>(!f||x.period===f)&&[x.salesName,x.period].join(' ').toLowerCase().includes(q));
 const rev=records.reduce((s,x)=>s+Number(x.actualValue),0),tar=records.reduce((s,x)=>s+Number(x.targetValue),0),leads=records.reduce((s,x)=>s+Number(x.leadCount),0),deals=records.reduce((s,x)=>s+Number(x.dealCount),0);
 revenue.textContent=rupiah(rev);target.textContent=rupiah(tar);achievement.textContent=pct(rev,tar).toFixed(1)+'%';conversion.textContent=pct(deals,leads).toFixed(1)+'%';
 salesCount.textContent=new Set(records.map(x=>x.salesName)).size;leadsCount.textContent=leads;dealsCount.textContent=deals;avgAchievement.textContent=(records.length?records.reduce((s,x)=>s+pct(Number(x.actualValue),Number(x.targetValue)),0)/records.length:0).toFixed(1)+'%';
 const periods=[...new Set(records.map(x=>x.period))].sort().reverse();const current=periodFilter.value;periodFilter.innerHTML='<option value="">Semua periode</option>'+periods.map(p=>`<option value="${esc(p)}">${esc(p)}</option>`).join('');periodFilter.value=current;
 empty.style.display=filtered.length?'none':'block';
 rows.innerHTML=filtered.map(x=>{const a=pct(Number(x.actualValue),Number(x.targetValue)),c=pct(Number(x.dealCount),Number(x.leadCount));return `<tr><td><strong>${esc(x.salesName)}</strong></td><td>${esc(x.period)}</td><td>${rupiah(x.targetValue)}</td><td>${rupiah(x.actualValue)}</td><td><span class="pill ${a>=100?'green':a>=75?'orange':''}">${a.toFixed(1)}%</span></td><td>${x.leadCount}</td><td>${x.dealCount}</td><td>${c.toFixed(1)}%</td><td><div class="actions"><button class="secondary" onclick="editRecord('${x.id}')">Edit</button><button class="danger" onclick="removeRecord('${x.id}')">Hapus</button></div></td></tr>`}).join('');
 const grouped={};records.forEach(x=>{const k=x.salesName;grouped[k]??={target:0,actual:0};grouped[k].target+=Number(x.targetValue);grouped[k].actual+=Number(x.actualValue)});
 const ranked=Object.entries(grouped).sort((a,b)=>pct(b[1].actual,b[1].target)-pct(a[1].actual,a[1].target));
 bars.innerHTML=ranked.length?ranked.map(([name,v])=>{const a=pct(v.actual,v.target);return `<div class="barrow"><strong>${esc(name)}</strong><div class="track"><div class="fill" style="width:${Math.min(a,100)}%"></div></div><div class="barvalue">${a.toFixed(1)}%</div></div>`}).join(''):'<div class="empty">Belum ada data performa sales.</div>';
}
function openForm(){form.reset();recordId.value='';period.value=new Date().toISOString().slice(0,7);formTitle.textContent='Tambah Data Sales';modal.classList.add('open')}
function closeForm(){modal.classList.remove('open')}
function editRecord(id){const x=records.find(a=>a.id===id);if(!x)return;openForm();formTitle.textContent='Edit Data Sales';for(const [k,v] of Object.entries({recordId:x.id,salesName:x.salesName,period:x.period,targetValue:x.targetValue,actualValue:x.actualValue,leadCount:x.leadCount,dealCount:x.dealCount}))document.getElementById(k).value=v??''}
form.addEventListener('submit',e=>{e.preventDefault();const id=recordId.value;const leadsNum=Number(leadCount.value),dealsNum=Number(dealCount.value);if(dealsNum>leadsNum){alert('Jumlah deals tidak boleh melebihi jumlah leads.');return}const x={id:id||crypto.randomUUID(),salesName:salesName.value.trim(),period:period.value,targetValue:Number(targetValue.value),actualValue:Number(actualValue.value),leadCount:leadsNum,dealCount:dealsNum};if(id)records=records.map(a=>a.id===id?x:a);else records.unshift(x);save();closeForm()});
function removeRecord(id){if(confirm('Hapus data performa ini?')){records=records.filter(x=>x.id!==id);save()}}
function exportCSV(){const cols=['Sales','Periode','Target Revenue','Actual Revenue','Achievement (%)','Leads','Deals','Conversion (%)'];const data=records.map(x=>[x.salesName,x.period,x.targetValue,x.actualValue,pct(x.actualValue,x.targetValue).toFixed(1),x.leadCount,x.dealCount,pct(x.dealCount,x.leadCount).toFixed(1)]);const csv=[cols,...data].map(r=>r.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}));a.download='digiplus-sales-performance-demo.csv';a.click();URL.revokeObjectURL(a.href)}
search.addEventListener('input',render);periodFilter.addEventListener('change',render);render();
</script></body></html>
