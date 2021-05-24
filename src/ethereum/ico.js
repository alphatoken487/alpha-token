import web3 from '../web3'
import newICO from './build/ICO.json'

const instance = new web3.eth.Contract(
    JSON.parse(newICO.interface), '0x30c50470921d0d6274327CcdF2B2036219b7817e'
);

export default instance