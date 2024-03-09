const e=JSON.parse('{"key":"v-6bcb2ec7","path":"/jvm/class-load-vip.html","title":"一文彻底搞懂 Java 类加载机制（付费）","lang":"zh-CN","frontmatter":{"title":"一文彻底搞懂 Java 类加载机制（付费）","shortTitle":"Java的类加载机制（付费）","category":["Java核心"],"tag":["Java虚拟机"],"description":"Java的类加载机制通过类加载器和类加载过程的合作，确保了Java程序的动态加载、灵活性和安全性。双亲委派模型进一步增强了这种机制的安全性和类之间的协调性。","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,二哥的Java进阶之路,jvm,Java虚拟机,类加载机制,类加载器,类加载过程,双亲委派模型"}],["meta",{"property":"og:url","content":"https://javabetter.cn/jvm/class-load-vip.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"一文彻底搞懂 Java 类加载机制（付费）"}],["meta",{"property":"og:description","content":"Java的类加载机制通过类加载器和类加载过程的合作，确保了Java程序的动态加载、灵活性和安全性。双亲委派模型进一步增强了这种机制的安全性和类之间的协调性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-16T06:07:55.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2024-01-16T06:07:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一文彻底搞懂 Java 类加载机制（付费）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-16T06:07:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"类加载过程","slug":"类加载过程","link":"#类加载过程","children":[]},{"level":2,"title":"付费内容","slug":"付费内容","link":"#付费内容","children":[{"level":3,"title":"01、面试准备篇","slug":"_01、面试准备篇","link":"#_01、面试准备篇","children":[]},{"level":3,"title":"02、职场修炼篇","slug":"_02、职场修炼篇","link":"#_02、职场修炼篇","children":[]},{"level":3,"title":"03、技术提升篇","slug":"_03、技术提升篇","link":"#_03、技术提升篇","children":[]},{"level":3,"title":"04、面经分享篇","slug":"_04、面经分享篇","link":"#_04、面经分享篇","children":[]},{"level":3,"title":"05、场景设计题篇","slug":"_05、场景设计题篇","link":"#_05、场景设计题篇","children":[]}]},{"level":2,"title":"星球限时优惠","slug":"星球限时优惠","link":"#星球限时优惠","children":[]}],"git":{"createdTime":1705385275000,"updatedTime":1705385275000,"contributors":[{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":8.12,"words":2435},"filePathRelative":"jvm/class-load-vip.md","localizedDate":"2024年1月16日","excerpt":"<h1> 第三节：Java的类加载机制</h1>\\n<p><a href=\\"https://javabetter.cn/jvm/how-run-java-code.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">上一节</a>在讲 JVM 运行 Java 代码的时候，我们提到，JVM 需要将编译后的字节码文件加载到其内部的运行时数据区域中进行执行。这个过程涉及到了 Java 的类加载机制（面试常问的知识点），所以我们来详细地讲一讲。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/how-run-java-code-91dac706-1c4e-4775-bc4e-b2104283aa04.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>"}');export{e as data};