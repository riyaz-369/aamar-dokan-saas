import axios from "axios";
import qs from "qs";
const TOKEN = process.env.NEXT_APP_SMS_TOKEN
  ? process.env.NEXT_APP_SMS_TOKEN
  : "8282013645173420500506b3cc98c4d3411e42875a4337561540";
const sendMessage = async ({
  to,
  message,
}: {
  to: string;
  message: string;
}) => {
  // console.log(to, message, TOKEN);
  const url = "https://api.greenweb.com.bd/api.php";
  if (to && message) {
    const data = {
      to: to,
      message: message,
      token: TOKEN,
    };
    const options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url,
    };
    axios(options).then((res) => console.log(res));
  }
  // console.log(queryString.stringify({  token: TOKEN, to: to, message: message }))
};

export default sendMessage;
