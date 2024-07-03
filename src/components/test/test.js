import axios from "axios"


const TestAPI = async () => {
    const result = await axios({
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `https://script.google.com/macros/s/AKfycbzE4l1fQ6gmMXZH1MemIQ-xUBDJRykpw4nlpZRHczJO233lM1lGrKoA3LJVIE_yP8XoDw/exec`

    })
        // .then(function(response) {
        //     response.json()
        // })

        .catch(function (error) {
            return error
        })
    return result
}


const TestAPI1 = () => {
    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=W92yFMSaRlcxciyT0TESQAt4LrgfHeB0nsazjINDnsryNAe6Izd9NeLSN-Yx2guF9iAc4HQEaQKqTHEmyvBS3wlDuKhS1Rx_m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnL-LphTQPx6j7598royd_1N85kWZD4gFDP4VOlhRTnIeDxe3tXbLGd7NC-RXcyfe3QeSp5306vV3p5uZMre6mu30x0tGYisid9z9Jw9Md8uu&lib=MntpyB1aEuDxXDDorrQPtIhvki5BGNT21")
    .then((response) => response.json())
    // .then((data) => console.log(data))
    .catch(function (error) {
        return error
    })
}
export default TestAPI