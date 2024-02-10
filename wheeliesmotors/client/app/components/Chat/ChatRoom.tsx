import { useState, useEffect } from 'react';

const ChatRoom = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const element = document.querySelector('.floating-chat') as HTMLElement;
    const myStorage = localStorage;

    if (!myStorage.getItem('chatID')) {
      myStorage.setItem('chatID', createUUID());
    }

    setTimeout(() => {
      element.classList.add('enter');
    }, 1000);

    const openElement = () => {
      setIsChatOpen(true);
      const messagesContainer = element.querySelector('.messages') as HTMLElement | null;
      const textInput = element.querySelector('.text-box') as HTMLDivElement | null;
      if (!messagesContainer || !textInput) return;

      element.querySelector('>i')?.classList.add('hidden');
      element.classList.add('expand');
      element.querySelector('.chat')?.classList.add('enter');
      textInput.contentEditable = 'true';
      textInput.focus();

      element.removeEventListener('click', openElement);
      element.querySelector('.header button')?.addEventListener('click', closeElement);
      element.querySelector('#sendMessage')?.addEventListener('click', sendNewMessage);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const closeElement = () => {
      const messagesContainer = element.querySelector('.messages') as HTMLElement | null;
      const textInput = element.querySelector('.text-box') as HTMLDivElement | null;
      if (!messagesContainer || !textInput) return;

      element.querySelector('.chat')?.classList.remove('enter');
      element.querySelector('>i')?.classList.remove('hidden');
      element.classList.remove('expand');
      element.querySelector('.header button')?.removeEventListener('click', closeElement);
      element.querySelector('#sendMessage')?.removeEventListener('click', sendNewMessage);
      textInput.contentEditable = 'false';
      textInput.blur();

      setTimeout(() => {
        element.querySelector('.chat')?.classList.remove('enter');
        element.addEventListener('click', openElement);
      }, 500);
    };

    const createUUID = () => {
      const s = [];
      const hexDigits = '0123456789abcdef';
      for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = '-';
      const uuid = s.join('');
      return uuid;
    };

    const sendNewMessage = () => {
      const userInput = element.querySelector('.text-box') as HTMLDivElement | null;
      const messagesContainer = element.querySelector('.messages') as HTMLElement | null;
      if (!userInput || !messagesContainer) return;

      const newMessage = userInput.innerHTML.replace(/\<div\>|\<br.*?\>/ig, '\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g, '<br>');

      if (!newMessage) return;

      messagesContainer.innerHTML += `<li class="self">${newMessage}</li>`;
      userInput.innerHTML = '';
      userInput.focus();

      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const onMetaAndEnter = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
        sendNewMessage();
      }
    };

    element.addEventListener('click', openElement);

    return () => {
      element.removeEventListener('click', openElement);
    };
  }, []);

  return (
    <div className={`floating-chat ${isChatOpen ? 'expand' : ''}`}>
      <i className="fa fa-comments" aria-hidden="true"></i>
      <div className={`chat ${isChatOpen ? 'enter' : ''}`}>
        <div className="header">
          <span className="title">What's on your mind?</span>
          <button><i className="fa fa-times" aria-hidden="true"></i></button>
        </div>
        <ul className="messages">
          {/* Messages go here */}
        </ul>
        <div className="footer">
          <div className="text-box" contentEditable={true} suppressContentEditableWarning={true} disabled={true}></div>
          <button id="sendMessage">send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
