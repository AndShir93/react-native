export const localImages = [require('../images/1.jpg'),require('../images/2.jpg'),require('../images/3.jpg'),require('../images/4.jpg')];
export const remoteImages = [{uri : 'https://avatars.mds.yandex.net/get-pdb/2822999/f4807348-53f7-4c00-9f27-8a2c599eb354/s1200'},{uri : 'https://avatars.mds.yandex.net/get-pdb/2804075/db5b009d-0101-40cb-8343-7092feadf9b8/s1200'},{uri : 'https://avatars.mds.yandex.net/get-pdb/2828692/5656fac1-71b6-4409-bb3d-c376cf6d393d/s1200'},{uri : 'https://bugaga.ru/uploads/posts/2012-12/1356816110_umilnye-zhivotnye-24.jpg'}, {uri : 'https://million-wallpapers.ru/wallpapers/4/69/12317646339253417357/susliki.jpg'}]
export default (item, items) =>({
    image: localImages[1],
    isLocal: true,
    localImages: localImages,
    remoteImages: remoteImages,
    current: 0
})
