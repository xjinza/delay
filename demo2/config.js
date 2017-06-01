require.config({
    paths: {
    	'd':'./a' //如果文件名和模块名不一致，就需要在paths中做映射处理。d为a.js中定义的模块名。
    },

});
// if the code below write in test.html,an error may occur.
define("b",["d"],function(c){
    console.log(c) 
    
    return "file b";
    
});
require(["b"],function(d){
	console.log(d) 
	
});