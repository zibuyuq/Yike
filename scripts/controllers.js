//实例一个模块，用来专门管理所有的控制器

angular.module('Controllers',[])

//栏菜单
    .controller('NavController',['$scope',function($scope){
        $scope.navs=[
            {link:'#/today',icon:'icon-home',text:'今日一刻'},
            {link:'#/older',icon:'icon-file-empty',text:'往期内容'},
            {link:'#/author',icon:'icon-pencil',text:'热门作者'},
            {link:'#/category',icon:'icon-menu',text:'栏目'},
            {link:'#/favourite',icon:'icon-heart',text:'我的喜欢'},
            {link:'#/settings',icon:'icon-cog',text:'设置'}
        ];
    }])

    //今日一刻
    .controller('TodayController',['$scope','$http','$filter','$rootScope',function($scope,$http,$filter,$rootScope){
        //获取计算机时间
        var today = $filter('date')(new Date, 'yyyy-MM-dd');

        $rootScope.title='今日一刻';
        $rootScope.index=0;
        $rootScope.loaded=false;
        console.log(today);
        $http({
            url:'./api/today.php',
            method:'get',
            params: {today: today}
        }).success(function(info){
            console.log(info);
            $scope.date=info.date;
            $scope.posts=info.posts;
            $rootScope.loaded=true;
        });
    }])


    //往期内容
    .controller('OlderController',['$scope','$http','$filter','$rootScope',function($scope,$http,$filter,$rootScope){

        $rootScope.title = '往期内容';
        $rootScope.index = 1;
        $rootScope.loaded = false;

        //
        $http({
            url: './api/older.php',
        }).success(function (info) {
            console.log(info);
            $rootScope.loaded = true;

            $scope.date = info.date;
            $scope.posts = info.posts;
            console.log($scope.date);
        });

    }])
    //热门作者
    .controller('AuthorController',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
        $rootScope.title='热门作者';
        $rootScope.index=2;
        $rootScope.loaded=false;
        $http({
            url:'./api/author.php',
            method:'get'
        }).success(function (info) {
            $rootScope.loaded=true;
            $scope.posts=info.authors;
        });

    }])
    //栏目
    .controller('CategoryController',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
        $rootScope.tilte='热门作者';
        $rootScope.index=3;
        $rootScope.loaded=false;
        $http({
            url:'./api/category.php'
        }).success(function(info){
            $rootScope.loaded=true;
            $scope.posts=info.columns;
        });
    }])

    //我的喜欢
    .controller('FavouriteController',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
        $rootScope.title='我的喜欢';
        $rootScope.index=4;
        $rootScope.loaded=false;
        $http({
            url:'./api/favourite.php'
        }).success(function(info){
            $rootScope.loaded=true;
            $scope.posts=info.posts;
        });
    }])
    //设置
    .controller('SettingsController',['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.title='设置';
        $rootScope.index=5;
        $rootScope.loaded=true;
    }])