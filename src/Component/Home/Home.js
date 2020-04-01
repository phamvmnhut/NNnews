/**
 * NNnews App
 * https://github.com/phamvmnhut/NNnews
 *
 * Man hinh home
 * Luot danh sach cac bai bao
 */

import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import Search from './Search';
import ItemNews from './ItemNews';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: true,
      articles: [],
    };
  }
  fetchData() {
    this.setState({
      articles: [
        {
          id: 4,
          title: 'iOS 13.4 gây nhiều lỗi nghiêm trọng trên iPhone',
          auth: 'genk.vn',
          time: '31/03/2020',
          url:
            'https://genk.vn/ios-134-gay-nhieu-loi-nghiem-trong-tren-iphone-20200330205728127.chn',
          image: 'hello',
        },
      ],
      isRefreshing: false,
    });
  }
  handleRefresh() {
    this.setState({isRefreshing: true}, this.fetchData);
  }
  componentDidMount() {
    const articles = [
      {
        id: 1,
        title:
          'Không cần makeup vẫn lên hình đẹp vi diệu, tưởng không dễ mà lại dễ không tưởng',
        auth: 'genk.vn',
        time: '31/03/2020',
        url:
          'https://genk.vn/khong-can-makeup-van-len-hinh-dep-vi-dieu-tuong-khong-de-ma-lai-de-khong-tuong-20200330144219721.chn',
        image: 'hello',
      },
      {
        id: 2,
        title: 'LG từ bỏ dòng smartphone LG G, bắt đầu từ LG G9',
        auth: 'genk.vn',
        time: '31/03/2020',
        url:
          'https://genk.vn/lg-tu-bo-dong-smartphone-lg-g-bat-dau-tu-lg-g9-20200330224522111.chn',
        image: 'hello',
      },
      {
        id: 3,
        title:
          'Honor 30S 5G ra mắt: Kirin 820, 4 camera 64MP, sạc nhanh 40W, giá từ 8 triệu đồng',
        auth: 'genk.vn',
        time: '31/03/2020',
        url:
          'https://genk.vn/honor-30s-5g-ra-mat-kirin-820-4-camera-64mp-sac-nhanh-40w-gia-tu-8-trieu-dong-20200330224617986.chn',
        image: 'hello',
      },
      {
        id: 4,
        title:
          'Huawei ra mắt Kirin 820 5G: Tiến trình 7nm, hỗ trợ 5G, hiệu năng cao hơn 27% so với Kirin 810',
        auth: 'genk.vn',
        time: '31/03/2020',
        url:
          'https://genk.vn/huawei-ra-mat-kirin-820-5g-tien-trinh-7nm-ho-tro-5g-hieu-nang-cao-hon-27-so-voi-kirin-810-20200330233553205.chn',
        image: 'hello',
      },
      {
        id: 4,
        title: 'iOS 13.4 gây nhiều lỗi nghiêm trọng trên iPhone',
        auth: 'genk.vn',
        time: '31/03/2020',
        url:
          'https://genk.vn/ios-134-gay-nhieu-loi-nghiem-trong-tren-iphone-20200330205728127.chn',
        image: 'hello',
      },
      {
        id: 5,
        title:
          'Kinh doanh di động mùa Covid-19: nhiều đại lý coi đây là cơ hội vàng để tái cơ cấu, dù thừa nhận chưa bao giờ gặp khó khăn lớn đến thế',
        auth: 'genk.vn',
        time: '31/03/2020',
        url:
          'https://genk.vn/kinh-doanh-di-dong-mua-covid-19-nhieu-dai-ly-coi-day-la-co-hoi-vang-de-tai-co-cau-du-thua-nhan-chua-bao-gio-gap-kho-khan-lon-den-the-20200330164838689.chn',
        image: 'hello',
      },
    ];
    this.setState({
      articles: articles,
      isRefreshing: false,
    });
  }
  render() {
    const {container, flatlist} = styles;
    return (
      <View style={container}>
        <FlatList
          style={flatlist}
          data={this.state.articles}
          renderItem={({item}) => <ItemNews item={item} {...this.props} />}
          refreshing={this.state.isRefreshing}
          onRefresh={this.handleRefresh.bind(this)}
          keyExtractor={(item) => item.url}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8e0eb',
  },
  flatlist: {
    flex: 1,
  },
});
