import Taro from '@tarojs/taro';

const global_preFixUrl = 'http://127.0.0.1:18001';

interface CreateRequest {
  method: 'GET' | 'POST';
  data: any;
}

//创建请求
const createRequest = (url: string, { method, data }: CreateRequest): Promise<any> => {
  return new Promise((res, rej) => {
    Taro.request({
      url: `${global_preFixUrl}${url}`,
      data,
      method,
      success: async (respond: { data: any }) => {
        const { code } = respond.data;
        if (code === 0) {
          res(respond.data.data);
        } else {
          Taro.showToast({
            title: respond.data.message,
            icon: 'none',
            duration: 1000,
          });
          res(null);
        }
      },
      fail: (err) => {
        rej(err);
      },
    });
  });
};

export default {
  get: (url: string, data: any) =>
    createRequest(url, {
      method: 'GET',
      data,
    }),
  post: (url: string, data: any) =>
    createRequest(url, {
      method: 'POST',
      data,
    }),
};
