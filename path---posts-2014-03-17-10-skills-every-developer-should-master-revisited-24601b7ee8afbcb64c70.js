webpackJsonp([0xef57352434c4],{758:function(e,a){e.exports={data:{markdownRemark:{html:'<h1>Invest in your own toolset</h1>\n<p>After trade school, a mechanic needs to obtain their own set of tools.\nGarages only provide big equipment, such as lifts.\nMechanics bring tools that they prefer/can afford to put in their toolbox.</p>\n<p>Likewise, software development shops do not dictate required tools to engineers.\nBoth occupations defer the tool selection to the workers.\nThese workers must settle between obtaining quality tools and paying affordable prices.\nThis carte blanche custom promotes mastery of tools that are pervasive throught a career.</p>\n<h2>Some tools endure</h2>\n<p>The lifspan of applicability varies amongst different tools.\nSome are brief trends while others linger for decades.\nIt is wise to strive for mastery of matured tools.\nThey have proven their value, and will endure long enough for users to reach an expert level.</p>\n<p>This article describes 10 software programs that all developers should master.\nThey are free, applicable to many jobs, and maintained by mature open source projects.\nStriving to master these tools will pay off over an entire career.</p>\n<p>Here is my shortlist of tools:</p>\n<ol>\n<li><a href="#VI">VI</a></li>\n<li><a href="#RegularExpressions">Regular Expressions</a></li>\n<li><a href="#GNUTools">GNU Tools</a></li>\n<li><a href="#Bash">Bash</a></li>\n<li><a href="#Javascript">Javascript</a></li>\n<li><a href="#Emacs">Emacs</a></li>\n<li><a href="#SQL">SQL</a></li>\n<li><a href="#Markdown">Markdown</a></li>\n<li><a href="#Tmux">Tmux</a></li>\n<li><a href="#R">R</a></li>\n</ol>\n<hr>\n<h2>VI</h2>\n<div class=\'image block\' style=\'max-height:100px\'>\n  <img height=\'100%\' src=\'/images/posts/wrench.jpg\' />\n</div>\n<blockquote style=\'clear:none\'>\n  Mechanics rely on the wrench to adjust and fasten many things.\n   Like wrenches, vi enables quick refinement of components.\n</blockquote>\n<p>Vi is a text editor.\nMost *nix boxes have vi installed.\nA vi user can edit files notwithstanding the box\'s configuration.\nMost text editors require additional installation which is sometimes out of scope.</p>\n<p>Additionally, vi has a reputation of making text editing breathtakingly efficient.\nBecause of this, many developers, including myself, use <a href="http://vim.org">vim</a> ( vi iMproved ) as their day to day editor.</p>\n<p>Knowing basic vi commands saves time and frustration when using an alien machine.\nAt a minimum, learn to insert text, save/quit, and move around.</p>\n<h3>Recommended Actions</h3>\n<ol>\n<li>beginner: Complete the first quarter of <code>$ vitutor</code> within a terminal.</li>\n<li><a href="http://yannesposito.com/Scratch/en/blog/Learn-Vim-Progressively/">yannesposito wrote the best vim overview post I have ever seen.  It covers everything you need to know</a></li>\n<li>intermediate: <a href="http://www.amazon.com/gp/product/1934356980/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1934356980&linkCode=as2&tag=richsonicom-20">Practical Vim: Edit Text at the Speed of Thought (Pragmatic Programmers)</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=1934356980" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></li>\n</ol>\n<hr>\n<h2>Regular Expressions</h2>\n<div class=\'image block\' style=\'max-height:100px\' >\n  <img height=\'100%\' src=\'/images/posts/oi-can.jpg\' />\n</div>\n<blockquote style=\'clear:none\'>\n  Oil keeps tools and parts lubricated and reduces friction.\n  Regular Expressions serve the same purpose for software developers.\n</blockquote>\n<p>Regular Expressions, or regexes, are a sophisticated method for pattern matching.\nRegex is supported in most tools and programming languages.\nAdvanced usage of many tools involves the application of regexes.</p>\n<p>Regexes improve code quality, and speed up debugging.\nDebugging combines finding problems and solving them.\nRegex mastery enables brisk detection of code blocks, thus decreasing work time.\nIn code, regexes are commonly used to determine string format.\nFor example, the regex: <code>^\\$?[0-9,]+(\\.[0-9]+)?$</code>, matches any valid US currency.</p>\n<h3>Recommended Actions</h3>\n<ol>\n<li><a href="http://www.amazon.com/gp/product/1449319432/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=1449319432&#x26;linkCode=as2&#x26;tag=richsonicom-20">Regular Expressions Cookbook</a>\nis explicative, but slow for beginners.</li>\n<li>Section 4.2 in <a href="http://www.amazon.com/gp/product/097873923X/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=097873923X&#x26;linkCode=as2&#x26;tag=richsonicom-20">Textmate: Power Editing for the Mac</a>\ndid a better job at explaining regexes.</li>\n<li>(in <a href="#VI">vi</a>) <code>:h usr_27.txt</code>, is great to remember because its extensive, and <a href="#VI">vi</a> can always be accessed.</li>\n</ol>\n<hr>\n<h2>Basic GNU Tools</h2>\n<div class=\'image block\' style=\'max-height:100px\' >\n  <img height=\'100%\' src=\'/images/posts/toolbox.jpeg\' />\n</div>\n<blockquote style=\'clear:none\'>\n  A mechanic\'s toolbox contains various types of hand tools.\n  Some are versitile, while others have niche uses.\n  GNU Tools fufill a similar function for developers.\n</blockquote>\n<p>GNU Tools are often more performant than solutions in proprietary IDEs, or hand made scripts.\nThey are free, and the source code is publicly available.\nThis makes GNU Tools stable, performant, available and reliable.</p>\n<p>Most simple tasks can be performed with just a chain of GNU commands.\nEach GNU command handles a specific task very well.\nMany of these small tasks can be combined to complete a larger task.</p>\n<p>The following example outputs word frequency of a file:</p>\n<pre><code>$ cat filename | tr \' \' \'\\n\' | sort | uniq -ci | sort\n   ...\n   2 mode\n   3 prefix\n   3 the\n</code></pre>\n<p>With some practice, command like this can be easily created.\nHere are the steps:  <em>grab the file; print each word on a single line; alphabetically sort the lines; combine and count duplicates; sort by count</em></p>\n<h3>Recommended Actions</h3>\n<ol>\n<li>All developers must own <a href="http://www.amazon.com/gp/product/0596003307/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=0596003307&#x26;linkCode=as2&#x26;tag=richsonicom-20">Unix Power Tools</a></li>\n<li><a href="http://artlung.com/smorgasborg/C_R_Y_P_T_O_N_O_M_I_C_O_N.shtml">In the beginning there was the command line</a>.</li>\n<li><a href="http://widgetsandshit.com/teddziuba/2010/10/taco-bell-programming.html">Taco Bell Programming</a></li>\n<li>Read man pages, you will be surprised at the breadth of certain commands (e.g. man find; man curl; man grep)</li>\n</ol>\n<hr>\n<h2>Bash</h2>\n<div class=\'image block\' style=\'max-height:100px\' >\n  <img height=\'100%\' src=\'/images/posts/jack.jpg\' />\n</div>\n<blockquote style=\'clear:none\'>\n Jacks hoist up vehicles, so they can be inspected from all angles.\n Similarly, bash lets developers view code from different vantage points.\n</blockquote>\n<p>Bash is part of the GNU project, but is so paramount that it deserves its own section.\nThe Bash shell proxies between users and commands ( e.g. GNU Tools).\nBash experts perform tasks swiftly and painlessly.</p>\n<p>There are many alternatives shells out there.\nHowever, bash\'s differentiating feature is its prevailence on most *nix distributions.\nAs such, all developers benefit from knowing bash even if they use another shell on their machine.</p>\n<h3>Recommended Actions</h3>\n<ol>\n<li>The <a href="http://www.amazon.com/gp/product/0596526784/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=0596526784&#x26;linkCode=as2&#x26;tag=richsonicom-20">Bash Cookbook</a>\nteaches both basic and advanced features.</li>\n</ol>\n<hr>\n<h2>Javascript</h2>\n<div class=\'image block\' style=\'max-height:100px\' >\n  <img height=\'100%\' src=\'/images/posts/Emergency-tool-kit.jpg\' />\n</div>\n<blockquote style=\'clear:none\'>\n Mechanics carry tools outside the shop in case of a breakdown.\n Javascript is the developers emergency kit.\n</blockquote>\n<p>Javascript is everywhere.\nJavascript consoles can be run from any computer with Google Chrome, Firefox, or Safari.\nBecause of this, knowing javascript is adventagious.\nIn a bind, javascript snippets can be snapped together.\nIt is especially useful in corporate environments where admin rights are stripped from the user.</p>\n<p>In addition to being portable, Javascript can dice and slice web pages to quickly snatch data.</p>\n<h3>Recommended Actions</h3>\n<ol>\n<li><a href="http://www.amazon.com/gp/product/0596517742/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596517742&linkCode=as2&tag=richsonicom-20">JavaScript: The Good Parts</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=0596517742" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></li>\n<li><a href="http://www.amazon.com/gp/product/B00D624AQO/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B00D624AQO&linkCode=as2&tag=richsonicom-20">Functional JavaScript: Introducing Functional Programming with Underscore.js</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=B00D624AQO" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></li>\n<li>"<a href="http://jstherightway.org">Best JS Resource Ever</a>" ~ Paul Pucciarelli</li>\n</ol>\n<hr>\n<h2>Emacs</h2>\n<div class=\'image block\' style=\'max-height:100px\' >\n  <img height=\'100%\' src=\'/images/posts/air-compressor.jpg\' />\n</div>\n<blockquote style=\'clear:none\'>\n> Air compressors serve many purposes for mechanics.\n> They fill tires, clean working areas, and can power tools like air drills.\n> Emacs serves many puposes for developers.\n</blockquote>\n<p>Emacs is not a text editor, it is a LISP interprater that houses a text editing mode.\nEmacs has many other modes that make it useful including: <em>project management mode, emulation ( consoles, REPLS, <a href="#VI">vi</a>)</em>...</p>\n<h3>Most Importantly</h3>\n<p>Many GNU programs default to Emacs Keybindings, e.g. <a href="#Bash">bash</a>.\nAs such, learning emacs keybindings enables a user to manouver a <a href="#Bash">bash</a> session like a ninja.</p>\n<h3>Recommended Actions</h3>\n<ul>\n<li><a href="https://www.youtube.com/playlist?list=PLABBCB510477C08DB">Hack Emacs videos</a></li>\n<li><a href="http://www.jesshamrick.com/2012/09/10/absolute-beginners-guide-to-emacs/">beginner guide to emacs</a></li>\n<li>emacs help <code>M-h</code></li>\n</ul>\n<hr>\n<h2>SQL</h2>\n<div class=\'image block\' style=\'max-height:100px\' >\n  <img height=\'100%\' src=\'/images/posts/obd-tool.jpg\' />\n</div>\n<blockquote style=\'clear:none\'>\n> OBD Interface Scanners read diagnostics of a vehicle.\n> SQL can take readings on an application\'s data.\n</blockquote>\n<p>Modern applications generally use SQL databases to house a major portion of data.\nI have seen senior level developers join a team, and begin contributing immediately.\nThey ramp up business context by poking around the SQL database.\nThis knowledge enables them to contribute to big picture conversations.</p>\n<p>There are many flavors of SQL databases, but all comprehend vanilla SQL.\nThey differ only in implementation of exotic features.\nWith a strong foundation in SQL, learning any dialect will be a breeze.</p>\n<h3>Recommended Actions</h3>\n<ol>\n<li><a href="http://www.amazon.com/gp/product/1449394094/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1449394094&linkCode=as2&tag=richsonicom-20">SQL Pocket Guide</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=1449394094" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></li>\n<li><a href="http://sqlzoo.net/wiki/Main_Page">SQL Zoo</a> is the only site you need to learn SQL.</li>\n</ol>\n<hr>\n<h2>Markdown</h2>\n<div class=\'image block\' style=\'max-height:100px\' >\n  <img height=\'100%\' src=\'/images/posts/pry-bar.jpg\' />\n</div>\n<blockquote style=\'clear:none\'>\n> A lever amplifies an input force to provide a greater output force.\n> Markdown lets developers get greater output (HTML) from basically writing plain text.\n</blockquote>\n<p>Markdown is simple, but it packs a mean productivity punch.\n<a href="http://jekyllrb.com/">Jekyll</a>\nuses it to render blog posts (see <a href="/how-i-use-github-pages-to-host-my-blog">how my blog runs</a>).\nIt is also terse enough to quickly decorate an email (check out <a href="http://markdown-here.com/index.html">MarkdownHere for Chrome</a>).</p>\n<p>Amazing speed gains come when writing documentation in Markdown.\nIts syntax makes it painless to quickly produce documentation.\n<a href="https://help.github.com/articles/github-flavored-markdown">Thats why Github offers it for README files</a>.</p>\n<h3>Recommended Actions</h3>\n<ol>\n<li><a href="http://www.markdowntutorial.com/">Markdown Tutorial</a> is an interactive site that teaches markdown.</li>\n<li><a href="https://help.github.com/articles/markdown-basics">The Github Tutorial</a> is how I learned Markdown.</li>\n</ol>\n<hr>\n<h2>Tmux</h2>\n<div class=\'image block\' style=\'max-height:100px\' >\n  <img height=\'100%\' src=\'/images/posts/clamp.jpg\' />\n</div>\n<blockquote style=\'clear:none\'>\n> Clamps hold loose components in place.\n> Tmux clamps terminal sessions, so developers can multitask or return to a session later.\n</blockquote>\n<p>Tmux is a modern incarnation of the GNU Screen program.</p>\n<ul>\n<li>It can improve the stability, and increase the execution speed of workflows.</li>\n<li>It enables visualization of problems in a new way.</li>\n<li>It is easy to install, and works on most *nix platforms.</li>\n</ul>\n<p>Tmux can manage multiple sessions at the same time.\nWithin each session, any number of windows can be created.\nWindows can also be split into both vertical and horizontal panes.\nTmux can be controlled by scripts, and automate repetitive workflow tasks.</p>\n<h3>Recommended Actions</h3>\n<ol>\n<li>Read <a href="/why-you-may-be-missing-out-if-you-dont-use-tmux">my article</a> for an in depth description of tmux.</li>\n<li><a href="http://www.amazon.com/gp/product/B00A4I3ZVY/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=B00A4I3ZVY&#x26;linkCode=as2&#x26;tag=richsonicom-20">Pragmatic Programming - Tmux</a> that takes about two weeks to read / get up to speed ( this is how I learned tmux )</li>\n<li><a href="https://www.bitcast.io/b/tmux-tunes-week-1">My videos</a> will let you start using tmux immediately, and gradually show more features as time goes on.</li>\n</ol>\n<hr>\n<h2>R</h2>\n<div class=\'image block\' style=\'max-height:100px\' >\n  <img  height=\'100%\' src=\'/images/posts/tape-measure.jpg\' />\n</div>\n<blockquote style=\'clear:none\'>\n> Mechanics plan and analyze their next move with a tape measure.\n> R enables developers to plan by analyzing reference data.\n</blockquote>\n<p>R is a non-gui, lightweight, free version of Microsoft Excel.\nDespite its high learning curve, R is powerful and terse.</p>\n<p>In just a few commands, R can crunch professional level statistics.\nR does the heavy lifting, and abstracts mathematical calculations.\nR simplifies statistics down to analyzing results.</p>\n<p>I monitor stats about my working habits with R.\nI have many random data points that I collect periodically, and let R conjure up some comparisons for me.\nThis is a simple use, but R can do much more sophisticated statistics.</p>\n<h3>Recommended Actions</h3>\n<ol>\n<li>A great general into to R: <a href="http://www.amazon.com/gp/product/1593273843/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=1593273843&linkCode=as2&tag=richsonicom-20">The Art of R Programming: A Tour of Statistical Software Design</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=1593273843" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></li>\n<li>I always like cookbooks:  <a href="http://www.amazon.com/gp/product/0596809158/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0596809158&linkCode=as2&tag=richsonicom-20">R Cookbook (O\'Reilly Cookbooks)</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=0596809158" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></li>\n<li>My general reference, since I do a lot of graphs:  <a href="http://www.amazon.com/gp/product/B0056ZUJ46/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0056ZUJ46&linkCode=as2&tag=richsonicom-20">R Graph Cookbook</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=richsonicom-20&l=as2&o=1&a=B0056ZUJ46" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></li>\n</ol>\n<h1>Conclusion</h1>\n<p>Focusing on fundamental skills creates a latticework in which one can develop throughout their career.\nRecent college grads will plump up their resume, and strengthen their foundational skills.\nVeterans can always learn new tricks that will make them work more productively.</p>\n<h3>It can take up to 10 years to become an expert at something.</h3>\n<blockquote>\n<p>The (Beatles) had been playing in clubs since 1957. Ten years before Sgt. Pepper’s, their first critically successful album.</p>\n</blockquote>\n<h4>~ <a href="http://www.amazon.com/gp/product/1934356050/ref=as_li_ss_tl?ie=UTF8&#x26;camp=1789&#x26;creative=390957&#x26;creativeASIN=1934356050&#x26;linkCode=as2&#x26;tag=richsonicom-20">Pragmatic Thinking and Learning, page 44</a></h4>\n<p>And obviously, even masters always have more to learn.</p>\n<p>Please feel free to comment on other skills you think are foundational for developers.</p>',frontmatter:{title:"10 Tools Every Software Developer Should Know, Revisited"},fields:{date:"2014-03-17"}}},pathContext:{url:"/posts/2014-03-17-10-skills-every-developer-should-master-revisited/"}}}});
//# sourceMappingURL=path---posts-2014-03-17-10-skills-every-developer-should-master-revisited-24601b7ee8afbcb64c70.js.map