
let home = new Vue({
    el: '#tutorList',
    data () {
        return {
          searchSelect:'',
          searchText :'',
          indictor:1,
          searchSelectArr:[{name:'老师'},{name:'学校'}],
          showActive:false,
          yearBox:['2011年度','2012年度','2013年度','2015年度'],
          schBox:['小学','幼儿园','初中','高中'],
          tutorBox:['校级提名教师','区级年度教师','校级年度教师'],
          year:0,
          school:0,
          tutor:0,
          currentPage:1

        }
    },
    methods:{
        selectItem (item,index) {
          this.searchSelectArr.splice(index,1);
          this.searchSelectArr.unshift(item);
        },
        toDetailPage (id) {
            location.href = './tutorDetail.html?id='+id;
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
                document.querySelector(".main").style.marginTop = '425px';
                
            } else if (scrollTop > 65 && scrollTop < 200 ) {
                document.querySelector('.banner_top').style.height = (document.querySelector('.banner_top').offsetHeight - scrollTop - 65) + 'px';
                document.querySelector(".main").style.marginTop = (425-scrollTop-85)+'px';
            } else {
                document.querySelector('.banner_top').style.height = '0px';
                document.querySelector(".main").style.marginTop = '30px';
            }
        },
        yearChange (index) {
            this.year = index;
            sessionStorage.setItem('year',index);
            location.href = './tutorList.html?year='+this.year+'&type='+this.school+"&evaluationType="+this.tutor;
            // location.href = './tutorDetail.html?year='+this.year+'&type='+this.school+"&evaluationType="+this.tutor;
        },
        schoolChange (index) {
            this.school = index;
            sessionStorage.setItem('school',index);
            location.href = './tutorList.html?year='+this.year+'&type='+this.school+"&evaluationType="+this.tutor;
        },
        tutorChange (index ) {
            this.tutor = index;
            sessionStorage.setItem('tutor',index);
            location.href = './tutorList.html?year='+this.year+'&type='+this.school+"&evaluationType="+this.tutor;
        },
        changePage (val) {
            // 当前页
            this.currentPage = val;
        }

    },
    created() {
            this.year = sessionStorage.getItem('year')||2018;
            this.school = sessionStorage.getItem('school')||0;
            this.tutor = sessionStorage.getItem('tutor')||0;
    },
    mounted () {
        window.addEventListener('scroll', this.srcollFn)
    }
})