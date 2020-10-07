import React from 'react';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import { getCode, getUserInfo } from '@/src/service/wechat';
import { getOpenId, login, getAdsSwiper } from '@/src/service/api';
import styles from './index.module.less';

interface banner {
  imageUrl: string;
}

type PageState = {
  banner: Array<banner>;
};

class Index extends React.Component<any, PageState> {
  state = {
    banner: [],
  };
  async componentDidMount() {
    const { banner } = await getAdsSwiper();
    this.setState({ banner });
  }
  userLogin = async () => {
    const wxCode = await getCode();
    const { code, data } = await getOpenId({ code: wxCode });
    if (code === 0) {
      const { openId } = data;
      const { status, userInfo } = await getUserInfo();
      if (status) {
        const data = await login({
          nickname: userInfo.userInfo.nickName,
          openId,
        });
        console.log(data);
      }
    }
  };

  render() {
    const { banner } = this.state;
    return (
      <View className={styles.home}>
        <Swiper className={styles['swiper-box']} indicatorDots>
          {banner.map((item: banner) => (
            <SwiperItem key={item.imageUrl}>
              <Image src={item.imageUrl} className={styles['swiper-item']}></Image>
            </SwiperItem>
          ))}
        </Swiper>
        {/* <Button className="add_btn" openType="getUserInfo" onGetUserInfo={this.userLogin}>
          +
        </Button> */}
      </View>
    );
  }
}

export default Index;
