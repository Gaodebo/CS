(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{316:function(t,s,_){"use strict";_.r(s);var v=_(14),a=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"q-数据库服务器的优化步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-数据库服务器的优化步骤"}},[t._v("#")]),t._v(" q: 数据库服务器的优化步骤?")]),t._v(" "),s("p",[t._v("当我们遇到数据库调优问题的时候，该如何思考呢？这里把思考的流程整理成下面这张图。\n整个流程划分成了 观察（Show status） 和 行动（Action） 两个部分。字母 S 的部分代表观察（会使用相应的分析工具），字母 A 代表的部分是行动（对应分析可以采取的行动）\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027140546.png",alt:"image.png"}}),t._v(" "),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027140612.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("可以通过观察了解数据库整体的运行状态，通过性能分析工具可以让我们了解执行慢的SQL都有哪些，查看具体的SQL 执行计划，甚至是SQL执行中的每一步的成本代价，这样才能定位问题所在，找到了问题，再采取相应的行动")]),t._v(" "),s("p",[t._v("总结：\n先使用慢查询日志定位到慢查询sql\n然后使用explain分析sql，一般从以下几点考虑：")]),t._v(" "),s("ul",[s("li",[t._v("索引\n"),s("ul",[s("li",[t._v("索引缺失")]),t._v(" "),s("li",[t._v("索引失效")])])]),t._v(" "),s("li",[t._v("sql语句优化\n"),s("ul",[s("li",[t._v("join优化\n"),s("ul",[s("li",[t._v("被驱动表建立索引")])])]),t._v(" "),s("li",[t._v("分页优化\n"),s("ul",[s("li",[t._v("索引->覆盖索引->子查询->内连接")])])]),t._v(" "),s("li",[t._v("子查询优化\n"),s("ul",[s("li",[t._v("使用join连接")])])])])])]),t._v(" "),s("h2",{attrs:{id:"q-什么是慢查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-什么是慢查询"}},[t._v("#")]),t._v(" q: 什么是慢查询？")]),t._v(" "),s("p",[t._v("查询时间超过一定的阈值")]),t._v(" "),s("p",[t._v("MySQL的慢查询日志，用来记录在MySQL中响应时间超过阈值的语句，具体指运行时间超过long_query_time值的SQL，则会被记录到慢查询日志中。long_query_time的默认值为10，意思是运行10秒以上(不含10秒)的语句，认为是超出了最大忍耐时间值。\n它的主要作用是，帮助我们发现那些执行时间特别长的SQL查询，并且有针对性地进行优化，从而提高系统的整体效率。当数据库服务器发生阻塞、运行变慢的时候，检查一下慢查询日志，找到那些慢查询，对解决问题很有帮助。比如一条sql执行超过5秒钟，就算慢SQL，希望能收集超过5秒的sql，结合explain进行全面分析。\n默认情况下，MySQL数据库没有开启慢查询日志，需要手动来设置这个参数。如果不是调优需要的话，一般不建议启动该参数，因为开启慢查询日志会或多或少带来一定的性能影响。\n慢查询日志支持将日志记录写入文件")]),t._v(" "),s("h2",{attrs:{id:"q-查看-sql-执行成本-show-profile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-查看-sql-执行成本-show-profile"}},[t._v("#")]),t._v(" q: 查看 SQL 执行成本：SHOW PROFILE")]),t._v(" "),s("p",[t._v("show profile在《逻辑架构》章节中讲过，这里作为复习。\nShow Profile是MySQL提供的可以用来分析当前会话中SQL都做了什么、执行的资源消耗情况的工具，可用于sql调优的测量。默认情况下处于关闭状态，并保存最近15次的运行结果。\n可以在会话级别开启这个功能")]),t._v(" "),s("p",[s("strong",[t._v("show profile的常用查询参数:")]),t._v("\nALL:显示所有的开销信息。\nBLOCK IO:显示块IO开销。\nCONTEXT SWITCHES:上下文切换开销。CPU:显示CPU开销信息。\nIPC:显示发送和接收开销信息\nMEMORY:显示内存开销信息。\nPAGE FAULTS:显示页面错误开销信息。\nSOURCE:显示和Source_function，Source_file，Source_line相关的开销信息。SWAPS:显示交换次数开销信息。")]),t._v(" "),s("blockquote",[s("p",[t._v("不过 SHOW PROFILE命令将被弃用，可以从 information_schema中的profiling 数据表进行查看")])]),t._v(" "),s("h2",{attrs:{id:"q-分析查询语句-explain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-分析查询语句-explain"}},[t._v("#")]),t._v(" q: 分析查询语句：EXPLAIN")]),t._v(" "),s("p",[t._v("定位了查询慢的SQL之后，就可以使用EXPLAIN或DESCRIBE工具做针对性的分析查询语句。DESCRIBE语句的使用方法与EXPLAIN语句是一样的，并且分析结果也是一样的。")]),t._v(" "),s("p",[t._v("MySQL中有专门负责优化SELECT语句的优化器模块，主要功能:通过计算分析系统中收集到的统计信息，为客户端请求的Query提供它认为最优的执行计划（他认为最优的数据检索方式，但不见得是DBA认为是最优的，这部分最耗费时间)")]),t._v(" "),s("p",[t._v("这个执行计划展示了接下来具体执行查询的方式，比如多表连接的顺序是什么，对于每个表采用什么访问方法来具体执行查询等等")]),t._v(" "),s("p",[t._v("MySQL为我们提供了EXPLAIN语句来帮助我们查看某个查询语句的具体执行计划，大家看懂EXPLAIN语句的各个输出项，可以有针对性的提升查询语句的性能。\n"),s("strong",[t._v("1.能做什么?")])]),t._v(" "),s("ul",[s("li",[t._v("表的读取顺序")]),t._v(" "),s("li",[t._v("数据读取操作的操作类型。哪些索引可以使用")]),t._v(" "),s("li",[t._v("哪些索引被实际使用")]),t._v(" "),s("li",[t._v("表之间的引用")]),t._v(" "),s("li",[t._v("每张表有多少行被优化器查询")])]),t._v(" "),s("p",[t._v("EXPLAIN 或 DESCRIBE语句的语法形式如下：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPLAIN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" select_options\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESCRIBE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" select_options\n\n")])])]),s("p",[t._v("如果我们想看看某个查询的执行计划的话，可以在具体的查询语句前边加一个 EXPLAIN ，就像这样：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXPLAIN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+\n| id | select_type | table | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra          |\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+\n|  1 | SIMPLE      | NULL  | NULL       | NULL | NULL          | NULL | NULL    | NULL | NULL |     NULL | No tables used |\n+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+----------------+\n*/")]),t._v("\n\n")])])]),s("p",[t._v("输出的上述信息就是所谓的执行计划。在这个执行计划的辅助下，我们需要知道应该怎样改进自己的查询语句以使查询执行起来更高效。其实除了以SELECT开头的查询语句，其余的DELETE、INSERT、REPLACE以及UPDATE语句等都可以加上EXPLAIN，用来查看这些语句的执行计划，只是平时我们对SELECT语句更感兴趣")]),t._v(" "),s("p",[s("strong",[t._v("注意:")]),t._v("\n执行EXPLAIN时并没有真正的执行该后面的语句，因此可以安全的查看执行计划。")]),t._v(" "),s("p",[t._v("EXPLAIN 语句输出的各个列的作用如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("列名")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("id")]),t._v(" "),s("td",[t._v("在一个大的查询语句中每个SELECT关键字都对应一个 唯一的id")])]),t._v(" "),s("tr",[s("td",[t._v("select_type")]),t._v(" "),s("td",[t._v("SELECT关键字对应的那个查询的类型")])]),t._v(" "),s("tr",[s("td",[t._v("table")]),t._v(" "),s("td",[t._v("表名")])]),t._v(" "),s("tr",[s("td",[t._v("partitions")]),t._v(" "),s("td",[t._v("匹配的分区信息")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("针对单表的访问方法")])]),t._v(" "),s("tr",[s("td",[t._v("possible_keys")]),t._v(" "),s("td",[t._v("可能用到的索引")])]),t._v(" "),s("tr",[s("td",[t._v("key")]),t._v(" "),s("td",[t._v("实际上使用的索引")])]),t._v(" "),s("tr",[s("td",[t._v("key_len")]),t._v(" "),s("td",[t._v("实际使用到的索引长度(单位：字节)")])]),t._v(" "),s("tr",[s("td",[t._v("ref")]),t._v(" "),s("td",[t._v("当使用索引列等值查询时，与索引列进行等值匹配的对象信息")])]),t._v(" "),s("tr",[s("td",[t._v("rows")]),t._v(" "),s("td",[t._v("预估的需要读取的记录条数")])]),t._v(" "),s("tr",[s("td",[t._v("filtered")]),t._v(" "),s("td",[t._v("某个表经过搜索条件过滤后剩余记录条数的百分比")])]),t._v(" "),s("tr",[s("td",[t._v("Extra")]),t._v(" "),s("td",[t._v("一些额外的信息")])])])]),t._v(" "),s("h2",{attrs:{id:"q-如何进行sql语句优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-如何进行sql语句优化"}},[t._v("#")]),t._v(" q: 如何进行sql语句优化？")]),t._v(" "),s("ol",[s("li",[t._v("关联查询优化")])]),t._v(" "),s("ul",[s("li",[t._v("被驱动表建立索引")])]),t._v(" "),s("p",[t._v("驱动表和被驱动表")]),t._v(" "),s("p",[t._v("驱动表就是主表，被驱动表就是从表、非驱动表"),s("br"),t._v("\n查看哪个是驱动表、哪个是被驱动表：EXPLAIN执行结果的记录中，上面的是驱动表，下面的是被驱动表")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("-   对于内连接来说:\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" A "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" B "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("A一定是驱动表吗?不一定，优化器会根据你查询语句做优化，决定先查哪张表。先查询的那张表就是驱动表，反之就是被驱动表。通过explain关键字可以查看")]),t._v(" "),s("p",[t._v("1.对于内连接来说，查询优化器可以决定谁作为驱动表，谁作为被驱动表出现的"),s("br"),t._v("\n2.对于内连接来讲，如果表的连接条件中只能有一个字段有索引，则有索引的字段所在的表会被作为被驱动表出现"),s("br"),t._v("\n3.对于内连接来说，在两个表的连接条件都存在索引的情况下，会选择小表作为驱动表。“小表驱动大表”")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("-   对于外连接来说:\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" A "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEFT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" B "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" B "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RIGHT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" A "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("通常，大家会认为A就是驱动表，B就是被驱动表")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("子查询优化")])]),t._v(" "),s("ul",[s("li",[t._v("执行子查询时，MySQL需要为内层查询语句的查询结果建立一个临时表，然后外层查询语句从临时表中查询记录。查询完毕后，再撤销这些临时表。这样会消耗过多的CPU和IO资源，产生大量的慢查询")]),t._v(" "),s("li",[t._v("子查询的结果集存储的临时表，不论是内存临时表还是磁盘临时表都不会存在索引，所以查询性能会受到一定的影响")]),t._v(" "),s("li",[t._v("对于返回结果集比较大的子查询。其对查询性能的影响也就越大")])]),t._v(" "),s("p",[s("code",[t._v("在MySQL中，可以使用连接（JOIN）查询来替代子查询。连接查询不需要建立临时表，其速度比子查询要快，如果查询中使用索引的话，性能就会更好")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("分页优化")])]),t._v(" "),s("p",[t._v("数据量大的时候可以：")]),t._v(" "),s("ul",[s("li",[t._v("使用索引")]),t._v(" "),s("li",[t._v("覆盖索引")]),t._v(" "),s("li",[t._v("子查询\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20230821095811.png",alt:"image.png"}})])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/279863859",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL优化之超大分页查询 - 知乎 (zhihu.com)"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"q-count-与count-具体字段-效率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-count-与count-具体字段-效率"}},[t._v("#")]),t._v(" q: COUNT(*)与COUNT(具体字段)效率")]),t._v(" "),s("p",[t._v("在 MySQL 中统计数据表的行数，可以使用三种方式： SELECT COUNT(*) 、 SELECT COUNT(1) 和SELECT COUNT(具体字段) ，使用这三者之间的查询效率是怎样的？")]),t._v(" "),s("p",[t._v("前提:如果要统计的是某个字段的非空数据行数，则另当别论，毕竟比较执行效率的前提是结果一样才可以"),s("br"),t._v(" "),s("strong",[t._v("环节1:")]),s("br"),t._v("\nCOUNT(*)和COUNT(1)都是对所有结果进行COUNT,COUNT(※ )和COUNT(1)本质上并没有区别（二者执行时间可能略有差别，不过你还是可以把它俩的执行效率看成是相等的)。如果有WHERE了句，则是对所有符合筛选条件的数据行进行统计;如果没有WHERE子句，则是对数据表的数据行数进行统计"),s("br"),t._v(" "),s("strong",[t._v("环节2:")]),s("br"),t._v("\n如果是MyISAM存储引擎，统计数据表的行数只需要o(1)的复杂度，这是因为每张MyISAM的数据表都有一个meta信息存储了row_count值，而—致性则由表级锁来保证")]),t._v(" "),s("p",[t._v("如果是InnoDB存储引擎，因为InnoDB支持事务，采用行级锁和MVCC机制，所以无法像 MyISAM—样，维护一个row_count变量，因此需要采用扫描全表，进行循环＋计数的方式来完成统计")]),t._v(" "),s("p",[s("strong",[t._v("环节3:")]),s("br"),t._v("\n在InnoDB 引擎中，如果采用COUNT(具体字段)来统计数据行数，要尽量采用二级索引。因为主键采用的索引是聚簇索引，聚簇索引包含的信息多，明显会大于二级索引（非聚簇索引)。对于COUNT(*)和COUNT(1)来说，它们不需要查找具体的行，只是统计行数，系统会自动采用占用空间更小的二级索引来进行统计。"),s("br"),t._v("\n如果有多个二级索引，会使用key_len 小的二级索引进行扫描。当没有二级索引的时候，才会采用主键索引来进行统计")]),t._v(" "),s("p",[t._v("结论：对于innodb来说，都一样，一般使用二级索引，减少磁盘IO")]),t._v(" "),s("h2",{attrs:{id:"q-什么是第一-二-三范式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-什么是第一-二-三范式"}},[t._v("#")]),t._v(" q: 什么是第一，二，三范式？")]),t._v(" "),s("p",[t._v("关于数据表的设计，有三个范式要遵循\n(1) 第一范式（1NF)，"),s("code",[t._v("**确保每列保持原子性**")]),t._v("\n数据库的每一列都是不可分割的原子数据项，不可再分的最小数据单元，而不能是集合、数组、记录等非原子数据项\n(2) 第二范式（2NF)，"),s("code",[t._v("**确保每列都和主键完全依赖**")]),t._v("\n尤其在复合主键的情况下，非主键部分不应该依赖于部分主键\n(3）第三范式（3NF）"),s("code",[t._v("**确保每列都和主键列直接相关，而不是间接相关**")]),t._v("\n不存在依赖传递\n"),s("strong",[t._v("范式的优点:")]),t._v("\n数据的标准化有助于消除数据库中的数据冗余，第三范式(3NF）通常被认为在性能、扩展性和数据完整性方面达到了最好的平衡。\n"),s("strong",[t._v("范式的缺点:")]),t._v("\n范式的使用，可能降低查淘的效率。因为范式等级越高，设计出来的数据表就越多、越精细，数据的冗余度就越低，进行数据查询的时候就可能需要关联多张表，这不但代价昂贵，也可能使一些索引策略无效，")]),t._v(" "),s("p",[t._v("范式只是提出了设计的标准，实际上设计数据表时，未必一定要符合这些标准。开发中，会出现为了性能和读取效率违反范式化的原则，通过增加少量的冗余或重复的数据来提高数据库的读性能，减少关联查询、join表的次数，实现空间换取时间的目的。因此在实际的设计过程中要理论结合实际，灵活运用")]),t._v(" "),s("blockquote",[s("p",[t._v("范式本身没有优劣之分，只有适用场景不同。没有完美的设计，只有合适的设计，在数据表的设计中，还需要根据需求将范式和反范式混合使用。")])])])}),[],!1,null,null,null);s.default=a.exports}}]);