module.exports={
    css:{
        loaderOptions:{
            sass:{
                prependData:`@import "~@/scss/variables.scss";`
            }
        }
    },
    publicPath:process.env.NODE_ENV === 'production'?'./':'./'
}