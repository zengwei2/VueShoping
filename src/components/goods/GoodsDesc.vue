<template>
    <div id="GoodsDesc">
        <h3>{{list.title}}</h3>
        <hr>
        <div class="content">
            {{list.content}}
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg:'goDesc组件',
            list:''
        }
    },
    created () {
        this.getGoods()
    },
    methods: {
        getGoods(){
            var api = '/static/data/goods.json'
             this.$http.get(api).then((res)=>{
                this.list = res.data.message3[0];
                console.log(res.data.message3[0])
            }).catch((err)=>{
                console.log(err)
            })
        },
    }
}
</script>
<style scoped>
#GoodsDesc{
    padding: 4px;
}
#GoodsDesc h3{
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
}
.content{
    text-indent: 2em;
}

</style>

