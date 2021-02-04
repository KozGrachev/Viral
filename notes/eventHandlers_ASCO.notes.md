

**When we need user input**

actions you can take in your turn:
  - clicking a source to move there
      - targe component = source
      - moveAction()
  - clearing markers from a source
    - targe component = source OR marker (check with frontend)
    - clearMisinfo()
  - shareing card with other player
    - target: other player? or source
    - shareCard()
  - logon (fly to another place) = moving to a place thats not next to you, but using a card to move * (maybe change name to FLY)
    - target: other source (not next door)
    - logOnOff()
  - logoff (fly to another place) = moving to a place thats not next to you, but using a card to move * (maybe change name to FLY)
    - target: other source (not next door)
    - logOnOff() - USING different card to logon

    logon - uses a card that matches the source you are going to
    logoff - uses a card that matches the source YOU ARE AT

    //EXAMPLE player is in London, can use 'London' card to logoff to ANY source, or 'Paris' card to logon to PARIS

    
  - debunk misinfo - 
    - target: source you are at
    - debunkMisinfo()


OTHER
  - discard a card from your hand
    - target: a card
    - discardCard()
