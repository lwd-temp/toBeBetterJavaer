const t=JSON.parse('{"key":"v-4c906708","path":"/io/print.html","title":"Java 打印流：PrintStream 和 PrintWriter","lang":"zh-CN","frontmatter":{"title":"Java 打印流：PrintStream 和 PrintWriter","shortTitle":"打印流","category":["Java核心"],"tag":["Java IO"],"description":"本文详细介绍了 Java 打印流的核心组成，着重分析了 PrintStream 和 PrintWriter 的功能与用途。同时，文章还提供了打印流的实际应用示例和常用方法。阅读本文，将帮助您更深入地了解 Java 打印流以及 PrintStream 和 PrintWriter 在 Java 编程中的关键地位，提高输出操作的便捷性和效率。","head":[["meta",{"name":"keywords","content":"Java,Java IO,打印流,PrintStream,PrintWriter,java 打印流,java PrintStream,java PrintWriter"}],["meta",{"property":"og:url","content":"https://javabetter.cn/io/print.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java 打印流：PrintStream 和 PrintWriter"}],["meta",{"property":"og:description","content":"本文详细介绍了 Java 打印流的核心组成，着重分析了 PrintStream 和 PrintWriter 的功能与用途。同时，文章还提供了打印流的实际应用示例和常用方法。阅读本文，将帮助您更深入地了解 Java 打印流以及 PrintStream 和 PrintWriter 在 Java 编程中的关键地位，提高输出操作的便捷性和效率。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java IO"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 打印流：PrintStream 和 PrintWriter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[],"git":{"createdTime":1661412910000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":6}]},"readingTime":{"minutes":5.92,"words":1776},"filePathRelative":"io/print.md","localizedDate":"2022年8月25日","excerpt":"<h1> 7.7 打印流</h1>\\n<p>在我的职业生涯中， <code>System.out.println()</code> 的使用频率恐怕不亚于 main 方法的使用频率。其中 <code>System.out</code> 返回的正是打印流 <code>PrintStream</code> 。</p>\\n<p>除此之外，还有它还有一个孪生兄弟，PrintWriter。PrintStream 是 OutputStream 的子类，PrintWriter 是 Writer 的子类，也就是说，一个<a href=\\"https://javabetter.cn/io/stream.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">字节流</a>，一个是<a href=\\"https://javabetter.cn/io/reader-writer.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">字符流</a>。</p>"}');export{t as data};