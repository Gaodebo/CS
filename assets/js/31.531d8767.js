(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{314:function(t,s,n){"use strict";n.r(s);var _=n(14),a=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"q-并发写-写如何解决-写锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-并发写-写如何解决-写锁"}},[t._v("#")]),t._v(" q: 并发写-写如何解决？（写锁）")]),t._v(" "),s("p",[t._v("所以在多个未提交事务相继对一条记录做改动时，需要让它们 排队执行 ，这个排队的过程其实是通过 锁 来实现的。这个所谓的锁其实是一个 内存中的结构 ，在事务执行前本来是没有锁的，也就是说一开始是没有 锁结构 和记录进行关联的,如图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142014.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("当一个事务想对这条记录做改动时，首先会看看内存中有没有与这条记录关联的 锁结构 ，当没有的时候就会在内存中生成一个 锁结构 与之关联。比如，事务 T1 要对这条记录做改动，就需要生成一个 锁结构与之关联：\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142031.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("在锁结构里有很多信息，为了简化理解，只把两个比较重要的属性拿了出来:")]),t._v(" "),s("ul",[s("li",[t._v("trx信息:代表这个锁结构是哪个事务生成的。")]),t._v(" "),s("li",[t._v("is_waiting :代表当前事务是否在等待。")])]),t._v(" "),s("p",[t._v("当事务T1改动了这条记录后，就生成了一个锁结构与该记录关联，因为之前没有别的事务为这条记录加锁，所以is_waiting属性就是false，把这个场景就称之为获取锁成功，或者加锁成功，然后就可以继续执行操作了")]),t._v(" "),s("p",[t._v("在事务T1提交之前，另一个事务T2也想对该记录做改动，那么先看看有没有锁结构与这条记录关联，发现有一个锁结构与之关联后，然后也生成了一个锁结构与这条记录关联，不过锁结构的is_waiting属性值为true，表示当前事务需要等待，把这个场景就称之为获取锁失败，或者加锁失败，图示:\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142048.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("在事务T1提交之后，就会把该事务生成的锁结构释放掉，然后看看还有没有别的事务在等待获取锁，发现了事务T2还在等待获取锁，所以把事务T2对应的锁结构的is_waiting属性设置为false，然后把该事务对应的线程唤醒，让它继续执行，此时事务T2就算获取到锁了。效果图就是这样:\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142101.png",alt:"image.png"}})]),t._v(" "),s("p",[s("strong",[t._v("小结几种说法:")])]),t._v(" "),s("ul",[s("li",[t._v("不加锁\n意思就是不需要在内存中生成对应的锁结构，可以直接执行操作。")]),t._v(" "),s("li",[t._v("获取锁成功，或者加锁成功\n意思就是在内存中生成了对应的锁结构，而且锁结构的is_waiting属性为false，也就是事务可以继续执,行操作。")]),t._v(" "),s("li",[t._v("获取锁失败，或者加锁失败，或者没有获取到锁\n意思就是在内存中生成了对应的锁结构，不过锁结构的is_waiting属性为true，也就是事务需要等待，不可以继续执行操作。")])]),t._v(" "),s("h2",{attrs:{id:"q-并发读-写如何解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-并发读-写如何解决"}},[t._v("#")]),t._v(" q: 并发读-写如何解决？")]),t._v(" "),s("p",[t._v("读-写 或 写-读 ，即一个事务进行读取操作，另一个进行改动操作。这种情况下可能发生 脏读 、 不可重复读 、 幻读 的问题。\n各个数据库厂商对 SQL标准 的支持都可能不一样。比如MySQL在 REPEATABLE READ 隔离级别上就已经解决了 幻读 问题。")]),t._v(" "),s("p",[t._v("怎么解决 脏读 、 不可重复读 、 幻读 这些问题呢？其实有两种可选的解决方案：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("方案一：读操作利用多版本并发控制（ MVCC ，下章讲解），写操作进行加锁")]),t._v("\n所谓的MVCC，就是生成一个ReadView，通过ReadView找到符合条件的记录版本（(历史版本由undo日志构建)。查询语句只能读到在生成ReadView之前已提交事务所做的更改，在生成ReadView之前未提交的事务或者之后才开启的事务所做的更改是看不到的。而写操作肯定针对的是最新版本的记录，读记录的历史版本和改动记录的最新版本本身并不冲突，也就是采用MVCC时，读-写操作并不冲突")])]),t._v(" "),s("blockquote",[s("p",[t._v("普通的SELECT语句在READ COMMITTED和REPEATABLE READ隔离级别下会使用到MVCC读取记录。")]),t._v(" "),s("ul",[s("li",[t._v("在 READ COMMITTED 隔离级别下，一个事务在执行过程中每次执行SELECT操作时都会生成一个ReadView，ReadView的存在本身就保证了 事务不可以读取到未提交的事务所做的更改 ，也就 是避免了脏读现象；")]),t._v(" "),s("li",[t._v("在 REPEATABLE READ 隔离级别下，一个事务在执行过程中只有 第一次执行SELECT操作 才会生成一个ReadView，之后的SELECT操作都 复用 这个ReadView，这样也就避免了不可重复读 和幻读的问题")])])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("方案二:读、写操作都采用加锁的方式")])])]),t._v(" "),s("p",[t._v("如果我们的一些业务场景不允许读取记录的旧版本，而是每次都必须去读取记录的最新版本。比如，在银行存款的事务中，你需要先把账户的余额读出来，然后将其加上本次存款的数额，最后再写到数据库中。在将账户余额读取出来后，就不想让别的事务再访问该余额，直到本次存款事务执行完成，其他事务才可以访问账户的余额。这样在读取记录的时候就需要对其进行加锁操作，这样也就意味着读操作和写操作也像写-写操作那样排队执行。")]),t._v(" "),s("p",[s("strong",[t._v("脏读")]),t._v("的产生是因为当前事务读取了另一个未提交事务写的一条记录，如果另一个事务在写记录的时候就给这条记录加锁，那么当前事务就无法继续读取该记录了，所以也就不会有脏读问题的产生了。")]),t._v(" "),s("p",[s("strong",[t._v("不可重复读")]),t._v("的产生是因为当前事务先读取一条记录，另外一个事务对该记录做了改动之后并提交之后，当前事务再次读取时会获得不同的值，如果在当前事务读取记录时就给该记录加锁，那么另一个事务就无法修改该记录，自然也不会发生不可重复读了")]),t._v(" "),s("p",[s("strong",[t._v("幻读")]),t._v("问题的产生是因为当前事务读取了一个范围的记录，然后另外的事务向该范围内插入了新记录，当前事务再次读取该范围的记录时发现了新插入的新记录。采用加锁的方式解决幻读问题就有一些麻烦，因为当前事务在第一次读取记录时幻影记录并不存在，所以读取的时候加锁就有点尴尬（因为你并不知道给谁加锁)")]),t._v(" "),s("p",[s("strong",[t._v("小结对比发现：")])]),t._v(" "),s("ul",[s("li",[t._v("采用 MVCC 方式的话， 读-写 操作彼此并不冲突， 性能更高 。")]),t._v(" "),s("li",[t._v("采用 加锁 方式的话， 读-写 操作彼此需要 排队执行 ，影响性能。")])]),t._v(" "),s("p",[t._v("一般情况下当然愿意采用 MVCC 来解决 读-写 操作并发执行的问题，但是业务在某些特殊情况下，要求必须采用 加锁 的方式执行。下面就讲解下MySQL中不同类别的锁")]),t._v(" "),s("h2",{attrs:{id:"q-锁如何分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-锁如何分类"}},[t._v("#")]),t._v(" q: 锁如何分类？")]),t._v(" "),s("p",[t._v("锁的分类图，如下\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142144.png",alt:"image.png"}})]),t._v(" "),s("ul",[s("li",[s("code",[t._v("共享锁:")]),t._v("也称为共享锁、英文用S表示。针对同一份数据，多个事务的读操作可以同时进行而不会互相影响，相互不阻塞的。")]),t._v(" "),s("li",[s("code",[t._v("排他锁:")]),t._v("也称为排他锁、英文用X表示。当前写操作没有完成前，它会阻断其他写锁和读锁。这样就能确保在给定的时间里，只有一个事务能执行写入，并防止其他用户读取正在写入的同一资源")])]),t._v(" "),s("blockquote",[s("p",[t._v("需要注意的是对于InnoDB引擎来说，读锁和写锁可以加在表上，也可以加在行上。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("兼容情况")]),t._v(" "),s("th",[t._v("X锁")]),t._v(" "),s("th",[t._v("S锁")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("X锁")]),t._v(" "),s("td",[t._v("不兼容")]),t._v(" "),s("td",[t._v("不兼容")])]),t._v(" "),s("tr",[s("td",[t._v("S锁")]),t._v(" "),s("td",[t._v("不兼容")]),t._v(" "),s("td",[t._v("兼容")])])])]),t._v(" "),s("p",[s("strong",[t._v("1.锁定读")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("对读取的记录加S锁∶")])])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LOCK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHARE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MODE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#或")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHARE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#(8.0新增语法)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("对读取的记录加X锁:")])])]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("p",[s("strong",[t._v("2.写操作")])]),t._v(" "),s("p",[t._v("平常所用到的写操作无非是 DELETE、UPDATE、INSERT 这三种:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("DELETE:")]),t._v("\n对一条记录做DELETE操作的过程其实是先在B+树中定位到这条记录的位置，然后获取这条记录的X锁，再执行delete mark.操作。也可以把这个定位待删除记录在B+树中位置的过程看成是一个获取X锁的锁定读。")]),t._v(" "),s("li",[s("code",[t._v("UPDATE︰ 在对一条记录做UPDATE操作时分为三种情况:**")])])]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("strong",[t._v("情况1:")]),t._v(" 未修改该记录的键值，并且被更新的列占用的存储空间在修改前后未发生变化。 则先在B+树中定位到这条记录的位置，然后再获取一下记录的X锁，最后在原记录的位置进行修改操作。也可以把这个定位待修改记录在B+树中位置的过程看成是一个获取X锁的锁定读。")]),t._v(" "),s("li",[s("strong",[t._v("情况2∶")]),t._v("未修改该记录的键值，并且至少有一个被更新的列占用的存储空间在修改前后发生变化。 则先在B+树中定位到这条记录的位置，然后获取一下记录的X锁，将该记录彻底删除掉（就是把记录彻底移入垃圾链表)，最后再插入一条新记录。这个定位待修改记录在B+树中位置的过程看成是一个获取X锁的锁定读，新插入的记录由INSERT\n操作提供的隐式锁进行保护。")]),t._v(" "),s("li",[s("strong",[t._v("情况3∶")]),t._v(" 修改了该记录的键值，则相当于在原记录上做DELETE操作之后再来一次INSERT操作，加锁操作就需要按照DELETE和INSERT的规则进行了。")])])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("INSERT :")]),t._v("\n一般情况下，新插入一条记录的操作并不加锁,通过一种称之为隐式锁的结构来保护这条新插入的记录在本事务提交前不被别的事务访问。")])]),t._v(" "),s("h2",{attrs:{id:"q-都有哪些表级锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-都有哪些表级锁"}},[t._v("#")]),t._v(" q: 都有哪些表级锁？")]),t._v(" "),s("p",[t._v("为了尽可能提高数据库的并发度，每次锁定的数据范围越小越好，理论上每次只锁定当前操作的数据的方案会得到最大的并发度，但是管理锁是很耗资源的事情（涉及获取、检查、释放锁等动作)。因此数据库系统需要在高并发响应和系统性能两方面进行平衡，这样就产生了“锁粒度〈Lock granularity)”的概念。")]),t._v(" "),s("p",[t._v("对一条记录加锁影响的也只是这条记录而已，我们就说这个锁的粒度比较细;其实一个事务也可以在表级别进行加锁，自然就被称之为表级锁或者表锁，对一个表加锁影响整个表中的记录，我们就说这个锁的粒度比较粗。"),s("code",[t._v("锁的粒度主要分为表级锁、页级锁和行锁。")])]),t._v(" "),s("p",[t._v("该锁会锁定整张表，它是MySQL中最基本的锁策略，并不依赖于存储引擎（不管你是MySQL的什么存储引擎，对于表锁的策略都是一样的)，并且表锁是开销最小的策略(因为粒度比较大)。由于表级锁一次会将整个表锁定，所以可以很好的避免死锁问题。当然，锁的粒度大所带来最大的负面影响就是出现锁资源争用的概率也会最高，导致并发率大打折扣。")]),t._v(" "),s("ul",[s("li",[t._v("LOCK TABLES t READ ：InnoDB存储引擎会对表 t 加表级别的 S锁 。")]),t._v(" "),s("li",[t._v("LOCK TABLES t WRITE ：InnoDB存储引擎会对表 t 加表级别的 X锁 。")])]),t._v(" "),s("blockquote",[s("p",[t._v("不过尽量避免在使用InnoDB存储引擎的表上使用 LOCK TABLES 这样的手动锁表语句，它们并不会提供什么额外的保护，只是会降低并发能力而已。InnoDB的厉害之处还是实现了更细粒度的 行锁 ，关于InnoDB表级别的 S锁 和 X锁 大家了解一下就可以了")])]),t._v(" "),s("p",[t._v("意向锁 （intention lock）")]),t._v(" "),s("p",[t._v("现在有两个事务，分别是T1和T2，其中T2试图在该表级别上应用共享或排它锁，如果没有意向锁存在，那么T2就需要去检查各个页或行是否存在锁;如果存在意向锁，那么此时就会受到由T1控制的表级别意向锁的阻塞。T2在锁定该表前不必检查各个页或行锁，而只需检查表上的意向锁。简单来说就是给更大一级别的空间示意里面是否已经上过锁。")]),t._v(" "),s("h2",{attrs:{id:"q-innodb中的行锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-innodb中的行锁"}},[t._v("#")]),t._v(" q: InnoDB中的行锁?")]),t._v(" "),s("p",[t._v("行锁(Row Lock)也称为记录锁，顾名思义，就是锁住某一行（某条记录row)。需要的注意的是，MySQL服务器层并没有实现行锁机制，行级锁只在存储引擎层实现。")]),t._v(" "),s("p",[t._v("优点:锁定力度小，发生锁冲突概率低，可以实现的并发度高。\n缺点:对于锁的开销比较大，加锁会比较慢，容易出现死锁情况。")]),t._v(" "),s("p",[t._v("InnoDB与MylSAM的最大不同有两点:一是支持事务(TRANSACTION);二是采用了行级锁。")]),t._v(" "),s("ul",[s("li",[t._v("记录锁\n（Record Locks）")])]),t._v(" "),s("p",[t._v("记录锁也就是仅仅把一条记录锁上，官方的类型名称为： LOCK_REC_NOT_GAP 。比如把id值为8的那条记录加一个记录锁的示意图如图所示。仅仅是锁住了id值为8的记录，对周围的数据没有影响\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142156.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("记录锁是有S锁和X锁之分的，称之为 S型记录锁 和 X型记录锁 。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当一个事务获取了一条记录的S型记录锁后，其他事务也可以继续获取该记录的S型记录锁，但不可以继续获取X型记录锁；")])]),t._v(" "),s("li",[s("p",[t._v("当一个事务获取了一条记录的X型记录锁后，其他事务既不可以继续获取该记录的S型记录锁，也不可以继续获取X型记录锁。")])]),t._v(" "),s("li",[s("p",[t._v("间隙锁\n（Gap Locks）")])])]),t._v(" "),s("p",[t._v("MySQL 在 REPEATABLE READ 隔离级别下是可以解决幻读问题的，解决方案有两种，可以使用 MVCC 方案解决，也可以采用 加锁 方案解决。但是在使用加锁方案解决时有个大问题，就是事务在第一次执行读取操作时，那些幻影记录尚不存在，我们无法给这些 幻影记录 加上 记录锁 。InnoDB提出了一种称之为"),s("a",{attrs:{href:"https://so.csdn.net/so/search?q=Gap&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gap"),s("OutboundLink")],1),t._v(" Locks 的锁，官方的类型名称为： LOCK_GAP ，我们可以简称为 gap锁 。比如，把id值为8的那条记录加一个gap锁的示意图如下。\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142209.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("图中id值为8的记录加了gap锁，意味着 不允许别的事务在id值为8的记录前边的间隙插入新记录 ，其实就是id列的值(3, 8)这个区间的新记录是不允许立即插入的。比如，有另外一个事务再想插入一条id值为4的新记录，它定位到该条新记录的下一条记录的id值为8，而这条记录上又有一个gap锁，所以就会阻塞插入操作，直到拥有这个gap锁的事务提交了之后，id列的值在区间(3, 8)中的新记录才可以被插入。")]),t._v(" "),s("ul",[s("li",[t._v("临键锁\n（Next-Key Locks）")])]),t._v(" "),s("p",[t._v("有时候既想 锁住某条记录 ，又想 阻止 其他事务在该记录前边的 间隙插入新记录 ，所以InnoDB就提出了一种称之为 Next-Key Locks 的锁，官方的类型名称为： LOCK_ORDINARY ，我们也可以简称为next-key锁 。Next-Key Locks是在存储引擎 innodb 、事务级别在 可重复读 的情况下使用的数据库锁，innodb默认的锁就是Next-Key locks。")]),t._v(" "),s("p",[t._v("比如，把id值为8的那条记录加一个next-key锁的示意图如下:\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142224.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("next-key锁的本质就是一个记录锁和一个gap锁的合体，它既能保护该条记录，又能阻止别的事务将新记录插入被保护记录前边的间隙")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" student "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n")])])]),s("h2",{attrs:{id:"q-mysql如何处理死锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q-mysql如何处理死锁"}},[t._v("#")]),t._v(" q: mysql如何处理死锁？")]),t._v(" "),s("p",[t._v("死锁是指两个或多个事务在同一资源上相互占用，并请求锁定对方占用的资源，从而导致恶性循环。死锁举例如下：\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142241.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("这时候，事务1在等待事务2释放id=2的行锁，而事务2在等待事务1释放id=1的行锁。 事务1和事务2在互相等待对方的资源释放，就是进入了死锁状态。当出现死锁以后，有 两种策略 ：")]),t._v(" "),s("ul",[s("li",[t._v("一种策略是，直接进入等待，直到超时。这个超时时间可以通过参数innodb_lock_wait_timeout 来设置。")]),t._v(" "),s("li",[t._v("另一种策略是，发起死锁检测，发现死锁后，主动回滚死锁链条中的某一个事务（将持有最少行级排他锁的事务进行回滚），让其他事务得以继续执行。将参数")])]),t._v(" "),s("blockquote",[s("p",[t._v("innodb_deadlock_detect 设置为on ，表示开启这个逻辑。")])]),t._v(" "),s("p",[t._v("产生死锁的必要条件")]),t._v(" "),s("ol",[s("li",[t._v("两个或者两个以上事务")]),t._v(" "),s("li",[t._v("每个事务都已经持有锁并且申请新的锁")]),t._v(" "),s("li",[t._v("锁资源同时只能被同一个事务持有或者不兼容")]),t._v(" "),s("li",[t._v("事务之间因为持有锁和申请锁导致彼此循环等待")])]),t._v(" "),s("blockquote",[s("p",[t._v("死锁的关键在于:两个(或以上)的Session加锁的顺序不一致。")])]),t._v(" "),s("p",[t._v("如何处理死锁")]),t._v(" "),s("p",[s("code",[t._v("方式1:等待，直到超时( innodb_lock_wait_timeout=50s)")]),t._v("\n即当两个事务互相等待时，当一个事务等待时间超过设置的阈值时，就将其回滚，另外事务继续进行。这种方法简单有效，在innodb中，参数innodb_lock_wait_timeout用来设置超时时间。\n缺点:对于在线服务来说，这个等待时间往往是无法接受的。\n那将此值修改短一些，比如1s，0.1s是否合适?不合适，容易误伤到普通的锁等待。")]),t._v(" "),s("p",[s("code",[t._v("方式2:使用死锁检测进行死锁处理")]),t._v("\n方式1检测死锁太过被动，innodb还提供了wait-for graph算法来主动进行死锁检测，每当加锁请求无法立即满足需要并进入等待时，wait-for graph算法都会被触发。\n这是一种较为主动的死锁检测机制，要求数据库保存锁的信息链表和事务等待链表两部分信息。\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142256.png",alt:"image.png"}})]),t._v(" "),s("p",[t._v("基于这两个信息，可以绘制wait-for graph 等待图)\n"),s("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027142309.png",alt:"image.png"}})]),t._v(" "),s("blockquote",[s("p",[t._v("死锁检测的原理是构建一个以事务为顶点、锁为边的有向图，判断有向图是否存在环，存在即有死锁")])]),t._v(" "),s("p",[t._v("一旦检测到回路、有死锁，这时候InnoDB存储引擎会选择回滚undo量最小的事务，让其他事务继续执行( innodb_deadlock_detect=on表示开启这个逻辑)。")]),t._v(" "),s("p",[t._v("缺点:每个新的被阻塞的线程，都要判断是不是由于自己的加入导致了死锁，这个操作时间复杂度是o(n)。如果100个并发线程同时更新同一行，意味着要检测100*100= 1万次，1万个线程就会有1千万次检测。")]),t._v(" "),s("p",[t._v("如何解决?")]),t._v(" "),s("ul",[s("li",[t._v("方式1:关闭死锁检测，但意味着可能会出现大量的超时，会导致业务有损。")]),t._v(" "),s("li",[t._v("方式2:控制并发访问的数量。比如在中间件中实现对于相同行的更新，在进入引擎之前排队，这样在InnoDB内部就不会有大量的死锁检测工作")])]),t._v(" "),s("p",[t._v("进一步的思路:\n可以考虑通过将一行改成逻辑上的多行来减少锁冲突。比如，连锁超市账户总额的记录，可以考虑放到多条记录上。账户总额等于这多个记录的值的总和。")])])}),[],!1,null,null,null);s.default=a.exports}}]);