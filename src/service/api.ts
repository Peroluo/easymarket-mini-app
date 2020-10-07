// 获取用户微信信息、登陆

import request from './index';

export const getAdsSwiper = (params = {}) => request.get('/adsSwiper', params);

export const getOpenId = (params = {}) => request.post('/app/weChat/getOpenId', params);

export const login = (params = {}) => request.post('/app/weChat/login', params);
