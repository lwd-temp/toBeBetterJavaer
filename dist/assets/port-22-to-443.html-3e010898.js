import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as r,a as e,d as t,b as n,e as c}from"./app-b1913f48.js";const l={},p={href:"https://javabetter.cn/",target:"_blank",rel:"noopener noreferrer"},d=e("code",null,"git pull",-1),g=c(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull
ssh: connect to <span class="token function">host</span> github.com port <span class="token number">22</span>: Connection timed out
fatal: Could not <span class="token builtin class-name">read</span> from remote repository.

Please <span class="token function">make</span> sure you have the correct access rights
and the repository exists.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以为服务器被入侵了，因为我之前操作的时候一直都是 OK 的，并且我看服务器上的 GitHub 密钥也都在。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/port-22-to-443-20240116201634.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>就很奇怪，于是我在 GPT 的帮助下使用 <code>ssh -vvv git@github.com</code> 命令诊断了一下，结果如下所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/port-22-to-443-20240116202017.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>猜测的原因是，GitHub 限制了 22 端口，因为我看了一下服务器上的 22 端口，防火墙下是打开的。</p><p>于是我又用这个命令 <code>ssh -T -p 443 git@ssh.github.com</code> 测试了一下，结果如下所示：</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/port-22-to-443-20240116202042.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>表明成功通过端口 443 建立了 SSH 连接到 GitHub，这意味着现在可以使用 SSH 方式进行 Git 操作（如克隆、推送、拉取等）。</p><p>只不过原有的配置是 22 端口，现在要改成 443 端口。怎么改呢？</p><p>先执行下面的命令，查看现在的远程仓库地址：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/port-22-to-443-20240116202311.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后通过下面的命令修改远程仓库地址：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote set-url origin ssh://git@ssh.github.com:443/用户名/仓库名.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就可以看到端口修改成功了。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/port-22-to-443-20240116202534.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>再执行 <code>git pull</code> 命令，就可以正常拉取代码了。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/port-22-to-443-20240116202620.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr>`,20),u={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},b={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[t("微信搜 "),e("strong",null,"沉默王二"),t(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),t(" 即可免费领取。")],-1),v=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function h(f,_){const a=i("ExternalLinkIcon");return s(),r("div",null,[e("p",null,[t("2024年01月16日，这天要更新《"),e("a",p,[t("二哥的 Java 进阶之路"),n(a)]),t("》，远程连接到服务器上后，执行 "),d,t(" 命令，结果报错：")]),g,e("p",null,[t("GitHub 上标星 10000+ 的开源知识库《"),e("a",u,[t("二哥的 Java 进阶之路"),n(a)]),t("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),e("a",b,[t("太赞了，GitHub 上标星 10000+ 的 Java 教程"),n(a)])]),m,v])}const y=o(l,[["render",h],["__file","port-22-to-443.html.vue"]]);export{y as default};