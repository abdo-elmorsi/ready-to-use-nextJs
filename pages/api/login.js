import withSession from '../../lib/session'
import config from "../../config/config";
import axios from "axios";

export default withSession(async (req, res) => {

    const url = config.apiGateway.URL + 'signin'
    const body = await req.body
    try {
        const response = await axios.post(url, body)
        const user = {isLoggedIn: true, data: response.data}
        req.session.set('user', user)
        await req.session.save()
        res.json(user)
    } catch (error) {
        const {response: fetchResponse} = error
        res.status(fetchResponse?.status || 500).json(error.data)
    }
})
