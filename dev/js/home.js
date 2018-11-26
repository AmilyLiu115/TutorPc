
let home = new Vue({
    el: '#home',
    data () {
      return {
        activeName:'first',
        searchSelect:'',
        searchText :'',
        indictor:0,
        searchSelectArr:[{name:'老师'},{name:'学校'}],
        showActive:false
      }
    },
    methods:{
      handleClick () {
  
      },
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
    }
})