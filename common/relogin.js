export default function relogin() {
  wx.navigateTo({
    url: "/pages/login/login?operation=relogin",
  });
}
