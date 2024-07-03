import axios from "axios";

const CreateLikesAPI = async (data) => {
  const result = await axios({
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    url: `https://sheetdb.io/api/v1/m5k5j7m176m2k`,
    body: JSON.stringify(data),
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
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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

export default CreateLikesAPI1;
