// pages/login/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	login(e) {
		// console.log(e);
		wx.setStorageSync("phoneNumber",13217962725)
		wx.navigateBack({
			delta: 0,
		})
		// const cloudId = e.detail.cloudID
		// wx.cloud.callFunction({
		// 	name: 'get-phone-number',
		// 	data: {
		// 		wxRunData: wx.cloud.CloudID(cloudId), // 这个 CloudID 值到云函数端会被替换
		// 	}
		// }).then(res => {
		// 	console.log(res);
		// 	this.setData({
		// 		phone: res.result
		// 	})
		// })
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})