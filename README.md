# NEXT_AUTH
NextAuth is just a library and does not have it's own authentication service, but it does have an assortment of authentication providers that can be connected to and used through Next_Auth for authentication.

GitHub is used here for setting up OAuth authentication through NEXT_AUTH
In GitHub 2 OAuth apps would be created, one for DEV and one for PROD, as an OAuth app can have only one Authorization Callback URL. This just in case of GitHub, but different vendors do it in different ways.