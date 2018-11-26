
let home = new Vue({
    el: '#trainDetail',
    data () {
         return {
                searchSelect:'',
                searchText :'',
                indictor:3,
                searchSelectArr:[{name:'老师'},{name:'学校'}],
                showActive:false
          }
    },
    methods:{
        selectItem (item,index) {
            this.searchSelectArr.splice(index,1);
            this.searchSelectArr.unshift(item);
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