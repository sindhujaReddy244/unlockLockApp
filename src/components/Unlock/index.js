// Write your code here
import {useState} from 'react'

import {
  BgContainer,
  ImageAndTextContainer,
  Img,
  Heading,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [lock, isLocked] = useState('true')
  const imgUrl = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = lock ? 'lock' : 'unlock'
  const context = lock ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const btnText = lock ? 'Unlock' : 'Lock'

  const onClickLock = () => {
    isLocked(preValue => !preValue)
  }

  return (
    <BgContainer>
      <ImageAndTextContainer>
        <Img src={imgUrl} alt={altText} />
        <Heading>{context}</Heading>
      </ImageAndTextContainer>

      <Button type="button" onClick={onClickLock}>
        {btnText}
      </Button>
    </BgContainer>
  )
}
export default Unlock
