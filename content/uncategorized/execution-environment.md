---
title: "Execution Environment"
slug: /execution-environment
pylon_id: 306c65cb-092f-4a57-8a05-bb153c0972e4
published_url: https://support.hackerrank.com/articles/6693750503-Execution-Environment
last_edited: "2026-04-22"
is_published: true
---

HackerRank provides a comprehensive execution environment that supports multiple programming languages and frameworks, allowing you to run and evaluate your code efficiently.

# Coding and Database

HackerRank supports multithreading in major programming languages. The total CPU time includes execution across all threads. The maximum allowed size for a code submission is **50 KB**.

The table below lists the supported programming languages, versions, execution time limits, memory limits, and available libraries.

**Language**| **Version**| **Time Limits(Sec)**| **Memory Limits (MB)**| **Standard Libraries**| **ML Libraries**  
---|---|---|---|---|---  
**Ada**|  GNU Ada compiler 4.9| 3| 512|  N/A| N/A   
**BASH**|  Version 5.2.32| 1| 512|  N/A| N/A   
**C**|  GCC 8.3.0, C11 standard| 2| 512| [Newtonsoft json library](<http://nuget.org/packages/newtonsoft.json/>)| [liblinear@2.21](<https://web.archive.org/web/20210411062841/http://www.csie.ntu.edu.tw/~cjlin/liblinear/>),[ libsvm@3.23](<https://web.archive.org/web/20210411062841/http://www.csie.ntu.edu.tw/~cjlin/libsvmtools/>),  
[libcurl](<https://curl.se/libcurl/c/>)  
**Clojure**|  clojure 1.9.0| 8| 512| algo.generic@0.1.3, alog.monads@0.1.6, core.logic@0.8.11, core.specs.alpha@0.1.10, tools.macro@0.1.2, data.avl@0.1.0, data.int-map@0.2.4, data.json@0.2.6, data.priority-map@0.0.10, data.xml@0.0.8, spec.alpha@0.2.176| [stanford-nlp@3.2.0](<https://web.archive.org/web/20210411062841/http://nlp.stanford.edu/software/corenlp.shtml>),[ weka@3-6-10](<https://web.archive.org/web/20210411062841/http://www.cs.waikato.ac.nz/ml/weka/>),[ java-ml@0.1.7](<https://web.archive.org/web/20210411062841/http://java-ml.sourceforge.net/>),[ Jama@1.0.3](<https://web.archive.org/web/20210411062841/https://math.nist.gov/javanumerics/jama/>)  
**C#**| [.NET 8.0.2, C# 12](<https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-8/overview>)| 3| 512| Newtonsoft.Json@13.0.1, System.Reactive@5.0.0| Newtonsoft.Json@13.0.1, System.Reactive@5.0.0  
**C++**|  G++ 8.3.0, C++11 standard| 2| 512| Math library-lm[json library](<https://github.com/open-source-parsers/jsoncpp>)| [liblinear@2.21](<https://web.archive.org/web/20210411062841/http://www.csie.ntu.edu.tw/~cjlin/liblinear/>),[ libsvm@3.23](<https://web.archive.org/web/20210411062841/http://www.csie.ntu.edu.tw/~cjlin/libsvmtools/>), Boost C++ Libraries  
**C++14**|  G++ 8.3.0, C++14 standard| 2| 512| Math library-lm[json library](<https://github.com/open-source-parsers/jsoncpp>)| [liblinear@2.21](<https://web.archive.org/web/20210411062841/http://www.csie.ntu.edu.tw/~cjlin/liblinear/>),[ libsvm@3.23](<https://web.archive.org/web/20210411062841/http://www.csie.ntu.edu.tw/~cjlin/libsvmtools/>), Boost C++ Libraries,[ libcurl](<https://curl.se/libcurl/c/>)  
**C++20**|  G++ 8.3.0, C++20 standard| 2| 512| [Math library-lm json library](<https://github.com/open-source-parsers/jsoncpp>)| [liblinear@2.21](<https://web.archive.org/web/20210411062841/http://www.csie.ntu.edu.tw/~cjlin/liblinear/>),[ libsvm@3.23](<https://web.archive.org/web/20210411062841/http://www.csie.ntu.edu.tw/~cjlin/libsvmtools/>), Boost C++ Libraries,[ libcurl](<https://curl.se/libcurl/c/>)  
**C++23**|  G++ 14.2.0, C++23 standard| 2| 512| [Math, library-lm ,json library](<https://github.com/open-source-parsers/jsoncpp>)| [liblinear@2.21,](<https://web.archive.org/web/20210411062841/http://www.csie.ntu.edu.tw/~cjlin/liblinear/>)[ libsvm@3.23,](<https://web.archive.org/web/20210411062841/http://www.csie.ntu.edu.tw/~cjlin/libsvmtools/>) Boost C++ Libraries,[ libcurl](<https://curl.se/libcurl/c/>)  
**COBOL**| (OpenCOBOL) 2.2.0| 3| 512|  N/A| N/A   
**Coffeescript**|  Node.js v14.15.4| 10| 1024| axios, babel-cli,babel-preset-latest, bignumber.js,jquery, lodash,request, typescript,underscore| N/A   
**Common Lisp (SBCL)**|  SBCL 1.4.2| 12| 512|  N/A| N/A   
**D**|  Version 2.084.0| 3| 512|  N/A| N/A   
**DB2**|  DB2 v10.5.0.1| 60| 512| N/A | N/A   
**Elixir**|  Version 1.8.2 (compiled with Erlang/OTP 21)| 12| 512|  N/A| N/A   
**Erlang**|  Erlang/OTP 21 [erts-10.4.4]| 12| 1024| Have your main function in module solution|  N/A  
**F#**|  F# Compiler for F# 4.1, Mono compiler v5.2| 4| 512|  N/A|  N/A  
**Fortran**|  GNU Fortran 5.5| 5| 512|  N/A| N/A   
**GNU Octave**|  Version 4.4.1| 5| 512|  N/A| N/A   
**Go**|  v1.22.5| 4| 1920| encoding/json,encoding/csv,encoding/xml,strings, math,container/heap,container/list|  N/A  
**Groovy**|  v2.5.5| 5| 512| JVM: 1.8.0_121  
Have your entrypoint inside anobject named solution|  N/A  
**Hack**|  HipHop VM 6.33.0-dev| 9| 2048| N/A| N/A  
**Haskell**|  ghc 8.6.5, lts-14.7| 5| 512| base-prelude,logict, pipes,hashtables,random, text,vector, aeson,lens, lens-aeson,split, bytestring,array, arrow-list,regex-applicative,regex-base,regex-compat,regex-pcre-builtin,regex-posix,regex-tdfa, parsec,unordered-containers, attoparsec, comonad,deepseq, dlist, either,matrix, MemoTrie,threads,monad-memo,memoize,base-unicode-symbols,basic-prelude,bifunctors|  N/A  
**Java**|  Sun Java 1.7.0_80| 450(ML)| 5122048(ML)| TestNG@6.14.3, JSON Simple@1.1.1, Tagsoup@1.2.1, Google/Gson@2.8.5, HTTPCore@4.4.12, HTTPCore5@5.0-beta8, HTTPAsyncClient@4.1.4, HTTPClient@4.5.10, HTTPClient5@5.0-beta5, XMLResolver@1.2, Jing@20091111, JUnit@4.13-beta-1, Hamcrest@2.1-rc3, Commons Lang3@3.9, Commons Logging@1.2| [stanford-nlp](<https://web.archive.org/web/20210411062841/http://nlp.stanford.edu/software/corenlp.shtml>)@3.2.0,[ weka@3-6-10](<https://web.archive.org/web/20210411062841/http://www.cs.waikato.ac.nz/ml/weka/>),[ java-ml@0.1.7](<https://web.archive.org/web/20210411062841/http://java-ml.sourceforge.net/>),[ Jama@1.0.3](<https://web.archive.org/web/20210411062841/https://math.nist.gov/javanumerics/jama/>),[ ajt@2.11](<https://sourceforge.net/projects/ajt/>)  
**Java 8**|  OpenJDK 8u472| 4| 512| TestNG@7.9.0, JSON Simple@1.1.1, Tagsoup@1.2.1, Google/Gson@2.8.5, HTTPCore@4.4.16, HTTPCore5@5.2.5, HTTPAsyncClient@4.1.5, HTTPClient@4.5.14, HTTPClient5@5.3.1, XMLResolver@1.2, Jing@20091111, JUnit@4.13.2, Hamcrest@3.0, Commons Lang3@3.9, Commons Logging@1.3.4| stanford-nlp@3.2.0, weka@3-6-10, java-ml@0.1.7, Jama@1.0.3, ajt@2.11  
**Java 15**|  OpenJDK 15.0.2| 450(ML)| 5122048(ML)| TestNG@6.14.3, JSON Simple@1.1.1, Tagsoup@1.2.1, Google/Gson@2.13.1, HTTPCore@4.4.12, HTTPCore5@5.0-beta8, HTTPAsyncClient@4.1.4, HTTPClient@4.5.10, HTTPClient5@5.0-beta5, XMLResolver@1.2, Jing@20091111, JUnit@4.13-beta-1, Hamcrest@2.1-rc3, Commons Lang3@3.9, Commons Logging@1.2, JavaFX Base@15-linux| [stanford-nlp@3.2.0](<https://web.archive.org/web/20210411062841/http://nlp.stanford.edu/software/corenlp.shtml>),[ weka@3-6-10](<https://web.archive.org/web/20210411062841/http://www.cs.waikato.ac.nz/ml/weka/>),[ java-ml@0.1.7](<https://web.archive.org/web/20210411062841/http://java-ml.sourceforge.net/>),[ Jama@1.0.3](<https://web.archive.org/web/20210411062841/https://math.nist.gov/javanumerics/jama/>),[ ajt@2.11](<https://sourceforge.net/projects/ajt/>)   
**Java 17  **| OpenJDK 17.0.10| 4| 2048| Commons Lang3@3.12.0 Commons Logging@1.2 Google/Gson@2.13.1 Guava@30.1-jre Hamcrest@2.2 HTTPAsyncClient@4.1.4 HTTPClient@4.5.13 HTTPClient5@5.0-beta5 HTTPCore@4.4.15 HTTPCore5@5.0-beta8 JavaFX Base@17-linux Jing@20091111 JSON Simple@1.1.1 JUnit@4.13-beta-1 Tagsoup@1.2.1 TestNG@7.4.0 XMLResolver@1.2| [stanford-nlp@3.2.0, weka@3-6-10, java-ml@0.1.7, Jama@1.0.3, ajt@2.9](<https://web.archive.org/web/20210411062841/http://nlp.stanford.edu/software/corenlp.shtml>)  
**Java 21**|  OpenJDK 21.0.4| 4| 2048| Commons Lang3@3.12.0 Commons Logging@1.2 Google/Gson@2.13.1Guava@30.1-jre Hamcrest@2.2 HTTPAsyncClient@4.1.4 HTTPClient@4.5.13 HTTPClient5@5.0-beta5 HTTPCore@4.4.15 HTTPCore5@5.0-beta8 JavaFX Base@17-linux Jing@20091111 JSON Simple@1.1.1 JUnit@4.13-beta-1 Tagsoup@1.2.1 TestNG@7.4.0 XMLResolver@1.2| [stanford-nlp@3.2.0](<https://web.archive.org/web/20210411062841/http://nlp.stanford.edu/software/corenlp.shtml>), [weka@3-6-10](<https://web.archive.org/web/20210411062841/http://www.cs.waikato.ac.nz/ml/weka/>), [java-ml@0.1.7](<https://web.archive.org/web/20210411062841/http://java-ml.sourceforge.net/>), [Jama@1.0.3](<https://web.archive.org/web/20210411062841/https://math.nist.gov/javanumerics/jama/>), [ajt@2.9](<https://sourceforge.net/projects/ajt/>)  
**Javascript**|  node.js v20.15.1|  N/A| 512| axios@1.4.0, babel-cli@6.26.0, babel-preset-latest@6.24.1, bignumber.js@9.1.1, coffeescript@2.7.0,  
node-fetch@2.6.11, jquery@3.7.0, lodash@4.17.21, request@2.88.2, typescript@5.1.3, underscore@1.13.6|  N/A  
**Julia**|  Version 1.2.0| 10| 512|  N/A|  N/A  
**Kotlin**|  Kotlin 1.9.0| 4| 512| kotlinx-coroutines-core-jvm-1.6.4|  N/A  
**LOLCODE**|  Version 1.2 with lci v0.10.5| 5| 512|  N/A|  N/A  
**Lua**|  Lua 5.3.3| 12| 512|  N/A|  N/A  
**Microsoft SQL**|  Microsoft SQL Server 2022 - 16.0.4025.1 (X64)| 60| 2048|  N/A|  N/A  
**MySQL**|  Version 8.0.33| 60| 3072|  N/A|  N/A  
**Nim**|  Version 0.20.2| 5| 512|  N/A|  N/A  
**Objective-C**|  Clang/LLVM 21.1.8 (GNUstep libobjc2 v2.3, GNUstep Base 1.31.1)| 2| 512| Foundation Framework (GNUstep), libdispatch|  N/A  
**OCaml**|  ocamlopt, version 4.09| 3| 512| Jane Street OCaml core libraries async@0.11.0, cohttp@2.4.0, cohttp-async@2.4.0, core@0.11.3, core_extended@0.11.0, xmlm@1.3.0, yojson@1.7.0|  N/A  
**ORACLE****(PL/SQL Supported)**|  11g Express, Release 11.2.0.2.0 - 64bit| 60| 3072|  N/A|  N/A  
**PASCAL**|  Version 3.0.4| 2| 512|  N/A|  N/A  
**Perl**|  Perl (v5.26.3)| 910(ML)| 512 | JSON::XS@4.02, XML::Parser@2.44, Set::Scalar@1.29, Math::SparseVector@0.03 & Math::SparseMatrix@0.03| PDL & Text::NSP  
**PHP**|  PHP 8.2.6| 9| 512| N/A |  N/A  
**PostgreSQL**|  Version 14.3| 60| 2048|  N/A|  N/A  
**PyPy**|  PyPy2.7 v6.0.0| 34(ML)| 5121024(ML)| requests[security]@2.22.0, beautifulsoup4@4.8.1, pycryptodome@3.9.4, cryptography@2.8, pyyaml@5.2| numpy@1.16.5, sympy@1.4, nltk@3.4.5  
**PyPy 3**|  PyPy3.6 v6.0.0| 4| 5121024(ML)| requests[security]@2.22.0, beautifulsoup4@4.8.1, pycryptodome@3.9.4, cryptography@2.8, pyyaml@5.2| numpy@1.16.5, sympy@1.4, nltk@3.4.5  
**Python**|  Python 2.7.15| 10| 5121024(ML)| requests[security]@2.22.0, beautifulsoup4@4.8.1, pycrypto@2.6.1, cryptography@2.8, python-dateutil@2.8.1, urllib3@1.25.7, pyyaml@5.2| requests[security]@2.22.0, beautifulsoup4@4.8.1, pycrypto@2.6.1, cryptography@2.8, python-dateutil@2.8.1, urllib3@1.25.7, pyyaml@5.2, numpy@1.16.5, scipy@1.2.2, sympy@1.4, scikit-learn@0.20.4, nltk@3.4.5, pandas@0.24.2, statsmodels@0.10.2  
**Python 3**|  Python 3.14.2| 10| 512| requests[security]@2.25.1, beautifulsoup4@4.9.3, pycrypto@2.6.1, cryptography@3.4.7, python-dateutil@2.8.1, urllib3@1.26.4, pyyaml@6.0.1,faker@37.4.0| requests[security]@2.25.1, beautifulsoup4@4.9.3, pycrypto@2.6.1, cryptography@3.4.7, python-dateutil@2.8.1, urllib3@1.26.4, pyyaml@5.4.1, numpy@1.26.0 scipy@1.14.0 sympy@1.31.1 scikit-learn@0.24.2, nltk@3.6.2,pandas@2.2.2, statsmodels@0.14.1, pyspark@3.4.0, matplotlib@3.9.1,faker@37.4.0  
**R**|  Version 4.4.1| 10| 512| foreach, base64enc,bayesm, Formula,class, g.data,cluster, numDeriv,scales, codetools,permute, date,spatial, psy,digest, pwt, statmod,stringr, iterators,lattice, latticeExtra,timeDate, evaluate,tseries, fastcluster,fBasics, XML, Matrix,rjson, zoo, car,plyr, sqldf, dplyr,lubridate, randomForest, survival, data.table,parallel, xts, neuralnet,e1071, caret, deepnet,tm, bit64, glmnet,forecast, reshape2,xgboost, readr|  N/A  
**RACKET**|  Version 7.2| 10| 512|  N/A|  N/A  
**Ruby**|  Ruby 3.2.2| 10| 512| xml-simple, http, faraday, rest-client, httpclient, httparty|  N/A  
**RUST**|  Version 1.59.0| 5| 512| num, serde,serde_json,serde_derive,rustc-serialize,regex, time, text_io,rand|  N/A  
**Scala**|  scala 2.13.11| 7| 512| Same as java8 packages  
  
scalaz-core_2.12@7.3.0-M27, cats-macros_2.12@2.0.0, cats-kernel_2.12@2.0.0, cats-core_2.12@2.0.0, cats-free_2.12@2.0.0, ajt@2.11, jama@1.0.3| [stanford-nlp@3.2.0](<https://web.archive.org/web/20210411062841/http://nlp.stanford.edu/software/corenlp.shtml>),[ weka@3-6-10](<https://web.archive.org/web/20210411062841/http://www.cs.waikato.ac.nz/ml/weka/>),[ java-ml@0.1.7](<https://web.archive.org/web/20210411062841/http://java-ml.sourceforge.net/>),[ Jama@1.0.3](<https://web.archive.org/web/20210411062841/https://math.nist.gov/javanumerics/jama/>)   
**Smalltalk**|  GNU Smalltalk 3.2.5| 5| 512|  N/A|  N/A  
**Swift**|  Swift version 5.10.1| 2| 512| Foundation Framework|  N/A  
**Tcl**|  Version 8.6 with tclsh| 5| 512|  N/A| N/A   
**Text**|   N/A|  N/A|  N/A|  N/A|  N/A  
**TypeScript**|  Version: 5.6.2 Node.js v20.15.1, Target: ES2020, Module: CommonJS| 10| 1536| axios@1.7.7, babel-cli@6.26.0, babel-preset-latest@6.24.1, bignumber.js@9.1.2, coffeescript@2.7.0, jquery@3.7.1, lodash@4.17.21,node-fetch@2.6.11, readline@1.3.0, request@2.88.2, typescript@5.6.2, underscore@1.13.6, @babel/preset-typescript@7.24.7, @types/jquery@3.5.30, @types/lodash@4.17.7, @types/node-fetch@2.6.11, @types/node@20.14.1, @types/request@2.48.12, @types/underscore@1.11.15|  N/A  
**VB.NET**|  Mono compiler v6.4.0.198, .NET Framework 4.7.2| 5| 512|  N/A|  N/A  
**Verilog**|  Icarus Verilog 11.0| 4| 512|  N/A|  N/A  
**Whitespace**|   N/A|  N/A| N/A | N/A | N/A   
**Brainf88k**|  bf|  N/A| N/A | N/A | N/A   
  
# Front-End, Back-End, Full Stack, Mobile, Data Science and DevOps

HackerRank runs submissions on an Ubuntu LTS instance with common packages preinstalled, including `zip`, `rar`, `unrar` , `vim`, `iputils-ping` and `net-tools` (`netstat`, `ifconfig`).

The table below lists the question type, supported language or framework, OS version, and included tools.

**Question Type**| **Language**| **OS Version  **| **Environment Includes**  
---|---|---|---  
**Generative AI**|  RAG| Ubuntu 24.04 LTS| Python 3.12, Node.js 22.12.0; Libraries: OpenAI SDK 1.12.0, LlamaIndex 0.12.6, LlamaIndex OpenAI 0.3.11, LangChain 0.3.13, LangChain OpenAI 0.2.14, Streamlit 1.41.1; Models: text-embedding-ada-002, text-embedding-3-small, gpt-5.4, gpt-5.4-mini, gpt-5-mini, gpt-4o, gpt-4o-mini  
**Mobile**|  Swift| Ubuntu 24.04 LTS| Swift 6.0.3, iOS 18.2, Xcode: 16.2, macOS 15.2  
**QA**|  Cucumber with Selenium (Java)| Ubuntu 24.04 LTS| Java 21, Maven v3.9.9, Cucumber v7.11.0, Selenium v4.8.1  
**QA**|  Cypress| Ubuntu 24.04 LTS| Node v22.14.0, npm v10.9.2, yarn v1.22.22, Cypress v13.6.0  
**QA**|  Playwright| Ubuntu 24.04 LTS| Playwright v1.55.0, Node v22.16, npm v11.4.1, yarn v1.22.22  
**Fullstack**|  PERN| Ubuntu 24.04 LTS| NodeJS v22.16.0, npm v11.4.1, yarn v1.22.22, Postgres 18  
**Fullstack**|  MEAN| Ubuntu 24.04 LTS| MongoDB v8.0.10, Node v22.16.0, npm v11.4.1, yarn v1.22.22  
**Fullstack**|  MERN| Ubuntu 24.04 LTS| MongoDB v8.0.10, Node v22.16.0, npm v11.4.1, yarn v1.22.22  
**Front end**|  AngularJS| Ubuntu 24.04 LTS| NodeJS v22.16.0, npm v11.4.1, yarn v1.22.22  
**Front end**|  ReactJS| Ubuntu 24.04 LTS| NodeJS v22.16.0, npm v11.4.1, yarn v1.22.22  
**Front end**|  VueJS| Ubuntu 24.04 LTS| NodeJS v22.16.0, npm v11.4.1, yarn v1.22.22  
**Front end / Back end**|  NodeJS| Ubuntu 24.04 LTS| NodeJS v22.16.0, npm v11.4.1, yarn v1.22.22  
**Back end**|  Go| Ubuntu 24.04 LTS| Go v1.25  
**Back end**|  Django| Ubuntu 24.04 LTS| Python 3.12 with pip3 25.1.1  
**Back end**|  Spark(Scala)| Ubuntu 24.04 LTS| Scala 2.13.16, Spark 3.5.5, Hadoop 3.3.4, Coursier 2.1.25-M13, Java 21, Maven v3.9.9, Gradle v8.14  
**Back end**|  PySpark| Ubuntu 24.04 LTS| Python 3.12, pip/pip3 25.1.1, Java 21, PySpark 3.5.5  
**Back end**|  Ruby on Rails| Ubuntu 24.04 LTS| Ruby 3.4.4, Rails 8, Bundler 2.6.9, Gem 3.6.9  
**Back end**|  Java Spring Boot| Ubuntu 24.04 LTS| Java 21, Maven v3.9.9, Apache Tomcat v11.0.6, MySQL 8.4.6  
**Back end**|  Java 17 with Maven| Ubuntu 24.04 LTS| Java 21, Maven v3.9.9, Apache Tomcat v11.0.6  
**Back end**|  Java 17 with Gradle| Ubuntu 24.04 LTS| Java 21, Gradle v8.14, Apache Tomcat v11.0.6  
**Back end**| .NET| Ubuntu 24.04 LTS| .NET Core 8.0.16, MySQL 8.4.6  
**Back end**|  C++| Ubuntu 24.04 LTS| GCC-14, Clang-18, CMake v3.28.3, JsonCpp v1.9.5-6, Boost v1.88.0  
**Back end**|  PHP| Ubuntu 24.04 LTS| PHP v8.4.7, Apache v2.4.63, Composer v2.8.9  
**Back end**|  PHP CodeIgniter| Ubuntu 24.04 LTS| PHP v8.4.7, Apache v2.4.63, Composer v2.8.9  
**Back end**|  PHP Laravel| Ubuntu 24.04 LTS| PHP v8.4.7, Apache v2.4.63, Composer v2.8.9  
**Back end**|  PHP Symfony| Ubuntu 24.04 LTS| PHP v8.4.7, Apache v2.4.63, Composer v2.8.9, Symfony 7.3  
**Back end**|  Go + MongoDB| Ubuntu 24.04 LTS| Go v1.25, MongoDB v8.0.10  
**Custom**|   N/A| Ubuntu 24.04| zip, rar, unrar, vim, iputils-ping, net-tools(netstat, ifconfig) as default packages.  
**Custom**|  Flox (Nix)| Ubuntu 24.04| Flox v1.5.1, Nix v2.28.2  
**Data Science**| [Python](<https://support.hackerrank.com/hc/en-us/articles/15829767170579-Package-Information-for-Data-Science-Questions#data-science-python>)| Ubuntu 24.04 LTS| Python 3.12.9  
**Data Science**| [R](<https://support.hackerrank.com/hc/en-us/articles/15829767170579-Package-Information-for-Data-Science-Questions#data-science-r>)| Ubuntu 24.04 LTS| R 4.4.2  
**Data Science**| [Julia](<https://support.hackerrank.com/hc/en-us/articles/15829767170579-Package-Information-for-Data-Science-Questions#data-science-julia>)| Ubuntu 24.04 LTS| Julia 1.9.4  
**Mobile**|  Android(Java)| Ubuntu 24.04 LTS| Java 21, Gradle v8.14, Android SDK Command-Line Tools v19.0  
**Mobile**|  Android(Kotlin)| Ubuntu 24.04 LTS| Kotlin 2.3, Java 21, Gradle v8.14, Android SDK Command-Line Tools v19.0  
**Mobile**|  React Native| Ubuntu 24.04 LTS| NodeJS v22.16.0, npm v11.4.1, yarn v1.22.22, Expo SDK 53  
**Mobile**|  Flutter| Ubuntu 24.04 LTS| NodeJS v22.14.0, Flutter SDK 3.32.0, Dart 3.8.0, DevTools 2.45.1  
**Cloud Skills (formerly called Sudorank)**|   N/A| Ubuntu 24.04 LTS, RHEL 8| Choice of OS includes: Ubuntu 24.04 LTS, RHEL 8
