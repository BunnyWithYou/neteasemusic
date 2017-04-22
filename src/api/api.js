const apiUrl = 'http://musicapi.duapp.com/api.php'
const apiUrl2 = 'https://api.imjad.cn/cloudmusic'
export default{
	getMusicListUrl(cat,offset,limit){
		return apiUrl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit;
	},
	getMusicDetailList(id){
		return apiUrl2 + '?type=playlist&id=' + id;
	}
}
