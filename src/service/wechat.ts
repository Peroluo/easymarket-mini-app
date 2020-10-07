import Taro from '@tarojs/taro';

// 获取用户是否已经授权
export const getUserIsAuth = () => {
  return new Promise((reslove) => {
    Taro.getSetting({
      success: (res) => {
        reslove(!!res.authSetting['scope.userInfo']);
      },
      fail: () => {
        reslove(false);
      },
    });
  });
};

// 获取用户信息
export const getUserInfo = (): Promise<any> => {
  return new Promise((reslove) => {
    Taro.getUserInfo({
      success: (userInfo) => {
        reslove({
          userInfo,
          status: true,
        });
      },
      fail: () => {
        reslove({
          userInfo: {},
          status: false,
        });
      },
    });
  });
};

// 获取用户Code
export const getCode = () => {
  return new Promise((reslove) => {
    Taro.login({
      success: (res) => {
        reslove(res.code);
      },
      fail: () => {
        reslove(false);
      },
    });
  });
};
