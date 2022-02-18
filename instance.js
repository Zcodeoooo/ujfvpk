
import WebOfficeSDK from './web-office-sdk-v1.1.9.umd';

export default () => {
const instance = WebOfficeSDK.config({
    url: 'https://wwo.wps.cn/office/w/0b7d28-1645159562163?_w_appid=0d1d76fbd17f40996c17a291251ec134&_w_tokentype=1&_w_signature=h5LWIrXHLM%2Fi8fSqujWx1NwqU8Q%3D'
});
// demo只提供短期token，失效请重现点击“试一试”生成。
instance.setToken({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIyNGgiLCJpYXQiOjE2NDUxNTk1NjJ9.i2HkufM7ZL4TvtmPrjHqEuPLVVQO2o__OB8Pu7JJjSc'});
return instance;
};
        