# requirejs自定义模块
 
 requirejs 建议不要设置模块名称，
 在没有特殊声明的情况下，requirejs认为模块名和文件名相同，
 因此，只要两者一致，requirejs就可以正确找到脚本文件。
 参考demo1
 
 但如果不同，就需要通过path配置， 
 参考demo2
 
 如果一个JS文件中有多个模块，可以使用bundles的方式声明,常用于脚本合并优化。
 参考demo3
 
 
 
