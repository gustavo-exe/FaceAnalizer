import axios from "axios";

let subscriptionKey = process.env.REACT_APP_API_SUBSCRIPTION_KEY;
let endpoint = process.env.REACT_APP_API_END_POINT+'/face/v1.0/detect';

let imageUrl = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-sample-data-files/master/ComputerVision/Images/faces.jpg'

const instance = axios({
    method: 'post',
    url: endpoint,
    params : {
		detectionModel: 'detection_03',
        returnFaceId: true
    },
    data: {
        url: imageUrl,
    },
    headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey }
}).then(function (response) {
    console.log('Status text: ' + response.status)
    console.log('Status text: ' + response.statusText)
    console.log()
    console.log(response.data)
}).catch(function (error) {
    console.log(error)
})

export default instance;