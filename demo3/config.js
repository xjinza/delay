require.config({
    paths: {
    	'f':'./a' 
    },
	bundles: {
        'f': ['d', 'e'] //如果一个JS文件中有多个模块，就可以使用bundles的方式声明
    }
});

require(["d","e"],function(d,e){
	console.log(d) 
	console.log(e) 
	
});