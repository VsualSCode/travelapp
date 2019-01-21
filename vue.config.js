module.exports = {
    devServer: {
      // open: process.platform === 'darwin',
      // host: '0.0.0.0',
      port: 8080,
      // open:true,
      // https: false,
      // hotOnly: false,
      // proxy: null, // string | Object
      // before: app => {}
  
    },
    css:{
        // extract:true,
        // modules:false,
        // localIdentName:'[name]_[local]_[hash:bash64:5]',
        // sourceMap:false,
        // loaderOptions:{}
    },
    // lintOnSave: true, //关闭esling警告
    // lintOnSave:process.env.NODE_ENV !== 'production',//生产构建是禁用
    productionSourceMap: false, //打包不携带map文件
  }
