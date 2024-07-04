import axios from "axios";

const CreateLikesAPI = async (data) => {
  const result = await axios({
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    url: `https://script.google.com/macros/s/AKfycbzE4l1fQ6gmMXZH1MemIQ-xUBDJRykpw4nlpZRHczJO233lM1lGrKoA3LJVIE_yP8XoDw/exec?action=insert`,
    data: data
  })
    // .then(function(response) {
    //     response.json()
    // })

    .catch(function (error) {
      return error;
    });

  console.log(result);
  return result;
};

const CreateLikesAPI1 = async (data) => {
  try {
    const response = await fetch("https://sheetdb.io/api/v1/m5k5j7m176m2k", {
    // const response = await fetch("https://script.google.com/macros/s/AKfycbzE4l1fQ6gmMXZH1MemIQ-xUBDJRykpw4nlpZRHczJO233lM1lGrKoA3LJVIE_yP8XoDw/exec", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    //   data: {
    //     "parameter":{"action":"insert"},
    //     "postData":data
    // }
      body: JSON.stringify({
        data: data,
      }),
    });

    const result = await response.json();

    console.log(result);

    return result;
  } catch (error) {
    console.error("Error:", error);
    return { success: false, error: error.message };
  }
};

async function sendEmotionData(data) {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzE4l1fQ6gmMXZH1MemIQ-xUBDJRykpw4nlpZRHczJO233lM1lGrKoA3LJVIE_yP8XoDw/exec', {
      method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
      body: JSON.stringify({
        action: 'insert',
        ...data
      }),
    });
  
    const result = await response.json();
    return result;
  }
  

export default CreateLikesAPI1;
// export default sendEmotionData;
