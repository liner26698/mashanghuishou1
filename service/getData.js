// import fetch from '../config/fetch'
import fetch from '../config/myAxios'                      


/**
 * 创建临时数据
 */
const setpromise = data => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
};

/**
 * 测试接口
 */
var getTestData = (url,params) => fetch('GET',url,params);
var getData = (url,params,type='GET') => {
    let result = fetch(url,params,type);
    result.then((res) => {
        // 模拟登陆状态
        // console.log(res);
        // console.log(this.$store.state.bip_flag);
        if (res=== 100) {
        //  router.push("/");
           // Message.info('登录失效,请重新登录。');
           // this.$store.state.bip_flag = 0;
        }
    })
    return result;
 

};

var getDataPost = (url,params,type='POST') =>{
    let result = fetch(url,params,type);
    result.then((res) => {
        // 模拟登陆状态
        // console.log(res);
        if (res=== 100) {
//          router.push("/");
//          // Message.info('登录失效,请重新登录。');
        }
    })
    return result;


};


/**
 * 以下Api接口不需要进行反向代理
 */

// var sendLogin = (code, mobile, validate_token) => setpromise(login.userInfo);

export {getTestData,getData,getDataPost}