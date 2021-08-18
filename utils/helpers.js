module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
// split url to add cropping to image
  split_url: (url) => {
    let str = url
    let splitString = str.split("upload");
    return splitString[0] + "upload/c_thumb,w_200,g_face" + splitString[1];
  }
};


