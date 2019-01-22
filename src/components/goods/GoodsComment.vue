<template>
    <div class="goodscomment">
        <comment></comment>
    </div>
</template>
<script>
import comment from '../Subcomponent/Comment.vue'
export default {
    data () {
        return {
            msg:'goComment组件'
        }
    },
    components: {
        comment
    }
}
</script>
<style scoped>
.goodscomment{
    padding: 5px
}
#comment{
    margin-top: 5px
}
</style>

