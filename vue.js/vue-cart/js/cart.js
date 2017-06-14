new Vue({
    el:'#app',
    data:{
        totalMoney:0,
        productList:[],

    },
    // 相当于jq的ready方法
    mounted:function(){
        this.$nextTick(function(){
            this.cartView()
        })
    },
    filters:{
        formatMoney(value){
            return "￥ "+value.toFixed(2)+" 元"
        }
    },
    methods:{
        // 通过vue-resource获取所有的商品信息
        cartView(){
            var _this=this;
            this.$http.get('data/cartData.json').then(function(res){
                // 响应成功回调
                _this.productList=res.body.result.list;
            },function(res){
                // 响应错误回调
                alert('对不起，请求失败，请重试')
            })
        },
        // 点击 加减 
        changeMoney(product,num){
            if(num>0){
                product.productQuentity++;
            }else{
                product.productQuentity--;
                if(product.productQuentity<0){
                    product.productQuentity=0
                }
            }
        },

        // 删除商品
        deleteProduct(product){
            this.productList.splice(product,1)
        },

        // 计算选中商品总价
        totalMoney(){

        }

    }
})