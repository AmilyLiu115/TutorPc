
let home = new Vue({
    el: '#actList',
    data () {
        return {
          searchSelect:'',
          searchText :'',
          indictor:4,
          searchSelectArr:[{name:'老师'},{name:'学校'}],
          showActive:false
        }
    },
    methods:{
        toDetailPage (id) {
            location.href = './actDetail.html?id='+id;
        },
        selectItem (item,index) {
          this.searchSelectArr.splice(index,1);
          this.searchSelectArr.unshift(item);
        },
        addClass (index) {
              if(index == this.searchSelectArr.length -1 ) {
                  this.showActive = true
              }
          },
        srcollFn () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop < 65) {
                document.querySelector('.banner_top').style.height = '360px';
                document.querySelector(".mainList").style.marginTop = '425px';
                
            } else if (scrollTop > 65 && scrollTop < 200 ) {
                document.querySelector('.banner_top').style.height = (document.querySelector('.banner_top').offsetHeight - scrollTop - 65) + 'px';
                document.querySelector(".mainList").style.marginTop = (425-scrollTop-85)+'px';
            } else {
                document.querySelector('.banner_top').style.height = '0px';
                document.querySelector(".mainList").style.marginTop = '30px';
            }
        },
        changePage (val) {
            // 当前页
            this.currentPage = val;
            // location.href = './actList.html?pageIndex='+val;
        }
    },
    created() {
        // document.querySelector(".mainList").style.marginTop = '425px';
    },
    mounted () {
        window.addEventListener('scroll', this.srcollFn)
    }
})