function setCookie(username, password) {
  const cookieName = 'TFGUserPdw';
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);

  const cookieData = {
    value: { username, password },
    expires: expirationDate.toUTCString()
  };

  localStorage.setItem(cookieName, JSON.stringify(cookieData));
}

function getCookie(){
  const cookieData = localStorage.getItem("TFGUserPdw");

  if (cookieData) {
    const parsedCookieData = JSON.parse(cookieData);
    console.log(parsedCookieData.value);
    return parsedCookieData.value;
  }

  return null;
}

function logout() {
  localStorage.removeItem("TFGUserPdw");
  alert("You have been logged out.");
}

export {
  setCookie,
  getCookie,
  logout
};