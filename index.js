import Logger from 'bet-logger';
import seed from 'bet-seed';


const log = new Logger(`BET:messanger:${seed}`);

export default class BetMessanger {
  constructor (appId) {
    log('constructor', appId);

    this.appId = appId;
  }

  addListener () {
    log('addListener');

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      log('addListener onMsg', message, sender);

      this.sendAnswer(message, this.appId, sendResponse);

      return true;
    });
  }

  send (msg, cb) {
    log('send', msg);

    chrome.runtime.sendMessage(null, msg, null, cb);
  }
};
