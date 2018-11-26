
let home = new Vue({
    el: '#tutorDetail',
    data () {
        return {
            searchSelect:'',
            searchText :'',
            indictor:1,
            searchSelectArr:[{name:'老师'},{name:'学校'}],
            showActive:false
          }
    },
    methods:{
        selectItem (item,index) {
            this.searchSelectArr.splice(index,1);
            this.searchSelectArr.unshift(item);
          },
          toDetailPage () {
              location.href = './tutorDetail.htm';
          },
          addClass (index) {
              if(index == this.searchSelectArr.length -1 ) {
                  this.showActive = true
              }
          }
    },
    created() {
    },
    mounted() {
        this.$nextTick(function () {
                var swiper = new Swiper('.swiper-container', {
                        slidesPerView: 'auto',
                        spaceBetween : 25,
                        slidesOffsetAfter : 100,
                        freeMode: true,
                        loop: true,
                        autoplay:true,
                        speed:1000
                });
        })
    }
})