import{_ as a,c as s,o as n,a2 as e}from"./chunks/framework.4_bZ6nyl.js";const h=JSON.parse('{"title":"[SQL Server]分頁技巧(Pagination)","description":"","frontmatter":{},"headers":[],"relativePath":"WorkSkill/SQL Server Pagination.md","filePath":"WorkSkill/SQL Server Pagination.md"}'),p={name:"WorkSkill/SQL Server Pagination.md"},i=e(`<h1 id="sql-server-分頁技巧-pagination" tabindex="-1">[SQL Server]分頁技巧(Pagination) <a class="header-anchor" href="#sql-server-分頁技巧-pagination" aria-label="Permalink to &quot;[SQL Server]分頁技巧(Pagination)&quot;">​</a></h1><h6 id="tags-工作" tabindex="-1">tags: <code>工作</code> <a class="header-anchor" href="#tags-工作" aria-label="Permalink to &quot;tags: \`工作\`&quot;">​</a></h6><p>參考連結：<a href="https://ithelp.ithome.com.tw/articles/10190424" target="_blank" rel="noreferrer">https://ithelp.ithome.com.tw/articles/10190424</a></p><p><strong>使用語法</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>SELECT *</span></span>
<span class="line"><span>FROM XXXTable</span></span>
<span class="line"><span>--如果要使用分頁語法，一定要加上排序，不然會出錯。</span></span>
<span class="line"><span>ORDER BY ID </span></span>
<span class="line"><span>--這一行語法是指「略過」前n行，列出從第k行開始的8筆資料。</span></span>
<span class="line"><span>OFFSET n ROWS　</span></span>
<span class="line"><span>FETCH NEXT k ROWS ONLY</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>取得分頁數</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>select ceiling(count(1) / PageSize) TotalPages </span></span>
<span class="line"><span>  from XXXTable</span></span>
<span class="line"><span>-- ceiling 無條件進入</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>分頁語法</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>select * from XXXTable</span></span>
<span class="line"><span>order by id desc</span></span>
<span class="line"><span>OFFSET $offset$ ROWS FETCH NEXT $pageSize$ ROWS ONLY</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>$offset$(略過筆數) = (PageSize * (CurrentPage - 1) $pageSize$(每頁數目)</p>`,10),l=[i];function r(t,o,c,d,b,u){return n(),s("div",null,l)}const m=a(p,[["render",r]]);export{h as __pageData,m as default};