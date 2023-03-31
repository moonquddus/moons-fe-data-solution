import { CLIENT_URL } from '../../../lib/service/config'
import { useLazyGetShareTokenQuery } from '../../../lib/service/share.api'
import Button from '../../element/Button/Button'

function ShareButton() {
  const [getShareLink, shareLink] = useLazyGetShareTokenQuery()

  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    /**
     * I would have loved to make a share modal that generates the share link, and a "copy to clipboard" button as well!
     * And some privacy settings, it's one of the last things I made at my previous role
     */
    event.preventDefault()
    getShareLink()
  }

  return (
    <>
      <Button onClick={clickHandler} data-testid='ShareButton'>Generate share link</Button>
      {shareLink.isLoading && (
        <p>Fetching share link...</p>
      )}
      {shareLink.data && (
        <p data-testid='ShareLink'><strong>URL: {CLIENT_URL}/view-chart/{shareLink.data.token}</strong></p>
      )}
    </>
  )
}

export default ShareButton
