import{_ as e,c as a,o as n,a as s}from"./app.015fbf38.js";const m='{"title":"SQL Server\u5206\u9801\u6280\u5DE7(Pagination)","description":"","frontmatter":{},"headers":[],"relativePath":"WorkSkill/SQL Server Pagination.md","lastUpdated":1648513476165}',r={},i=s(`<h1 id="sql-server\u5206\u9801\u6280\u5DE7-pagination" tabindex="-1">SQL Server\u5206\u9801\u6280\u5DE7(Pagination) <a class="header-anchor" href="#sql-server\u5206\u9801\u6280\u5DE7-pagination" aria-hidden="true">#</a></h1><h6 id="tags-\u5DE5\u4F5C" tabindex="-1">tags: <code>\u5DE5\u4F5C</code> <a class="header-anchor" href="#tags-\u5DE5\u4F5C" aria-hidden="true">#</a></h6><p>\u53C3\u8003\u9023\u7D50\uFF1A<a href="https://ithelp.ithome.com.tw/articles/10190424" target="_blank" rel="noopener noreferrer">https://ithelp.ithome.com.tw/articles/10190424</a></p><p><strong>\u4F7F\u7528\u8A9E\u6CD5</strong></p><div class="language-sql="><pre><code>SELECT *
FROM XXXTable
--\u5982\u679C\u8981\u4F7F\u7528\u5206\u9801\u8A9E\u6CD5\uFF0C\u4E00\u5B9A\u8981\u52A0\u4E0A\u6392\u5E8F\uFF0C\u4E0D\u7136\u6703\u51FA\u932F\u3002
ORDER BY ID 
--\u9019\u4E00\u884C\u8A9E\u6CD5\u662F\u6307\u300C\u7565\u904E\u300D\u524Dn\u884C\uFF0C\u5217\u51FA\u5F9E\u7B2Ck\u884C\u958B\u59CB\u76848\u7B46\u8CC7\u6599\u3002
OFFSET n ROWS\u3000
FETCH NEXT k ROWS ONLY
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u53D6\u5F97\u5206\u9801\u6578</strong></p><div class="language-sql="><pre><code>select ceiling(count(1) / PageSize) TotalPages 
  from XXXTable
-- ceiling \u7121\u689D\u4EF6\u9032\u5165
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>\u5206\u9801\u8A9E\u6CD5</strong></p><div class="language-sql="><pre><code>select * from XXXTable
order by id desc
OFFSET $offset$ ROWS FETCH NEXT $pageSize$ ROWS ONLY
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>$offset$(\u7565\u904E\u7B46\u6578) = (PageSize * (CurrentPage - 1) $pageSize$(\u6BCF\u9801\u6578\u76EE)</p>`,10),t=[i];function l(p,c,o,d,b,g){return n(),a("div",null,t)}var u=e(r,[["render",l]]);export{m as __pageData,u as default};
