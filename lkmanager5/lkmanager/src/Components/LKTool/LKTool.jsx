class LkTool {
  fileToBase64Url(file, callback) {
    // 1. modify image's info
    let src = "";
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    } else {
      src = "";
    }
    // 2. reader resolved
    reader.onloadend = () => {
      src = reader.result;
      console.log('src ', src);
      // 回调返回
      callback && callback(src);
    }
  }
}

export default LkTool;