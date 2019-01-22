<template>
    <div class="photoinfo">
        <h3> 缩略图</h3>
        <hr>

        <!-- <div class="thumbs">
            <vue-preview :slides="list" @close="handleClose"></vue-preview>   
               
             <img class="preview-img" v-for="(item, index) in list" :src="item.imgUrl" height="100" @click="$preview.open(index, list)" :key="item.imgUrl"> 
        </div> -->
        <v-pviewer :complete="complete" >
            <ul class="gallery">
                <li v-for="item in list">
                <img :desc="item.title" :src="item.src">
                </li>
                
            </ul>
        </v-pviewer>
        
    </div>
</template>
<script>
import VPviewer from 'vue-photo-viewer';
import 'vue-photo-viewer/dist/pviewer.css';
export default {
    data () {
        return {
            complete:false,
            msg:'这是photoinfo组件',
            list:[]
        }
    },
    components: {
        VPviewer
    },
    updated () {
        this.complete = true;
    },
    created () {
        this.getData()
    },
    methods: {
        handleClose () {
        console.log('close event')
        },
        getData(){
          var api = '/static/data/photolist.json'
          this.$http.get(api).then((res)=>{
               /* res.data.message2.forEach(item => {
                  item.w = 300;
                  item.h = 200;
              }); */
              this.list = res.data.message2;
              console.log(res.data)
          }).catch((err)=>{
              console.log(err)
          })
        }
    }
}
</script>
<style scoped>
.photoinfo{
   padding: 3px;
   text-align: center;
}
.photoinfo hr{
    border-top: 1px solid #2abdbd;
    margin-top: 0px
}
.gallery{
    list-style-type: none;
    padding: 25px;
    padding-top:0px;
    padding-bottom: 0px;
   
}
.gallery li{ 
    box-shadow: 0px 0px 9px #999;
    margin: 10px 0px 
}
.gallery img{
    vertical-align: middle;
    height: 200px;
}
</style>
