import React, { useEffect } from 'react'

const RandomText = () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  useEffect(() => {
    const handleMouseOver = (event: any) => {

      let Timer = 0
    const inter = setInterval(() => {

        event.target.innerText = event.target.innerText.split("")
          .map((letrer: any , index :any) => {
                if(index < Timer){
                  return event.target.dataset.value[index]
                }
            return(
              alphabet[Math.floor(Math.random() * 26)]
            )
          })
          .join('')
        Timer += 1 ;

        if(Timer > 8 ){
          clearInterval(inter)
        }
      }, 50)


    };

    const wordElement = document.getElementById("word");

    if (wordElement) {
      wordElement.addEventListener('mouseover', handleMouseOver);

      return () => {
        wordElement.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);
  return (
    <div className='Random'>
      <h1 className="word" id="word" data-value="Mohammed">
        Mohammed
      </h1>
    </div>
  )
}

export default RandomText