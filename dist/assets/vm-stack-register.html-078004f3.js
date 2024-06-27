const e=JSON.parse('{"key":"v-7d21c062","path":"/jvm/vm-stack-register.html","title":"栈虚拟机和寄存器虚拟机，有什么不同？","lang":"zh-CN","frontmatter":{"title":"栈虚拟机和寄存器虚拟机，有什么不同？","shortTitle":"栈虚拟机和寄存器虚拟机","category":["Java核心"],"tag":["Java虚拟机"],"description":"栈虚拟机的字节码指令更简单，寄存器虚拟机的执行速度更快。","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,二哥的Java进阶之路,jvm,Java虚拟机,栈虚拟机,寄存器虚拟机"}],["meta",{"property":"og:url","content":"https://javabetter.cn/jvm/vm-stack-register.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"栈虚拟机和寄存器虚拟机，有什么不同？"}],["meta",{"property":"og:description","content":"栈虚拟机的字节码指令更简单，寄存器虚拟机的执行速度更快。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-01T07:00:41.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2024-02-01T07:00:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"栈虚拟机和寄存器虚拟机，有什么不同？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-01T07:00:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"栈和寄存器","slug":"栈和寄存器","link":"#栈和寄存器","children":[]},{"level":2,"title":"基于栈的虚拟机","slug":"基于栈的虚拟机","link":"#基于栈的虚拟机","children":[]},{"level":2,"title":"基于寄存器的虚拟机","slug":"基于寄存器的虚拟机","link":"#基于寄存器的虚拟机","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1703169878000,"updatedTime":1706770841000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":6}]},"readingTime":{"minutes":7.88,"words":2364},"filePathRelative":"jvm/vm-stack-register.md","localizedDate":"2023年12月21日","excerpt":"<h1> 第六节：栈虚拟机和寄存器虚拟机</h1>\\n<p>本来这节内容是打算直接讲字节码指令的，但讲之前又必须得先讲指令集架构，而指令集架构又分为两种，一种是基于栈的，一种是基于寄存器的。</p>\\n<p>那不妨我们这节就单独来讲讲栈虚拟机和寄存器虚拟机，它们有什么不同，以及各自的优缺点。</p>\\n<h2> 栈和寄存器</h2>\\n<p>关于栈这个数据结构，我们前面曾讲过，戳<a href=\\"https://javabetter.cn/collection/stack.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">链接</a>直达。</p>\\n<p>寄存器（Register）是中央处理器（CPU）内用来暂存指令、数据和地址的存储器，也是 CPU 中读写最快的存储器。</p>"}');export{e as data};