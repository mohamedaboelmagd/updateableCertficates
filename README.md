# Updatable Certificates
> Our objective to do a bear minimum implantation that allows the certificates and its awards to be updated and versioned.

## Technology
- Metamask
- 3Box
- Angular & Ngrx
- Google Cloud Run

## Pages
-   Setup metamask
-   Define badge
-   Edit badge
-   Upload csv award
-   Edit award
-   List awards
-   List badges

## Actions
-	Define badge
-	Edit badge
-   Add award
-   Edit award

## User Scenario
- if org not logged in on metamask and 3box space => org setup metamask
- org opens => they go their page => create a new badge
- org opens => they go their page => they expand a badge => edit the badge
- org opens => they go their page => they expand a badge => award badge by csv
- org opens => they go their page => they expand a badge => edit award

## Data Models
-   Badge 
-   Award

## Main functions

## Add Metamask siging Explained
- https://ethereum.stackexchange.com/questions/54715/metamask-verification-on-a-server-with-web3-personal-sign


### Add MetaMask explained
- https://docs.3box.io/build/web-apps/auth/3box

### Add Function explained


-   Item version is set to 1.0 , versions array only includes one item
-   Item id is uuidv4 , contact badge- in the begenaing and -version in -   The end with the number
-   Set item in archive 
-   Set uuid4 => item

### Edit Function explained

-   Get item 
-   Increment the version number by 0.10 
-   Unshift the versions array to make the latest item the first
-   Set the item in archive 
-   Set item by uuid

### Get
-   Get the item
-   Paginate on the version controlled items

### Send Emails REST
-   Check that the item is signed by the private key

### Highlights
-   Free
-   Decentralized <3 IPFS
-   No Smart contracts
-   Written completely in JS/TS

## Plus
-   Sign the email request with the private key
-   Add Public Profile for Org
-   A smart contact to approve the user 
-   Support for private awards / badges
-	Add signup pages
-	Add recipient user => the one receiving the certificate
-	Add photos
-	Add profiles/edit
-	Be open badges complaint
-	Claim badge / certificate page + actions
-	Add multiple users in org support
-   Resend email
-   Expiration date
-   Add recipient privacy for email