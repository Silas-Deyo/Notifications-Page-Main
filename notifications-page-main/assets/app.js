
const markAsRead = document.querySelector('.mark')
const numberOfUnread = document.querySelector('.number')
const unreadMessages = document.querySelectorAll('.unread')
const indicators = document.querySelectorAll('.dot')

markAsRead.addEventListener('click', () => {
    console.log("working");
    if (unreadMessages.backgroundColor = 'var(--Very-light-grayish-blue)') {
        console.log("workinggggg");
        // unreadMessages.style.backgroundColor = 'white';
        // unreadMessages.display = 'none';
        unreadMessages.forEach(function(unreadMessage) {
            unreadMessage.style.backgroundColor = 'transparent';  
        })
        indicators.forEach(function(indicator) {
            indicator.style.display = 'none';  
        })
        numberOfUnread.style.display = 'none';  
        
    } else {
        console.log("not workinggggg");
        
    }
})

unreadMessages.forEach(function(unreadMessage) {
    unreadMessage.addEventListener('click', () => {
        console.log('worked');
        if (unreadMessage.backgroundColor = 'var(--Very-light-grayish-blue)') {
            console.log('correct');
            unreadMessage.style.backgroundColor = 'transparent';  
            
            indicators.forEach(function(indicator) {
                if (unreadMessage.backgroundColor = 'transparent') {
                    indicator.style.display = 'none';  
                }
            })
                
        }
    })
})