import{_ as n,c as s,o as a,a2 as t}from"./chunks/framework.4_bZ6nyl.js";const m=JSON.parse('{"title":"[URL rewrite] HTTP to HTTPS","description":"","frontmatter":{},"headers":[],"relativePath":"WorkSkill/URL rewrite HTTP to HTTPS.md","filePath":"WorkSkill/URL rewrite HTTP to HTTPS.md"}'),e={name:"WorkSkill/URL rewrite HTTP to HTTPS.md"},p=t(`<h1 id="url-rewrite-http-to-https" tabindex="-1">[URL rewrite] HTTP to HTTPS <a class="header-anchor" href="#url-rewrite-http-to-https" aria-label="Permalink to &quot;[URL rewrite] HTTP to HTTPS&quot;">​</a></h1><h6 id="tags-工作" tabindex="-1">tags: <code>工作</code> <a class="header-anchor" href="#tags-工作" aria-label="Permalink to &quot;tags: \`工作\`&quot;">​</a></h6><p>在IIS希望網址HTTP重新導向HTTPS 可以使用 URL rewrite的機制</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    &lt;rewrite&gt;</span></span>
<span class="line"><span>        &lt;rules&gt;</span></span>
<span class="line"><span>           &lt;rule name=&quot;HTTP to HTTPS redirect&quot; stopprocessing=&quot;true&quot;&gt;</span></span>
<span class="line"><span>               &lt;match url=&quot;(.*)&quot;&gt;</span></span>
<span class="line"><span>               &lt;conditions&gt;</span></span>
<span class="line"><span>                   &lt;add input=&quot;{HTTPS}&quot; pattern=&quot;off&quot;&gt;</span></span>
<span class="line"><span>               &lt;/add&gt;&lt;/conditions&gt;</span></span>
<span class="line"><span>               &lt;action redirecttype=&quot;Permanent&quot; type=&quot;Redirect&quot; url=&quot;https://{HTTP_HOST}/{R:1}&quot;&gt;</span></span>
<span class="line"><span>           &lt;/action&gt;&lt;/match&gt;&lt;/rule&gt;</span></span>
<span class="line"><span>       &lt;/rules&gt;</span></span>
<span class="line"><span>       &lt;outboundrules&gt;</span></span>
<span class="line"><span>           &lt;rule enabled=&quot;true&quot; name=&quot;Add Strict-Transport-Security when HTTPS&quot;&gt;</span></span>
<span class="line"><span>               &lt;match pattern=&quot;.*&quot; servervariable=&quot;RESPONSE_Strict_Transport_Security&quot;&gt;</span></span>
<span class="line"><span>               &lt;conditions&gt;</span></span>
<span class="line"><span>                   &lt;add ignorecase=&quot;true&quot; input=&quot;{HTTPS}&quot; pattern=&quot;on&quot;&gt;</span></span>
<span class="line"><span>               &lt;/add&gt;&lt;/conditions&gt;</span></span>
<span class="line"><span>               &lt;action type=&quot;Rewrite&quot; value=&quot;max-age=31536000&quot;&gt;</span></span>
<span class="line"><span>           &lt;/action&gt;&lt;/match&gt;&lt;/rule&gt;</span></span>
<span class="line"><span>       &lt;/outboundrules&gt;</span></span>
<span class="line"><span>    &lt;/rewrite&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,4),l=[p];function r(i,o,c,u,b,d){return a(),s("div",null,l)}const g=n(e,[["render",r]]);export{m as __pageData,g as default};
