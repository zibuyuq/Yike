
var Yike=angular.module('Yike',['ngRoute','Controllers']);

//设置路由页面
Yike.config(['$routeProvider',function($routeProvider){

    $routeProvider.when('/today',{
        templateUrl:'./views/today.html',
        controller:'TodayController'
    })
        .when('/older',{
            templateUrl:'./views/older.html',
            controller:'OlderController'
        })
        .when('/author',{
            templateUrl:'./views/author.html',
            controller:'AuthorController'
        })
        .when('/category',{
            templateUrl:'./views/category.html',
            controller:'CategoryController'
        })
        .when('/favourite',{
            templateUrl:'./views/favourite.html',
            controller:'FavouriteController'
        })
        .when('/settings',{
            templateUrl:'./views/settings.html',
            controller:'SettingsController'
        })
        .otherwise({
            redirectTo: '/today'
        })

}]);
Yike.run(['$rootScope',function($rootScope){
    //设置类名初始值
    $rootScope.collapsed=false;

    //全局方法

    $rootScope.toggle=function(){

        //改变类名初始值
        $rootScope.collapsed=!$rootScope.collapsed;
        //获取所有导航
        var navs=document.querySelectorAll('.navs dd');

        if($rootScope.collapsed){
            for(var i=0; i<navs.length; i++) {
                navs[i].style.transform = 'translate(0)';
                navs[i].style.transitionDelay = '0.2s';
                navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
            }
        } else {
            var len = navs.length - 1;
            for (var j = len; j > 0; j--) {
                // console.log(navs.length - j + 1);
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDelay = '';
                navs[j].style.transitionDuration = (len - j) * 0.15 + 's';
            }
        }

    }



}]);

