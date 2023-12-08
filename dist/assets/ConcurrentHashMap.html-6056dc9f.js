const e=JSON.parse('{"key":"v-03b9fcee","path":"/thread/ConcurrentHashMap.html","title":"吊打Java并发面试官之ConcurrentHashMap（线程安全的哈希表）","lang":"zh-CN","frontmatter":{"title":"吊打Java并发面试官之ConcurrentHashMap（线程安全的哈希表）","shortTitle":"ConcurrentHashMap","description":"ConcurrentHashMap 是 Java 并发包 (java.util.concurrent) 中的一种线程安全的哈希表实现。它通过分段锁技术或更先进的并发控制技术，使得多个线程可以同时读写映射，从而提高了性能","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,ConcurrentHashMap"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/ConcurrentHashMap.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"吊打Java并发面试官之ConcurrentHashMap（线程安全的哈希表）"}],["meta",{"property":"og:description","content":"ConcurrentHashMap 是 Java 并发包 (java.util.concurrent) 中的一种线程安全的哈希表实现。它通过分段锁技术或更先进的并发控制技术，使得多个线程可以同时读写映射，从而提高了性能"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-04T05:16:42.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-09-04T05:16:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"吊打Java并发面试官之ConcurrentHashMap（线程安全的哈希表）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-04T05:16:42.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"ConcurrentHashMap 的变化","slug":"concurrenthashmap-的变化","link":"#concurrenthashmap-的变化","children":[{"level":3,"title":"JDK 1.7","slug":"jdk-1-7","link":"#jdk-1-7","children":[]},{"level":3,"title":"JDK 1.8","slug":"jdk-1-8","link":"#jdk-1-8","children":[]}]},{"level":2,"title":"ConcurrentHashMap的字段","slug":"concurrenthashmap的字段","link":"#concurrenthashmap的字段","children":[]},{"level":2,"title":"ConcurrentHashMap的内部类","slug":"concurrenthashmap的内部类","link":"#concurrenthashmap的内部类","children":[{"level":3,"title":"1、Node","slug":"_1、node","link":"#_1、node","children":[]},{"level":3,"title":"2、TreeNode","slug":"_2、treenode","link":"#_2、treenode","children":[]},{"level":3,"title":"3、TreeBin","slug":"_3、treebin","link":"#_3、treebin","children":[]},{"level":3,"title":"4、ForwardingNode","slug":"_4、forwardingnode","link":"#_4、forwardingnode","children":[]}]},{"level":2,"title":"ConcurrentHashMap的CAS","slug":"concurrenthashmap的cas","link":"#concurrenthashmap的cas","children":[{"level":3,"title":"1、tabAt","slug":"_1、tabat","link":"#_1、tabat","children":[]},{"level":3,"title":"2、casTabAt","slug":"_2、castabat","link":"#_2、castabat","children":[]},{"level":3,"title":"3、setTabAt","slug":"_3、settabat","link":"#_3、settabat","children":[]}]},{"level":2,"title":"ConcurrentHashMap的方法","slug":"concurrenthashmap的方法","link":"#concurrenthashmap的方法","children":[{"level":3,"title":"构造方法","slug":"构造方法","link":"#构造方法","children":[]},{"level":3,"title":"initTable 方法","slug":"inittable-方法","link":"#inittable-方法","children":[]},{"level":3,"title":"put 方法","slug":"put-方法","link":"#put-方法","children":[]},{"level":3,"title":"get 方法","slug":"get-方法","link":"#get-方法","children":[]},{"level":3,"title":"transfer 方法","slug":"transfer-方法","link":"#transfer-方法","children":[]},{"level":3,"title":"size 相关的方法","slug":"size-相关的方法","link":"#size-相关的方法","children":[]}]},{"level":2,"title":"ConcurrentHashMap示例","slug":"concurrenthashmap示例","link":"#concurrenthashmap示例","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1693804602000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":19},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3},{"name":"Argon","email":"112397278+arglone@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":27.25,"words":8176},"filePathRelative":"thread/ConcurrentHashMap.md","localizedDate":"2022年3月23日","excerpt":"<h1> 第二十节：并发容器ConcurrentHashMap</h1>\\n<p>ConcurrentHashMap 是 Java 并发包 (java.util.concurrent) 中的一种线程安全的哈希表实现。</p>\\n<p><a href=\\"https://javabetter.cn/collection/hashmap.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">HashMap</a> 在多线程环境下扩容会出现 CPU 接近 100% 的情况，因为 HashMap 并不是线程安全的，我们可以通过 Collections 的<code>Map&lt;K,V&gt; synchronizedMap(Map&lt;K,V&gt; m)</code>将 HashMap 包装成一个线程安全的 map。</p>"}');export{e as data};