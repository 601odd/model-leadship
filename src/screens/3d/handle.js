import gridData from './data.js';
export var myMap;
var skyBoxConfig = [
    {
        src:
            'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/skybox_day.png',
        horizontal: TMap.constants.IMAGE_DISPLAY.REPEAT,
        vertical: TMap.constants.IMAGE_DISPLAY.SCALE,
    },
    {
        src:
            'https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/skybox_night.png',
        horizontal: TMap.constants.IMAGE_DISPLAY.REPEAT,
        vertical: TMap.constants.IMAGE_DISPLAY.SCALE,
    },
];
export var index = 0;
var animationDuration = 1000; // 动画持续时间（毫秒）



function createPaths(gridData) {
    var paths = {}; // 使用对象来存储路径
    var counter = 1; // 初始化计数器，从1开始
    gridData.features.forEach((feature) => {
        var pathName = 'path' + counter; // 使用计数器创建变量名称，如path1、path2等
        var coordinates = feature.geometry.coordinates[0][0]; // 获取坐标数组，假设每个feature只有一个多边形
        //左值 -是向右下移动  右值+是向右上移动
        var path = coordinates.map(coord => [coord[1] - 0.0024 , coord[0] + 0.0041]); // 将经纬度数组转换成[lat, lon]格式，并反转坐标顺序
        path.push(path[0]); // 确保路径闭合
        paths[pathName] = path; // 将路径存储在对象中
        counter++; // 增加计数器
    });
    return paths; // 返回包含所有路径的对象
}

function initMap() {
    myMap = new TMap.Map('mapContainer', {
        zoom: 16.8,
        pitch: 60,
        rotation: 340.0308641975305,
        center: new TMap.LatLng(29.82703, 106.445518),
        baseMap: [
            {
                type: 'vector',
                features: ['base', 'building3d'],
            },
        ],
        renderOptions: {
            skyOptions: skyBoxConfig[index],
        },
    });

    var pathsObject = createPaths(gridData); // 假设gridData包含您的JSON数据
    console.log(pathsObject); // 打印所有生成的路径脚本





    let path1 = pathsObject.path1.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path2 = pathsObject.path2.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path3 = pathsObject.path3.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path4 = pathsObject.path4.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path5 = pathsObject.path5.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path6 = pathsObject.path6.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path7 = pathsObject.path7.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path8 = pathsObject.path8.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path9 = pathsObject.path9.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path10 = pathsObject.path10.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path11 = pathsObject.path11.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path12 = pathsObject.path12.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path13 = pathsObject.path13.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path14 = pathsObject.path14.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path15 = pathsObject.path15.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path16 = pathsObject.path16.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path17 = pathsObject.path17.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path18 = pathsObject.path18.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path19 = pathsObject.path19.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path20 = pathsObject.path20.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path21 = pathsObject.path21.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path22 = pathsObject.path22.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path23 = pathsObject.path23.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path24 = pathsObject.path24.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path25 = pathsObject.path25.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path26 = pathsObject.path26.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path27 = pathsObject.path27.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path28 = pathsObject.path28.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path29 = pathsObject.path29.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path30 = pathsObject.path30.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path31 = pathsObject.path31.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path32 = pathsObject.path32.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path33 = pathsObject.path33.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path34 = pathsObject.path34.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path35 = pathsObject.path35.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path36 = pathsObject.path36.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path37 = pathsObject.path37.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path38 = pathsObject.path38.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path39 = pathsObject.path39.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path40 = pathsObject.path40.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path41 = pathsObject.path41.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path42 = pathsObject.path42.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path43 = pathsObject.path43.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path44 = pathsObject.path44.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path45 = pathsObject.path45.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path46 = pathsObject.path46.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path47 = pathsObject.path47.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path48 = pathsObject.path48.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path49 = pathsObject.path49.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path50 = pathsObject.path50.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path51 = pathsObject.path51.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });

    let path52 = pathsObject.path52.map(p => {
        return new TMap.LatLng(p[0], p[1]);
    });






    var polygon = new TMap.MultiPolygon({
    id: 'polygon-layer', //图层id
    map: myMap, //设置多边形图层显示到哪个地图实例中
    //多边形样式
    styles: {
        'polygon1': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon2': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon3': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon4': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon5': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon6': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon7': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon8': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon9': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon10': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon11': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon12': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon13': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon14': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon15': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon16': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon17': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon18': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon19': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon20': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon21': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon22': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon23': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon24': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon25': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon26': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon27': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon28': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon29': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon30': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon31': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon32': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon33': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon34': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon35': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon36': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon37': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon38': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon39': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon40': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon41': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon42': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon43': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon44': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon45': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon46': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon47': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon48': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon49': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon50': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon51': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        }),
        'polygon52': new TMap.ExtrudablePolygonStyle({
            'color': 'rgba(0,125,255,0.7)', //面填充色
            'showBorder':false, //是否显示拔起面的边线
            'extrudeHeight':100, //多边形拔起高度
            'borderColor': '#999' //边线颜色
        })

    },
    //多边形数据
    geometries: [
        {
            'id': 'p1', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon1', //绑定样式名
            'paths': path1, //多边形轮廓
        },
        {
            'id': 'p2', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon2', //绑定样式名
            'paths': path2, //多边形轮廓
        },
        {
            'id': 'p3', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon3', //绑定样式名
            'paths': path3, //多边形轮廓
        },
        {
            'id': 'p4', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon4', //绑定样式名
            'paths': path4, //多边形轮廓
        },
        {
            'id': 'p5', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon5', //绑定样式名
            'paths': path5, //多边形轮廓
        },
        {
            'id': 'p6', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon6', //绑定样式名
            'paths': path6, //多边形轮廓
        },
        {
            'id': 'p7', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon7', //绑定样式名
            'paths': path7, //多边形轮廓
        },
        {
            'id': 'p8', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon8', //绑定样式名
            'paths': path8, //多边形轮廓
        },
        {
            'id': 'p9', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon9', //绑定样式名
            'paths': path9, //多边形轮廓
        },
        {
            'id': 'p10', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon10', //绑定样式名
            'paths': path10, //多边形轮廓
        },
{
            'id': 'p11', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon11', //绑定样式名
            'paths': path11, //多边形轮廓
        },
        {
            'id': 'p12', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon12', //绑定样式名
            'paths': path12, //多边形轮廓
        },
        {
            'id': 'p13', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon13', //绑定样式名
            'paths': path13, //多边形轮廓
        },
        {
            'id': 'p14', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon14', //绑定样式名
            'paths': path14, //多边形轮廓
        },
        {
            'id': 'p15', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon15', //绑定样式名
            'paths': path15, //多边形轮廓
        },
        {
            'id': 'p16', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon16', //绑定样式名
            'paths': path16, //多边形轮廓
        },
        {
            'id': 'p17', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon17', //绑定样式名
            'paths': path17, //多边形轮廓
        },
        {
            'id': 'p18', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon18', //绑定样式名
            'paths': path18, //多边形轮廓
        },
        {
            'id': 'p19', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon19', //绑定样式名
            'paths': path19, //多边形轮廓
        },
        {
            'id': 'p20', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon20', //绑定样式名
            'paths': path20, //多边形轮廓
        },
        {
            'id': 'p21', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon21', //绑定样式名
            'paths': path21, //多边形轮廓
        },
        {
            'id': 'p22', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon22', //绑定样式名
            'paths': path22, //多边形轮廓
        },
        {
            'id': 'p23', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon23', //绑定样式名
            'paths': path23, //多边形轮廓
        },
        {
            'id': 'p24', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon24', //绑定样式名
            'paths': path24, //多边形轮廓
        },
        {
            'id': 'p25', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon25', //绑定样式名
            'paths': path25, //多边形轮廓
        },
        {
            'id': 'p26', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon26', //绑定样式名
            'paths': path26, //多边形轮廓
        },
        {
            'id': 'p27', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon27', //绑定样式名
            'paths': path27, //多边形轮廓
        },
        {
            'id': 'p28', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon28', //绑定样式名
            'paths': path28, //多边形轮廓
        },
        {
            'id': 'p29', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon29', //绑定样式名
            'paths': path29, //多边形轮廓
        },
        {
            'id': 'p30', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon30', //绑定样式名
            'paths': path30, //多边形轮
        },
        {
            'id': 'p31', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon31', //绑定样式名
            'paths': path31, //多边形轮廓
        },
        {
            'id': 'p32', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon32', //绑定样式名
            'paths': path32, //多边形轮廓
        },
        {
            'id': 'p33', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon33', //绑定样式名
            'paths': path33, //多边形轮廓
        },
        {
            'id': 'p34', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon34', //绑定样式名
            'paths': path34, //多边形轮廓
        },
        {
            'id': 'p35', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon35', //绑定样式名
            'paths': path35, //多边形轮廓
        },
        {
            'id': 'p36', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon36', //绑定样式名
            'paths': path36, //多边形轮廓
        },
        {
            'id': 'p37', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon37', //绑定样式名
            'paths': path37, //多边形轮
        },
        {
            'id': 'p38', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon38', //绑定样式名
            'paths': path38, //多边形轮廓
        },
        {
            'id': 'p39', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon39', //绑定样式名
            'paths': path39, //多边形轮廓
        },
        {
            'id': 'p40', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon40', //绑定样式名
            'paths': path40, //多边形轮廓
        },
        {
            'id': 'p41', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon41', //绑定样式名
            'paths': path41, //多边形轮廓
        },
        {
            'id': 'p42', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon42', //绑定样式名
            'paths': path42, //多边形轮廓
        },
        {
            'id': 'p43', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon43', //绑定样式名
            'paths': path43, //多边形轮廓
        },
        {
            'id': 'p44', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon44', //绑定样式名
            'paths': path44, //多边形轮
        },
        {
            'id': 'p45', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon45', //绑定样式名
            'paths': path45, //多边形轮廓
        },
        {
            'id': 'p46', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon46', //绑定样式名
            'paths': path46, //多边形轮廓
        },
        {
            'id': 'p47', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon47', //绑定样式名
            'paths': path47, //多边形轮
        },
        {
            'id': 'p48', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon48', //绑定样式名
            'paths': path48, //多边形轮廓
        },
        {
            'id': 'p49', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon49', //绑定样式名
            'paths': path49, //多边形轮廓
        },
        {
            'id': 'p50', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon50', //绑定样式名
            'paths': path50, //多边形轮
        },
        {
            'id': 'p51', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon51', //绑定样式名
            'paths': path51, //多边形轮廓
        },
        {
            'id': 'p52', //该多边形在图层中的唯一标识（删除、更新数据时需要）
            'styleId': 'polygon52', //绑定样式名
            'paths': path52, //多边形轮廓
        }
    ]

});



    // document.querySelector('.btn1').addEventListener('click', () => {
    //     if (index) {
    //         myMap.setMapStyleId('DEFAULT');
    //         myMap.setSkyOptions(skyBoxConfig[0]);
    //         index = 0;
    //     } else {
    //         myMap.setMapStyleId('DARK');
    //         myMap.setSkyOptions(skyBoxConfig[1]);
    //         index = 1;
    //     }
    // });

    // document.querySelector('.btn2').addEventListener('click', () => {
    //     var currentPitch = myMap.getPitch();
    //     var targetPitch = currentPitch === 0 ? 60 : 0;
    //     var currentRotation = myMap.getRotation();
    //     var targetRotation = currentPitch === 0 ? 340.0308641975305 : currentRotation;

    //     animateCamera(currentPitch, targetPitch, currentRotation, targetRotation, animationDuration);
    // });


}

export function animateCamera(startPitch, targetPitch, startRotation, targetRotation, duration) {
    var startTime = performance.now();

    function animate() {
        var currentTime = performance.now();
        var elapsedTime = currentTime - startTime;
        var t = Math.min(elapsedTime / duration, 1); // 计算时间比例（0到1之间）

        var currentPitch = startPitch + (targetPitch - startPitch) * t;
        var currentRotation = startRotation + (targetRotation - startRotation) * t;

        myMap.setPitch(currentPitch);
        myMap.setRotation(currentRotation);

        if (t < 1) {
            // 动画未完成，继续执行下一帧
            requestAnimationFrame(animate);
        }
    }

    animate();
}
export function handleClickSky  ()  {
  if (index) {
      myMap.setMapStyleId('DEFAULT');
      myMap.setSkyOptions(skyBoxConfig[0]);
      index = 0;
  } else {
      myMap.setMapStyleId('DARK');
      myMap.setSkyOptions(skyBoxConfig[1]);
      index = 1;
  }
}
export default initMap
