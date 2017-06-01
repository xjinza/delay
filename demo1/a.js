/* 
 requirejs 建议不要设置模块名称，
 在没有特殊声明的情况下，requirejs认为模块名和文件名相同，
 因此，只要两者一致，requirejs就可以正确找到脚本文件。
 但如果不同，就需要通过path配置：
*/
define([],function(){

    return "file a";
})
/*下面的代码运行正常*/
// define("a",[],function(){

//     return "file a";
// })

/*下面的代码不能达到预期效果,需要path配置，console.log(c) 为 undefined*/
// define("d",[],function(){

//     return "file a";
// })

