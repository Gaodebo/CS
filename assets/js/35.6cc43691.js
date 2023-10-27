(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{315:function(v,_,t){"use strict";t.r(_);var a=t(14),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"q-什么是索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-什么是索引"}},[v._v("#")]),v._v(" q: 什么是索引")]),v._v(" "),_("p",[v._v("索引是一种用于快速查询和检索数据的数据结构\n索引的实现和引擎有关\ninnodb引擎的索引的结构是B+树")]),v._v(" "),_("h2",{attrs:{id:"q-使用索引的优点和缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-使用索引的优点和缺点"}},[v._v("#")]),v._v(" q: 使用索引的优点和缺点?")]),v._v(" "),_("p",[v._v("索引优点")]),v._v(" "),_("p",[v._v("(1) 提高数据检索的效率，降低数据库的IO成本，这也是创建索引最主要的原因\n(2) 通过创建唯一索引，可以保证数据库表中每一行数据的唯一性\n(3)在实现数据的参考完整性方面，可以加速表和表之间的连接。换句话说，对于有依赖关系的子表和父表联合查询时，可以提高查询速度。\n(4)在使用分组和排序子句进行数据查询时，可以显著减少查找中分组和排序的时间，降低了CPU的消耗。")]),v._v(" "),_("p",[v._v("索引缺点")]),v._v(" "),_("p",[v._v("增加索引也有许多不利的方面，主要表现在如下几个方面:\n(1）创建索引和维护索引要耗费时间，并且随着数据量的增加。所耗费的时间也会增加。\n(2）索引需要占磁盘空间，除了数据表占数据空间之外，每一个索引还要占一定的物理空间，存储在磁盘上，如果有大量的索引，索引文件就可能比数据文件更快达到最大文件尺寸")]),v._v(" "),_("blockquote",[_("p",[v._v("提示: 索引可以提高查询的速度，但是会影响插入记录的速度。这种情况下，最好的办法是先删除表中的索引，然后插入数据，插入完成后再创建索引。")])]),v._v(" "),_("h2",{attrs:{id:"q-索引有哪些数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-索引有哪些数据结构"}},[v._v("#")]),v._v(" q: 索引有哪些数据结构？")]),v._v(" "),_("ul",[_("li",[v._v("Hash")])]),v._v(" "),_("blockquote",[_("p",[v._v("mysql不支持\n缺点：不能顺序索引和范围查询")])]),v._v(" "),_("ul",[_("li",[v._v("平衡二叉查找树")])]),v._v(" "),_("blockquote",[_("p",[v._v("维护起来耗费性能，存储数据量不多，实际使用不多")])]),v._v(" "),_("ul",[_("li",[v._v("红黑树")])]),v._v(" "),_("blockquote",[_("p",[v._v("红黑树是一种自平衡二叉查找树，通过在插入和删除节点时进行颜色变换和旋转操作，使得树始终保持平衡状态，它具有以下特点：\n"),_("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20230819201225.png",alt:"image.png"}}),v._v("\n和 AVL 树不同的是，红黑树并不追求严格的平衡，而是大致的平衡。正因如此，红黑树的查询效率稍有下降，因为红黑树的平衡性相对较弱，可能会导致树的高度较高，这可能会导致一些数据需要进行多次磁盘 IO 操作才能查询到，这也是 MySQL 没有选择红黑树的主要原因。")])]),v._v(" "),_("ul",[_("li",[v._v("B 树& B+树")])]),v._v(" "),_("h2",{attrs:{id:"q-不同引擎对索引的支持情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-不同引擎对索引的支持情况"}},[v._v("#")]),v._v(" q:不同引擎对索引的支持情况")]),v._v(" "),_("p",[v._v("lnnoDB:支持B-tree、Full-text等索引，不支持Hash索引\nMylSAM:支持 B-tree、Full-text等索引，不支持Hash索引\nMemory :支持B-tree、Hash 等索引，不支持Full-tex索引")]),v._v(" "),_("h2",{attrs:{id:"q-innodb数据引擎底层索引的数据结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-innodb数据引擎底层索引的数据结构"}},[v._v("#")]),v._v(" q: innodb数据引擎底层索引的数据结构？")]),v._v(" "),_("p",[v._v("B+树，多路查找树")]),v._v(" "),_("h2",{attrs:{id:"q-myisam引擎的索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-myisam引擎的索引"}},[v._v("#")]),v._v(" q: myIsam引擎的索引？")]),v._v(" "),_("p",[v._v("myisam 引擎中索引和数据是在两张不同的表中，索引是在 xxx.myi,数据是再 xxx.myd\n因此MyISAM引擎没有聚簇索引，都是非聚簇索引\n底层也是B+树的结构，叶子节点存放的是数据的地址")]),v._v(" "),_("h2",{attrs:{id:"q-b树和b-树的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-b树和b-树的区别"}},[v._v("#")]),v._v(" q: B树和B+树的区别？")]),v._v(" "),_("p",[v._v("B+树非叶子节点仅用于索引，不保存数据记录，跟记录有关的信息都放在叶子节点中。而 B 树中， 非叶子节点既保存索引，也保存数据记录 。")]),v._v(" "),_("ul",[_("li",[v._v("B+树==查询效率更稳定==。因为B+树每次只有访问到叶子节点才能找到对应的数据，而在B树中，非叶子节点也会存储数据，这样就会造成查询效率不稳定的情况，有时候访问到了非叶子节点就可以找到关键字，而有时点需要访问到叶子节点才能找到关键字")]),v._v(" "),_("li",[v._v("B+树的==查询效率更高，目录页的信息密度更大==。这是因为B树非叶子节点也要存储数据，B+树非叶子节点不用存储数据。对于相同大小的页，B+树存储的目录项更多，故通常情况下B+树比B树更矮胖(阶数更大，深度更低)，查询所需要的磁盘I/O也会更少。同样的磁盘页大小，B+树可以存储更多的节点关键字。")]),v._v(" "),_("li",[v._v("在==查询范围==上，B+树的效率也比B树高。这是因为所有关键字都出现在B+树的叶子节点中，叶子节点之间会有指针，数据又是递增的，这使得范围查找可以通过指针连接查找。而在B树中则需要通过中序遍历才能完成查询范围的查找。效率要低很多")])]),v._v(" "),_("h2",{attrs:{id:"q-索引如何分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-索引如何分类"}},[v._v("#")]),v._v(" q: 索引如何分类?")]),v._v(" "),_("p",[v._v("索引按照物理实现方式，索引可以分为 2 种：")]),v._v(" "),_("ul",[_("li",[v._v("聚簇索引")]),v._v(" "),_("li",[v._v("非聚簇索引 / 二级索引 / 辅助索引")])]),v._v(" "),_("p",[v._v("按照功能划分：")]),v._v(" "),_("ul",[_("li",[v._v("主键索引：加速查询 + 列值唯一（不可以有 NULL）+ 表中只有一个。")]),v._v(" "),_("li",[v._v("普通索引：仅加速查询。")]),v._v(" "),_("li",[v._v("唯一索引：加速查询 + 列值唯一（可以有 NULL）。")]),v._v(" "),_("li",[v._v("全文索引：对文本的内容进行分词，进行搜索。目前只有 "),_("code",[v._v("CHAR")]),v._v("、"),_("code",[v._v("VARCHAR")]),v._v(" ，"),_("code",[v._v("TEXT")]),v._v(" 列上可以创建全文索引。一般不会使用，效率较低，通常使用搜索引擎如 ElasticSearch 代替。")]),v._v(" "),_("li",[v._v("前缀索引：前缀索引只适用于字符串类型的数据。前缀索引是对文本的前几个字符创建索引，相比普通索引建立的数据更小， 因为只取前几个字符。")])]),v._v(" "),_("p",[v._v("按照涉及的列数分：")]),v._v(" "),_("ul",[_("li",[v._v("单列索引")]),v._v(" "),_("li",[v._v("联合索引：多列值组成一个索引，专门用于组合搜索，其效率大于索引合并。")])]),v._v(" "),_("h2",{attrs:{id:"q-什么是聚簇索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-什么是聚簇索引"}},[v._v("#")]),v._v(" q: 什么是聚簇索引？")]),v._v(" "),_("p",[v._v("聚簇索引：\n就是数据和索引的是在一起的，即在同一张表中 xxx.ibd\n也就是所谓的：索引即数据,数据即索引。\n"),_("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027123817.png",alt:"image.png"}})]),v._v(" "),_("p",[v._v("特点：")]),v._v(" "),_("ol",[_("li",[v._v("使用记录主键值的大小进行记录和页的排序，这包括三个方面的含义：\n"),_("ol",[_("li",[v._v("页内的记录是按照主键的大小顺序排成一个单向链表 。")]),v._v(" "),_("li",[v._v("各个存放用户记录的页也是根据页中用户记录的主键大小顺序排成一个双向链表 。")]),v._v(" "),_("li",[v._v("存放目录项记录的页分为不同的层次，在同一层次中的页也是根据页中目录项记录的主键大小顺序排成一个双向链表 。")])])]),v._v(" "),_("li",[v._v("B+树的 叶子节点 存储的是完整的用户记录。\n所谓完整的用户记录，就是指这个记录中存储了所有列的值（包括隐藏列）。")])]),v._v(" "),_("p",[v._v("把具有这两种特性的B+树称为聚簇索引，所有完整的用户记录都存放在这个聚簇索引的叶子节点处。这种聚簇索引并不需要我们在MySQL语句中显式的使用INDEX语句去创建,InnoDB存储引擎会自动地创建聚簇索引。")]),v._v(" "),_("ul",[_("li",[v._v("B+树根页面的位置是固定的，当数据超出页面大小的时候，会新建一个页面作为自己的子页面，再把数据复制过去，自己成为目录页")]),v._v(" "),_("li",[v._v("一个页面至少存两条记录")])]),v._v(" "),_("p",[_("strong",[v._v("优点")])]),v._v(" "),_("ul",[_("li",[v._v("数据访问更快 ，因为聚簇索引将索引和数据保存在同一个B+树中，因此从聚簇索引中获取数据比非聚簇索引更快")])]),v._v(" "),_("blockquote",[_("p",[v._v("二级索引访问需要两次索引查找 ，第一次找到主键值，第二次根据主键值找到行数据")])]),v._v(" "),_("ul",[_("li",[v._v("聚簇索引对于主键的 排序查找 和 范围查找 速度非常快")]),v._v(" "),_("li",[v._v("按照聚簇索引排列顺序，查询显示一定范围数据的时候，由于数据都是紧密相连，数据库不用从多个数据块中提取数据，所以 节省了大量的IO操作 。")])]),v._v(" "),_("p",[_("strong",[v._v("缺点")])]),v._v(" "),_("ul",[_("li",[v._v("插入速度严重依赖于插入顺序 ，按照主键的顺序插入是最快的方式，否则将会出现页分裂，严重影响性能。因此，对于InnoDB表，一般都会定义一个自增的ID列为主键")]),v._v(" "),_("li",[v._v("更新主键的代价很高 ，因为将会导致被更新的行移动。因此，对于InnoDB表，一般定义主键为不可更新")]),v._v(" "),_("li",[v._v("对于MysQL数据库目前只有InnoDB数据引擎支持聚簇索引，而MylSAM并不支持聚簇索引。")]),v._v(" "),_("li",[v._v("由于数据物理存储排序方式只能有一种，所以每个MySQL的表只能有一个聚簇索引。一般情况下就是该表的主键。")])]),v._v(" "),_("blockquote",[_("p",[v._v("如果没有定义主键，InnoDB会选择非空的唯一索引代替。如果没有这样的索引,InnoDB会隐式的定义一个主键来作为聚簇索引")])]),v._v(" "),_("ul",[_("li",[v._v("为了充分利用聚簇索引的特性，所以InnoDB表的主键列尽量选用有序的顺序id，而不建议用无序的id,"),_("strong",[v._v("比如UUID、MD5、HASH、字符串列作为主键无法保证数据的顺序增长")])])]),v._v(" "),_("h2",{attrs:{id:"q-什么是非聚簇索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-什么是非聚簇索引"}},[v._v("#")]),v._v(" q: 什么是非聚簇索引？")]),v._v(" "),_("p",[v._v("非聚簇索引\n对于其他非主键字段，也可以建立索引来帮助查找，底层页是B+树，但是叶子节点存放的不是完成的数据，而是索引字段和主键，需要做一个回表的操作\n"),_("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027123848.png",alt:"image.png"}})]),v._v(" "),_("h2",{attrs:{id:"q-使用非聚簇索引的查找过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-使用非聚簇索引的查找过程"}},[v._v("#")]),v._v(" q:使用非聚簇索引的查找过程？")]),v._v(" "),_("p",[v._v("以查找c2列的值为4的记录为例，查找过程如下:")]),v._v(" "),_("ol",[_("li",[v._v("确定目录项记录页 根据根页面，也就是页44，可以快速定位到目录项记录所在的页为页42(因为2<4< 9 )")]),v._v(" "),_("li",[v._v("通过目录项记录页确定用户记录真实所在的页 在页42中可以快速定位到实际存储用户记录的页，但是由于c2列并没有唯一性约束，所以c2列值为4的记录可能分布在多个数据页中，又因为2<4<=4，所以确定实际存储用户记录的页在页34和页35中")]),v._v(" "),_("li",[v._v("在真实存储用户记录的页中定位到具体的记录: 到页34和页35中定位到具体的记录")]),v._v(" "),_("li",[v._v("但是这个B+树的叶子节点中的记录只存储了c2和c1〔也就是主键）两个列，所以必须再根据主键值去聚簇索引中再查找一遍完整的用户记录。")])]),v._v(" "),_("blockquote",[_("p",[v._v("概念：回表：\n`根据这个以c2列大小排序的B+树只能确定要查找记录的主键值，所以如果想根据c2列的值查找到完整的用户记录的话，仍然需要到聚簇索引中再查一遍，这个过程称为回表 。也就是根据c2列的值查询一条完整的用户记录需要使用到 2 棵B+树！")])]),v._v(" "),_("h2",{attrs:{id:"q-为什么我们还需要一次-回表-操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-为什么我们还需要一次-回表-操作"}},[v._v("#")]),v._v(" q:为什么我们还需要一次 回表 操作？")]),v._v(" "),_("p",[v._v("直接把完整的用户记录放到叶子节点不OK吗")]),v._v(" "),_("blockquote",[_("p",[v._v("回答:**` 如果把完整的用户记录放到叶子节点是可以不用回表。但是太占地方了，相当于每建立一棵B+树都需要把所有的用户记录再都拷贝一遍，这就有点太浪费存储空间了 因为这种按照非主键列建立的B+树需要一次回表操作才可以定位到完整的用户记录，所以这种B+树也被称为二级索引(英文名secondary index )，或者辅动索引。由于使用的是c2列的大小作为B+树的排序规则，所以也称这个B+树是为c2列建立的索引")])]),v._v(" "),_("p",[v._v("非聚簇索引的存在不影响数据在聚簇索引中的组织，所以一张表可以有多个非聚簇索引\n"),_("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027123914.png",alt:"image.png"}})]),v._v(" "),_("p",[v._v("小结:聚簇索引与非聚簇索引的原理不同，在使用上也有一些区别:\n1.聚簇索引的叶子节点存储的就是数据记录，非聚簇索引的叶子节点存储的是数据位置。非聚簇索引不会影响数据表的物理存储顺序\n2.一个表只能有一个聚簇索引，因为只能有一种排序存储的方式，但可以有多个非聚簇聚簇索引，也就是多个索引目录提供数据检索\n3.使用聚簇索引的时候，数据的查询效率高(不用回表)，但如果对数据进行插入，删除，更新等操作，效率会比非聚簇索引低")]),v._v(" "),_("h2",{attrs:{id:"q-非聚簇索引一定回表查询吗-覆盖索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-非聚簇索引一定回表查询吗-覆盖索引"}},[v._v("#")]),v._v(" q: 非聚簇索引一定回表查询吗(覆盖索引)?")]),v._v(" "),_("p",[_("strong",[v._v("非聚簇索引不一定回表查询。")])]),v._v(" "),_("p",[v._v("试想一种情况，用户准备使用 SQL 查询用户名，而用户名字段正好建立了索引。")]),v._v(" "),_("div",{staticClass:"language-sql extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[v._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("SELECT")]),v._v(" name "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("FROM")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("table")]),v._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("WHERE")]),v._v(" name"),_("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),_("span",{pre:!0,attrs:{class:"token string"}},[v._v("'guang19'")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n")])])]),_("p",[v._v("那么这个索引的 key 本身就是 name，查到对应的 name 直接返回就行了，无需回表查询。")]),v._v(" "),_("p",[v._v("如果一个索引包含（或者说覆盖）所有需要查询的字段的值，我们就称之为 "),_("strong",[v._v("覆盖索引（Covering Index）")]),v._v(" 。我们知道在 InnoDB 存储引擎中，如果不是主键索引，叶子节点存储的是主键+列值。最终还是要“回表”，也就是要通过主键再查找一次，这样就会比较慢。而覆盖索引就是把要查询出的列和索引是对应的，不做回表操作！")]),v._v(" "),_("p",[_("strong",[v._v("覆盖索引即需要查询的字段正好是索引的字段，那么直接根据该索引，就可以查到数据了，而无需回表查询。")])]),v._v(" "),_("blockquote",[_("p",[v._v("如主键索引，如果一条 SQL 需要查询主键，那么正好根据主键索引就可以查到主键。再如普通索引，如果一条 SQL 需要查询 name，name 字段正好有索引， 那么直接根据这个索引就可以查到数据，也无需回表。")])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027123957.png",alt:"image.png"}})]),v._v(" "),_("h2",{attrs:{id:"q-什么是索引下推"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-什么是索引下推"}},[v._v("#")]),v._v(" q: 什么是索引下推？")]),v._v(" "),_("p",[v._v("当使用二级索引的时候，如果where条件包含在索引字段中，可以先过滤，再回表，以减少磁盘IO的次数")]),v._v(" "),_("blockquote",[_("p",[v._v("当SQL使用覆盖索引时，不支持ICP优化方法")])]),v._v(" "),_("h2",{attrs:{id:"q-什么是联合索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-什么是联合索引"}},[v._v("#")]),v._v(" q: 什么是联合索引？")]),v._v(" "),_("p",[v._v("可以同时以多个列的大小作为排序规则，也就是同时为多个列建立索引，比方说想让B+树按 照 c2和c3列 的大小进行排序，这个包含两层含义：")]),v._v(" "),_("ul",[_("li",[v._v("先把各个记录和页按照c2列进行排序")]),v._v(" "),_("li",[v._v("在记录的c2列相同的情况下，采用c3列进行排序")])]),v._v(" "),_("p",[v._v("为c2和c3列建立的索引的示意图如下：\n"),_("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027124029.png",alt:"image.png"}})]),v._v(" "),_("p",[v._v("如图所示，需要注意以下几点:")]),v._v(" "),_("ul",[_("li",[v._v("每条目录项记录都由c2、c3、页号这三个部分组成，各条记录先按照c2列的值进行排序，如果记录的c2列相同，则按照c3列的值进行排序。")]),v._v(" "),_("li",[v._v("B+树叶子节点处的用户记录由c2、c3和主键c1列组成")])]),v._v(" "),_("p",[v._v("注意一点，以c2和c3列的大小为排序规则建立的B+树称为联合索引 ，本质上也是一个二级索引。它的意思与分别为c2和c3列分别建立索引的表述是不同的，不同点如下：")]),v._v(" "),_("ul",[_("li",[v._v("建立联合索引只会建立如上图一样的1棵B+树。")]),v._v(" "),_("li",[v._v("为c2和c3列分别建立索引会分别以c2和c3列的大小为排序规则建立2棵B+树。")])]),v._v(" "),_("blockquote",[_("p",[v._v("联合索引的效率大于索引合并，占用磁盘空间更少")])]),v._v(" "),_("h2",{attrs:{id:"q-什么最左前缀匹配"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-什么最左前缀匹配"}},[v._v("#")]),v._v(" q: 什么最左前缀匹配？")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("查询字段")]),v._v(" "),_("th",[v._v("使用索引")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("a,b,c")]),v._v(" "),_("td",[v._v("a,b,c")])]),v._v(" "),_("tr",[_("td",[v._v("a,b")]),v._v(" "),_("td",[v._v("a,b")])]),v._v(" "),_("tr",[_("td",[v._v("a")]),v._v(" "),_("td",[v._v("a")])]),v._v(" "),_("tr",[_("td",[v._v("b,c")]),v._v(" "),_("td",[v._v("不使用索引")])]),v._v(" "),_("tr",[_("td",[v._v("a,c,b")]),v._v(" "),_("td",[v._v("a")])]),v._v(" "),_("tr",[_("td",[v._v("a,c")]),v._v(" "),_("td",[v._v("a")])]),v._v(" "),_("tr",[_("td",[v._v("a,b>?,c")]),v._v(" "),_("td",[v._v("a,b (b是范围查询，使右边的列索引失效)")])])])]),v._v(" "),_("p",[v._v("在MySQL应用联合索引时会遵守最左前缀匹配，即最左优先，在检索数据时从联合索引的最左边开始匹配")]),v._v(" "),_("p",[_("strong",[v._v("结论:")]),_("br"),v._v("\nMySQL可以为多个字段创建索引，一个索引可以包括16个字段。对于多列索引，过滤条件要使用索引必须按照索引建立时的顺序，依次满足，一旦跳过某个字段，索引后面的字段都无法被使用。如果查询条件中没有使用这些字段中第1个字段时，多列(或联合)索引不会被使用。")]),v._v(" "),_("blockquote",[_("p",[v._v("拓展: Alibaba 《Java开发手册》"),_("br"),v._v("\n索引文件具有B-Tree的最左前缀匹配特性，如果左边的值未确定，那么无法使用此索引")])]),v._v(" "),_("h2",{attrs:{id:"q-索引的存储结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-索引的存储结构"}},[v._v("#")]),v._v(" q: 索引的存储结构?")]),v._v(" "),_("ul",[_("li",[v._v("一个表对应一个表空间 xxx.ibd")]),v._v(" "),_("li",[v._v("表空间内又分为索引段，数据段，回滚段等，分类依据是是否为叶子节点")]),v._v(" "),_("li",[v._v("段内由分为不同的区，使区内的页尽可能连续，以减少磁盘io的移动时间")]),v._v(" "),_("li",[v._v("以页作为磁盘和内存之间交互的基本单位，大小为16kb\n"),_("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027124059.png",alt:"image.png"}})])]),v._v(" "),_("h2",{attrs:{id:"q-页的结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-页的结构"}},[v._v("#")]),v._v(" q: 页的结构?")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027124117.png",alt:"image.png"}})]),v._v(" "),_("p",[v._v("这7个部分作用分别如下，简单梳理如下表所示:")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("名称")]),v._v(" "),_("th",[v._v("占用大小")]),v._v(" "),_("th",[v._v("说明")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("File Header")]),v._v(" "),_("td",[v._v("38字节")]),v._v(" "),_("td",[v._v("文件头，描述页的信息")])]),v._v(" "),_("tr",[_("td",[v._v("Page Header")]),v._v(" "),_("td",[v._v("56字节")]),v._v(" "),_("td",[v._v("页头,页的状态信息")])]),v._v(" "),_("tr",[_("td",[v._v("lnfimum-Supremum")]),v._v(" "),_("td",[v._v("26字节")]),v._v(" "),_("td",[v._v("最大和最小记录，这是两个虚拟的行记录")])]),v._v(" "),_("tr",[_("td",[v._v("User Records")]),v._v(" "),_("td",[v._v("不确定")]),v._v(" "),_("td",[v._v("用户记录，存储行记录内容")])]),v._v(" "),_("tr",[_("td",[v._v("Free Space")]),v._v(" "),_("td",[v._v("不确定")]),v._v(" "),_("td",[v._v("空闲记录，页中还没有被使用的空间")])]),v._v(" "),_("tr",[_("td",[v._v("Page Directory")]),v._v(" "),_("td",[v._v("不确定")]),v._v(" "),_("td",[v._v("页目录，存储用户记录的相对位置，数组二分法加快查找")])]),v._v(" "),_("tr",[_("td",[v._v("File Trailer")]),v._v(" "),_("td",[v._v("8字节")]),v._v(" "),_("td",[v._v("文件尾,校验页是否完整")])])])]),v._v(" "),_("p",[v._v("行格式\n常用的有Compact和Dynamic(默认)\n"),_("img",{attrs:{src:"https://obs-knowledge.oss-cn-beijing.aliyuncs.com/img/20231027124136.png",alt:"image.png"}})]),v._v(" "),_("h2",{attrs:{id:"q-什么是隐藏索引"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-什么是隐藏索引"}},[v._v("#")]),v._v(" q:什么是隐藏索引？")]),v._v(" "),_("p",[v._v("mysql8新特性")]),v._v(" "),_("blockquote",[_("p",[v._v("设置为隐藏索引，则该不起作用\n在MySQL 5.7版本及之前，只能通过显式的方式删除索引。此时，如果发现删除索引后出现错误，又只能通过显式创建索引的方式将删除的索引创建回来。如果数据表中的数据量非常大，或者数据表本身比较大，这种操作就会消耗系统过多的资源，操作成本非常高。")])]),v._v(" "),_("p",[v._v("从MySQL 8.x开始支持 隐藏索引（invisible indexes） ，只需要将待删除的索引设置为隐藏索引，使查询优化器不再使用这个索引（即使使用force index（强制使用索引），优化器也不会使用该索引），确认将索引设置为隐藏索引后系统不受任何响应，就可以彻底删除索引。 这种通过先将索引设置为隐藏索引，再删除索引的方式就是软删除 。")]),v._v(" "),_("blockquote",[_("p",[v._v("同时，如果你想验证某个索引删除之后的查询性能影响，就可以暂时先隐藏该索引")]),v._v(" "),_("p",[v._v("注意: 主键不能被设置为隐藏索引。当表中没有显式主键时，表中第一个唯一非空索引会成为隐式主键，也不能设置为隐藏索引。")]),v._v(" "),_("p",[v._v("索引默认是可见的，在使用CREATE TABLE，CREATE INDEX或者ALTER TABLE等语句时可以通过VISIBLE或INVISIBLE关键词设置索引的可见性")])]),v._v(" "),_("h2",{attrs:{id:"q-适合创建索引的情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-适合创建索引的情况"}},[v._v("#")]),v._v(" q: 适合创建索引的情况?")]),v._v(" "),_("ol",[_("li",[v._v("主键")]),v._v(" "),_("li",[v._v("字段的数值有唯一性的限制")]),v._v(" "),_("li",[v._v("频繁被查询的字段")]),v._v(" "),_("li",[v._v("频繁作为 WHERE 查询条件的字段")]),v._v(" "),_("li",[v._v("经常 GROUP BY 和 ORDER BY 的列")]),v._v(" "),_("li",[v._v("UPDATE、DELETE 的 WHERE 条件列")]),v._v(" "),_("li",[v._v("DISTINCT 字段需要创建索引")]),v._v(" "),_("li",[v._v("区分度高(散列性高)的列适合作为索引")])]),v._v(" "),_("h2",{attrs:{id:"q-不适合创建索引的情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-不适合创建索引的情况"}},[v._v("#")]),v._v(" q: 不适合创建索引的情况?")]),v._v(" "),_("ol",[_("li",[v._v("在where中使用不到的字段，不要设置索引")]),v._v(" "),_("li",[v._v("不经常 GROUP BY 和 ORDER BY 的列")]),v._v(" "),_("li",[v._v("数据量小的表最好不要使用索引")]),v._v(" "),_("li",[v._v("有大量重复数据的列上不要建立索引（区分度低）")])]),v._v(" "),_("blockquote",[_("p",[v._v("例如性别")])]),v._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[v._v("避免对经常更新的表创建过多的索引")]),v._v(" "),_("li",[v._v("不建议用无序的值作为索引")]),v._v(" "),_("li",[v._v("删除不再使用或者很少使用的索引")]),v._v(" "),_("li",[v._v("不要定义冗余或重复的索引")])]),v._v(" "),_("blockquote",[_("p",[v._v("例如a,b联合索引，就不用建立a索引")])]),v._v(" "),_("h2",{attrs:{id:"q-哪些情况会造成索引失效"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-哪些情况会造成索引失效"}},[v._v("#")]),v._v(" q: 哪些情况会造成索引失效？")]),v._v(" "),_("p",[v._v("用不用索引，最终都是优化器说了算。优化器是基于什么的优化器?基于cost开销  (CostBaseOptimizer )，它不是基于规则(Rule-BasedOptimizer)，也不是基于语义。怎么样开销小就怎么来。另外，SQL语句是否使用索引，跟数据库版本、数据量、数据选择度都有关系")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("全值匹配\n全值匹配表示索引列和查询条件的字段全部匹配，精度高，key_len长度大。\n当创建多个索引时，查询优化器通常会选取和查询字段匹配度最高的索引\n因为匹配度越高，查询效率越快。此时除被选中的索引外，其它索引失效")])]),v._v(" "),_("li",[_("p",[v._v("联合索引的最左前缀")])])]),v._v(" "),_("blockquote",[_("p",[v._v("不符合最左前缀匹配的，会是联合索引失效")])]),v._v(" "),_("ul",[_("li",[v._v("计算、函数、类型转换(自动或手动)导致索引失效")]),v._v(" "),_("li",[v._v("以 "),_("code",[v._v("%")]),v._v(" 开头的 LIKE 查询比如 "),_("code",[v._v("like '%abc'")]),v._v(";")]),v._v(" "),_("li",[v._v("查询条件中使用 or，且 or 的前后条件中有一个列没有索引，涉及的索引都不会被使用到;")]),v._v(" "),_("li",[v._v("不等值查询，不等于索引失效；is null可以使用索引，is not null无法使用索引")]),v._v(" "),_("li",[v._v("范围查询，数据量过大的时候，不使用索引")])])])}),[],!1,null,null,null);_.default=s.exports}}]);